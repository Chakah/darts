<script lang="ts">
	import { players, type Player } from '$lib/store';
	import PlayerScore from './PlayerScore.svelte';

	let activePlayerIndex = 0;
	let name = 'Player';

	let onClickPlayer = (playerId) => (activePlayerIndex = playerId);
	let onClickAddPlayer = () => {
		let newPlayer: Player = {
			name: name,
			score: 201
		};
		let updatedPlayers = [...$players, newPlayer];
		players.set(updatedPlayers);
	};

	let onClickAddRemoveActivePlayer = () => {
		let updatedPlayers = $players.filter((_, i) => i !== activePlayerIndex);
		players.set(updatedPlayers);
	};
	let onClickRenameActivePlayer = () => {
		let updatedPlayers = [...$players];
		updatedPlayers[activePlayerIndex].name = name;
		players.set(updatedPlayers);
	};
</script>

<div class="section">
	<div class="row">
		<input bind:value={name} />
		<button on:click={onClickAddPlayer}> Add</button>
		<button on:click={onClickRenameActivePlayer}> Rename</button>
		<button on:click={onClickAddRemoveActivePlayer}> Remove</button>
	</div>
	<div class="players">
		{#each $players as player, i}
			<PlayerScore
				{...player}
				handleClick={onClickPlayer}
				index={i}
				active={activePlayerIndex == i}
			/>
		{/each}
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
		margin-left: 0.5em;
	}
	button:hover {
		background-color: var(--tertiary-color);
	}
	.row {
		display: flex;
		justify-content: center;
	}
	.players {
		display: flex;
		flex-wrap: wrap;
		margin-top: 2em;
		margin-bottom: 2em;
	}
</style>
