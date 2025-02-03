import ProductCard from "@/components/Product-Card/ProductCard";
import { useGetAllProductsQuery } from "@/redux/features/products/productApi";
import { useState } from "react";

const AllProduct = () => {
  // brand select data

  const brand = [
    {
      id: 1,
      brand: "Toyota",
      value: "toyota",
      origin: "Japan",
      foundedYear: 1937,
    },
    {
      id: 2,
      brand: "Ford",
      value: "ford",
      origin: "United States",
      foundedYear: 1903,
    },
    {
      id: 3,
      brand: "BMW",
      value: "bmw",
      origin: "Germany",
      foundedYear: 1916,
    },
    {
      id: 4,
      brand: "Mercedes-Benz",
      value: "mercedes-benz",
      origin: "Germany",
      foundedYear: 1926,
    },
    {
      id: 5,
      brand: "Honda",
      value: "honda",
      origin: "Japan",
      foundedYear: 1948,
    },
    {
      id: 6,
      brand: "Hyundai",
      value: "hyundai",
      origin: "South Korea",
      foundedYear: 1967,
    },
    {
      id: 7,
      brand: "Chevrolet",
      value: "chevrolet",
      origin: "United States",
      foundedYear: 1911,
    },
    {
      id: 8,
      brand: "Tesla",
      value: "tesla",
      origin: "United States",
      foundedYear: 2003,
    },
    {
      id: 9,
      brand: "Nissan",
      value: "nissan",
      origin: "Japan",
      foundedYear: 1933,
    },
    {
      id: 10,
      brand: "Volvo",
      value: "volvo",
      origin: "Sweden",
      foundedYear: 1927,
    },
    {
      id: 11,
      brand: "Rolls-Royce",
      value: "rolls-royce",
      origin: "United Kingdom",
      foundedYear: 1904,
    },
    {
      id: 12,
      brand: "Ferrari",
      value: "ferrari",
      origin: "Italy",
      foundedYear: 1939,
    },
    {
      id: 13,
      brand: "Lamborghini",
      value: "lamborghini",
      origin: "Italy",
      foundedYear: 1963,
    },
    {
      id: 14,
      brand: "Audi",
      value: "audi",
      origin: "Germany",
      foundedYear: 1909,
    },
    {
      id: 15,
      brand: "Land Rover",
      value: "land-rover",
      origin: "United Kingdom",
      foundedYear: 1948,
    },
    {
      id: 16,
      brand: "Porsche",
      value: "porsche",
      origin: "Germany",
      foundedYear: 1931,
    },
  ];

  //   category select data

  const category = [
    {
      id: 1,
      value: "suv",
      label: "SUV",
    },
    {
      id: 2,
      value: "sedan",
      label: "Sedan",
    },
    {
      id: 3,
      value: "coupe",
      label: "Coupe",
    },
    {
      id: 4,
      value: "truck",
      label: "Truck",
    },
    {
      id: 5,
      value: "convertible",
      label: "Convertible",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const queryParams = {
    brand: searchTerm || brandFilter || undefined,
    category: categoryFilter || undefined,
    sortBy: sortOrder || undefined,
  };
  const { data: products, isFetching } = useGetAllProductsQuery(queryParams);
  console.log(products);
  console.log(isFetching);
  if (isFetching) {
    <div>Loader...</div>;
  }
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-full  md:w-1/4 p-6 bg-white shadow-md">
        <h2 className="text-lg font-title font-bold mb-4">Search</h2>
        <input
          type="text"
          placeholder="Search Products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:ring focus:border-blue-500"
        />

        <label className="block mb-2 font-medium">Category</label>
        <select
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-6"
        >
          <option value="">All</option>
          {category.map((item, id) => (
            <option key={id} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>

        <label className="block mb-2 font-medium">Brand</label>
        <select
          onChange={(e) => setBrandFilter(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        >
          <option value="">All</option>
          {brand.map((item, id) => (
            <option key={id} value={item.value}>
              {item.brand}
            </option>
          ))}
        </select>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">All Products</h1>
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="asc">Sort by Price: Low to High</option>
            <option value="desc">Sort by Price: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products?.data?.result?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default AllProduct;
