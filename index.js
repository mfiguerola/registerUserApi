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
        header: 'TRAVEL AGENCY',
        name: {
          title: 'Agency name',
          placeholder: 'Enter your agency name'
        },
        contactName: {
          title: 'Contact name',
          placeholder: 'Enter your contact name'
        },
        email: {
          title: 'Contact email',
          placeholder: 'Enter your contact email'
        },
        idCode: {
          title: 'Agency id code',
          placeholder: 'Enter agency id code'
        }
      },
      company: {
        header: 'COMPANY',
        name: {
          title: 'Company name',
          placeholder: 'Enter your company name'
        },
        email: {
          title: 'Contact email',
          placeholder: 'Enter your contact email'
        },
        phone: {
          title: 'Phone',
          placeholder: 'Enter your company phone'
        },
        comments: {
          title: 'Comments',
          placeholder: 'Add your comments here'
        },
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
        ],
        agency: [
          {
            key: 'name',
            type: 'text',
            mandatory: true
          },
          {
            key: 'contactName',
            type: 'text',
            mandatory: true
          },
          {
            key: 'email',
            type: 'email',
            mandatory: true
          },
          {
            key: 'idCode',
            type: 'text',
            mandatory: false
          }
        ],
        company: [
          {
            key: 'name',
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
            mandatory: true
          },
          {
            key: 'comments',
            type: 'text',
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
