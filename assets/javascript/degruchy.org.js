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
	else
	{
		console.log("DeGruchy.org: No time blocks found.");
	}

	return;
}

document.addEventListener("DOMContentLoaded", main());
