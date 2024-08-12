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
    let d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now();
    }

    let uuid = '';
    for (let i = 0; i < 16; i++) {
        const r = (d + Math.random() * 10) % 10 | 0;
        d = Math.floor(d / 10);
        uuid += r.toString();
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
    //8
    {
        id: generateNumericUUIDNumber(),
        name: 'VK Furniture Solid Sheesham',
        description: 'The VK Furniture Solid Sheesham Wood Four Seater Dining Table set is designed to add elegance and functionality to any living space. This dining set includes a beautifully crafted wooden table and four cushioned chairs, making it a perfect choice for homes, offices, and restaurants.',
        price: faker.number.float({ min: 30000, max: 700000, multipleOf: 2 }),
        thumbnail: 'https://m.media-amazon.com/images/I/71QFx-Hs4nL._SX425_.jpg',
        image: [
            'https://m.media-amazon.com/images/I/71QFx-Hs4nL._SX425_.jpg',
            'https://m.media-amazon.com/images/I/61BW8Blwu9L._SX425_.jpg',
            'https://m.media-amazon.com/images/I/51rOmfyj8GL._SX425_.jpg',
            'https://m.media-amazon.com/images/I/51GQEjFJ08L._SX425_.jpg',
            'https://m.media-amazon.com/images/I/611Ri2WiVQL._SX425_.jpg'
        ],
        availability: faker.number.int({ min: 0, max: 1000 }),
        reviews: generateReviews(),
        category: ['Dining'],
        subcategory: 'Table'
    },
    //9
    {
        id: generateNumericUUIDNumber(),
        name: 'LIZZAWOOD®  Wood 4 Seater Dining Table with 4 Chair ',
        description: '4 Seater Dining Room Set | Hotel Restaurant Dining Set | Dining Set (4 Seater Urben, Honey)This dining set is designed to add a touch of elegance to your dining room while providing a sturdy and durable surface for your meals.',
        price: faker.number.float({ min: 30000, max: 700000, multipleOf: 2 }),
        thumbnail: 'https://m.media-amazon.com/images/I/61fEKEqkROL._SX425_.jpg',
        image: [
            'https://m.media-amazon.com/images/I/61fEKEqkROL._SX425_.jpg',
            'hhttps://m.media-amazon.com/images/I/51puuMf9K4L._SX425_.jpg',
            'https://m.media-amazon.com/images/I/51RyTGZWetL._SX425_.jpg',
            'https://m.media-amazon.com/images/I/618ExuBIQmL._SX425_.jpg',
            'https://m.media-amazon.com/images/I/71YyfuwxQ1L._SX425_.jpg'
        ],
        availability: faker.number.int({ min: 0, max: 1000 }),
        reviews: generateReviews(),
        category: ['Dining'],
        subcategory: 'Table'
    },
    //10
    {
        id: generateNumericUUIDNumber(),
        name: 'Credenza Sheesham Wood Dining Chairs ',
        description: 'This Dining Chair is made up of Solid Sheesham wood and the ingenious design of the Chairs Home Set will refresh your interiors with its plush look & elegant finish and complement any existing decor.',
        price: faker.number.float({ min: 30000, max: 700000, multipleOf: 2 }),
        thumbnail: 'https://m.media-amazon.com/images/I/61fEKEqkROL._SX425_.jpg',
        image: [
            'https://m.media-amazon.com/images/I/51ZfTjiCXEL._SX425_.jpg',
            'https://m.media-amazon.com/images/I/51kgvBenpNL._SX425_.jpg',
            'https://m.media-amazon.com/images/I/413KWpHYsOL._SX425_.jpg',
            'https://m.media-amazon.com/images/I/51qBX7yXpWL._SX425_.jpg',
            'https://m.media-amazon.com/images/I/41-rNqdoT3L._SX425_.jpg'
        ],
        availability: faker.number.int({ min: 0, max: 1000 }),
        reviews: generateReviews(),
        category: ['Dining'],
        subcategory: 'Chair'
    },
    //11
    {
        id: generateNumericUUIDNumber(),
        name: 'Wiprowood Shri Karni Handicraft Wooden Dining Chairs Only ',
        description: 'We are making furniture since last 20 years . Our furniture made with pure sheesham wooden.',
        price: faker.number.float({ min: 30000, max: 700000, multipleOf: 2 }),
        thumbnail: 'https://m.media-amazon.com/images/I/61G6ROGOY2L._SX425_.jpg',
        image: [
            'https://m.media-amazon.com/images/I/61G6ROGOY2L._SX425_.jpg',
            'https://m.media-amazon.com/images/I/51aUwd151sL._SX425_.jpg',
            'https://m.media-amazon.com/images/I/5149L4c9bLL._SY679_.jpg',
            'https://m.media-amazon.com/images/I/61bl4Ex1uPL._SX425_.jpg',
            'https://m.media-amazon.com/images/I/61pUhyeLUxL._SX425_.jpg'
        ],
        availability: faker.number.int({ min: 0, max: 1000 }),
        reviews: generateReviews(),
        category: ['Dining'],
        subcategory: 'Chair'
    },
    //12
    {
        id: generateNumericUUIDNumber(),
        name: 'Wood Kitchen Crockery Cabinet',
        description: 'Each Piece is constructed using Mortise and Tenon Joinery in the hardwood frames.Wood Planks are hand-selected,Hand planed and sanded.',
        price: faker.number.float({ min: 30000, max: 700000, multipleOf: 2 }),
        thumbnail: 'https://m.media-amazon.com/images/I/71+QfQhEzNL._SX425_.jpg',
        image: [
            'https://m.media-amazon.com/images/I/71+QfQhEzNL._SX425_.jpg',
            'https://m.media-amazon.com/images/I/51nmK6lXEVL._SX425_.jpg',
            'https://m.media-amazon.com/images/I/51xyZudWhBL._SX425_.jpg',
        ],
        availability: faker.number.int({ min: 0, max: 1000 }),
        reviews: generateReviews(),
        category: ['Dining'],
        subcategory: 'Cabinet'
    },
    
    //13
    {
        id: generateNumericUUIDNumber(),
        name: 'Low Height Queen Size Bed without Storage',
        description: 'Driftingwood is a well known Indian brand that has been working for the most recent 8 Years in India and In terms of quality.',
        price: faker.number.float({ min: 30000, max: 700000, multipleOf: 2 }),
        thumbnail: 'https://m.media-amazon.com/images/I/71by5YR-MwL._SX425_.jpg',
        image: [
            'https://m.media-amazon.com/images/I/71by5YR-MwL._SX425_.jpg',
            'https://m.media-amazon.com/images/I/61ZlyQMGUkL._SX425_.jpg',
            'https://m.media-amazon.com/images/I/71PItBXTJbL._SX425_.jpg',
            'https://m.media-amazon.com/images/I/51SXLIVlnML._SX425_.jpg',
            'https://m.media-amazon.com/images/I/51pHB9HB5zL._SX425_.jpg'
        ],
        availability: faker.number.int({ min: 0, max: 1000 }),
        reviews: generateReviews(),
        category: ['Bedroom'],
        subcategory: 'Bed'
    },
    //14
    {
        id: generateNumericUUIDNumber(),
        name: 'Nightstands End Side Table',
        description: 'Drawers of Storage Keep Things Neat in the Bedroom, so you can rest easy. This side table gives ample storage space for your favorite books.',
        price: faker.number.float({ min: 30000, max: 700000, multipleOf: 2 }),
        thumbnail: 'https://m.media-amazon.com/images/I/61hAjiNmVdL._SX425_.jpg',
        image: [
            'https://m.media-amazon.com/images/I/61hAjiNmVdL._SX425_.jpg',
            'https://m.media-amazon.com/images/I/51zTyha0H8L._SX425_.jpg',
            'https://m.media-amazon.com/images/I/511UzA+M6KL._SX425_.jpg'
        ],
        availability: faker.number.int({ min: 0, max: 1000 }),
        reviews: generateReviews(),
        category: ['Bedroom'],
        subcategory: 'Nightstand'
    },
    //15
    {
        id: generateNumericUUIDNumber(),
        name: 'DeckUp Plank Alvo 2-Door Engineered Wood Shoe Rack',
        description: 'We are making furniture since last 20 years . Our furniture made with pure sheesham wooden.',
        price: faker.number.float({ min: 30000, max: 700000, multipleOf: 2 }),
        thumbnail: 'https://m.media-amazon.com/images/I/81oZYAQIBiL._SY679_.jpg',
        image: [
            'https://m.media-amazon.com/images/I/81oZYAQIBiL._SY679_.jpg',
            'https://m.media-amazon.com/images/I/71huVM28bGL._SY606_.jpg',
            'https://m.media-amazon.com/images/I/61NQYBBu01L._SY606_.jpg',
            'https://m.media-amazon.com/images/I/71+EKPzO9lL._SY606_.jpg',
            'https://m.media-amazon.com/images/I/71xX6c7DFpL._SY741_.jpg'
        ],
        availability: faker.number.int({ min: 0, max: 1000 }),
        reviews: generateReviews(),
        category: ['Living Room','Bedroom'],
        subcategory: 'Cabinet'
    },
    //16
    {
        id: generateNumericUUIDNumber(),
        name: 'King Size Weave Niwar Bed',
        description: ' Lignum Arts is an Indian brand from Rajasthan that has been working for the most recent 10 Years in India and our Item quality is amazing we have confidence in quality work and craftsmanship.',
        price: faker.number.float({ min: 30000, max: 700000, multipleOf: 2 }),
        thumbnail: 'https://m.media-amazon.com/images/I/81ccBpqAO1L._SX425_.jpg',
        image: [
            'https://m.media-amazon.com/images/I/81ccBpqAO1L._SX425_.jpg',
            'https://m.media-amazon.com/images/I/814Hyqv1QlL._SX425_.jpg',
            'https://m.media-amazon.com/images/I/81Bdm424sTL._SX425_.jpg',
            'https://m.media-amazon.com/images/I/417Yp3becyS._SX425_.jpg',
            'https://m.media-amazon.com/images/I/71EO+pkcwyL._SX425_.jpg'
        ],
        availability: faker.number.int({ min: 0, max: 1000 }),
        reviews: generateReviews(),
        category: ['Bedroom'],
        subcategory: 'Bed'
    },
    //17
    {
        id: generateNumericUUIDNumber(),
        name: 'Nightstands End Side Table',
        description: 'Drawers of Storage Keep Things Neat in the Bedroom, so you can rest easy. This side table gives ample storage space for your favorite books.',
        price: faker.number.float({ min: 30000, max: 700000, multipleOf: 2 }),
        thumbnail: 'https://m.media-amazon.com/images/I/71TR4ruV02L._SX425_.jpg',
        image: [
            'https://m.media-amazon.com/images/I/71TR4ruV02L._SX425_.jpg',
            'https://m.media-amazon.com/images/I/51k15mkJLoL._SY679_.jpg',
            'https://m.media-amazon.com/images/I/61GpAnQEefL._SX425_.jpg',
            'https://m.media-amazon.com/images/I/61UpakYSZeL._SX425_.jpg'
        ],
        availability: faker.number.int({ min: 0, max: 1000 }),
        reviews: generateReviews(),
        category: ['Bedroom'],
        subcategory: 'Nightstand'
    },
];