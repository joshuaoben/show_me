

/*var dateControl = document.querySelector('input[type="date"]');
dateControl.value = new Date().getDate();*/

function Check() {
	var name = document.getElementById('name').value,
		date = document.getElementById('date').value,
		display_name = document.getElementById('display_name'),
		right_comp = document.getElementById('right_comp'),
		output = document.getElementById('output'),
		error = document.getElementById('error');

		if (name && date) {

			error.setAttribute("class", "no_error");
			output.style.opacity= "100";
			right_comp.setAttribute("class", "right_comp_hover");
			display_name.innerHTML = name;
		}

		else {
			error.setAttribute("class", "error");
			error.innerHTML = "Please input both Name and Date";
		}

}

function Back() {
	var back = document.getElementById('back'),
		right_comp = document.getElementById('right_comp'),
		name = document.getElementById('name'),
		date = document.getElementById('date');

	output.style.opacity= "0";

	right_comp.setAttribute("class", "right_comp");

	name.value = "";
	date.value = "";


}