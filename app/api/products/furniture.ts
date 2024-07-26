import { faker } from '@faker-js/faker';

const generateReviews = () => {
    const reviews = Array.from({ length: faker.number.int({ min: 3, max: 10 }) }, () => {
        return {
            id: faker.string.uuid(),
            user: faker.person.fullName(),
            rating: faker.number.float({ min: 0, max: 5, multipleOf: 1 }),
            review: faker.lorem.sentence(),
            date: faker.date.recent()
        }
    });
    return reviews;
}

function generateNumericUUIDNumber() {
    let d = new Date().getTime(); // Timestamp
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); // Add high-resolution time
    }

    let uuid = '';
    for (let i = 0; i < 16; i++) {
        const r = (d + Math.random() * 10) % 10 | 0; // Random number from 0 to 9
        d = Math.floor(d / 10); // Shift the timestamp
        uuid += r.toString(); // Append numeric representation
    }

    return parseInt(uuid, 10);
}

export const furniture = [
// Sofa Section
    // 1
    {
        id: generateNumericUUIDNumber(),
        name: 'Modern Sofa Set',
        description: 'Crafted from premium Sheesham wood, this elegant sofa set features plush cushions for maximum comfort and a classic design that enhances any living space. Its versatile placement makes it suitable for living rooms, bedrooms, and lounges, while sturdy construction ensures long-lasting use.',
        price: faker.number.float({ min: 10000, max: 700000, multipleOf: 2 }),
        thumbnail: 'https://m.media-amazon.com/images/I/51wvJ4LiuBL._SX522_.jpg',
        image: [
            'https://m.media-amazon.com/images/I/51wvJ4LiuBL._SX522_.jpg',
            'https://m.media-amazon.com/images/I/41CplDydu5L.jpg',
            'https://m.media-amazon.com/images/I/51X7MFAuhRL._SX522_.jpg'
        ],
        availability: faker.number.int({ min: 0, max: 1000 }),
        reviews: generateReviews(),
        category: ['Living Room'],
        subcategory: 'Sofa'
    },
    // 2
    {
        id: generateNumericUUIDNumber(),
        name: 'Urban Decor Foldable',
        description: 'sofa Cum bed comfortable our fits body curve perfectly and included pillow can provide better support for your low back, so you won’t feel tired even seating or laying on for a long-time.',
        price: faker.number.float({ min: 10000, max: 700000, multipleOf: 2 }),
        thumbnail: 'https://m.media-amazon.com/images/I/713YUJnxsLL._SL1500_.jpg',
        image: [
            'https://m.media-amazon.com/images/I/713YUJnxsLL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61mfGXmJ+LL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61zQ8+XrYtL._SL1500_.jpg'
        ],
        availability: faker.number.int({ min: 0, max: 1000 }),
        reviews: generateReviews(),
        category: ['Living Room', 'Bedroom'],
        subcategory: 'Sofa' 
    },
    // 3
    {
        id: generateNumericUUIDNumber(),
        name: 'Berger Fabric 5 to 6 Person Sofa',
        description: 'The sofa features generously padded seats and backrests, making it comfortable for extended periods of sitting.',
        price: faker.number.float({ min: 10000, max: 700000, multipleOf: 2 }),
        thumbnail: 'https://m.media-amazon.com/images/I/815G5IfqQjL._SL1500_.jpg',
        image: [
            'https://m.media-amazon.com/images/I/815G5IfqQjL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61K77WDIsOL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61TR9bwdqWL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71WNjW6O7jL._SL1500_.jpg'
        ],
        availability: faker.number.int({ min: 0, max: 1000 }),
        reviews: generateReviews(),
        category: ['Living Room'],
        subcategory: 'Sofa'
    },
    // 4
    {
        id: generateNumericUUIDNumber(),
        name: 'Orlando Leatherette 3 Seater Sofa',
        description: 'The sofa has a modern and elegant design that can complement various home décor styles.',
        price: faker.number.float({ min: 10000, max: 700000, multipleOf: 2 }),
        thumbnail: 'https://m.media-amazon.com/images/I/81QAD5j-UEL._SL1500_.jpg',
        image: [
            'https://m.media-amazon.com/images/I/81QAD5j-UEL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/21OFJC-b7pL.jpg',
            'https://m.media-amazon.com/images/I/21pz78LltkL.jpg',
            'https://m.media-amazon.com/images/I/31Tq5t2k0nL.jpg',
            'https://m.media-amazon.com/images/I/21YGtjd3aaL.jpg'
        ],
        availability: faker.number.int({ min: 0, max: 1000 }),
        reviews: generateReviews(),
        category: ['Living Room'],
        subcategory: 'Sofa'
    },
    // 5
    {
        id: generateNumericUUIDNumber(),
        name: 'Topko Three Seater Sofa Leather',
        description: 'The sofa has a modern and elegant design that can complement various home décor styles.',
        price: faker.number.float({ min: 10000, max: 700000, multipleOf: 2 }),
        thumbnail: 'https://m.media-amazon.com/images/I/41GVrvVT4yL._SL1022_.jpg',
        image: [
            'https://m.media-amazon.com/images/I/41GVrvVT4yL._SL1022_.jpg',
            'https://m.media-amazon.com/images/I/41R+4CwpmjL.jpg',
            'https://m.media-amazon.com/images/I/41sas2l7nQL._SL1059_.jpg'
        ],
        availability: faker.number.int({ min: 0, max: 1000 }),
        reviews: generateReviews(),
        category: ['Living Room', 'Bedroom'],
        subcategory: 'Sofa'
    },
    // 6
    {
        id: generateNumericUUIDNumber(),
        name: 'India Martin L Shape 4 Seater',
        description: 'The sofa has a modern and elegant design that can complement various home décor styles.',
        price: faker.number.float({ min: 10000, max: 700000, multipleOf: 2 }),
        thumbnail: 'https://m.media-amazon.com/images/I/81ZTuL+tfTL._SL1500_.jpg',
        image: [
            'https://m.media-amazon.com/images/I/81ZTuL+tfTL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/51GxCTvqv5L._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61pnHPhbJ7L._SL1500_.jpg'
        ],
        availability: faker.number.int({ min: 0, max: 1000 }),
        reviews: generateReviews(),
        category: ['Living Room', 'Bedroom'],
        subcategory: 'Sofa'
    },

// Bed Section
    {
        id: generateNumericUUIDNumber(),
        name: 'Harper Wooden Double Size',
        description: 'Queen size bed features a spacious box storage for storing clothes, toys, manchester etc, To preserve, we advise you to simply use a dust remover.',
        price: faker.number.float({ min: 30000, max: 700000, multipleOf: 2 }),
        thumbnail: 'https://m.media-amazon.com/images/I/81f6ygvo22L._SL1500_.jpg',
        image: [
            'https://m.media-amazon.com/images/I/81f6ygvo22L._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/81xFKPRhOQL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/61g7xjIqlTL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71j9FBWeOFL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/711QI6AdacL._SL1500_.jpg'
        ],
        availability: faker.number.int({ min: 0, max: 1000 }),
        reviews: generateReviews(),
        category: ['Bedroom'],
        subcategory: 'Bed'
    },
];