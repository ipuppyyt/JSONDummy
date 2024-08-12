import { NextRequest, NextResponse } from 'next/server';
import { faker } from '@faker-js/faker';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const userCountParam = searchParams.get('count');
    const numberOfUsers = userCountParam ? parseInt(userCountParam, 10) : 10;
    const validUserCount = Math.max(1, numberOfUsers);

    const users = Array.from({ length: validUserCount }, () => {
        const postCount = faker.number.int({ min: 0, max: 100 });

        return {
            name: faker.person.fullName(),
            username: faker.internet.userName().toLowerCase(),
            followers: faker.number.int({ min: 0, max: 1000000 }),
            following: faker.number.int({ min: 0, max: 1000000 }),
            profilePic: faker.image.avatar(),
            emailId: faker.internet.email().toLowerCase(),
            postCount: postCount,
            images: Array.from({ length: postCount }, () => faker.image.url()),
        };
    });

    return NextResponse.json({ status: 200, userCount: validUserCount, users }, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    });
}