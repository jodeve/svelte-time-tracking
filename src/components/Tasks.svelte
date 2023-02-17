<script>
  import { store } from "../store";
  import { correctSingle } from "../lib";

  let tasks;
  let trackedTask;

  store.subscribe((value) => {
    tasks = value.tasks;
    trackedTask = value.trackedTask;
  });

  function onSelectTask(id){
    store.update((value) => {
      value.selectedTask = id;
      return value;
    });
  }

  function onToggleTrack(id){
    if(trackedTask == id){
        id = null;
    }
    store.update((value) => {
      value.trackedTask = id;
      return value;
    });
  }

</script>


<ul class="list-unstyled paper">
  { #each tasks as task }
    <li class="task {trackedTask == task.id ? 'active' : ''}" on:click={() => onSelectTask(task.id)}>
      <div class="time">
        <span>{task.hours}:{correctSingle(task.minutes)}</span>
      </div>
      <div class="info">
        <div class="details">
          <p class="project">{task.project}</p>
          <p class="title">{task.title}</p>
        </div>
        <div class="action-wrapper">
          <span class="action" on:click|stopPropagation={() => onToggleTrack(task.id)}>
            {#if task.id == trackedTask }
              <i class="fa fa-stop"></i>
            {:else}
              <i class="fa fa-play"></i>
            {/if}
          </span>
        </div>
      </div>
    </li>
  { /each }
</ul>

<style>
  ul{
    margin-bottom: 0;
  }
  .task:not(:last-child) .info{
  	border-bottom: thin solid #ebebeb;
  }
  .task{
  	padding-top: 20px;
  	padding-left: 20px;
  	display: flex;
  	cursor: pointer;
  	transition: background-color .4s;
  }

  .info{
  	margin-left: 20px;
  	padding-bottom: 20px;
  	padding-right: 20px;
  	display: flex;
  	flex: 1;
  	align-items: center;
  }
  .details{
  	flex: 1;
  }
  .action{
  	padding: 5px 10px;
  	border-radius: var(--radius);
  	font-size: 14px;
  }
  .action:hover{
  	background-color: var(--hover);
  }
  .title{
  	font-weight: 600;
  }
  .project{
  	font-size: 14px;
  	color: #cfcfcf;
  }
  .task.active,
  .task:hover{
  	background-color: var(--accent);
  }
  .task.active:first-child,
  .task:hover:first-child{
  	border-top-left-radius: var(--radius);
  	border-top-right-radius: var(--radius);
  }
  .task.active:last-child,
  .task:hover:last-child{
  	border-bottom-left-radius: var(--radius);
  	border-bottom-right-radius: var(--radius);
  }
  .time{
  	background-color: var(--accent);
  	border-radius: 50%;
  	font-size: 12px;
  	color: var(--primary);
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	width: 50px;
  	height: 50px;
  	font-weight: bold;
  }
  .action-wrapper{
    margin-left: 20px;
  }
  .task.active .project,
  .task:hover .project{
    color: var(--primary);
  }
</style>
