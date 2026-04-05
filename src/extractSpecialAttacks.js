function extractSpecialAttacks(character) {
  // Проверяем, существует ли special и является ли массивом
  if (!character.special || !Array.isArray(character.special)) {
    return [];
  }

  return character.special.map(({ id, name, icon, description = 'Описание недоступно' }) => ({
    id,
    name,
    description,
    icon,
  }));
}

module.exports = extractSpecialAttacks;
