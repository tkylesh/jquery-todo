"use strict";
var FbAPI = (function(oldFirebase){

	oldFirebase.getTodos = function(apiKeys){
		return new Promise((resolve, reject) => {
			$.ajax({
				method: 'GET',
				url:`${apiKeys.databaseURL}/items.json`
			}).then((response)=>{
				console.log(response);
			}, (error)=>{
				console.log(error);
			});
		});
	};
	return oldFirebase;
})(FbAPI || {});