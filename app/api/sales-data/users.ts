
function generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateUsersInPeriod() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const users = months.map((month) => {
        return {
            month,
            users: generateRandomNumber(50, 700)
        };
    });

    return users;
}

export const users = [
    {
        type: 'users',
        sales: generateUsersInPeriod()
    }
];