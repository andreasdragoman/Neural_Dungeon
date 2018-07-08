$(function(){
	
	// container is the DOM element;
	// userText is the textbox
	
	var container = $("#TheTitle")
		userText = $('#userText'); 
	
	// Shuffle the contents of container
	container.shuffleLetters({"step" : 18, "fps" : 18} );
    
    var summary = $("#Summary1");
    summary.shuffleLetters({"step" : 6, "fps" : 33});
      var summary = $("#Summary2");
    summary.shuffleLetters({"step" : 6, "fps" : 25});

	// Bind events
	userText.click(function () {
		
	  userText.val("");
	  
	}).bind('keypress',function(e){
		
		if(e.keyCode == 13){
			
			// The return key was pressed
			
			container.shuffleLetters({
				"text": userText.val()
			});
			
			userText.val("");
		}

	}).hide();

	
	
});

