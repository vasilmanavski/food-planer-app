import { derived, writable } from 'svelte/store';

export const ingredient = writable("");

export const derivedIngredient = derived(
  ingredient,
  $ingredient => `${$ingredient}`
);