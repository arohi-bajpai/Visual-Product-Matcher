import { NextRequest, NextResponse } from 'next/server';
import { findSimilarProducts } from '@/lib/similarity';

export async function POST(request: NextRequest) {
  try {
    const { imageData } = await request.json();

    if (!imageData) {
      return NextResponse.json(
        { error: 'Image data is required' },
        { status: 400 }
      );
    }

    // Find similar products
    const similarProducts = await findSimilarProducts(imageData);

    return NextResponse.json({
      success: true,
      results: similarProducts,
      total: similarProducts.length
    });
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json(
      { error: 'Failed to process image search' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Visual Product Matcher API',
    version: '1.0.0',
    endpoints: {
      search: 'POST /api/search'
    }
  });
}
