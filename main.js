function showSolution() {
	const solutionBox = document.getElementById("solution-box");
	const bodyContainer = document.getElementById("body-container");
	solutionBox.style.visibility = "visible";
	solutionBox.classList.add("show");
	bodyContainer.style.filter = "blur(5px)";
}

function hideSolution() {
	const solutionBox = document.getElementById("solution-box");
	const bodyContainer = document.getElementById("body-container");
	solutionBox.style.visibility = "hidden";
	solutionBox.classList.remove("show");
	bodyContainer.style.filter = "none";
}
