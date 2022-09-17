window.addEventListener('load', function () {
  const form = document.querySelector('#list-form');
  const input = document.querySelector('#list-input');
  const list_el = document.querySelector('#tasks');


  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert("please fill out your lists");
      return;
    }


    const task_el = document.createElement('div');
    task_el.classList.add("tasks");


    const task_content_el = document.createElement("div");
    task_content_el.classList.add("contents");
    task_content_el.innerText = task;

    task_el.appendChild(task_content_el);

       const task_input_el=document.createElement("input");
       task_input_el.classList.add("text");
        
       task_input_el.type="text";

  



    list_el.appendChild(task_el);

 
  })
})