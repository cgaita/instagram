$(document).ready(app)
function assemble(data){
	var image = "<img src="+ data +"></img>";
	var anchor = "<a href="+ data +">"+ image +"</a>";
	return "<li><h2 class='hidden'>caption</h2>"+ anchor +"</li>";
};
function app(){
	$.get('./data.json', function(res) {
		// console.log(data)
		var html = "";
		res['data'].forEach(function(i){
			// console.log(i);
			var image = i.image;
			html = html + assemble(image);
		});
		$('.duplicate ul').append(html);
	});
}