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
}

module.exports = extractSpecialAttacks;
