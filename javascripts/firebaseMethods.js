"use strict";
var FbAPI = (function(oldFirebase){

	oldFirebase.getTodos = function(apiKeys){
		return new Promise((resolve, reject) => {
			$.ajax({
				method: 'GET',
				url:`${apiKeys.databaseURL}/items.json`
			}).then((response)=>{
				//turn the object response into an array with this code
				let items = [];
				Object.keys(response).forEach(function(key){
					response[key].id = key;
					items.push(response[key]);
				});
				resolve(items);
			}, (error)=>{
				reject(error);
			});
		});
	};
	return oldFirebase;
})(FbAPI || {});