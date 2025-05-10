import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductCard } from "../../../../components";
import { getAllProducts } from "../../../../api/products";
import { parseQueryParams } from "../../../../utils"; // utility to parse URL params

const FilteredProducts = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const filters = parseQueryParams(location.search);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const allProducts = await getAllProducts();
        setProducts(allProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    if (!products.length) return;

    const {
      category,
      minPrice,
      maxPrice,
      color,
      size,
      dressStyle
    } = filters;

    let temp = [...products];

    if (category) {
      temp = temp.filter(p => p.category?.toLowerCase() === category.toLowerCase());
    }

    if (minPrice) {
      temp = temp.filter(p => p.price >= parseFloat(minPrice));
    }

    if (maxPrice) {
      temp = temp.filter(p => p.price <= parseFloat(maxPrice));
    }

    if (color) {
      temp = temp.filter(p => p.color?.toLowerCase() === color.toLowerCase()); // if color info exists
    }

    if (size) {
      temp = temp.filter(p => p.availableSizes?.includes(size)); // if you implement size logic
    }

    if (dressStyle) {
      temp = temp.filter(p => p.dressStyle?.toLowerCase() === dressStyle.toLowerCase());
    }

    setFiltered(temp);
  }, [products, location.search]);

  return (
    <section className="px-8 py-16">
      <div className="flex-col">
        <h2 className="text-3xl font-bold mb-6">Filtered Products</h2>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : filtered.length === 0 ? (
          <p className="text-center">No products match the selected filters.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                images={product.images}
                title={product.title}
                category={product.category}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FilteredProducts;
