"use strict";

let apiKeys = {};

function putTodoInDOM(){
  FbAPI.getTodos(apiKeys).then(function(items){
    console.log("items from FB", items);
    items.forEach(function(item){
     if(item.isCompleted === true){
       let newListItem = '<li>';
        newListItem+='<div class="col-xs-8">';
        newListItem+='<input class="checkboxStyle" type="checkbox" checked>';
        newListItem+=`<label class="inputLabel">${item.task}</label>`;
        newListItem+='<input type="text" class="inputTask">';
        newListItem+='</div>';
        newListItem+='</li>';
        //apend to list
        $('#completed-tasks').append(newListItem);
      }else{
        let newListItem = '<li>';
        newListItem+='<div class="col-xs-8">';
        newListItem+='<input class="checkboxStyle" type="checkbox">';
        newListItem+=`<label class="inputLabel">${item.task}</label>`;
        newListItem+='<input type="text" class="inputTask">';
        newListItem+='</div>';
        newListItem+='<div class="col-xs-4">';
        newListItem+='<button class="btn btn-default col-xs-6 edit">Edit</button>';
        newListItem+='<button class="btn btn-danger col-xs-6 delete">Delete</button> ';
        newListItem+='</div>';
        newListItem+='</li>';
        //apend to list
        $('#incomplete-tasks').append(newListItem);
      }
    });
  });
}

$(document).ready(()=>{
    console.log('jquery is ready');
    FbAPI.firebaseCredentials().then(function(keys){
      console.log("keys", keys);
      apiKeys = keys;
      firebase.initializeApp(apiKeys);
      putTodoInDOM();
    });


});
	
	// var input = $('input[name=checkListItem]').val();
 //    $('#button').click(function(){
 //        var toAdd = $('#addItem').val();
 //        $('.todolist').append('<div class="item"><label class="itemtext">'+ toAdd +'</label><input type="text" class="textEdit hidden"></input><button class="btn btn-sm btn-info"><i class="fa fa-pencil" aria-hidden="true"></i></button><button class="btn btn-sm btn-success"><i class="fa fa-check" aria-hidden="true"></i></button><button class="btn btn-sm btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button></div></br>');
 //        $('#addItem').val('');
 //    });
  

 //  	$(document).on('click','button.btn-success',(e)=>{
 //  		console.log('complete!');
 //  		console.log($(e.target).parents('div.item'));
 //  		$('.completedlist').append($(e.target).parents('div.item'));
 //  		$('.completedlist').append('</br>');
 //  		$('.todolist').remove($(e.target).parents('div.item'));
 //  	});
 //  	$(document).on('click','button.btn-danger',(e)=>{
 //  		console.log('danger!');
 //  		console.log($(e.target).parents('div.item'));
 //  		$(e.target).parents('div.item').remove();
 //  	});

 //  	$(document).on('click','button.btn-info',(e)=>{
 //  		console.log('edit!');
 //  		console.log($(e.target).parents('div.item')[0]);
 //  		let divItem = $(e.target).parents('div.item')[0];
 //  		// console.log(editItem);
 //  		console.log($(divItem).children('label.itemtext')[0]);
 //  		let editItem = $(divItem).children('label.itemtext')[0];
 //  		$('.textEdit').val($(editItem).text());
 //  		$('.textEdit').removeClass('hidden');
 //      $('.textEdit').focus();
 //      $(editItem).addClass('hidden');
 //  		// $('#button').prop('disabled', true);
 //  		$('.textEdit').keyup(()=>{
 //  			console.log(editItem);
 //  			$(editItem).text($('.textEdit').val());
 //  		});
 //  		$('.textEdit').keypress(( event ) => {
	// 		if ( event.which == 13 ) {
	// 			console.log(editItem);
	// 		   	// $(editItem).text($('.textEdit').val());
 //  				$('.textEdit').blur();
 //  				$('.textEdit').val('');
 //          $('.textEdit').addClass('hidden');
 //          $(editItem).removeClass('hidden');
 //  				// $('#button').prop('disabled', false);
 //  				editItem = '';
 //  				divItem = '';
 //  				event.preventDefault();
	// 		}
 //  		});
 //  	});
