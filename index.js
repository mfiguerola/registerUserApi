const express = require("express");
const cors = require("cors");
const app = express();
const corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

const pages = {
  home: {
    literals: {
      header: "SIGNUP",
      title: "WHAT KIND OF USER ARE YOU?",
      guest: "A HOTEL GUEST",
      agency: "A TRAVEL AGENCY",
      company: "A COMPANY",
      persuasiveMessage: "Enjoy a 10% discount on your reservation just for signup",
      loginLink: "Are you registered?"
    },
    form: {
      type: "select",
      values: ["guest", "agency", "company"],
    }
  },
  register: {
    literals: {
      guest: {
        header: 'HOTEL GUEST',
        name: {
          title: 'Name',
          placeholder: 'Enter your name'
        },
        lastName: {
          title: 'Last name',
          placeholder: 'Enter your last name'
        },
        email: {
          title: 'Email',
          placeholder: 'Enter your email'
        },
        phone: {
          title: 'Phone',
          placeholder: 'Enter your phone'
        }
      },
      agency: {
      },
      company: {
      },
      common: {
        requiredFields: 'required fields',
        buttonText: 'SEND'
      }
    },
    form: {
      values: {
        guest: [
          {
            key: 'name',
            type: 'text',
            mandatory: true
          },
          {
            key: 'lastName',
            type: 'text',
            mandatory: true
          },
          {
            key: 'email',
            type: 'email',
            mandatory: true
          },
          {
            key: 'phone',
            type: 'number',
            mandatory: false
          }
        ]
      }
    }
  }
};

app.route("/page/:pageId").get((req, res) => {
  res.json(pages[req.params.pageId]);
});

const server = app.listen(4000, () => {
  const port = server.address().port;

  console.log("Server listening at http://localhost:%s", port);
});
