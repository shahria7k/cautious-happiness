const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
	panel.addEventListener("mouseover", () => {
		removeActive();
		console.log(panel);
		panel.classList.add("active");
	});
});
function removeActive() {
	panels.forEach((panel) => {
		panel.classList.remove("active");
	});
}
