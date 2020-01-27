import {
    items
} from './items.js';

//Item object that will store the item 
function Item(mainCategory, subCategory, name, price, quantity, product_id, img) {
    this.mainCategory = mainCategory;
    this.subCategory = subCategory;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.product_id = product_id;
    this.img = img;
}

//adding a database. 
const Datastore = require('nedb');


//creating the database name 
var database = new Datastore({
    filename: 'items1.db'
});

//function to start the database
exports.StartDatabase = function() {
    //start the database 
    database.loadDatabase(function (err) {
        // done
    });



    //first clear the database onload 
    database.remove({}, {
        multi: true
    }, function (err, numRemoved) {
        database.loadDatabase(function (err) {
            // done
        });
    });

}

//function to insert the data into the database
exports.InsertData = function() {
    //create an 
    var productArray = [];
    //create item objects and add them to an array
    for (var i = 0; i < items.length; i++) {
        var product = new Item(items[i].mainCategory, items[i].subCategory, items[i].name, items[i].price, items[i].quantity, items[i].product_id, items[i].img);
        productArray.push(product);
    }
    //add the items to the database
    database.insert(productArray, function (err, docs) {});
}

//function to load the main categories
exports.getMaincategories = function() {
    database.find({}).sort({
        product_id: 1
    }).exec(function (err, docs) {
        var tempArray = new Array();
        for (var i = 0; i < docs.length; i++) {
            if (tempArray.includes(docs[i].mainCategory)) {
                return false;
            } else {
                tempArray.push(docs[i].mainCategory);
                console.log(tempArray);
            }
        }
        tempArray.push("Supervisor");
        for (var i = 0; i < tempArray.length; i++) {
            var x = i;
            x++;
            $("#pagination" + x + "").html(tempArray[i]);
        }
    });
}
