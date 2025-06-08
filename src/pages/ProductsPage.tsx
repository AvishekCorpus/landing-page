import Flex from "antd/es/flex";
import "./styles/product.css";
import { useCallback, useEffect, useState } from "react";
import Tag from "antd/es/tag";
import { useParams } from "react-router-dom";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

export interface Product {
  composition?: string | null;
  description?: string;
  disclaimer?: string;
  dosage?: string;
  form?: string;
  imagesUrl?: string;
  indications?: string[];
  modeofaction?: string;
  name: string;
  packaging?: string;
  path?: string;
  therapyArea?: string;
  url?: string | null;
}
const ProductPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [Error, setError] = useState<string | null>(null);
  const [Loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();

  const getData = useCallback(async () => {
    setLoading(true);
    setError(null);
    const query = encodeURIComponent(`*[_type == "products" && _id == $id][0]{
      name,
      description,
      packaging,
      modeofaction,
      form,
      dosage,
      composition,
      therapyArea,
      disclaimer,
      indications,
      "imagesUrl": images[0].asset->url,      
      "url": pdf.asset->url,
      "path": "/products/" + _id
    }`);
    const url = `https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${query}&$id="${encodeURIComponent(
      id ?? ""
    )}"`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.result) {
          // console.log(data.result);
          setProduct(data.result);
          setLoading(false);
          setError(null);
        } else {
          setError("No product found with the specified ID.");
        }
      })
      .catch((err) => {
      setError(err.message || "An unexpected error occurred.");
    });
  }, [id]);

  useEffect(() => {
    document.title = "Product | Corpus Life Science";
    getData();
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getData]);

  if (Loading) {
    return <div>Loading...</div>;
  }

  if (Error) {
    return (
      <div className="error-message">
        <h2>Error</h2>
        <p>{Error}</p>
      </div>
    );
  }
  return (
    product && (
      <div className="product-container">
        <div className="product-content">
          <div className="brand-intro">
            <div className={`brand-intro-content ${isMobile ? "mobile" : ""}`}>
              {!isMobile && (
                <img
                  className="product-image"
                  src={product.imagesUrl || "https://via.placeholder.com/150"}
                  alt={product.name}
                />
              )}
              <div className="product-text-content">
                <h1 className="brand-title">{product.name.trim()}</h1>
                {isMobile && (
                  <img
                    className="product-image mobile-image"
                    src={product.imagesUrl || "https://via.placeholder.com/150"}
                    alt={product.name}
                  />
                )}
                {product.description && (
                  <p className="product-description">
                    {product.description.trim()}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="product-details">
            {product.composition && (
              <>
                <h2 className="drug-head">Composition: </h2>
                <p className="drug-content">{product.composition.trim()}</p>
              </>
            )}
            {product.dosage && (
              <>
                <h2 className="drug-head">Dosage: </h2>
                <p className="drug-content">{product.dosage}</p>
              </>
            )}

            {product.form && (
              <>
                <h2 className="drug-head">Form: </h2>
                <p className="drug-content">{product.form}</p>
              </>
            )}
            {product.indications && (
              <>
                <h2 className="drug-head">Indications: </h2>
                <ul className="indications-list">
                  <Flex wrap gap="small">
                    {product.indications.map(
                      (indication: string, index: number) => (
                        <Tag key={index} bordered={false} color="warning">
                          {indication.trim()}
                        </Tag>
                      )
                    )}
                  </Flex>
                </ul>
              </>
            )}
            {product.modeofaction && (
              <>
                <h2 className="drug-head">Mode of Action: </h2>
                <p className="drug-content">{product.modeofaction?.trim()}</p>
              </>
            )}
            {product.packaging && (
              <>
                <h2 className="drug-head">Packaging: </h2>
                <p className="drug-content">{product.packaging}</p>
              </>
            )}
            {product.therapyArea && (
              <>
                <h2 className="drug-head">Therapy Area: </h2>
                <p className="drug-content">{product.therapyArea}</p>
              </>
            )}
            {product.disclaimer && (
              <>
                <h2 className="drug-head">Disclaimer: </h2>
                <p className="disclaimer-text">{product.disclaimer.trim()}</p>
              </>
            )}
            {product.url && (
              <>
                <h2 className="drug-head">Document: </h2>
                <Button
                  color="orange"
                  variant="outlined"
                  onClick={() => {
                    if (typeof product.url === "string") {
                      window.open(product.url, "_blank");
                    }
                  }}
                >
                  Download
                  <DownloadOutlined />
                </Button>
              </>
            )}
            <div style={{ height: "10px" }}></div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
