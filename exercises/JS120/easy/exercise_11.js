// object factory
function createBanner(message) {
  return {
    message,

    displayBanner() {
      console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
    },
  
    horizontalRule() {
      return "+-" + "-".repeat(this.message.length) + "-+";
    },
  
    emptyLine() {
      return "| " + " ".repeat(this.message.length) + " |";
    },
  
    messageLine() {
      return `| ${this.message} |`;
    },
  }
}

// OLOO 
const BannerPrototype = {
  init(message) {
    this.message = message;
    return this;
  },

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  },

  horizontalRule() {
    return "+-" + "-".repeat(this.message.length) + "-+";
  },

  emptyLine() {
    return "| " + " ".repeat(this.message.length) + " |";
  },

  messageLine() {
    return `| ${this.message} |`;
  },
}

// constructor/prototype
function BannerCon(message) {
  this.message = message;
}

BannerCon.prototype.displayBanner = function() {
  console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
}

BannerCon.prototype.horizontalRule = function() {
  return "+-" + "-".repeat(this.message.length) + "-+";
}

BannerCon.prototype.emptyLine = function() {
  return "| " + " ".repeat(this.message.length) + " |";
}

BannerCon.prototype.messageLine = function() {
  return `| ${this.message} |`;
}

// class
class Banner {
  constructor(message) {
    this.message = message
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    return "+-" + "-".repeat(this.message.length) + "-+";
  }

  emptyLine() {
    return "| " + " ".repeat(this.message.length) + " |";
  }

  messageLine() {
    return `| ${this.message} |`
  }
}

let banner1 = createBanner("Hello, Object Factory Pattern")
banner1.displayBanner();

let banner2 = Object.create(BannerPrototype).init("Hello, OLOO Pattern");
banner2.displayBanner();

let banner3 = new BannerCon("Hello, Constructor/Prototype Pattern");
banner3.displayBanner();

let banner4 = new Banner('Hello, Class Pattern');
banner4.displayBanner();