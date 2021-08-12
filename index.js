const task_container=document.querySelector(".task_container");

const global_store=[];

const new_card = ({id,image_url,task_title,task_type,task_description}) => 
`<div  class="col-md-6 col-lg-4" id=${id}>
<div class="card">
  <div class="card-header d-flex justify-content-end gap-2">
    
    <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
    <button type="button" id=${id} class="btn btn-outline-danger" onClick="delete_card.apply(this,arguments)"><i class="fas fa-trash-alt"  id=${id} onClick="delete_card.apply(this,arguments)" ></i></button>
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

//To add new card
const load_task_card= ()=> {
    const get_initial_data=localStorage.getItem("taskGenie");
    if(!taskGenie) return;

    const task_objects= JSON.parse(get_initial_data);

    task_objects.forEach((card) => {
        task_container.insertAdjacentHTML("beforeend",card);
        global_store.push(card);
        
    });
}

const delete_card= (event) =>{
  event=window.event;
  const target_id= event.target.tag_name;

  const new_updated_array= global_store.filter(
  (card_object)=>card_object.id!==target_id);
  
global_store= new_updated_array;

  if(tag_name==="BUTTON"){
    return event.target.parentNode.parentNode.parentNode.parentNode.removeChild(
      event.target.parentNode.parentNode.parentNode)
  }

  return event.target.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(
    event.target.parentNode.parentNode.parentNode.parentNode.parentNode);

};


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
