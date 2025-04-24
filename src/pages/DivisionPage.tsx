import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeadingCard from "../components/shared/PageHeadingCard/PageHeadingCard";
import "./styles/division.css";

const DivisionPage = () => {
  const { name } = useParams();
  const [divisionData, setDivisionData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (name) {
      const fetchDivisionData = async () => {
        setLoading(true);
        setError(null);

        try {
          const query = encodeURIComponent(`*[_type == "division" && name == $name][0]{
            name,
            description,
            products[] {
              name,
              description,
              images[] {
                asset -> {
                  url
                },
                imageDescription
              },
              "url": pdf.asset->url
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

          setDivisionData(data.result);
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
            divisionData?.products[0]?.images[0]?.asset?.url ||
            "https://via.placeholder.com/150",
          description: divisionData?.description || "",
        }}
        title={divisionData?.name || name || ""}
      />
      <div className="division-products-container">
        <h2>Products of {divisionData?.name || name}</h2>
        <div className="division-products-grid">
          {divisionData?.products?.map((product: any, index: number) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product, index }: { product: any; index: number }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        product?.images ? (prevIndex + 1) % product.images.length : 0
      );
    }, Math.random() * (3000 - 2000) + 2000); // Random value between 2000 and 3000ms

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [product?.images]);


  return (
    <div
    className={`product-card ${
        index % 2 === 0 ? "even-card" : "odd-card"
      }`}
      >
      <div className="product-image-container">
        <img
          src={product?.images?.[currentImageIndex]?.asset?.url || "https://via.placeholder.com/150"}
          alt={product?.images?.[currentImageIndex]?.imageDescription || "Product Image"}
        />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        {product?.url ? (
          <button
            className="know-more-button"
            onClick={() => window.open(product?.url, "_blank")}
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
