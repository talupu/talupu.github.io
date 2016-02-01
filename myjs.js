// automatic slideshow begins - change pic every 2.5 seconds on loading page

	var counter = 0;
	var stopshow = false;
	var recipefile = "";
	
	function changePic(){ 
		if (stopshow != true){
		
			$( "#main-page-recipe").html("");
			// increment the counter
			counter = counter + 1;
			// loop my pics
			if(counter > 4){
				counter = 1;
			}
			$("#main-img").attr('src',("img"+counter+".jpg"));
			

			}
		}
// change pic code ends here			
				
	function clickForRecipe(){
		stopshow = true;
		$(".recipe-load-section").html(function(){
		
			//return "<h1>" + doo +  $("#main-img").attr('src') + "</h1>" ;
			return "<h2>Ingredients:</h2>" + "<ul><li>lorem ipsum sit amet lorem ipsum sit amet</li><li>lorem ipsum sit amet lorem ipsum sit amet</li><li>lorem ipsum sit amet lorem ipsum sit amet</li><li>lorem ipsum sit amet lorem ipsum sit amet</li></ul>" + "<h2>Method</h2>" + "<ul><li>lorem ipsum sit amet lorem ipsum sit amet</li><li>lorem ipsum sit amet lorem ipsum sit amet</li><li>lorem ipsum sit amet lorem ipsum sit amet</li><li>lorem ipsum sit amet lorem ipsum sit amet</li></ul>" + "<button class='btn btn-default btn-info' id='read-recipe-button' onclick='hideRecipe()'>Hide Recipe " + "<i class='fa fa-cutlery'></i>" + "</button>" ;

		});
	}

	function hideRecipe(){
		stopshow = false;
		$(".recipe-load-section").html(function(){
			return "<button class='btn btn-default btn-warning' id='read-recipe-button' onclick='clickForRecipe()'>Click here for the Recipe! " + "<i class='fa fa-cutlery'></i>" + "</button>";
		});			
	}

