const task_container=document.querySelector(".task_container");

const global_store=[];

const new_card = ({id,image_url,task_title,task_type,task_description}) => 
`<div  class="col-md-6 col-lg-4" id=${id}>
<div class="card">
  <div class="card-header d-flex justify-content-end gap-2">
    
    <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
    <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
  </div>
  <img src=${image_url} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${task_title}</h5>
    <p class="card-text">${task_description}</p>
    <span class="badge bg-primary">${task_type}</span>
  </div>
  <div class="card-footer text-muted d-flex justify-content-end">
    <button type="button" class="btn btn-outline-primary">Open Task</button>
  </div>
</div>
</div>`

const saveChanges = () => {
    const taskData = { 
        id: `${Date.now()}`,
        image_url: document.getElementById("image_url").value,
        task_title: document.getElementById("task_title").value,
        task_type: document.getElementById("task_type").value,
        task_description: document.getElementById("task_description").value,
    };

    const create_new_card=new_card(taskData);
    
    task_container.insertAdjacentHTML("beforeend",create_new_card);
    global_store.push(taskData);
    console.log(global_store);

    localStorage.setItem("taskGenie",JSON.stringify({cards:global_store}));

};
