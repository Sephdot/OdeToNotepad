const btn = document.getElementById("btn-toggle-theme");

btn.addEventListener("click", (e) => {
	var root = document.documentElement;
	if (root.getAttribute('theme') !== "dark")
	{
		root.setAttribute("theme", "dark");
	}
	else
	{
		root.setAttribute("theme", "light");
	}
});