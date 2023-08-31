var inventory;

(function() {
  inventory = {
    lastId: 0,
    collection: [],
    setDate: function() {
      var date = new Date();
      document.querySelector("#order_date").textContent = date.toUTCString();
    },
    cacheTemplate: function() {
			let iTmpl = document.querySelector("#inventory_item");
			this.template = Handlebars.compile(iTmpl.innerHTML);
			iTmpl.remove();
    },
    add: function() {
      this.lastId++;
      var item = {
        id: this.lastId,
        name: "",
        stock_number: "",
        quantity: 1
      };
      this.collection.push(item);

      return item;
    },
    remove: function(idx) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== idx;
      });
    },
    get: function(id) {
      var found_item;

      this.collection.forEach(function(item) {
        if (item.id === id) {
          found_item = item;
          return false;
        }
      });

      return found_item;
    },
    update: function(item) {
			let id = this.findID(item);
			let item = this.get(id);

      item.name = item.querySelector("[name^=item_name]").value;
      item.stock_number = item.find("[name^=item_stock_number]").value;
      item.quantity = item.find("[name^=item_quantity]").value;
    },
    newItem: function(e) {
      e.preventDefault();
      let itemObj = this.add();
			let itemHTML = this.template({ id: itemObj.id });
      document.querySelector("#inventory")
							.insertAdjacentHTML("beforeend", itemHTML);
    },
    findParent: function(e) {
      return e.target.closest("tr");
    },
    findID: function(item) {
      return +item.querySelector("input[type=hidden]").value;
    },
    deleteItem: function(e) {
      e.preventDefault();
      var item = this.findParent(e)
      this.remove(this.findID(item));
			item.remove();
    },
    updateItem: function(e) {
      var item = this.findParent(e);

      this.update(item);
    },
    bindEvents: function() {
      // $("#add_item").on("click", $.proxy(this.newItem, this));
			// $("#inventory").on("click", "a.delete", $.proxy(this.deleteItem, this));
			// $("#inventory").on("blur", ":input", $.proxy(this.updateItem, this));

			let addItemButton = document.querySelector("#add_item");
			let inventory = document.querySelector("#inventory");

			addItemButton.addEventListener("click", (event) => {
				this.newItem.call(this, event);
			});

      inventory.addEventListener("click", (event) => {
				if (event.target.matches("a.delete")) {
					this.deleteItem.call(this, event);
				}
			});

      inventory.addEventListener("blur", (event) => {
				if (event.target.matches(":input")) {
					this.updateItem.call(this, event);
				}
			});
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
})();

document.addEventListener("DOMContentLoaded", () => {
	inventory.init.call(inventory);
});