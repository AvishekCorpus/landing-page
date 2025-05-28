import { useEffect, useState } from "react";
// import PageHeadingCard from "../components/shared/PageHeadingCard/PageHeadingCard";
import "./styles/division.css";
import { useNavigate } from "react-router-dom";

interface DivisionData {
  name: string;
  route: string;
  description: string;
}

const BrandPortfolioPage = () => {
  const [divisionData, setDivisionData] = useState<DivisionData[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Brand Portfolio | Corpus Life Science";
    const fetchDivisionData = async () => {
      setLoading(true);
      setError(null);

      try {
        const query = encodeURIComponent(
          `*[_type == "division"]{ name , "route": "/division/" + name} |  order(name asc)`
        );
        const url = `https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${query}`;
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.statusText}`);
        }

        const data = await res.json();

        if (!data?.result) {
          throw new Error("No data found for the specified division.");
        }

        setDivisionData(data.result);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDivisionData();
  }, []);

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
      {/* <PageHeadingCard
        image={{
          src:
            divisionData?.products[0]?.images[0]?.asset?.url ||
            "https://via.placeholder.com/150",
          description: divisionData?.description || "",
        }}
        title={divisionData?.name || ""}
      /> */}
      <div className="division-products-container">
        <h2>Brand Porfolio</h2>
        <div className="division-products-grid">
          {divisionData?.map((division, index: number) => (
            <DivisionCard
              key={index}
              name={division.name}
              description={division.description}
              route={division.route}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface DivisionCardProps {
  name: string;
  description: string;
  // images?: { asset: { url: string } }[];
  route?: string;
  index: number;
}
const DivisionCard = (props: DivisionCardProps) => {
  const navigate = useNavigate();
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      className={`product-card ${
        props.index % 2 === 0 ? "even-card" : "odd-card"
      }`}
    >
      <div className="product-info">
        <h3>{props.name}</h3>
        <p>{props.description}</p>

        {props?.route ? (
          <button
            className="know-more-button"
            onClick={() => {
              if (props.route) navigate(props.route);
            }}
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

export default BrandPortfolioPage;
