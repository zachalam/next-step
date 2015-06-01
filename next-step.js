	$(document).ready(function() {

		// DOM is ready for manipulation

		// set step counter to 1
		var current_step = 1;

		// move to next step
		$(".next-step").on("click",function() {


			// toggle current step
			$(".step-"+current_step).fadeOut(function() {

				// find next step and toggle
				current_step++;
				$(".step-"+current_step).show();

				// if current step isn't first, show back button
				if(current_step > 1) { $(".prev-step").show(); }

			});



		});


		// move to prev step
		$(".prev-step").on("click",function() {

			// toggle current step
			$(".step-"+current_step).fadeOut(function() {

				// find previous step and toggle
				current_step--;
				$(".step-"+current_step).show();

				// if current step is first, hide back button
				if(current_step == 1) { $(".prev-step").hide(); }
			});

		});


	});
