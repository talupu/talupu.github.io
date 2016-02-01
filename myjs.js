// automatic slideshow begins - change pic every 2.5 seconds on loading page

	var counter = 0;
	
	function changePic(){ 
			// increment the counter
			counter = counter + 1;
			// loop my pics
			if(counter > 4){
				counter = 1;
			}
			$("#main-img").attr('src',("img"+counter+".jpg"));
			} // change pic code ends here
			
	setInterval(changePic, 2500); //call function changePic every 2.5 seconds
	
//slideshow code ends here


//what happens if I click on main image (Today's recipe)

	$("#main-img").click(function(){
		var imgnum = $("#main-img").attr('src'); // grabbing the image filename
		var sernum = imgnum.match(/\d+/g); //grabbing the last char which is the number that matches the recipe file sequence
		$("#main-img-recipe").attr('href', ("recipe" + sernum + ".html")); 	//modifying the href attribute in the link to 
																			//match the current recipe	
	});