	$(document).ready(function(){
		$('#js-shopping-list-form').click(function(event) {
			event.preventDefault();
			console.log("I'm working!");
		});


		
		var item = (
			'<li>' +
	          '<span class="shopping-item"></span>' +
	          '<div class="shopping-item-controls">' +
	            '<button class="shopping-item-toggle">' +
	              '<span class="button-label">check</span>' +
	            '</button>' +
	            '<button class="shopping-item-delete">' +
	              '<span class="button-label">delete</span>' +
	            '</button>' +
	          '</div>' +
	        '</li>' 
			
			  );

});






	        