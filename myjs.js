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
				


