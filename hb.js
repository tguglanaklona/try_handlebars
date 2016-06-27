$(document).ready(function () {
	var source = $('#image-template').html();
	var template = Handlebars.compile(source);
	var data = {
		src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Tridacna_maxima_2.jpg/250px-Tridacna_maxima_2.jpg",
		title: "The Earth or whatever",
		author: "tguglanaklona",
		foo: "javascript:alert();"
	};
	var html = template( data );
	$('#content').html(html); 
});
