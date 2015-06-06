/**
	Project: Next Step
	Filename: nextstep.js
	Description: A jQuery extension that turns a series of 
	hidden div layers into transitionable slides.
	Author: Zach Alam
	Example: http://everbranded.com/order
*/

$(document).ready(function() {

	// DOM is ready for manipulation
	// find out how many steps there are in this sequence
	var total_steps = 1;
	while($(".step-"+total_steps).length) total_steps++;


	// sets the progress bar level
	function set_progress(curr_step)
	{
		// calculate the % complete for <progress> tag.
		var progress = (100 / total_steps) * curr_step;
		$(".step-progress").val(progress);
	}


	// set step counter to 1
	var current_step = 1;
	// set progress bar to current step
	set_progress(current_step);

	// move to NEXT step
	$(".step-next").on("click",function() {

		// check if callback exists, if one does execute it.
		// the callback must return true to continue with progress.
		var proceed = true;
		var callback = $(".step-"+current_step).attr("data-callback");
		if(callback) proceed = window[callback](); 

		if(proceed)
		{
			// we can proceed with the transition.
			$(".step-"+current_step).slideUp(function() {

				// find next step and toggle
				current_step++;
				$(".step-"+current_step).slideDown();

				// set progress forward one step
				set_progress(current_step);

				// if current step isn't first, show back button
				if(current_step > 1) { $(".step-prev").show(); }

			});

		} 

	});


	// move to PREV step
	$(".step-prev").on("click",function() {

		// toggle current step
		$(".step-"+current_step).slideUp(function() {

			// find previous step and toggle
			current_step--;
			$(".step-"+current_step).slideDown();

			// set progress back one step
			set_progress(current_step);

			// if current step is first, hide back button
			if(current_step == 1) { $(".step-prev").hide(); }
		});

	});

});
