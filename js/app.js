$(document).ready(app)
function assemble(data){
		var duplicate = $('.temp').clone();
		var link = duplicate.find('.list-item a');
		link.attr('href', data);
		var img = duplicate.find('.list-item img');
		img.attr('src', data);
		duplicate.removeClass('hidden1');
		return duplicate;
};
function app(){
	$.get('http://beta.json-generator.com/api/json/get/VkxAzj8zG', function(res) {
		// console.log(data)
		res['data'].forEach(function(i){
			// console.log(i);
			var image = i.image;
			var result = assemble(image);
			console.log(result);
			$('.duplicate').append(result);
		});
	});
}