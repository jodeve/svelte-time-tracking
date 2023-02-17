<script>

	import { store } from "../store";
	import { correctSingle } from "../lib";

	let trackedTask;
	let trackedTaskIndex;

	store.subscribe((value) => {
		let tasks = value.tasks.filter((task) => task.id == value.trackedTask);
		if(tasks.length > 0){
			trackedTask = tasks[0];
			trackedTaskIndex = value.tasks.indexOf(tasks[0]);
		}else{
			trackedTask = {
				seconds: 0,
				hours: 0,
				minutes: 0,
				title: ""
			}
		}
	});

	setInterval(() => {
		if(trackedTask.title){
			if(trackedTask.seconds == 59){
				trackedTask.seconds = 0;
				trackedTask.minutes += 1;

				if(trackedTask.minutes >= 59){
					trackedTask.minutes = 0;
					trackedTask.hours += 1;
				}
			}else trackedTask.seconds += 1;
			store.update((value) => {
				value.tasks[trackedTaskIndex] = { ...trackedTask };
				return value;
			})
		}
	}, 1000);

</script>

<div class="tracked">
  { #if trackedTask }
    <div class="paper">
      <div class="time">
        <div>{trackedTask.hours}</div><span>:</span>
        <div>{correctSingle(trackedTask.minutes)}</div><span>:</span>
        <div>{correctSingle(trackedTask.seconds)}</div>
      </div>
      <div class="info">
        <h3 class="title">{trackedTask.title}</h3>
				{#if trackedTask.project }
					<p class="project">{trackedTask.project}</p>
				{/if}
      </div>
    </div>
  { /if }
</div>

<style>

  .paper{
    padding: 20px;
  }
  .time{
    display: flex;
    justify-content: space-around;
		align-items: center;
  }
  .time div{
    padding: 40px;
    border: thin solid var(--hover);
    font-weight: 600;
    font-size: 20px;
		border-radius: 5px;
  }
	.time span {
		font-size: 20px;
		font-weight: 600;
		margin: 0 10px;
	}
	.info{
		margin-top: 30px;
	}
	.title{
		font-weight: 800;
	}
	.project{
		padding: 5px 10px;
		background-color: #bbb;
		border-radius: var(--radius);
		background-color: var(--accent);
		color: var(--primary);
		font-weight: 400;
		display: inline-block;
	}
</style>
