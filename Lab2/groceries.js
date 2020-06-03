// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		tags: ["Vegetarian", "Organic", "Gluten-Free"],
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		tags: ["Vegetarian"],
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		tags: ["Organic", "Gluten-Free"],
		price: 10.00
    },
	{
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		tags: ["Gluten-Free"],
		price: 8.00
    },
    {
		name: "Ground Beef",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		tags: ["Organic"],
		price: 8.00
    },
    {
		name: "Kobe Beef",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		tags: ["Organic", "Gluten-Free"],
		price: 100.00
    },
    {
		name: "Sour Dough Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		tags: ["Vegetarian"],
		price: 6.00
    },
    {
		name: "Green Bell Peppers",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		tags: ["Vegetarian", "Organic", "Gluten-Free"],
		price: 3.25
    },
    {
		name: "Frozen Margherita Pizza",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		tags: ["Vegetarian"],
		price: 12.00
    },
    {
		name: "Prepared Salad",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		tags: ["Vegetarian","Gluten-Free"],
		price: 8.00
    },
    {
		name: "Beyond Meat Patty x8",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		tags: ["Vegetarian", "Organic", "Gluten-Free"],
		price: 8.00
    }
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	if (restriction.length > 1 && restriction.includes("None")){
		alert("No preference Applied")
		return
	}
	
	for (let i=0; i<prods.length; i+=1) {
		let flag = true;
		for(let j=0; j<restriction.length; j+=1){
			if(!prods[i].tags.includes(restriction[j])){
				flag=false;
				break;
			}
		}
		if(flag){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}