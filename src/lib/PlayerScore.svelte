<script>
	export let index;
	export let name;
	export let score;
	export let handleClick;
	export let active;

	let onClick = () => handleClick(index);
</script>

<div on:click={onClick} class={active ? 'active' : ''}>
	<strong>{name}</strong>
	<p>{score}</p>
</div>

<style>
	div,
	p {
		color: var(--pure-white);
	}
	div {
		width: 100px;
		flex: auto;
		border: solid;
		border-width: 1px;
		border-color: black;
		background-color: var(--dark-color);
		margin: 0.5em;
		padding: 1em;
		text-align: center;
	}
	div.active {
		background-color: var(--primary-color);
	}
</style>
