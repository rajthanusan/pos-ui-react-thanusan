"use client"

import { useState } from "react"
import { FiPlus} from "react-icons/fi"
import ProductTable from "./ProductTable"
import AddProductModal from "./AddProductModal"
import { FiSearch } from "react-icons/fi";
import { RiResetRightLine } from "react-icons/ri";


const ProductManagement = () => {
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedProduct, setSelectedProduct] = useState("All Products")
  const [sortBy, setSortBy] = useState("Latest")
  const [selectedColor, setSelectedColor] = useState("All Colors")
  const [selectedThickness, setSelectedThickness] = useState("All Thickness")
  const [selectedDiameter, setSelectedDiameter] = useState("All Diameters")

  const categories = ["All Categories", "Level 1 Cat", "Level 2 Cat", "Level 3 Cat"]
  const products = ["All Products", "Green Sandalwood Soap", "Other Product 1", "Other Product 2"]
  const sortOptions = ["Latest", "Oldest", "Price: Low to High", "Price: High to Low"]
  const colors = ["All Colors", "Red", "Green"]
  const thicknesses = ["All Thickness", "Thin", "Medium", "Thick"]
  const diameters = ["All Diameters", "Small", "Medium", "Large"]

  const handleRefresh = () => {
    setSearchTerm("")
    setSelectedCategory("All Categories")
    setSelectedProduct("All Products")
    setSortBy("Latest")
    setSelectedColor("All Colors")
    setSelectedThickness("All Thickness")
    setSelectedDiameter("All Diameters")
  }

  return (
    <div className="p-4 sm:p-6 bg-gray-50 w-full max-w-screen overflow-x-hidden mx-auto">
      {showAddProduct && (
        <AddProductModal onClose={() => setShowAddProduct(false)} />
      )}

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
        <div className="flex items-center gap-2 w-full sm:flex-1">
          <label className="text-sm font-medium text-gray-700 whitespace-nowrap">Products</label>
          <div className="relative w-full">
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 pointer-events-none" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search product by name or id..."
        className="w-full pl-10 pr-3 py-1.5 border border-gray-300 rounded-md text-sm 
                   focus:outline-none focus:border-green-500"
      />
    </div>
    <div className="relative w-full sm:w-auto flex-1 min-w-[200px]">
    <div className="flex items-center gap-2">
  <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
    Search by
  </label>
  <select
    value={selectedProduct}
    onChange={(e) => setSelectedProduct(e.target.value)}
    className="px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-green-500"
  >
    <option value="">Select Product</option>
    <option value="product1">Product 1</option>
    <option value="product2">Product 2</option>
  </select>
</div>

      </div>
        </div>
        <button
  onClick={() => setShowAddProduct(true)}
  className="flex items-center gap-2 px-4 py-1.5 text-sm text-white 
             bg-gradient-to-r from-emerald-400 to-emerald-500 
             rounded-md hover:from-emerald-500 hover:to-emerald-600 
             transition shadow-sm w-full sm:w-auto justify-center"
>
  <FiPlus className="text-sm" />
  Add Products
</button>

      </div>

      {/* Row 2: Category, Product, Sort */}
      <div className="flex flex-wrap gap-2 mb-4 w-full">
        <Dropdown label="Category" value={selectedCategory} options={categories} setValue={setSelectedCategory} />
        <Dropdown label="Select Product" value={selectedProduct} options={products} setValue={setSelectedProduct} />
        <Dropdown label="Sort By" value={sortBy} options={sortOptions} setValue={setSortBy} />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-5 w-full">
        {/* Filter Box */}
        <div className="border border-gray-300 rounded-lg p-3 bg-white flex flex-wrap items-center gap-2 w-full sm:flex-1">
          <Dropdown label="Color" value={selectedColor} options={colors} setValue={setSelectedColor} />
          <Dropdown label="Thickness" value={selectedThickness} options={thicknesses} setValue={setSelectedThickness} />
          <Dropdown label="Diameter" value={selectedDiameter} options={diameters} setValue={setSelectedDiameter} />
        </div>

        {/* Refresh Button */}
        <div className="mt-4">
  <button
    onClick={handleRefresh}
    className="flex items-center gap-2 px-4 text-xs text-black border border-green-500 
               rounded-md transition shadow-sm w-full sm:w-auto justify-center"
    style={{ height: '28px' }}
  >
    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500 text-white">
      <RiResetRightLine className="w-3 h-3" />
    </span>
    Refresh
  </button>
</div>

      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 w-full overflow-x-auto">
        <ProductTable
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          selectedProduct={selectedProduct}
          sortBy={sortBy}
          selectedColor={selectedColor}
          selectedThickness={selectedThickness}
          selectedDiameter={selectedDiameter}
        />
      </div>
    </div>
  )
}

const Dropdown = ({ label, value, options, setValue }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 min-w-[150px] flex-1">
    <label className="text-sm font-medium text-gray-700 whitespace-nowrap">{label}</label>
    <select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
    >
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
)

export default ProductManagement
