<script lang="ts">
	import logo from './intex.svg';
</script>

<header>
	<div class="corner">
		<img src={logo} alt="SvelteKit" />
	</div>

	<nav />

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		padding: 1em;
		width: 3em;
		height: 3em;
	}

	.corner img {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}
</style>
