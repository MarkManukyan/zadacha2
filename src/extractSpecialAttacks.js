<<<<<<< HEAD
function extractSpecialAttacks({ special }) {
  return special.map(({ id, name, icon, description = 'Описание недоступно' }) => ({
    id,
    name,
    description,
    icon
  }));
=======
function extractSpecialAttacks(character) {
    if (!character.special || !Array.isArray(character.special)) {
        return [];
    }

    return character.special.map((attack) => {
        const {
            id,
            name,
            icon,
            description = 'Описание недоступно'
        } = attack;

        return { id, name, icon, description };
    });
>>>>>>> 6f2a4354c02fe154b7bcef46f77b8a116254b8b3
}

module.exports = extractSpecialAttacks;
