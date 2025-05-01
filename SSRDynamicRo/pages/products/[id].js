import { useRouter } from 'next/router';

const ProductDetail = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white p-6 border rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-md mb-4" />
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-semibold text-gray-800">Price: ${product.price}</p>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
}

export default ProductDetail;
