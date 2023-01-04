
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

window.addEventListener('load', () => {
	const goal = document.querySelector("#addgoal");
	const inputGoalName = document.querySelector("#goal");
	const inputDescription = document.querySelector("#description");
	const inputReason = document.querySelector("#reason");
	const inputTargetDate = document.querySelector("#targetDate");
	const inputCompletedDate = document.querySelector("#completedDate");
	const list_el = document.querySelector("#tasks");
	let counter = 0;


	$('.close-modal').click(function() {
		inputGoalName.value = '';
		inputDescription.value = '';
		inputReason.value = '';
		inputTargetDate.value = '';
		inputCompletedDate.value = '';
	});


	function appendInput(a, b, c, d, e){

		// Actions 
		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
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

		// For Goal Name
		const task_el = document.createElement('div');
		task_el.classList.add(a);



		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = a;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		// End of Goal Name

		// For iD 
		counter++;
		console.log(counter);
		const iD_el = document.createElement('div');
		iD_el.classList.add(counter);


		iD_el.appendChild(task_actions_el);

		const iD_content_el = document.createElement('div');
		iD_content_el.classList.add('content');

		iD_el.appendChild(iD_content_el);

		const iD_input_el = document.createElement('input');
		iD_input_el.classList.add('text');
		iD_input_el.type = 'text';
		iD_input_el.value = counter;
		iD_input_el.setAttribute('readonly', 'readonly');

		iD_content_el.appendChild(iD_input_el);

		// End of iD 

		// For Description Name
		const description_el = document.createElement('div');
		description_el.classList.add(b);
		description_el.id ='conDesc';

		const description_content_el = document.createElement('div');
		description_content_el.classList.add('content');

		description_el.appendChild(description_content_el);

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

		reason_el.classList.add(c);
		reason_el.id ='conDesc';

		const reason_content_el = document.createElement('div');
		reason_content_el.classList.add('content');

		reason_el.appendChild(reason_label_el);
		reason_el.appendChild(reason_content_el);


		const reason_input_el = document.createElement('input');
		reason_input_el.classList.add('textarea');
		reason_input_el.id = 'desc';
		reason_input_el.type = 'textbox';
		reason_input_el.value = c;
		reason_input_el.setAttribute('readonly', 'readonly');

		reason_content_el.appendChild(reason_input_el);

		// End of Reason Name

		// For TargetDate Name
		const targetDate_el = document.createElement('div');
		targetDate_el.classList.add(d);

		const targetDate_content_el = document.createElement('div');
		targetDate_content_el.classList.add('content');

		targetDate_el.appendChild(targetDate_content_el);

		const targetDate_input_el = document.createElement('input');
		targetDate_input_el.classList.add('date');
		targetDate_input_el.type = 'date';
		targetDate_input_el.value = d;
		targetDate_input_el.setAttribute('readonly', 'readonly');

		targetDate_content_el.appendChild(targetDate_input_el);

		// End of TargetDate Name

		// // For Completed Date Name
		const completedDate_el = document.createElement('div');
		completedDate_el.classList.add(e);

		const completedDate_content_el = document.createElement('div');
		completedDate_content_el.classList.add('content');

		completedDate_el.appendChild(completedDate_content_el);

		const completedDate_input_el = document.createElement('input');
		completedDate_input_el.classList.add('date');
		completedDate_input_el.type = 'date';
		completedDate_input_el.value = e;
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
		});

		$('#login-modal').fadeOut();
	}

	goal.addEventListener('click', (e) => {
		e.preventDefault();

		const goal = inputGoalName.value;
		const desc = inputDescription.value;
		const reason = inputReason.value;
		const targetDate = inputTargetDate.value;
		const completedDate = inputCompletedDate.value;

		
		appendInput(goal, desc, reason, targetDate, completedDate);

		inputGoalName.value = '';
		inputDescription.value = '';
		inputReason.value = '';
		inputTargetDate.value = '';
		inputCompletedDate.value = '';

		// const task_el = document.createElement('div');
		// task_el.classList.add('goal');

		// const task_content_el = document.createElement('div');
		// task_content_el.classList.add('content');

		// task_el.appendChild(task_content_el);

		// const task_input_el = document.createElement('input');
		// task_input_el.classList.add('text');
		// task_input_el.type = 'text';
		// task_input_el.value = goal;
		// task_input_el.setAttribute('readonly', 'readonly');

		// task_content_el.appendChild(task_input_el);

		// const task_actions_el = document.createElement('div');
		// task_actions_el.classList.add('actions');
		
		// const task_edit_el = document.createElement('button');
		// task_edit_el.classList.add('edit');
		// task_edit_el.innerText = 'Edit';

		// const task_delete_el = document.createElement('button');
		// task_delete_el.classList.add('delete');
		// task_delete_el.innerText = 'Delete';

		// task_actions_el.appendChild(task_edit_el);
		// task_actions_el.appendChild(task_delete_el);

		// task_el.appendChild(task_actions_el);

		// list_el.appendChild(task_el);

		// input.value = '';

		// task_edit_el.addEventListener('click', (e) => {
		// 	if (task_edit_el.innerText.toLowerCase() == "edit") {
		// 		task_edit_el.innerText = "Save";
		// 		task_input_el.removeAttribute("readonly");
		// 		task_input_el.focus();
		// 	} else {
		// 		task_edit_el.innerText = "Edit";
		// 		task_input_el.setAttribute("readonly", "readonly");
		// 	}
		// });

		// task_delete_el.addEventListener('click', (e) => {
		// 	list_el.removeChild(task_el);
		// });
	});
});