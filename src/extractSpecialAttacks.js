
function extractSpecialAttacks({ special }) {
    return special.map(({ id, name, icon, description = 'Описание недоступно' }) => ({
        id,
        name,
        description,
        icon
    }));
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
}

module.exports = extractSpecialAttacks;
