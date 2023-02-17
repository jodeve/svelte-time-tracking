<script>
	import Tasks from "./components/Tasks.svelte";
	import TaskForm from "./components/TaskForm.svelte";
	import Sidebar from "./components/Sidebar.svelte"
	import Navbar from "./components/Navbar.svelte";
	import Tracked from "./components/Tracked.svelte";

</script>

<div class="body">
	<Sidebar />
	<div class="main">
		<Navbar />
		<main>
			<div class="page">
				<Tracked />
				<Tasks />
				<TaskForm />
			</div>
		</main>
	</div>
</div>

<style>
	.body{
		display: flex;
	}
	.main{
		margin-left: 240px;
		flex: 1;
	}
	main{
		display: flex;
		height: 100vh;
		padding-top: 60px;
		flex-direction: column;
		width: 80%;
		margin: 0 auto;
	}
	.page{
		display: flex;
		align-items: start;
		justify-content: space-around;
		margin-top: 40px;
	}
</style>
