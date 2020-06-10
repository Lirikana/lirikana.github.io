
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos
function selectedRestrictions(products){
	var g = document.getElementById("gluBox");
	var v = document.getElementById("vegBox");
	var o = document.getElementById("orgBox");
	
	var chosenRestrictions = [];
	if(g.checked)chosenRestrictions.push(g.value);
	if(v.checked)chosenRestrictions.push(v.value);
	if(o.checked)chosenRestrictions.push(o.value);
	populateListProductChoices(chosenRestrictions,products);
	
}
function populateListProductChoices(slct1, slct2) {
    var s2 = document.getElementById(slct2);
	var meat = document.getElementById("displayMeat");
	var veg = document.getElementById("displayVegetable");
	var dai = document.getElementById("displayDairy");
	var sea = document.getElementById("displaySeafood");
	var bak = document.getElementById("displayBaked");
	var pan = document.getElementById("displayPantry");
	var img = document.getElementById("imgBox");
	var isImg = false;
	if(img.checked)isImg=true;
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, slct1);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
	for (let i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		if(optionArray[i].type == "Meat"){
			meat.appendChild(checkbox);
			appendListProduct(meat,checkbox,isImg,optionArray[i].image);
		}
		else if(optionArray[i].type == "Vegetable"){
			veg.appendChild(checkbox)
			appendListProduct(veg,checkbox,isImg,optionArray[i].image);
		}
		else if(optionArray[i].type == "Dairy"){
			dai.appendChild(checkbox)
			appendListProduct(dai,checkbox,isImg,optionArray[i].image);
		}
   		else if(optionArray[i].type == "Seafood"){
			sea.appendChild(checkbox)
			appendListProduct(sea,checkbox,isImg,optionArray[i].image);
		}
		else if(optionArray[i].type == "Baked"){
			bak.appendChild(checkbox)
			appendListProduct(bak,checkbox,isImg,optionArray[i].image);
		}
		else if(optionArray[i].type == "Pantry"){
			pan.appendChild(checkbox)
			appendListProduct(veg,checkbox,isImg,optionArray[i].image);
		}
	}
}
function appendListProduct(list,chkbox,isImg,imgLink){
	list.appendChild(chkbox);
	var label = document.createElement('label');
	label.htmlFor = chkbox.value;
	label.appendChild(document.createTextNode(chkbox.value));
	list.appendChild(label);
	if(isImg){
		var img = document.createElement("img");
		img.src = imgLink;
		img.style="width:200px;height:200px;"
		list.appendChild(img);
	}
	list.appendChild(document.createElement("br"));
	console.log(list);
}
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
		
}
//https://stackoverflow.com/questions/38627822/increase-the-font-size-with-a-click-of-a-button-using-only-javascript
function increaseFontSize(increaseFactor){ 
     txt = document.body;
     style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
     currentSize = parseFloat(style);
     txt.style.fontSize = (currentSize + increaseFactor) + 'px';
}