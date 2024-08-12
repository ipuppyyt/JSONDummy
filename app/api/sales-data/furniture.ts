function generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateSalesData() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const salesData = months.map((month) => {
        return {
            month,
            livingroom: generateRandomNumber(50, 300),
            dining: generateRandomNumber(50, 300),
            bedroom: generateRandomNumber(50, 300)
        };
    });

    return salesData;
}

export const furniture = [
    {
        type: 'furniture',
        sales: generateSalesData()
    }
];