const btn = document.getElementById("btn-toggle-theme");

btn.addEventListener("click", (e) => {
	var root = document.documentElement;
	if (root.getAttribute('data-theme') !== "dark")
	{
		root.setAttribute("data-theme", "dark");
		console.log("To dark mode!");
	}
	else
	{
		root.setAttribute("data-theme", "light");
		console.log("To light mode!");
	}
});