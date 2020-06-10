var products = [
	{
		name: "brocoli",
		type:["Vegetable"],
		tags: ["Vegetarian", "Organic", "Gluten-Free"],
		price: 1.99
	},
	{
		name: "bread",
		type:["Bakery"],
		tags: ["Vegetarian"],
		price: 2.35
	},
	{
		name: "Green Bell Peppers",
		type:["Vegetable"],
		tags: ["Vegetarian", "Organic", "Gluten-Free"],
		price: 3.25
    },
	{
		name: "Sour Dough Bread",
		type:["Bakery"],
		tags: ["Vegetarian"],
		price: 6.00
    },
	{
		name: "Chicken",
		type:["Meat"],
		tags: ["Gluten-Free"],
		price: 8.00
    },
    {
		name: "Ground Beef",
		type:["Meat"],
		tags: ["Organic"],
		price: 8.00
	},
	{
		name: "Prepared Salad",
		type:["Prepared Foods"],
		tags: ["Vegetarian","Gluten-Free"],
		price: 8.00
    },
    {
		name: "Beyond Meat Patty x8",
		type:["Packaged"],
		tags: ["Vegetarian", "Organic", "Gluten-Free"],
		price: 8.00
    },
	{
		name: "salmon",
		type:["Sea Food"],
		tags: ["Organic", "Gluten-Free"],
		price: 10.00
	},
	{
		name: "Frozen Margherita Pizza",
		type:["Packaged"],
		tags: ["Vegetarian"],
		price: 12.00
    },
    {
		name: "Banana",
		type:["Fruit"],
		tags: ["Organic", "Gluten-Free", "Vegetarian"],
		price: 5.50
    },
    {
		name: "Apple",
		type:["Fruit"],
		tags: ["Organic", "Gluten-Free", "Vegetarian"],
		price: 3.50
    },
    {
		name: "Oranges",
		type:["Fruit"],
		tags: ["Organic", "Gluten-Free", "Vegetarian"],
		price: 3.50
    },
    {
		name: "Bagel",
		type:["Bakery"],
		tags: ["Organic", "Vegetarian"],
		price: 100.00
    },
    {
		name: "Pepper",
		type:["Spice"],
		tags: ["Organic", "Gluten-Free", "Vegetarian"],
		price: 5.00
    },
    {
		name: "Salt",
		type:["Spice"],
		tags: ["Organic", "Gluten-Free", "Vegetarian"],
		price: 5.00
    },
    {
		name: "Curry Spice Mix",
		type:["Spice"],
		tags: ["Organic", "Gluten-Free", "Vegetarian"],
		price: 7.50
    },
    {
		name: "Prawns",
		type:["Sea Food"],
		tags: ["Organic", "Gluten-Free"],
		price: 100.00
    },
    {
		name: "Beef Patty",
		type:["Packaged"],
		tags: [],
		price: 12.00
    },
    {
		name: "Pizza Pop",
		type:["Meat"],
		tags: ["Vegetarian"],
		price: 11.00
    },
];
function restrictListProducts(prods, restriction) {
	let product_names = [];
	if (restriction.length > 1 && restriction.includes("None")){
		alert("No preference Applied")
		return
	}
	
	for (let i=0; i<prods.length; i+=1) {
		let flag = true;
		if(restriction.includes("None")){
			product_names.push(prods[i]);
			continue;	
		}
		for(let j=0; j<restriction.length; j+=1){
				
				if(!prods[i].tags.includes(restriction[j])){
					flag=false;
					break;
				}
			}
			if(flag){
				product_names.push(prods[i]);
			}
		}
	console.log(product_names);
	return product_names;
}
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}