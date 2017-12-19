// Assign a specific element in your HTML to a variable by using its unique 'id' you specified
var icon = document.querySelector('#icon');
var menu = document.querySelector('#toggle-menu');

// The hamburger menu icon is waiting (listening) for a click. Once the <button> is clicked it changes the state of the menu
icon.addEventListener('click',
	function(e) {
		menu.classList.toggle("open"); 
		//e.stopPropagation();
	toggleIcon(e);
	}
);


// This function is called below if the icon is clicked; depending on whether the menu is open or closed the icon will change
function toggleIcon(e){
	if (menu.className == "menu"){
		// If the class is menu, that means the menu is closed!
		document.getElementById("open-me").style.display = "inline";
		document.getElementById("close-me").style.display = "none";
	} else {
		document.getElementById("open-me").style.display = "none";
		document.getElementById("close-me").style.display = "inline";
	}
}
