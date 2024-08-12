import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const productTypeParam = searchParams.get('type');

    if (!productTypeParam) {
        return NextResponse.json({ status: 400, message: 'Please provide a product type' }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        });
    }

    let salesdata;
    try {
        salesdata = await import(`./${productTypeParam}.ts`);
    } catch (e) {
        return NextResponse.json({ status: 404, message: 'Product type not found' }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        });
    }

    return NextResponse.json({ status: 200, salesdata: salesdata[productTypeParam] }, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    });
}