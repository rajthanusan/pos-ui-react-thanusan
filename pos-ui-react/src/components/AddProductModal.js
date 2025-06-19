"use client";

import { useState } from "react";
import { FaUpload, FaUndo } from "react-icons/fa";

const AddProductModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    category: "",
    productName: "",
    description: "",
    reorderLevel: "",
    alertDays: "",
    productCode: "",
    quantity: "",
    unitScale: "kg",
    location: "",
    rackName: "",
    rackColumn: "",
    rackRow: "",
  });

  const handleReset = () => {
    setFormData({
      category: "",
      productName: "",
      description: "",
      reorderLevel: "",
      alertDays: "",
      productCode: "",
      quantity: "",
      unitScale: "kg",
      location: "",
      rackName: "",
      rackColumn: "",
      rackRow: "",
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div
        className="bg-white rounded-lg w-full max-w-4xl border-2 border-green-400 shadow-xl flex flex-col"
        style={{ maxHeight: "90vh" }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 border-b border-gray-200 bg-white">
          <h2 className="text-lg font-semibold text-gray-800">
            Add New Product
          </h2>
          <button
            className="bg-gradient-to-r from-customOrange-400 to-customOrange-500
             hover:from-customOrange-500 hover:to-customOrange-400
             text-white text-xs px-3 py-1.5 rounded flex items-center gap-1.5
             font-medium mt-2 sm:mt-0"
          >
            Scan Barcode
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-3 space-y-2 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Select category"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                placeholder="Enter product name"
                value={formData.productName}
                onChange={(e) =>
                  setFormData({ ...formData, productName: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Descriptions
              </label>
              <input
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                placeholder="Enter description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Re Order Level(Stock) <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Stock level"
                  value={formData.reorderLevel}
                  onChange={(e) =>
                    setFormData({ ...formData, reorderLevel: e.target.value })
                  }
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expire Alert Days<span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Alert days"
                  value={formData.alertDays}
                  onChange={(e) =>
                    setFormData({ ...formData, alertDays: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
            {["GST", "HST", "VAT", "Tax"].map((tax) => (
              <label
                key={tax}
                className="flex items-center gap-2 text-sm font-medium text-gray-700"
              >
                <div className="relative flex-shrink-0">
                  <input type="checkbox" defaultChecked className="sr-only" />
                  <div className="w-4 h-4 bg-green-500 border-2 border-green-500 rounded flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                {tax}
              </label>
            ))}
          </div>

          <div className="border border-gray-300 rounded-lg p-3">
            <div className="space-y-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div className="flex items-center space-x-3">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Image upload
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 bg-gray-50 hover:bg-gray-100 cursor-pointer h-10 w-48 flex items-center space-x-2">
                      <FaUpload className="text-gray-400 text-lg" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Use Scale
                    </label>
                    <div className="flex items-center">
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <div className="relative flex-shrink-0">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="sr-only"
                          />
                          <div className="w-4 h-4 bg-green-500 border-2 border-green-500 rounded flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                    placeholder="Enter code"
                    value={formData.productCode}
                    onChange={(e) =>
                      setFormData({ ...formData, productCode: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantity <span className="text-red-500">*</span>
                    </label>
                    <input
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                      placeholder="Qty"
                      value={formData.quantity}
                      onChange={(e) =>
                        setFormData({ ...formData, quantity: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Unit <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                        placeholder="kg"
                        value={formData.unitScale}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            unitScale: e.target.value,
                          })
                        }
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Location Section */}
            <div className="mt-2 border border-gray-300 rounded-lg p-2">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Product Location
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {[
                  { key: "location", label: "Location" },
                  { key: "rackName", label: "Rack Name" },
                  { key: "rackColumn", label: "Rack Column" },
                  { key: "rackRow", label: "Rack Row" },
                ].map(({ key, label }) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {label}{" "}
                      {key !== "location" && (
                        <span className="text-red-500">*</span>
                      )}
                    </label>
                    <div className="relative">
                      <input
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                        placeholder={label}
                        value={formData[key]}
                        onChange={(e) =>
                          setFormData({ ...formData, [key]: e.target.value })
                        }
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Footer Buttons */}
        <div className="p-3 border-t border-gray-200 bg-white">
          <div className="flex justify-between items-center">
            <div className="w-7 h-7  flex items-center justify-center flex-shrink-0"></div>

            <div className="flex gap-3">
              <button
                onClick={handleReset}
                className="text-gray-600 px-4 py-2 rounded hover:bg-gray-50 flex items-center justify-center gap-2"
              >
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <FaUndo className="text-white text-xs" />
                </div>
              </button>

              <button
                onClick={onClose}
                className="w-32 border border-red-500 text-red-500 px-3 py-1.5 rounded text-sm font-medium hover:bg-red-50"
              >
                Cancel
              </button>

              <button className="w-32 bg-gradient-to-r from-emerald-400 to-emerald-500 text-white px-3 py-1.5 rounded text-sm font-medium hover:from-emerald-500 hover:to-emerald-600">
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
