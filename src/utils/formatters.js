export const keyNames = (key) => {
  // Stats
  if (key === 'hp') {
    return 'HP';
  } if (key === 'special-attack') {
    return 'Sp. Atk';
  } if (key === 'special-defense') {
    return 'Sp. Def';
  }
  return key;
};
