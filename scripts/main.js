function showSolution() {
	const solutionBox = document.getElementById("solution-box");
	const bodyContainer = document.getElementById("body-container");
	const box = document.getElementById("box");
	box.style.display = "block";
	solutionBox.style.visibility = "visible";
	solutionBox.classList.add("show");
	bodyContainer.style.filter = "blur(5px)";
}

function hideSolution() {
	const solutionBox = document.getElementById("solution-box");
	const bodyContainer = document.getElementById("body-container");
	const box = document.getElementById("box");
	box.style.display = "none";
	solutionBox.style.visibility = "hidden";
	solutionBox.classList.remove("show");
	bodyContainer.style.filter = "none";
}
