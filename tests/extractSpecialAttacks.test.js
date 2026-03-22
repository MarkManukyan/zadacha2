const extractSpecialAttacks = require('../src/extractSpecialAttacks');

describe('extractSpecialAttacks', () => {
    test('should extract special attacks with default description', () => {
        const character = {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
            special: [
                {
                    id: 8,
                    name: 'Двойной выстрел',
                    icon: 'http://...',
                    description: 'Двойной выстрел наносит двойной урон'
                },
                {
                    id: 9,
                    name: 'Нокаутирующий удар',
                    icon: 'http://...'
                }
            ]
        };

        const expected = [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон'
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...',
                description: 'Описание недоступно'
            }
        ];

        expect(extractSpecialAttacks(character)).toEqual(expected);
    });

    test('should handle empty special array', () => {
        const character = { special: [] };
        expect(extractSpecialAttacks(character)).toEqual([]);
    });

    test('should return empty array if special is missing', () => {
        const character = {};
        expect(extractSpecialAttacks(character)).toEqual([]);
    });

    test('should handle special with all descriptions', () => {
        const character = {
            special: [
                { id: 1, name: 'Атака 1', icon: 'icon1', description: 'Описание 1' },
                { id: 2, name: 'Атака 2', icon: 'icon2', description: 'Описание 2' }
            ]
        };
        const expected = [
            { id: 1, name: 'Атака 1', icon: 'icon1', description: 'Описание 1' },
            { id: 2, name: 'Атака 2', icon: 'icon2', description: 'Описание 2' }
        ];
        expect(extractSpecialAttacks(character)).toEqual(expected);
    });
});
