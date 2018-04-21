


function Check() {
	var name = document.getElementById('name').value,
		date = document.getElementById('date').value
		display_name = document.getElementById('display_name'),
		right_comp = document.getElementById('right_comp'),
		output = document.getElementById('output');

		output.style.opacity= "100";
		right_comp.setAttribute("class", "right_comp_hover");

		console.log(name, date);
		display_name.innerHTML = name;


}