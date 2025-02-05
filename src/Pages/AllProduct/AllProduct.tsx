
import ProductCard from "@/components/Product-Card/ProductCard";
import { Pagination } from "@/components/ui/pagination";
import { useGetAllProductsQuery } from "@/redux/features/products/productApi";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

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
  //  model select data

  const model = [
    {
      id: 1,
      value: "cr-v",
      label: "CR-V",
    },
    {
      id: 2,
      value: "camry",
      label: "Camry",
    },
    {
      id: 3,
      value: "range rover velar",
      label: "Range Rover Velar",
    },
    {
      id: 4,
      value: "s-class cabriolet",
      label: "S-Class Cabriolet",
    },
    {
      id: 5,
      value: "r8 spyder",
      label: "R8 Spyder",
    },
    {
      id: 6,
      value: "prius",
      label: "Prius",
    },
    {
      id: 7,
      value: "488 spider",
      label: "488 Spider",
    },
    {
      id: 8,
      value: "aventador s",
      label: "Aventador S",
    },
    {
      id: 9,
      value: "m4 convertible",
      label: "M4 Convertible",
    },
  ];

  const [priceRange, setPriceRange] = useState([0, 100000000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  // console.log(brandFilter);
  const [modelFilter, setModelFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [availability, setAvailability] = useState("");
  const queryParams = {
    brand: searchTerm || brandFilter || undefined,
    category: categoryFilter || undefined,
    model: modelFilter || undefined,
    search: searchTerm || undefined,
    sortBy: sortOrder || undefined,
    minPrice: priceRange[0] || undefined,
    maxPrice: priceRange[1] || undefined,
    availability: availability || undefined,
  };
  // console.log(queryParams);
  const { data: products,  } = useGetAllProductsQuery(queryParams);
  console.log(products);
  // console.log(isFetching);

  // Loader
  // if (isFetching) return <Loader />;
  // if (!products && !isFetching) return <div>No product found</div>;
  return (
    <div className="flex flex-col md:flex-row min-h-screen ">
      <Helmet>
        {" "}
        <title>NextGen Cars | All-Products</title>
      </Helmet>
      {/* Sidebar */}
      <aside className="w-full   md:w-1/4 p-6 md:py-6 bg-white shadow-2xl">
        {/* search */}
        <h2 className="text-lg font-title font-bold mb-4">Search</h2>
        <input
          type="text"
          placeholder="Search Products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value) }
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:ring"
        />
        <label className="block mb-2 font-title font-bold">Price Range</label>
        <div className="flex gap-4">
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
            placeholder="Min Price"
            className="w-1/2 px-4 py-2 border rounded-lg"
          />
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            placeholder="Max Price"
            className="w-1/2 px-4 py-2 border rounded-lg"
          />
        </div>

        {/* category */}
        <label className="block mb-2 font-title font-bold">Category</label>
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
        {/* brand */}
        <label className="block mb-2 font-title font-bold">Brand</label>
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
        {/* model */}
        <label className="block mb-2 font-title font-bold">Model</label>
        <select
          onChange={(e) => setModelFilter(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        >
          <option value="">All</option>
          {model.map((item, id) => (
            <option key={id} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        {/* Availability */}
        <label className="block mb-2 font-title font-bold">Availability</label>
        <select
          onChange={(e) => setAvailability(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-6"
        >
          <option value="">All</option>
          <option value="in-stock">In Stock</option>
          <option value="out-of-stock">Out of Stock</option>
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
        <Pagination/>
      </main>
    </div>
  );
};

export default AllProduct;
