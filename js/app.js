$(document).ready(app)
function assemble(data){
	var image = "<img src="+ data +"></img>";
	var anchor = "<a href="+ data +">"+ image +"</a>";
	return "<li><h2 class='hidden'>caption</h2>"+ anchor +"</li>";
};
function app(){
	$.get('http://beta.json-generator.com/api/json/get/VkxAzj8zG', function(res) {
		// console.log(data)
		res['data'].forEach(function(i){
			// console.log(i);
			var image = i.image;
			var result = assemble(image);
			console.log(result);
			$('.duplicate ul').append(result);
		});
	});
}