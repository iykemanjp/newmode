var newButton = document.getElementById("new-btn");
var modelContainer = document.getElementById("Model-container");
var closeBtn = document.getElementById("close-btn");


newButton.addEventListener("click",  function() {
	modelContainer.style.display= "block";
});
	

	closeBtn.addEventListener("click", function(){
		modelContainer.style.display= "none";
	});

	window.addEventListener("click", function(e){
		if (e.target === modelContainer){
			modelContainer.style.display= "none";
		}
	})