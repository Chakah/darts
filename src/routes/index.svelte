<script lang="ts">
	import Setup from '$lib/Setup.svelte';
	import Game from '$lib/Game.svelte';

	let start = false;
</script>

<svelte:head>
	<title>intex Darts</title>
</svelte:head>

<section />

{#if start == false}
	<Setup />

	<div class="row">
		<button class="start" on:click={() => (start = true)}>Start</button>
	</div>
{/if}

{#if start == true}
	<Game />
{/if}

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
	.row {
		display: flex;
		justify-content: center;
	}
	.start {
		height: 3em;
		width: 10em;
		/* background-color: var(--primary-color); */
		color: var(--primary-color);
		font-size: large;
		font-weight: bolder;
	}
</style>
