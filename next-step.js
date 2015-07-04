$(document).ready(function() {

	// determines how many steps are in the presentation
	function total_nextstep_count()
	{
		var step_count = 1;
		while($("#nextstep-"+step_count).length)
		{
			// increment step count
			step_count++;
		}
		
		// return step_count
		return step_count - 1;
	}

	function toggle_nextstep_nav()
	{
		// hide the back button if this is the first step
		if(window.current_step == 1) $(".nextstep-back").hide();
		else $(".nextstep-back").show();
		
		// hide the next button if this is the last step
		var total_step_count = total_nextstep_count();
		if(total_step_count == window.current_step) $(".nextstep-next").hide();
		else $(".nextstep-next").show();
	}

	// -------------------------------------------------

	function nextstep_next()
	{
		console.log(window.current_step);
		// process next step 
		$("#nextstep-"+window.current_step).fadeOut(function() {
			// increment current_step.
			window.current_step++;
			// fadein nextstep div.
			$("#nextstep-"+window.current_step).fadeIn();
			
			// toggle nav
			toggle_nextstep_nav();		
			
		});
		

		
	}
	
	function nextstep_back()
	{
		$("#nextstep-"+window.current_step).fadeOut(function() {
			// increment current_step.
			window.current_step--;
			// fadein previous step div.
			$("#nextstep-"+window.current_step).fadeIn();
			
			// toggle nav
			toggle_nextstep_nav();		
			
		});
	}

	// script startup
	// set the current step as 1
	window.current_step = 1;
	toggle_nextstep_nav();	

	// listeners for actions
	$(".nextstep-next").on("click",nextstep_next);
	$(".nextstep-back").on("click",nextstep_back);

});
