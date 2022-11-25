/**
 * DeGruchy.org JavaScript
 * A bunch of initialization stuff and collecting elements to feed to
 * things like timeago
 */

/**
 * Main function
 * @description The function that gets triggered once the page loads
 * @returns bool - True on success, false on failure
 */
function main() {
	/**
	 * @type NodeListOf<HTMLElements>
	 */
	const eTimes = document.querySelectorAll("time");

	// Start time ago
	if (eTimes.length > 0)
	{
		timeago.render(eTimes);
	}
	else
	{
		return false;
	}

	return true;
}

main(); // lets gooo!
