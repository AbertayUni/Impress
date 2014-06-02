var duration = 3000; // x/1000 = seconds between transitions

$(document).ready(function() {
	$.get("glob.php", function(data) {
		var slides = $.parseJSON(data);
		var newCode = "";
						
		for(var i=0;i<slides.length;i++) {
			
			// fileName is now just the actual file, e.g. slide1.jpg			
			if(slides[i].indexOf(".png")!==-1||slides[i].indexOf(".jpg")!==-1||slides[i].indexOf(".jpeg")!==-1||slides[i].indexOf(".gif")!==-1) {
				newCode+="<div class='step' data-duration='"+duration+"'><div class='center'><img src='"+slides[i]+"' alt='Alt text' title='Title text' /></div></div>";
			}
			else if(slides[i].indexOf(".pdf")!==-1) {
				newCode+="<div class='step' data-duration='"+duration+"'><div class='col_12'><object class='pdf' data='"+slides[i]+"' type='application/pdf' wmode='transparent'></object></div></div>";
			}
			else if(slides[i].indexOf(".swf")!==-1) {
				newCode+="<div class='step' data-duration='"+duration+"'><div class='col_12'><object class='swf' data='"+slides[i]+"' type='application/x-shockwave-flash' wmode='transparent'></object></div></div>";
			}
			else if(slides[i].indexOf(".swf")!==-1) {
				newCode+="<div class='step' data-duration='"+duration+"'><div class='col_12'><object class='swf' data='"+slides[i]+"' type='application/x-shockwave-flash' wmode='transparent'></object></div></div>";
			}
			else {
				newCode+="<div class='step' data-duration='"+duration+"' data-src='"+slides[i]+"'></div>";
			}
		}
				
		newCode+="<div class='hint'><p>Use arrow keys to navigate</p></div>";
		$("#impress").html(newCode);
		$('#impress').jmpress();
	});
});