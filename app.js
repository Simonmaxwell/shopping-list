$(document).ready(function(){
	$('#submit-button').click(function(event) {
		event.preventDefault();
		addItem();
		console.log("I'm working!");
	});

	function addItem(item) {
		var itemToAdd = $('#shopping-list-entry').val();
		var shoppingListItem = $('<span class="shopping-item"></span>');
		shoppingListItem.append(itemToAdd);
	var buttons = $(
		'<div class="shopping-item-controls">' +
		'<button class="shopping-item-toggle">' +
		'<span class="button-label">check</span>' +
		'</button>' +
		'<button class="shopping-item-delete">' +
		'<span class="button-label">delete</span>' +
		'</button>' +
		'</div>'
		);
	var list = $('<li></li>');
	list.append(shoppingListItem);
	list.append(buttons);
	$('.shopping-list').append(list);
	}

	
	$('.shopping-list').on('click', '.shopping-item-delete', function() {
		$(this).closest('li').remove();
	});

	$('.shopping-list').on('click', '.shopping-item-toggle', function() {
		$(this).closest('li').children('.shopping-item').addClass('shopping-item-checked');
	});
		
	
});






