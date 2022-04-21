function showSolution() {
	const solSec = document.getElementById("sol-sec");
	const solText = document.getElementById("sol-text");
	const eyeBtn = document.getElementById("eye-btn");
	if (eyeBtn.classList.contains("fa-eye-slash")) {
		solSec.style.display = "none";
		solText.style.display = "none";
		eyeBtn.classList.remove("fa-eye-slash");
		eyeBtn.classList.add("fa-eye");
	} else {
		solSec.style.display = "block";
		solText.style.display = "block";
		eyeBtn.classList.remove("fa-eye");
		eyeBtn.classList.add("fa-eye-slash");
	}
	
}