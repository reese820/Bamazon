var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazonDB"
});
connection.connect(function(error) {
    if (error) throw error;
    console.log("Welcome to the Bamazon Web Store!\n");
    start();
  });
function start() {
    inquirer
      .prompt({
        name: "category",
        type: "list",
        message: "What department are you shopping from?",
        choices: [
          "Food: ",
          "Clothing: ",
          "Automotive: ",
          "Outdoors: ",
          "Recreational: "
        ]
      }).then(function(answer) {
          console.log(answer);
        switch (answer.action) {
        case "Food":
          return foodSearch(); 
        case "Clothing":
          return clothingSearch();
        case "Automotive":
          return autoSearch();
        case "Outdoors":
          return outdoorsSearch();
        case "Recreational":
          return recSearch();
        default: return console.log("Please select a valid category.")
        }
      });
  }  
  function foodSearch() {
    inquirer
      .prompt({
        name: "item",
        type: "input",
        message: "What food are you searching for?",
        choices: [
          "Apples: ",
          "Bananas: "
        ]
      })
      .then(function(response) {
        console.log(response);
        var query = "SELECT * WHERE ? PRODUCT_NAME";
        connection.query(query, { artist: response.choices }, function(error, response) {
            prompt("Selection: " + response + ".  Confirm?");
            .prompt({
              name: "confirmation",
              type: "input",
              message: "Selection: " + response + ". Confirm? ",
              choices: ["yes", "no"]
            }).then(function(response) {
              switch (response.action) {
              case "yes": runSearch();
              return true;
              default: throw error;
              console.log("Please reconfirm your selection.");
              }
          }).then(function(response) {
              console.log("How many of " + response + " would you like to purchase?");
              query = "SELECT * WHERE ? STOCK_QUANTITY"
        }).then(function(response) {
            switch (response.action) {
              case (response < response.stock_quantity):
              console.log("We have that item in stock.  The cost to you is: " + (stock_quantity * price_to_customer));
              updateItem();              
              default: return console.log("Insufficient quantity in stock.");
            }        
      });
  }  
  function clothingSearch() {
    inquirer
      .prompt({
        name: "item",
        type: "input",
        message: "What food are you searching for?",
        choices: [
          "Jeans: ",
          "Sunglasses: "
        ]
      })
      .then(function(response) {
        console.log(response);
        var query = "SELECT * WHERE ? PRODUCT_NAME";
        connection.query(query, { artist: response.choices }, function(error, response) {
            prompt("Selection: " + response + ".  Confirm?");
            .prompt({
              name: "confirmation",
              type: "input",
              message: "Selection: " + response + ". Confirm? ",
              choices: ["yes", "no"]
            }).then(function(response) {
              switch (response.action) {
              case "yes": runSearch();
              return true;
              default: throw error;
              console.log("Please reconfirm your selection.");
              }
          }).then(function(response) {
              console.log("How many of " + response + " would you like to purchase?");
              query = "SELECT * WHERE ? STOCK_QUANTITY"
        }).then(function(response) {
            switch (response.action) {
              case (response < response.stock_quantity):
              console.log("We have that item in stock.  The cost to you is: " + (stock_quantity * price_to_customer));
              updateItem();              
              default: return console.log("Insufficient quantity in stock.");
            }        
      });
  } 
  function automotiveSearch() {
    inquirer
      .prompt({
        name: "item",
        type: "input",
        message: "What food are you searching for?",
        choices: [
          "Air Freshener: ",
          "Tires: "
        ]
      })
      .then(function(response) {
        console.log(response);
        var query = "SELECT * WHERE ? PRODUCT_NAME";
        connection.query(query, { artist: response.choices }, function(error, response) {
            prompt("Selection: " + response + ".  Confirm?");
            .prompt({
              name: "confirmation",
              type: "input",
              message: "Selection: " + response + ". Confirm? ",
              choices: ["yes", "no"]
            }).then(function(response) {
              switch (response.action) {
              case "yes": runSearch();
              return true;
              default: throw error;
              console.log("Please reconfirm your selection.");
              }
          }).then(function(response) {
              console.log("How many of " + response + " would you like to purchase?");
              query = "SELECT * WHERE ? STOCK_QUANTITY"
        }).then(function(response) {
            switch (response.action) {
              case (response < response.stock_quantity):
              console.log("We have that item in stock.  The cost to you is: " + (stock_quantity * price_to_customer));
              updateItem();              
              default: return console.log("Insufficient quantity in stock.");
            }        
      });
  } 
  function recreationalSearch() {
    inquirer
      .prompt({
        name: "item",
        type: "input",
        message: "What food are you searching for?",
        choices: [
          "Whiskey: ",
          "Bath Salts: "
        ]
      })
      .then(function(response) {
        console.log(response);
        var query = "SELECT * WHERE ? PRODUCT_NAME";
        connection.query(query, { artist: response.choices }, function(error, response) {
            prompt("Selection: " + response + ".  Confirm?");
            .prompt({
              name: "confirmation",
              type: "input",
              message: "Selection: " + response + ". Confirm? ",
              choices: ["yes", "no"]
            }).then(function(response) {
              switch (response.action) {
              case "yes": runSearch();
              return true;
              default: throw error;
              console.log("Please reconfirm your selection.");
              }
          }).then(function(response) {
              console.log("How many of " + response + " would you like to purchase?");
              query = "SELECT * WHERE ? STOCK_QUANTITY"
        }).then(function(response) {
            switch (response.action) {
              case (response < response.stock_quantity):
              console.log("We have that item in stock.  The cost to you is: " + (stock_quantity * price_to_customer));
              updateItem();              
              default: return console.log("Insufficient quantity in stock.");
            }        
      });
  } 
  function outdoorsSearch() {
    inquirer
      .prompt({
        name: "item",
        type: "input",
        message: "What food are you searching for?",
        choices: [
          "Tent: ",
          "Parka: "
        ]
      })
      .then(function(response) {
        console.log(response);
        var query = "SELECT * WHERE ? PRODUCT_NAME";
        connection.query(query, { artist: response.choices }, function(error, response) {
            prompt("Selection: " + response + ".  Confirm?");
            .prompt({
              name: "confirmation",
              type: "input",
              message: "Selection: " + response + ". Confirm? ",
              choices: ["yes", "no"]
            }).then(function(response) {
              switch (response.action) {
              case "yes": runSearch();
              return true;
              default: throw error;
              console.log("Please reconfirm your selection.");
              }
          }).then(function(response) {
              console.log("How many of " + response + " would you like to purchase?");
              query = "SELECT * WHERE ? STOCK_QUANTITY"
        }).then(function(response) {
            switch (response.action) {
              case (response < response.stock_quantity):
              console.log("We have that item in stock.  The cost to you is: " + (stock_quantity * price_to_customer));
              updateItem();              
              default: return console.log("Insufficient quantity in stock.");
            }        
      });
  } 
function updateItem() {
  connection.query(
    'UPDATE auctions SET ? WHERE ?',
      [
        {
          quantity: response
        },
        {
          query: response
                }
            ],
            function(error, response) {
                console.log("--------------");
            }
  });