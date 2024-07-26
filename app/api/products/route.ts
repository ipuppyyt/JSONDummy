// app/api/products/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const productCountParam = searchParams.get('count');
    const productTypeParam = searchParams.get('type');
    const numberOfProducts = productCountParam ? parseInt(productCountParam, 10) : 10;

    const validProductCount = Math.max(1, numberOfProducts);

    if (!productTypeParam) {
        return NextResponse.json({ status: 400, message: 'Please provide a product type' }, {
            headers: {
                'Access-Control-Allow-Origin': '*', // Allow all origins
                'Content-Type': 'application/json'
            }
        });
    }

    let products;
    try {
        products = await import(`./${productTypeParam}.ts`);
    } catch (e) {
        return NextResponse.json({ status: 404, message: 'Product type not found' }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        });
    }

    return NextResponse.json({ status: 200, productCount: validProductCount, products: products[productTypeParam] }, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    });
}