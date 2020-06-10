var toShow = [];
var products = [
    {
        name: "Bagel",
        type: "Bakery",
        tags: ["Organic", "Vegetarian"],
        price: 1.50
    },
    {
        name: "Brocoli",
        type: "Vegetable",
        tags: ["Vegetarian", "Organic", "Gluten-Free"],
        price: 1.99
    },
    {
        name: "Bread",
        type: "Bakery",
        tags: ["Vegetarian"],
        price: 2.35
    },
    {
        name: "Green Bell Peppers",
        type: "Vegetable",
        tags: ["Vegetarian", "Organic", "Gluten-Free"],
        price: 3.25
    },
    {
        name: "Apple",
        type: "Fruit",
        tags: ["Organic", "Gluten-Free", "Vegetarian"],
        price: 3.50
    },
    {
        name: "Oranges",
        type: "Fruit",
        tags: ["Organic", "Gluten-Free", "Vegetarian"],
        price: 3.50
    },
    {
        name: "Milk",
        type: "Dairy",
        tags: ["Organic", "Gluten-Free"],
        price: 4.49
    },
    {
        name: "Pepper",
        type: "Spice",
        tags: ["Organic", "Gluten-Free", "Vegetarian"],
        price: 5.00
    },

    {
        name: "Salt",
        type: "Spice",
        tags: ["Organic", "Gluten-Free", "Vegetarian"],
        price: 5.00
    },
    {
        name: "Banana",
        type: "Fruit",
        tags: ["Organic", "Gluten-Free", "Vegetarian"],
        price: 5.50
    },
    {
        name: "Sour Dough Bread",
        type: "Bakery",
        tags: ["Vegetarian"],
        price: 6.00
    },
    {
        name: "Curry Spice Mix",
        type: "Spice",
        tags: ["Organic", "Gluten-Free", "Vegetarian"],
        price: 7.50
    },
    {
        name: "Chicken",
        type: "Meat",
        tags: ["Gluten-Free"],
        price: 8.00
    },
    {
        name: "Ground Beef",
        type: "Meat",
        tags: ["Organic"],
        price: 8.00
    },
    {
        name: "Salad",
        type: "Packaged",
        tags: ["Vegetarian", "Gluten-Free", "Organic"],
        price: 8.00
    },
    {
        name: "Beyond Meat Patty x8",
        type: "Packaged",
        tags: ["Vegetarian", "Organic", "Gluten-Free"],
        price: 8.00
    },

    {
        name: "Salmon",
        type: "Sea Food",
        tags: ["Organic", "Gluten-Free"],
        price: 10.00
    },

    {
        name: "Pizza Pop",
        type: "Packaged",
        tags: ["Vegetarian"],
        price: 11.00
    },
    {
        name: "Frozen Margherita Pizza",
        type: "Packaged",
        tags: ["Vegetarian"],
        price: 12.00
    },
    {
        name: "Beef Patty",
        type: "Packaged",
        tags: [],
        price: 12.00
    },
    {
        name: "Prawns",
        type: "Sea Food",
        tags: ["Organic", "Gluten-Free"],
        price: 18.00
    }

];

function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(elmnt).style.background = color;
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
   
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//Grocery Selector
function showPrefs() {
    var prefs = document.getElementById("chooser");
    var flag = document.getElementsByName("preFlag")
    if (flag[0].checked) {
        prefs.style.display = "block";
    }
    if (flag[1].checked) {
        prefs.style.display = "none";
    }
}

//make list
function populateList() {
    var veg = document.getElementsByName("veg");
    var gluten = document.getElementsByName("gluten");
    var organic = document.getElementsByName("organic");
    toShow = [];
    var prefs = [];
    var flag = document.getElementsByName("preFlag");
    if (organic[0].checked) {
        prefs.push("Organic");
    }

    if (gluten[0].checked) {
        prefs.push("Gluten-Free");
    }
    if (veg[0].checked) {
        prefs.push("Vegetarian");
    }
    if (flag[0].checked) {
        for (i = 0; i < products.length; i += 1) {
            let flag2 = true;
            for (j = 0; j < prefs.length; j += 1) {
                if (!products[i].tags.includes(prefs[j])) {
                    flag2 = false;
                    break;
                }
            }
            if (flag2) {
                toShow.push(products[i])
            }

        }
    }
    if (flag[1].checked) {
        for (i = 0; i < products.length; i += 1) {
            toShow.push(products[i]);
        }
    }
    cardMaker(toShow);
}
//make Cards
function cardMaker(toShow) {
    var div = document.getElementsByClassName("panel");
    var buttons = document.getElementsByClassName("accordion")
    for (j = 0; j < div.length; j += 1) {
        div[j].innerHTML = "";
    }
    for (i = 0; i < toShow.length; i += 1) {
        let product = toShow[i];
        if (product.type == "Vegetable") {
            var effectdiv = div[0];
        }
        if (product.type == "Fruit") {
            var effectdiv = div[1];
        }
        if (product.type == "Meat") {
            var effectdiv = div[2];
        }
        if (product.type == "Sea Food") {
            var effectdiv = div[3];
        }
        if (product.type == "Dairy") {
            var effectdiv = div[4];
        }
        if (product.type == "Bakery") {
            var effectdiv = div[5];
        }
        if (product.type == "Spice") {
            var effectdiv = div[6];
        }
        if (product.type == "Packaged") {
            var effectdiv = div[7];
        }
        effectdiv.innerHTML = effectdiv.innerHTML + `
          <div class="card">
          <img src="Images/${product.name}.jpg"><br>
          ${product.name}<br>
          $${product.price}<br>
          Add to Cart: <input type="checkbox" id="${product.name}">
          </div>`
    }
    for (j = 0; j < div.length; j += 1) {
        if (div[j].innerHTML == "") {
            div[j].style.display = "none";
            buttons[j].style.display = "none";
        }
    }
};

//Accordion************************************************
function accordionClick(int) {
    var acc = document.getElementsByClassName("accordion");
    var pan = document.getElementsByClassName("panel");
    pan[int].style.display = "block";
    pan[int].style.maxHeight = pan[int].scrollHeight + "px";
    for (i = 0; i < acc.length; i++) {
        if (i != int) {
            pan[i].style.display = "none";
            pan[i].style.maxHeight = 0;
        }
    }
}
//Cart fill ************************************************

function fillCart() {
    finalCart = [];
    for (i = 0; i < toShow.length; i += 1) {
        if (document.getElementById(toShow[i].name).checked) {
            finalCart.push(toShow[i]);
        }
    }
    var div = document.getElementById("inner");
    div.innerHTML = "Your Cart Items are: <br>";
    for (j = 0; j < finalCart.length; j += 1) {
        let product=finalCart[j];
        div.innerHTML = div.innerHTML + `
    <div class="finalCart">
    <div class="card">
          <img src="Images/${product.name}.jpg"><br>
          ${product.name}<br>
          $${product.price}<br>
    </finalCart>
    `
    }
    var total=0;
    for (i = 0; i < finalCart.length; i += 1) {
        console.log("getin proce");
            total += finalCart[i].price;
    }
    div.innerHTML = div.innerHTML+`<p>Your total is: $${total}`;
}

