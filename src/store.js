import { derived, writable } from 'svelte/store';

export const ingredient = writable("");

export const derivedIngredient = derived(
  ingredient,
  $ingredient => `${$ingredient}`
);

export const carbs = writable("");

export const derivedCarbs = derived(
  carbs,
  $carbs => `${$carbs}`
);

export const fats = writable("");

export const derivedFats = derived(
  fats,
  $fats => `${$fats}`
);

export const proteins = writable("");

export const derivedProteins = derived(
  proteins,
  $proteins => `${$proteins}`
);

export const kcals = writable("");

export const derivedKcals = derived(
  kcals,
  $kcals => `${$kcals}`
);