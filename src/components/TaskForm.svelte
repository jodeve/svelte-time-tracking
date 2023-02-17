<script>
  import { store } from "../store";

  let projects;
  let task = {
    title: "",
    project: ""
  };
  let isEditing = false;
  let isEditingIndex = 0;

  store.subscribe((value) => {
    projects = value.projects;
    if(value.selectedTask){
      let selectedTask = value.tasks.filter((task) => task.id == value.selectedTask)[0];
      task = { ...selectedTask };
      isEditing = true;
      isEditingIndex = value.tasks.indexOf(selectedTask);
    }
  });

  function onSelectProject(project){
    task.project = project;
  }

  function onSubmit() {
    if(!task.title || !task.project) return ;
  	store.update(value => {
      if(isEditing){
        value.tasks[isEditingIndex] = { ...task };
      }else{
        value.tasks.push({
          ...task,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
      return value;
    });
    onClear();
  }

  function onClear(){
    task = {  };
    isEditing = false;
    isEditingIndex = null;
  }

</script>


<div class="paper">
  <div class="clear" on:click={onClear}>
    <i class="fa fa-times"></i>
  </div>
  <h3>Projects</h3>
  <ul class="list-unstyled d-flex">
    { #each projects as project }
      <li class="project {task.project == project ? 'active' : ''}" on:click={() => onSelectProject(project)}>
        { project }
      </li>
    { /each }
  </ul>
  <div>
    <textarea
      class="input"
      placeholder="What are you tracking?"
      rows={4}
      bind:value={task.title}
    ></textarea>
  </div>
  <button on:click={onSubmit} class={!task.title || !task.project ? 'disabled' : ''}>{ isEditing ? 'Update Task' : 'Add Task' }</button>
</div>

<style>
  .paper{
    padding: 20px;
  }
  .clear{
    float: right;
    background-color: rgba(247, 76, 132, 0.4);
    color: #f00;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
  .clear:hover{
    background-color: rgba(247, 76, 132, 0.6);
  }
  h3{
    font-size: 14px;
    color: #cfcfcf;
    clear: both;
  }
  .project:not(:first-child){
    margin-left: 10px;
  }
  .project{
    padding: 5px 10px;
    background-color: var(--hover);
    border-radius: var(--radius);
    color: #fff;
  }
  .project:hover{
    background-color: var(--accent);
  }
  .project.active{
    background-color: var(--accent);
    color: var(--primary);
    font-weight: 400;
  }
</style>
