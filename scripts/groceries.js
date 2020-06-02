	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name:"salami",
		vegetarian:false,
		glutenFree:true,
		organic:false,
		price:21.99
	},
	{
		name: "pasta",
		vegetarian:true,
		glutenFree:false,
		organic:false,
		price:3.25
	},
	{
		name:"steak",
		vegetarian:false,
		glutenFree:true,
		organic:false,
		price:9.89
	},
	{
		name:"organic tomatoes",
		vegetarian:true,
		glutenFree:true,
		organic:true,
		price:4.50
	},
	{
		name:"organic rice",
		vegetarian:true,
		glutenFree:true,
		organic:true,
		price:13.22
	},
	{
		name:"organic chicken",
		vegetarian:false,
		glutenFree:true,
		organic:true,
		price:14.31
	},
	{
		name:"cheddar cheese",
		vegetarian:true,
		glutenFree:true,
		organic:false,
		price:8.23
	},
	{
		name:"organic milk",
		vegetarian:true,
		glutenFree:true,
		organic:true,
		price:3.50
	},
	{
		name:"ice cream",
		vegetarian:true,
		glutenFree:true,
		organic:false,
		price:3.21
	},
	{
		name:"organic potatoes",
		vegetarian:true,
		glutenFree:true,
		organic:true,
		price:2.11
	},

];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	var isVegtarian = false;
	var isGlutenFree = false;
	var isOrganic = false;
	for (let i=0;i<restriction.length;i+=1){
		if(restriction[i]=="Vegetarian"){
			isVegtarian = true;
		}
		else if(restriction[i]=="GlutenFree"){
			isGlutenFree = true;
		}
		else if(restriction[i]=="Organic"){
			isOrganic = true;
		}
	}
	for (let i=0; i<prods.length; i+=1){
		if(isVegtarian){
			if(prods[i].vegetarian){
			}
			else{
				continue;
			}
		}
		if(isGlutenFree){
			if(prods[i].glutenFree){
			}
			else{
				continue;
			}
		}

		if(isOrganic){
			if(prods[i].organic){
			}
			else{
				continue;
			}
		}
		product_names.push(prods[i].name);
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
