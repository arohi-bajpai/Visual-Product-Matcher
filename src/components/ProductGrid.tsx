"use client";

import { Product } from "@/data/products";
import Image from "next/image";
import { Eye, ShoppingCart, Search } from "lucide-react";

interface ProductGridProps {
  products: (Product & { similarity: number })[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const getSimilarityColor = (similarity: number) => {
    if (similarity >= 0.8) return "text-green-600 bg-green-100";
    if (similarity >= 0.6) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  const getSimilarityLabel = (similarity: number) => {
    if (similarity >= 0.8) return "High Match";
    if (similarity >= 0.6) return "Good Match";
    return "Fair Match";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">
          Similar Products ({products.length} found)
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200"
          >
            {/* Product Image */}
            <div className="relative aspect-square">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover rounded-t-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Similarity Badge */}
              <div className="absolute top-3 left-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getSimilarityColor(
                    product.similarity
                  )}`}
                >
                  {Math.round(product.similarity * 100)}% • {getSimilarityLabel(product.similarity)}
                </span>
              </div>

              {/* Quick Actions */}
              <div className="absolute top-3 right-3 flex gap-1">
                <button className="bg-white/90 hover:bg-white rounded-full p-2 transition-colors">
                  <Eye className="h-4 w-4 text-gray-600" />
                </button>
                <button className="bg-white/90 hover:bg-white rounded-full p-2 transition-colors">
                  <ShoppingCart className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              {/* Brand and Category */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                  {product.brand}
                </span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              {/* Product Name */}
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {product.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-1 mb-3">
                {product.features.slice(0, 2).map((feature, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                  >
                    {feature}
                  </span>
                ))}
                {product.features.length > 2 && (
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    +{product.features.length - 2} more
                  </span>
                )}
              </div>

              {/* Price and Actions */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price.toLocaleString()}
                  </span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="h-16 w-16 mx-auto opacity-50" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No similar products found</h3>
          <p className="text-gray-600">Try uploading a different image or adjusting your filters.</p>
        </div>
      )}
    </div>
  );
}
