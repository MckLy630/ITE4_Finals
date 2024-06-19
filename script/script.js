var counter = 1;
    setInterval(function(){
		document.getElementById('radio' + counter).checked = true;
		counter++;
		    if(counter > 6){
			    counter = 1;
			}
	},
    5000);

	var scrollAmount = 0;

	function scrollContent(direction) {
		var container = document.querySelector('.navbar-content');
		    scrollAmount = direction === 'left' ? -10 : 10; // Adjust for speed

		function step() {
		    if (scrollAmount !== 0) {
				container.scrollLeft += scrollAmount;
				window.requestAnimationFrame(step);
			}
		}

		window.requestAnimationFrame(step);
	}

	function stopScrolling() {
		scrollAmount = 0;
	}