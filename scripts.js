const btn = document.getElementById("btn-toggle-theme");

btn.addEventListener("click", (e) => {
	var root = document.documentElement;
	if (root.getAttribute('theme') !== "dark")
	{
		root.setAttribute("theme", "dark");
		console.log("To dark mode!");
	}
	else
	{
		root.setAttribute("theme", "light");
		console.log("To light mode!");
	}
});