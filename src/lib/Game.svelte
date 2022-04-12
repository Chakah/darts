<script lang="ts">
	import { players } from '$lib/store';
	import PlayerScore from '$lib/PlayerScore.svelte';

	let activePlayerIndex = 0;

	let lastScore = 0;
	let lastThrows = [];

	let sumLastThrows = () => lastThrows.reduce((acc, elem) => acc + elem, 0);
	$: currentSum = sumLastThrows();

	let updateScoreOfActivePlayer = () => {
		let updatedPlayers = [...$players];
		let activePlayer = updatedPlayers[activePlayerIndex];
		let score = sumLastThrows();
		activePlayer.score = activePlayer.score - score;
		lastScore = score;
		players.set(updatedPlayers);
	};

	let setNextPlayer = () => {
		if (activePlayerIndex == $players.length - 1) {
			activePlayerIndex = 0;
		} else {
			activePlayerIndex = activePlayerIndex + 1;
		}
	};

	let onClickPoint = (point) => {
		var pointValue = currentDuplicator * point;
		lastThrows = [...lastThrows, pointValue];
		currentDuplicator = Duplicator.NONE;
		if (lastThrows.length == 3) {
			updateScoreOfActivePlayer();
			setNextPlayer();
			lastThrows = [];
		}
	};

	enum Duplicator {
		'NONE' = 1,
		'DOUBLE' = 2,
		'TRIPLE' = 3
	}
	let currentDuplicator: Duplicator = Duplicator.NONE;

	let onClickDuplicator = (duplicator: Duplicator) => {
		if (duplicator == currentDuplicator) {
			currentDuplicator = Duplicator.NONE;
		} else {
			currentDuplicator = duplicator;
		}
	};
	let onClickBack = () => {
		lastThrows = lastThrows.slice(0, -1);
	};

	let points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 50, 0];
</script>

<div class="section">
	<div class="players">
		{#each $players as player, i}
			<PlayerScore {...player} handleClick={() => {}} index={i} active={activePlayerIndex == i} />
		{/each}
	</div>
	<div class="throws">
		<div class={lastThrows.length == 0 ? 'highlight throw' : 'throw'}>{lastThrows[0] || '-'}</div>
		<div class={lastThrows.length == 1 ? 'highlight throw' : 'throw'}>{lastThrows[1] || '-'}</div>
		<div class={lastThrows.length == 2 ? 'highlight throw' : 'throw'}>{lastThrows[2] || '-'}</div>
	</div>
	<div class="sum">= {currentSum} ({lastScore})</div>
	<div class="numbers">
		{#each points as point}
			<button on:click={() => onClickPoint(point)}>{point}</button>
		{/each}
		<button
			class={currentDuplicator == Duplicator.DOUBLE ? 'highlight span' : 'span'}
			on:click={() => onClickDuplicator(Duplicator.DOUBLE)}>Double</button
		>
		<button
			class={currentDuplicator == Duplicator.TRIPLE ? 'highlight span' : 'span'}
			on:click={() => onClickDuplicator(Duplicator.TRIPLE)}>Triple</button
		>
		<button class="span" on:click={onClickBack}>Back</button>
	</div>
</div>

<style>
	.section {
		width: 100%;
	}
	button {
		border: 0.05em solid var(--dark-color);
		background-color: white;
		text-align: center;
		text-decoration: none;
		padding: 0.5em 0.5em;
		width: 5em;
		margin: 0.5em 0.5em;
	}
	button:hover {
		background-color: var(--tertiary-color);
	}
	.highlight {
		color: white;
		background-color: var(--primary-color);
	}
	.highlight:hover {
		background-color: var(--secondary-color);
	}
	.span {
		grid-column-start: span 2;
		width: 11.2em;
	}
	.throws {
		display: flex;
		justify-content: center;
	}
	.throw {
		width: 2em;
		flex: auto;
		border: solid;
		border-width: 1px;
		border-color: black;
		border-radius: 5em;
		margin: 0.5em;
		padding: 1em;
		text-align: center;
	}
	.sum {
		margin: 0.5em;
		padding: 1em;
		flex: auto;
		border: solid;
		border-width: 1px;
		border-color: black;
		border-radius: 5em;
		display: flex;
		justify-content: center;
		border-radius: 0em;
		font-weight: 900;
	}

	.players {
		display: flex;
		flex-wrap: wrap;
		margin-top: 2em;
		margin-bottom: 2em;
	}
	.numbers {
		grid-template-columns: repeat(10, 10%);
		display: grid;
	}
</style>
