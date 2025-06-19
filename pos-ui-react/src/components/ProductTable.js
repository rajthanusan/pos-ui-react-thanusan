"use client";

import { useState } from "react";
import producticon from "../assets/images/product.png";
import { FaEdit } from "react-icons/fa";
import { productsData } from "../assets/data/products";

const ProductTable = ({
  searchTerm,
  selectedCategory,
  selectedProduct,
  selectedColor,
  selectedThickness,
  selectedDiameter,
}) => {
  const [products, setProducts] = useState(productsData);
  const [editingProduct, setEditingProduct] = useState(null);

  const getStockStatusClass = (value) => {
    const stockMatch = value.match(/(\d+)/);
    const stock = stockMatch ? parseInt(stockMatch[1]) : 0;
  
    if (value === "Not Available") {
      return "text-red-500 border border-red-500";
    }
  
    if (stock < 50) {
      return "text-orange-500 border border-orange-500";
    }
  
    return "text-green-500 border border-green-500";
  };

  const handleEdit = (product) => setEditingProduct({ ...product });
  const handleChange = (field, value) => {
    setEditingProduct((prev) => ({ ...prev, [field]: value }));
  };
  const handleSave = () => {
    setProducts((prev) =>
      prev.map((p) => (p.id === editingProduct.id ? editingProduct : p))
    );
    setEditingProduct(null);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      searchTerm === "" ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.barcode.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Categories" ||
      product.category === selectedCategory;

    const matchesProduct =
      selectedProduct === "All Products" || product.name === selectedProduct;

    const matchesColor =
      selectedColor === "All Colors" || product.color === selectedColor;

    const matchesThickness =
      selectedThickness === "All Thickness" ||
      product.thickness === selectedThickness;

    const matchesDiameter =
      selectedDiameter === "All Diameters" ||
      product.diameter === selectedDiameter;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesProduct &&
      matchesColor &&
      matchesThickness &&
      matchesDiameter
    );
  });

  return (
    <div>
      {/* Desktop Table View (hidden on mobile) */}
      <div className="hidden md:block bg-white rounded-md shadow-sm">
        <div className="min-w-full pt-4">
          <table className="w-full divide-y divide-gray-200 text-sm">
            <thead className="text-black text-xs uppercase border-b border-black">
              <tr>
                <th className="px-3 py-2 text-left font-medium">Products</th>
                <th className="px-3 py-2 text-left font-medium">Product code</th>
                <th className="px-3 py-2 text-left font-medium">Barcode</th>
                <th className="px-3 py-2 text-left font-medium">Category</th>
                <th className="px-3 py-2 text-left font-medium">Tax</th>
                <th className="px-3 py-2 text-left font-medium">Price</th>
                <th className="px-3 py-2 text-left font-medium">Store</th>
                <th className="px-3 py-2 text-left font-medium">Warehouse</th>
                <th className="px-3 py-2 text-left font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-400">
              {filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="hover:bg-green-200 hover:ring-1 hover:ring-green-400 transition-all"
                >
                  <td className="px-3 py-2 whitespace-nowrap flex items-center gap-2 max-w-[160px]">
                    <img
                      src={producticon}
                      alt="product"
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="truncate">{product.name}</span>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">{product.code}</td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {product.barcode}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {product.category}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">{product.tax}</td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <span
                      className={`text-xs px-3 py-1 border rounded-md font-medium ${getStockStatusClass(
                        product.store
                      )}`}
                    >
                      {product.store}
                    </span>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <span
                      className={`text-xs px-3 py-1 border rounded-md font-medium ${getStockStatusClass(
                        product.warehouse
                      )}`}
                    >
                      {product.warehouse}
                    </span>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <button
                      className="w-7 h-7 flex items-center justify-center text-green-500 rounded-md hover:bg-green-200 transition-colors"
                      onClick={() => handleEdit(product)}
                      title="Edit"
                    >
                      <FaEdit className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View (shown only on mobile) */}
      <div className="md:hidden space-y-3 p-2">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white p-3 rounded-md shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <img
                src={producticon}
                alt="product"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <div className="flex gap-2 text-xs text-gray-500">
                  <span>Code: {product.code}</span>
                  <span>Barcode: {product.barcode}</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-sm mb-2">
              <div>
                <span className="text-gray-500">Category:</span> {product.category}
              </div>
              <div>
                <span className="text-gray-500">Tax:</span> {product.tax}
              </div>
              <div>
                <span className="text-gray-500">Price:</span> ${product.price.toFixed(2)}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div>
                <span className="text-gray-500 text-sm">Store:</span>
                <span
                  className={`text-xs px-2 py-1 border rounded-md font-medium ml-1 ${getStockStatusClass(
                    product.store
                  )}`}
                >
                  {product.store}
                </span>
              </div>
              <div>
                <span className="text-gray-500 text-sm">Warehouse:</span>
                <span
                  className={`text-xs px-2 py-1 border rounded-md font-medium ml-1 ${getStockStatusClass(
                    product.warehouse
                  )}`}
                >
                  {product.warehouse}
                </span>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                className="w-7 h-7 flex items-center justify-center text-green-500 rounded-md hover:bg-green-200 transition-colors"
                onClick={() => handleEdit(product)}
                title="Edit"
              >
                <FaEdit className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {editingProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-md shadow-md p-4 w-full max-w-md sm:w-96">
            <h2 className="text-lg font-semibold mb-4 text-green-700 border-b pb-2 border-green-300">
              Edit Product
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium">
                  Product Name
                </label>
                <input
                  type="text"
                  value={editingProduct.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full border px-2 py-1 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Product Code
                </label>
                <input
                  type="text"
                  value={editingProduct.code}
                  onChange={(e) => handleChange("code", e.target.value)}
                  className="w-full border px-2 py-1 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Category</label>
                <input
                  type="text"
                  value={editingProduct.category}
                  onChange={(e) => handleChange("category", e.target.value)}
                  className="w-full border px-2 py-1 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Price</label>
                <input
                  type="number"
                  value={editingProduct.price}
                  onChange={(e) =>
                    handleChange("price", parseFloat(e.target.value))
                  }
                  className="w-full border px-2 py-1 rounded"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-6">
            <button
  onClick={() => setEditingProduct(null)}
  className="w-32 border border-red-500 text-red-500 px-3 py-1.5 rounded text-sm font-medium hover:bg-red-50"
>
  Close
</button>

              <button
  onClick={handleSave}
  className="w-32 bg-gradient-to-r from-emerald-400 to-emerald-500 text-white px-3 py-1.5 rounded text-sm font-medium hover:from-emerald-500 hover:to-emerald-600"
>
  Save
</button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTable;