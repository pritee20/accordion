window.onload = initAll;
var i;

function initAll(){
	var allLinks =  document.getElementsByTagName('h3'); // get all anchor link as an array

	for(i = 0; i < allLinks.length; i++){
		(function(){
				var y = i;
				allLinks[y].addEventListener('click', function(evt){
				//console.log(allLinks[y]);
				this.thisMenu = document.getElementsByClassName('menu')[y];
				var displayProp = this.thisMenu.style.display;
				if(displayProp == '' || displayProp == 'none'){
					this.thisMenu.style.display = 'block';
				} else if(displayProp == 'block'){
					this.thisMenu.style.display = 'none';
				}

			})
		}(i));
		
	}
};
