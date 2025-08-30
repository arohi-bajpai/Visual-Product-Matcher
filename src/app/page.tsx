"use client";

import { useState } from "react";
import { Upload, Search, Loader2 } from "lucide-react";
import { Product, categories } from "@/data/products";
import ImageUpload from "@/components/ImageUpload";
import ProductGrid from "@/components/ProductGrid";
import FilterPanel from "@/components/FilterPanel";
import ErrorBoundary from "@/components/ErrorBoundary";
import { findSimilarProducts } from "@/lib/similarity";

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<(Product & { similarity: number })[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    category: "all",
    minSimilarity: 0,
    sortBy: "similarity"
  });

  const handleImageUpload = async (imageData: string) => {
    setIsLoading(true);
    setError(null);
    setUploadedImage(imageData);

    try {
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Find similar products (mock implementation)
      const similarProducts = await findSimilarProducts(imageData);
      setSearchResults(similarProducts);
    } catch {
      setError("Failed to find similar products. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const filteredResults = searchResults.filter(product => {
    const categoryMatch = filters.category === "all" || product.category === filters.category;
    const similarityMatch = product.similarity >= filters.minSimilarity;
    return categoryMatch && similarityMatch;
  });

  const sortedResults = [...filteredResults].sort((a, b) => {
    switch (filters.sortBy) {
      case "similarity":
        return b.similarity - a.similarity;
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return b.similarity - a.similarity;
    }
  });

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <Search className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Visual Product Matcher</h1>
          </div>
          <p className="text-gray-600 mt-1">Find visually similar products by uploading an image or pasting a URL</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Search Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-8">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload Image
              </h2>
              
              <ImageUpload 
                onImageUpload={handleImageUpload}
                uploadedImage={uploadedImage}
                isLoading={isLoading}
              />

              {searchResults.length > 0 && (
                <div className="mt-6">
                  <FilterPanel 
                    filters={filters}
                    onFiltersChange={setFilters}
                    categories={categories}
                    resultCount={sortedResults.length}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-3">
            {!uploadedImage && !isLoading && (
              <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
                <Upload className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Your Visual Search</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Upload an image or paste an image URL to find visually similar products from our database of 50+ items.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Electronics</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Fashion</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Home & Garden</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Sports & Fitness</span>
                </div>
              </div>
            )}

            {isLoading && (
              <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
                <Loader2 className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyzing Image</h3>
                <p className="text-gray-600">Finding visually similar products...</p>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <p className="text-red-600 font-medium">{error}</p>
                <button 
                  onClick={() => setError(null)}
                  className="mt-2 text-red-600 hover:text-red-800 underline text-sm"
                >
                  Dismiss
                </button>
              </div>
            )}

            {sortedResults.length > 0 && !isLoading && (
              <ProductGrid products={sortedResults} />
            )}

            {searchResults.length > 0 && sortedResults.length === 0 && !isLoading && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                <p className="text-yellow-800 font-medium">No products match your current filters</p>
                <p className="text-yellow-600 text-sm mt-1">Try adjusting your similarity threshold or category filter</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </ErrorBoundary>
  );
}
