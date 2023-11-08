

/**
 *
 * @param {string} task_prefix
 * @param {string} task_number_style
 * @param {Task[]} tasks
 * @param {string[]} wordlist
 * @returns
 */
function generateTaskList(task_prefix, task_number_style, tasks) {
	var taskList, content;

	content = tasks
		.map(({title, content, wordlist} = {title: "", content: "", wordlist: null}, index) =>
			generateTask(index + 1, task_prefix, task_number_style, title, content, wordlist)
		)
		.join("");

	taskList = document.createElement("div");
	taskList.classList.add("tasklist");
	taskList.innerHTML = content;
	return taskList;
}
/**
 *
 * @param {number|string} number
 * @param {string} task_prefix
 * @param {string} task_number_style
 * @param {string} title
 * @param {string} content
 */
function generateTask(number, task_prefix, task_number_style, title, content, wordlist) {
	let taskBefore = task_number_style.replace("$prefix", task_prefix).replace("$number", number),
		taskContent = content.replace(
			/\<(c:(\d+))\>/gm,
			(full, g1, g2, ...args) => g2 == -1?`<input type="text"/>` : `<input type="text" style="--data-count: ${g2}" />`
		);
	if (wordlist != null) {
    taskContent = `<div class="table">${wordlist.map((word) => `<div>${word}</div>`).join("")}</div>&emsp;&emsp;` + taskContent;
	}

	return /*html*/ `<div class="task"><div class="title" data-before="${taskBefore}">${title}</div><div class="content">${taskContent}</div></div>`;
}


function list(...l) {
  return l.map((e, i)=>(i+1)+") " + e + "</br>").join("");
}
function listI(...l) {
  return l.map((e, i)=>(i+1)+") " + e + `</br> <c:30>` + "</br>").join("");
}