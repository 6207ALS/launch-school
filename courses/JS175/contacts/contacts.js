const express = require("express");
const morgan = require("morgan");
const { body, validationResult } = require("express-validator");
const session = require("express-session");
const store = require("connect-loki");
const flash = require("express-flash");
const app = express();
const LokiStore = store(session);
const PORT = 3000;


const contactData = [
  {
    firstName: "Mike",
    lastName: "Jones",
    phoneNumber: "281-330-8004",
  },
  {
    firstName: "Jenny",
    lastName: "Keys",
    phoneNumber: "768-867-5309",
  },
  {
    firstName: "Max",
    lastName: "Entiger",
    phoneNumber: "214-748-3647",
  },
  {
    firstName: "Alicia",
    lastName: "Keys",
    phoneNumber: "515-489-4608",
  },
]

const sortContacts = contacts => {
  return contacts.slice().sort((a, b) => {
    if (a.lastName < b.lastName) {
      return -1;
    } else if (a.lastName > b.lastName) {
      return 1
    } else if (a.firstName < b.firstName) {
      return -1
    } else if (a.firstName < b.firstName) {
      return 1
    } else {
      return 0;
    }
  });
};

const validateName = (inputName, whichName) => {
  return body(inputName)
    .trim()
    .isLength({ min: 1 })
    .withMessage(`${whichName} name is required.`)
    .bail()
    .isLength({ max: 25 })
    .withMessage(`${whichName} name must be shorter than 25 characters.`)
    .isAlpha()
    .withMessage(`${whichName} name must only contain alphabetical characters.`)
};

const clone = object => {
  return JSON.parse(JSON.stringify(object));
};

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use(morgan("common"));
app.use(express.urlencoded({ extended: false }));
app.use(session({
  cookie: {
    httpOnly: true,
    maxAge: 31 * 24 * 60 * 60 * 1000, // 31 days in milliseconds
    path: "/",
    secure: false,
  },
  name: "launch-school-contacts-manager-session-id",
  resave: false,
  saveUninitialized: true,
  secret: "this is not very secure",
  store: new LokiStore({}),
}));
app.use(flash());

app.use((req, res, next) => {
  if (!("contactData" in req.session)) {
    req.session.contactData = clone(contactData);
  }

  next();
});
app.use((req, res, next) => {
  res.locals.flash = req.session.flash;
  delete req.session.flash;
  next();
});


app.get("/", (req, res) => {
  res.redirect("/contacts");
});

app.get("/contacts", (req, res) => {
  res.render("contacts", {
    contacts: sortContacts(req.session.contactData),
  });
});

app.get("/contacts/new", (req, res) => {
  res.render("contacts-new");
});

app.post("/contacts/new",
  [
    validateName("firstName", "First"),
    validateName("lastName", "Last"),
    body("phoneNumber")
      .trim()
      .isLength({ min: 1 })
      .withMessage("Phone number is required")
      .bail()
      .matches(/\d{3}-\d{3}-\d{4}/)
      .withMessage("Invalid phone number format. Use ###-###-####")
  ],
  (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors.array().forEach(error => {
        req.flash("error", error.msg);
      }); 
      res.render("contacts-new", {
        flash: req.flash(),
        ...req.body
      });
    } else {
      next();
    }
  },
  (req, res) => {
    req.session.contactData.push({ ...req.body });
    req.flash("success", "New Contact added to list!");
    res.redirect("/contacts");
  }
);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});