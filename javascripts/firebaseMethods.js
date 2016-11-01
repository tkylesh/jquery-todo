"use strict";
var FbAPI = (function(oldFirebase){

	oldFirebase.getTodos = function(apiKeys){
		return new Promise((resolve, reject) => {
			$.ajax({
				method: 'GET',
				url:`${apiKeys.databaseURL}/items.json`
			}).then((response)=>{
				resolve(response);
			}, (error)=>{
				reject(error);
			});
		});
	};
	return oldFirebase;
})(FbAPI || {});