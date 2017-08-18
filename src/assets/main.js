$(function() {

	$.ajax({
		url: 'https://www.codeschool.com/users/coreyhickey.json',
		dataType: 'jsonp',
		success: function(response) {
			$.each(response.courses.completed, function (index, value) {	
				$('#badges').append('<div class="course"><h3>' + this.title + '</h3><img src="' + this.badge + '" alt="' + this.title + '" ><a href="'+this.url+'" target="_blank" class="btn btn-primary">See Course</a></div>');
			});
		}
	});

});