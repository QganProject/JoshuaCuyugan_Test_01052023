
//  Popup Form Code 
$(function() {
$('#login-show').click(function() {
	$('#login-modal').fadeIn().css("display", "flex");
	$('#login-modal').fadeIn().css("position", "absolute");
	$('body').fadeIn().css("overflow-y", "hidden");

});

$('.close-modal').click(function() {
	$('body').fadeIn().css("overflow-y", "scroll");
	$('#login-modal').fadeOut();
});
});

// End of Popup 


// Header Code 

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 50) {
		header.style.backgroundColor = '#314E52';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
	  
// End of Header Code


function loadGoalsList(data){
	const list = document.querySelector('#tasks');
	let listHtml = "";
	if (data.length === 0){
		list.innerHTML="<tr><td class='no-data' colspan='5'>Add Your First Goal</td></tr>";
	}
}

function convDate(fdate){
	const [month, day, year] = fdate.split('/');
	const date = new Date(+year, +month - 1, +day);
	// console.log(date)
	var newDate = date.toLocaleDateString('en-GB');
	return newDate;
}

window.addEventListener('load', () => {

	//  loadGoalsList([]);
	const goal = document.querySelector("#addgoal");
	const inputGoalName = document.querySelector("#goal");
	const inputDescription = document.querySelector("#description");
	const inputReason = document.querySelector("#reason");
	const inputTargetDate = document.querySelector("#targetDate");
	const inputCompletedDate = document.querySelector("#completedDate");
	const list_el = document.querySelector("#tasks");
	let counter = '';

	fetch('http://localhost:5500/getAll')
	.then(response => response.json())
	.then(data => loadDataIn(data.goals))



	$('.close-modal').click(function() {
		inputGoalName.value = '';
		inputDescription.value = '';
		inputReason.value = '';
		inputTargetDate.value = '';
		inputCompletedDate.value = '';
	});


	function appendInput(a, b, c, d, e, f){

		// Actions 
		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		task_actions_el.id = f;
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';
		task_edit_el.id = "actionButtons";

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';
		task_delete_el.id = "actionButtons";

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);


		// Actions

		// For iD 
		// console.log(f);
		const iD_el = document.createElement('div');
		iD_el.classList.add(f);


		iD_el.appendChild(task_actions_el);

		const iD_content_el = document.createElement('div');
		iD_content_el.classList.add('content');

		iD_el.appendChild(iD_content_el);

		const iD_input_el = document.createElement('input');
		iD_input_el.classList.add('text');
		iD_input_el.type = 'text';
		iD_input_el.value = f;
		iD_input_el.setAttribute('readonly', 'readonly');

		iD_content_el.appendChild(iD_input_el);

		// End of iD 

		// For Goal Name
		const task_el = document.createElement('div');
		task_el.classList.add("GoalName");

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		iD_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = a;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		// End of Goal Name


		// For Description Name
		const description_el = document.createElement('div');
		description_el.classList.add("GoalDescription");
		description_el.id ='conDesc';

		const description_content_el = document.createElement('div');
		description_content_el.classList.add('content');

		iD_el.appendChild(description_content_el);

		const description_input_el = document.createElement('input');
		description_input_el.classList.add('textarea');
		description_input_el.id = 'desc';
		description_input_el.type = 'textbox';
		description_input_el.value = b;
		description_input_el.setAttribute('readonly', 'readonly');

		description_content_el.appendChild(description_input_el);

		// End of Description Name
		// For Reason Name
		
		const reason_el = document.createElement('div');

		const reason_label_el = document.createElement('h3');
		reason_label_el.classList.add('Reason');
		reason_label_el.value = 'Reason';

		reason_el.classList.add("GoalReason");
		reason_el.id ='conDesc';

		const reason_content_el = document.createElement('div');
		reason_content_el.classList.add('content');

		iD_el.appendChild(reason_label_el);
		iD_el.appendChild(reason_content_el);


		const reason_input_el = document.createElement('input');
		reason_input_el.classList.add('textarea');
		reason_input_el.id = 'desc';
		reason_input_el.type = 'textbox';
		reason_input_el.value = c;
		reason_input_el.setAttribute('readonly', 'readonly');

		reason_content_el.appendChild(reason_input_el);

		// End of Reason Name

		// For TargetDate Name

		var newTD = new Date(d);
		var formatedTD = newTD.toISOString().substring(0,10);

		const targetDate_el = document.createElement('div');
		targetDate_el.classList.add("TargetDate");

		const targetDate_content_el = document.createElement('div');
		targetDate_content_el.classList.add('content');

		iD_el.appendChild(targetDate_content_el);

		const targetDate_input_el = document.createElement('input');
		targetDate_input_el.classList.add('date');
		targetDate_input_el.type = 'date';
		targetDate_input_el.value = formatedTD;
		targetDate_input_el.setAttribute('readonly', 'readonly');

		targetDate_content_el.appendChild(targetDate_input_el);

		// End of TargetDate Name

		// // For Completed Date Name

		var newCD = new Date(e);
		var formatedCD = newCD.toISOString().substring(0,10);

		const completedDate_el = document.createElement('div');
		completedDate_el.classList.add("CompletedDate");

		const completedDate_content_el = document.createElement('div');
		completedDate_content_el.classList.add('content');

		iD_el.appendChild(completedDate_content_el);

		const completedDate_input_el = document.createElement('input');
		completedDate_input_el.classList.add('date');
		completedDate_input_el.type = 'date';
		completedDate_input_el.value = formatedCD;
		completedDate_input_el.setAttribute('readonly', 'readonly');

		completedDate_content_el.appendChild(completedDate_input_el);

		// // End of CompletedDate Name
		

		list_el.appendChild(iD_el);
		list_el.appendChild(task_el);
		list_el.appendChild(description_el);
		list_el.appendChild(reason_el);
		list_el.appendChild(targetDate_el);
		list_el.appendChild(completedDate_el);


		a.value = '';
		b.value = '';
		c.value = '';
		d.value = '';
		e.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				description_input_el.removeAttribute("readonly");
				reason_input_el.removeAttribute("readonly");
				targetDate_input_el.removeAttribute("readonly");
				completedDate_input_el.removeAttribute("readonly");
				task_input_el.focus();
				
			} else {
				
				// console.log(iD_input_el.value)
				fetch('http://localhost:5500/update', {
					method: 'PATCH',
					headers: {
						'Content-type' : 'application/json'
					},
					body: JSON.stringify({
						id:iD_input_el.value,
						goalname:task_input_el.value,
						goal_description:description_input_el.value,
						goal_reason:reason_input_el.value,
						goalTargetDate:targetDate_input_el.value,
						goalCompletedDate:completedDate_input_el.value
					})
				})
				.then(response => response.json())
				.then(data => {
					if (data.success) {
						location.reload();
					}
				})

				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
				description_input_el.setAttribute("readonly", "readonly");
				reason_input_el.setAttribute("readonly", "readonly");
				targetDate_input_el.setAttribute("readonly", "readonly");
				completedDate_input_el.setAttribute("readonly", "readonly");


			}
		});

		task_delete_el.addEventListener('click', (e) => { 
			list_el.removeChild(task_el);
			list_el.removeChild(description_el);
			list_el.removeChild(reason_el);
			list_el.removeChild(targetDate_el);
			list_el.removeChild(completedDate_el);
			list_el.removeChild(iD_el);
			// console.log("Id is", task_actions_el.id)
			fetch('http://localhost:5500/delete/' + task_actions_el.id, {
				method: 'DELETE'
			})
			.then(response => response.json())
			.then(data => {
				if (data.success) {
					location.reload();
				}
			});

		});

		$('#login-modal').fadeOut();
	}

	function loadDataIn(obj){

		var retID = ""
		var retGoalName = ""
		var retGoalDesc = ""
		var retGoalRes = ""
		var retTD= ""
		var retCD= ""

		// console.log("Loading in:",obj)

		obj.forEach(object => {
			for (let key in object){
				switch(key){
					case "id":
						// console.log("1")
						retID = object[key];
						break;
					case "goalname":
						// console.log("2")
						retGoalName = object[key];
						break;
					case "goal_description":
						// console.log("3")
						retGoalDesc = object[key];
						break;
					case "goal_reason":
						// console.log("4")
						retGoalRes = object[key];
						break;
					case "goalTargetDate":
						// console.log("5")
						retTD = object[key];
						break;
					case "goalCompletedDate":
						// console.log("6")
						retCD = object[key];
						appendInput(retGoalName, retGoalDesc, retGoalRes, retTD, retCD, retID);
						break;
				}
				// console.log(`${key}: ${object[key]}`)
			}
		})



		// while(){

		// }
	
	}

	goal.addEventListener('click', (e) => {
		e.preventDefault();

		var id =  Math.floor(Math.random() * 1000);
		counter = id;
		const goal = inputGoalName.value;
		const desc = inputDescription.value;
		const reason = inputReason.value;
		const targetDate = inputTargetDate.value;
		const completedDate = inputCompletedDate.value;

		let insert = [{
			"id":id,
			"goalname":goal,
			"goal_description":desc,
			"goal_reason":reason,
			"goalTargetDate":targetDate,
			"goalCompletedDate":completedDate
		}];
		
		fetch('http://localhost:5500/goals', {
			headers: {
				'Content-type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				id:id,
				goalname:goal,
				goal_description:desc,
				goal_reason:reason,
				goalTargetDate:targetDate,
				goalCompletedDate:completedDate
			})
		})
		.then(response => response.json())
		.then(data => loadDataIn(insert))

		inputGoalName.value = '';
		inputDescription.value = '';
		inputReason.value = '';
		inputTargetDate.value = '';
		inputCompletedDate.value = '';

	});
});


