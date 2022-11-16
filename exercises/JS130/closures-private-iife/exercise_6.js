"use strict";

const ItemCreator = (function() {
  function isValidItem(item, category, quantity) {
    if (item.replaceAll(" ", "").length < 5) {
      return false;
    } else if (category.replaceAll(" ", "").length < 5) {
      return false;
    } else if (category.split(' ').length > 1) {
      return false;
    } else if (quantity === undefined) {
      return false;
    } else {
      return true;
    }
  }  

  function createSKUCode(item, category) {
    let skuFirst = (function() {
      let code = "";

      for (let char of item) {
        if (char !== " ") code += char;
        if (code.length >= 3) return code; 
      }
    })();

    let skuSecond = category.slice(0, 2);

    return skuFirst.concat(skuSecond).toUpperCase();
  }

  return function(itemName, category, quantity) {
    if (isValidItem(itemName, category, quantity)) {
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
      this.skuCode = createSKUCode(itemName, category);
    } else {
      return {
        notValid: true,
      };
    }
  }
})();

const ItemManager = {
  items: [],

  getItem(skuCode) {
    for (let item of this.items) {
      if (item.skuCode === skuCode) return item;
    }
  },

  create(itemName, category, quantity) {
    let item = new ItemCreator(itemName, category, quantity);
    if (item.notValid) {
      return false;
    } else {
      this.items.push(item);
    }
  },

  update(skuCode, information) {
    Object.assign(this.getItem(skuCode), information);
  },

  delete(skuCode) {
    this.items.splice(this.items.indexOf(this.getItem(skuCode)), 1);
  },

  inStock() {
    return this.items.filter(item => {
      return item.quantity > 0;
    });
  },

  itemsInCategory(category) {
    return this.items.filter(item => {
      return item.category === category;
    });
  },
};

const ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },

  reportInStock() {
    let items = [];
    this.items.inStock().forEach(item => {
      items.push(item.itemName);
    });

    console.log(items.join(","));
  },

  createReporter(skuCode) {
    let item = this.items.getItem(skuCode);

    return {
      itemInfo() {
        for (let property in item) {
          console.log(`${property}: ${item[property]}`);
        }
      }
    }
  },
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10