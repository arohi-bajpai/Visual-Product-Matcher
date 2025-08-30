"use client";

import { useState, useRef } from "react";
import { Upload, Link, X, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

interface ImageUploadProps {
  onImageUpload: (imageData: string) => void;
  uploadedImage: string | null;
  isLoading: boolean;
}

export default function ImageUpload({ onImageUpload, uploadedImage, isLoading }: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const [urlError, setUrlError] = useState("");
  const [activeTab, setActiveTab] = useState<"upload" | "url">("upload");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      alert("File size must be less than 10MB");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      onImageUpload(result);
    };
    reader.readAsDataURL(file);
  };

  const handleUrlSubmit = async () => {
    if (!urlInput.trim()) {
      setUrlError("Please enter a valid image URL");
      return;
    }

    setUrlError("");
    
    try {
      // Validate URL format
      new URL(urlInput);
      
      // Create a temporary image to validate the URL
      const img = document.createElement('img');
      img.onload = () => {
        onImageUpload(urlInput);
      };
      img.onerror = () => {
        setUrlError("Failed to load image from URL. Please check the URL and try again.");
      };
      img.src = urlInput;
    } catch {
      setUrlError("Please enter a valid URL");
    }
  };

  const clearImage = () => {
    setUrlInput("");
    setUrlError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-4">
      {/* Tab Navigation */}
      <div className="flex rounded-lg border border-gray-200 overflow-hidden">
        <button
          onClick={() => setActiveTab("upload")}
          className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "upload"
              ? "bg-blue-50 text-blue-700 border-r border-gray-200"
              : "bg-white text-gray-700 hover:bg-gray-50 border-r border-gray-200"
          }`}
        >
          <Upload className="h-4 w-4 inline mr-2" />
          Upload File
        </button>
        <button
          onClick={() => setActiveTab("url")}
          className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "url"
              ? "bg-blue-50 text-blue-700"
              : "bg-white text-gray-700 hover:bg-gray-50"
          }`}
        >
          <Link className="h-4 w-4 inline mr-2" />
          Image URL
        </button>
      </div>

      {/* Upload Content */}
      {activeTab === "upload" && (
        <div
          className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
            dragActive
              ? "border-blue-400 bg-blue-50"
              : uploadedImage
              ? "border-green-300 bg-green-50"
              : "border-gray-300 hover:border-gray-400"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            disabled={isLoading}
          />
          
          {!uploadedImage ? (
            <div className="text-center">
              <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 font-medium mb-2">
                {dragActive ? "Drop your image here" : "Drag & drop an image here"}
              </p>
              <p className="text-gray-500 text-sm mb-4">
                or click to browse (JPG, PNG, WebP • Max 10MB)
              </p>
              <button
                type="button"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
                onClick={() => fileInputRef.current?.click()}
                disabled={isLoading}
              >
                Select Image
              </button>
            </div>
          ) : (
            <div className="text-center">
              <div className="relative inline-block">
                <Image
                  src={uploadedImage}
                  alt="Uploaded image"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover border shadow-sm"
                />
                <button
                  onClick={clearImage}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="text-green-600 font-medium mt-3">✓ Image uploaded successfully</p>
            </div>
          )}
        </div>
      )}

      {/* URL Input */}
      {activeTab === "url" && (
        <div className="space-y-3">
          <div className="flex gap-2">
            <input
              type="url"
              value={urlInput}
              onChange={(e) => {
                setUrlInput(e.target.value);
                setUrlError("");
              }}
              placeholder="https://example.com/image.jpg"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={isLoading}
            />
            <button
              onClick={handleUrlSubmit}
              disabled={isLoading || !urlInput.trim()}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Load
            </button>
          </div>
          
          {urlError && (
            <p className="text-red-600 text-sm">{urlError}</p>
          )}

          {uploadedImage && urlInput && (
            <div className="text-center">
              <div className="relative inline-block">
                <Image
                  src={uploadedImage}
                  alt="Image from URL"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover border shadow-sm"
                />
                <button
                  onClick={clearImage}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="text-green-600 font-medium mt-3">✓ Image loaded successfully</p>
            </div>
          )}
        </div>
      )}

      {/* Upload Tips */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-2">💡 Tips for better results:</h4>
        <ul className="text-blue-800 text-sm space-y-1">
          <li>• Use clear, well-lit images</li>
          <li>• Focus on the main product</li>
          <li>• Avoid images with multiple items</li>
          <li>• Higher resolution images work better</li>
        </ul>
      </div>
    </div>
  );
}
