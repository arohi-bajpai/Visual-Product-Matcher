"use client";

import { Filter, RotateCcw } from "lucide-react";

interface Filters {
  category: string;
  minSimilarity: number;
  sortBy: string;
}

interface FilterPanelProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  categories: string[];
  resultCount: number;
}

export default function FilterPanel({ 
  filters, 
  onFiltersChange, 
  categories, 
  resultCount 
}: FilterPanelProps) {
  const updateFilter = (key: keyof Filters, value: string | number) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const resetFilters = () => {
    onFiltersChange({
      category: "all",
      minSimilarity: 0,
      sortBy: "similarity"
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </h3>
        <button
          onClick={resetFilters}
          className="text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1"
        >
          <RotateCcw className="h-3 w-3" />
          Reset
        </button>
      </div>

      <div className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-md">
        Showing {resultCount} results
      </div>

      {/* Category Filter */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          value={filters.category}
          onChange={(e) => updateFilter("category", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Similarity Threshold */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Min Similarity: {Math.round(filters.minSimilarity * 100)}%
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={filters.minSimilarity}
          onChange={(e) => updateFilter("minSimilarity", parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
      </div>

      {/* Sort Options */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Sort By
        </label>
        <select
          value={filters.sortBy}
          onChange={(e) => updateFilter("sortBy", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
        >
          <option value="similarity">Similarity Score</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name (A-Z)</option>
        </select>
      </div>

      {/* Quick Filter Buttons */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Quick Filters
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => updateFilter("minSimilarity", 0.8)}
            className={`text-xs px-3 py-1 rounded-full transition-colors ${
              filters.minSimilarity === 0.8
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            High Match (80%+)
          </button>
          <button
            onClick={() => updateFilter("minSimilarity", 0.6)}
            className={`text-xs px-3 py-1 rounded-full transition-colors ${
              filters.minSimilarity === 0.6
                ? "bg-yellow-100 text-yellow-700 border border-yellow-300"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Good Match (60%+)
          </button>
        </div>
      </div>

      {/* Category Quick Filters */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Popular Categories
        </label>
        <div className="flex flex-wrap gap-2">
          {["smartphones", "laptops", "sneakers", "headphones"].map((category) => (
            <button
              key={category}
              onClick={() => updateFilter("category", category)}
              className={`text-xs px-3 py-1 rounded-full transition-colors ${
                filters.category === category
                  ? "bg-blue-100 text-blue-700 border border-blue-300"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
