import { writable } from 'svelte/store';

export interface Player {
	name: string;
	score: number;
}

export const players = writable<Player[]>([]);
