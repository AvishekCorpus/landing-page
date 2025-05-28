import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageHeadingCard from "../components/shared/PageHeadingCard/PageHeadingCard";
import "./styles/division.css";

export interface Division {
  _id?: string;
  description?: string;
  name: string;
  products?: Product[];
}

export interface Product {
  description: string;
  images: Image[];
  name: string;
  path: string;
  url?: string;
}

export interface Image {
  imageDescription?: string;
  asset: Asset;
}

export interface Asset {
  url: string;
}

const DivisionPage = () => {
  const { name } = useParams();
  const [divisionData, setDivisionData] = useState<Division>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Brand Portfolio | Division";
    if (name) {
      const fetchDivisionData = async () => {
        setLoading(true);
        setError(null);

        try {
          const query =
            encodeURIComponent(`*[_type == "division" && name == $name][0]{
            name,
            description,
            products[]->{
              name,
              description,
              images[] {
                asset -> {
                  url
                },
                imageDescription
              },
              "url": pdf.asset->url,
              "path": "/products/" + _id
            }
          }`);
          const url = `https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${query}&$name="${encodeURIComponent(
            name
          )}"`;
          const res = await fetch(url);

          if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.statusText}`);
          }

          const data = await res.json();

          if (!data?.result) {
            throw new Error("No data found for the specified division.");
          }

          console.log(data.result);
          setDivisionData(data.result);

          if (
            !data.result.products ||
            data.result.products == null ||
            data.result.products.length === 0
          ) {
            setError(
              "No products found for this division. or division not found. or first product image is not in place not found."
            );
          }
        } catch (err: any) {
          setError(err.message || "An unexpected error occurred.");
        } finally {
          setLoading(false);
        }
      };

      fetchDivisionData();
    }
  }, [name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className="error-message">
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <PageHeadingCard
        image={{
          src:
            divisionData?.products?.[0]?.images?.[0]?.asset?.url ||
            "https://via.placeholder.com/150",
          description: divisionData?.description || "",
        }}
        title={divisionData?.name || name || ""}
      />
      <div className="division-products-container">
        <h2>Products of {divisionData?.name || name}</h2>
        <div className="division-products-grid">
          {divisionData?.products?.map((product: Product, index: number) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({
  product,
  index,
}: {
  product: Product;
  index: number;
}) => {
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) =>
  //       product?.images ? (prevIndex + 1) % product.images.length : 0
  //     );
  //   }, Math.random() * (3000 - 2000) + 2000); // Random value between 2000 and 3000ms

  //   return () => clearInterval(interval); // Clean up the interval on component unmount
  // }, [product?.images]);

  return (
    <div
      className={`product-card ${index % 2 === 0 ? "even-card" : "odd-card"}`}
    >
      <div className="product-image-container">
        <img
          src={
            product?.images?.[0]?.asset?.url ??
            "https://via.placeholder.com/150"
          }
          alt={product?.images?.[0]?.imageDescription || "Product Image"}
        />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        {product.path ? (
          <button
            className="know-more-button"
            onClick={() => navigate(product.path)}
          >
            Know more
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default DivisionPage;
