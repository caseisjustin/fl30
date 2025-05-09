import { useEffect, useState } from "react";
import { ProductCard } from "../../../../components";
import { getAllProducts } from "../../../../api/products";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await getAllProducts({l: 4, p: 1});
        setProducts(products);
      } catch (error) {
        console.error("Failed to fetch new arrivals:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <section className="px-8 py-16">
      <div className="flex items-center flex-col">
        <h2 className="text-3xl font-bold mb-6">NEW ARRIVALS</h2>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {products?.map((product) => (
              <ProductCard
                key={product.id}
                image={product.thumbnail}
                title={product.title}
                brand={product.category}
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

export default NewArrivals;
