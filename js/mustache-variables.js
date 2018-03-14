// MUSTACHE + HIDESEEK VARIABLES

$(function() {
	  $.getJSON('all_courses.json', function(data) {
		  var template = $('#course-script').html();
		  var html = Mustache.to_html(template, data);
		  $('#all_courses').html(html);
		  $('#search').hideseek({
		   nodata: 'No results found'
	  });
	  });
  });