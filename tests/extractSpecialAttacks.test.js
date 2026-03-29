const extractSpecialAttacks = require('../src/extractSpecialAttacks');

describe('extractSpecialAttacks', () => {
    test('извлекает все поля, включая description, когда оно есть', () => {
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
                    description: 'Двойной выстрел наносит двойной урон'
                },
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
                id: 8,
                name: 'Двойной выстрел',
                description: 'Двойной выстрел наносит двойной урон',
                icon: 'http://icon1'
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
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
    });
});
