<script>

	let links = [
		{ name: "Dashboard", icon: "home" },
		{ name: "Projects", icon: "folder" },
		{ name: "Tasks", icon: "clock-o", active: true },
		{ name: "Users", icon: "user" },
		{ name: "Settings", icon: "cog" }
	]
</script>

<div class="sidebar">
  <div class="logo">
    <h2>Tracker</h2>
  </div>
  <ul class="list-unstyled">
    {#each links as link}
      <li>
        <a href="#" class="nav-link {link.active ? 'active' : ''}">
          <i class="fa fa-{link.icon} fa-2x"></i>
          <span>{link.name}</span>
        </a>
      </li>
    {/each}
  </ul>
</div>


<style>
	.sidebar{
		width: 240px;
		background-color: var(--secondary);
		position: fixed;
		height: 100%;
	}
	.logo{
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 20px;
	}
	h2{
		color: #fff;
	}
	.sidebar ul {
		margin-top: 100px;
	}
	.sidebar li {
		padding: 0 15px;
	}
	.sidebar a {
		color: #fff;
		padding: 10px 20px;
		cursor: pointer;
		display: flex;
    align-items: center;
	}
	.sidebar li:not(:first-child){
		margin-top: 10px;
	}
	.sidebar a:hover,
	.sidebar a.active{
		background-color: var(--accent);
		border-radius: 40px;
	}
	.sidebar span {
		margin-left: 20px;
	}
</style>
