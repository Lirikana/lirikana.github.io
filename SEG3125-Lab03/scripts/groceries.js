	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.99,
		image: "https://i5.walmartimages.ca/images/Enlarge/094/505/6000200094505.jpg",
		type: "Vegetable"
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35,
		image: "https://i5.walmartimages.ca/images/Enlarge/023/858/6000197023858.jpg",
		type: "Baked Goods"
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00,
		image: "https://i5.walmartimages.ca/images/Enlarge/366/488/628915366488.jpg",
		type: "Seafood"
	},
	{
		name:"salami",
		vegetarian:false,
		glutenFree:true,
		organic:false,
		price:21.99,
		image: "https://i5.walmartimages.ca/images/Enlarge/372/053/6000200372053.jpg",
		type:"Pantry"
	},
	{
		name: "pasta",
		vegetarian:true,
		glutenFree:false,
		organic:false,
		price:3.25,
		image: "https://i5.walmartimages.ca/images/Enlarge/448/286/6000200448286.jpg",
		type:"Pantry"
	},
	{
		name:"steak",
		vegetarian:false,
		glutenFree:true,
		organic:false,
		price:9.89,
		image:"https://i5.walmartimages.ca/images/Enlarge/130/610/6000201130610.jpg",
		type: "Meat"
	},
	{
		name:"organic tomatoes",
		vegetarian:true,
		glutenFree:true,
		organic:true,
		price:4.50,
		image:"https://i5.walmartimages.ca/images/Large/u94/664/999999-PLU94664.jpg",
		type:"Vegetable"
	},
	{
		name:"organic rice",
		vegetarian:true,
		glutenFree:true,
		organic:true,
		price:13.22,
		image:"https://i5.walmartimages.ca/images/Enlarge/800/4_1/999999-8853969008004_1.jpg",
		type:"Pantry"
	},
	{
		name:"organic chicken",
		vegetarian:false,
		glutenFree:true,
		organic:true,
		price:14.31,
		image:"https://i5.walmartimages.ca/images/Large/644/111/6000200644111.jpg",
		type:"Meat"
	},
	{
		name:"cheddar cheese",
		vegetarian:true,
		glutenFree:true,
		organic:false,
		price:8.23,
		image:"https://i5.walmartimages.ca/images/Large/577/882/6000199577882.jpg",
		type:"Dairy"
	},
	{
		name:"organic milk",
		vegetarian:true,
		glutenFree:true,
		organic:true,
		price:3.50,
		image:"https://i5.walmartimages.ca/images/Large/496/821/6000201496821.jpg",
		type:"Dairy"
	},
	{
		name:"ice cream",
		vegetarian:true,
		glutenFree:true,
		organic:false,
		price:3.21,
		image: "https://i5.walmartimages.ca/images/Enlarge/169/448/6000197169448.jpg",
		type:"Dairy"
	},
	{
		name:"organic potatoes",
		vegetarian:true,
		glutenFree:true,
		organic:true,
		price:2.11,
		image:"https://i5.walmartimages.ca/images/Enlarge/094/563/6000200094563.jpg",
		type:"Vegetable"
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
		product_names.push(prods[i]);
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
