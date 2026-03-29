const extractSpecialAttacks = require('../src/extractSpecialAttacks');

describe('extractSpecialAttacks', () => {
<<<<<<< HEAD
    test('извлекает все поля, включая description, когда оно есть', () => {
=======
    test('should extract special attacks with default description', () => {
>>>>>>> 6f2a4354c02fe154b7bcef46f77b8a116254b8b3
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
<<<<<<< HEAD
                    icon: 'http://icon1',
                    description: 'Двойной выстрел наносит двойной урон'
                }
            ]
        };

        const result = extractSpecialAttacks(character);

        expect(result).toEqual([
            {
                id: 8,
                name: 'Двойной выстрел',
                description: 'Двойной выстрел наносит двойной урон',
                icon: 'http://icon1'
            }
        ]);
    });

    test('подставляет "Описание недоступно", если description отсутствует', () => {
        const character = {
            name: 'Лучник',
            type: 'Bowman',
            special: [
                {
                    id: 9,
                    name: 'Нокаутирующий удар',
                    icon: 'http://icon2'
                }
            ]
        };

        const result = extractSpecialAttacks(character);

        expect(result).toEqual([
            {
                id: 9,
                name: 'Нокаутирующий удар',
                description: 'Описание недоступно',
                icon: 'http://icon2'
            }
        ]);
    });

    test('обрабатывает несколько атак: с description и без', () => {
        const character = {
            name: 'Лучник',
            type: 'Bowman',
            special: [
                {
                    id: 8,
                    name: 'Двойной выстрел',
                    icon: 'http://icon1',
=======
                    icon: 'http://...',
>>>>>>> 6f2a4354c02fe154b7bcef46f77b8a116254b8b3
                    description: 'Двойной выстрел наносит двойной урон'
                },
                {
                    id: 9,
                    name: 'Нокаутирующий удар',
<<<<<<< HEAD
                    icon: 'http://icon2'
=======
                    icon: 'http://...'
>>>>>>> 6f2a4354c02fe154b7bcef46f77b8a116254b8b3
                }
            ]
        };

<<<<<<< HEAD
        const result = extractSpecialAttacks(character);

        expect(result).toEqual([
            {
                id: 8,
                name: 'Двойной выстрел',
                description: 'Двойной выстрел наносит двойной урон',
                icon: 'http://icon1'
=======
        const expected = [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон'
>>>>>>> 6f2a4354c02fe154b7bcef46f77b8a116254b8b3
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
<<<<<<< HEAD
                description: 'Описание недоступно',
                icon: 'http://icon2'
            }
        ]);
    });

    test('возвращает пустой массив, если special пустой', () => {
        const character = {
            name: 'Лучник',
            type: 'Bowman',
            special: []
        };

        const result = extractSpecialAttacks(character);

        expect(result).toEqual([]);
    });

    test('выбрасывает ошибку, если special отсутствует в объекте', () => {
        const character = {
            name: 'Маг',
            type: 'Wizard'
        };

        expect(() => extractSpecialAttacks(character)).toThrow();
=======
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
>>>>>>> 6f2a4354c02fe154b7bcef46f77b8a116254b8b3
    });
});
