/**
 * DeGruchy.org JavaScript
 * A bunch of initialization stuff and collecting elements to feed to
 * things like timeago
 */

function main() {
	const eTimes = document.querySelectorAll("time");
	const lazyLoad = new LazyLoad({
		"threshold": 100
	});

	// Start time ago
	if(eTimes.length > 0)
	{
		timeago.render(eTimes);
	}

	return true;
}

document.addEventListener("DOMContentLoaded", main());
