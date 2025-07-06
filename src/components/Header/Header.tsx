import { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";

type Props = {
  email: string;
  contact: string;
  iso: string;
};

const Header = () => {
  const [header, setHeader] = useState<Props>({

    email: "",
    contact: "",
    iso: "",
  });
  const getData = async () => {
    const query = encodeURIComponent(`
          *[_type == "home"][0]{
            email,
            contact,
            iso,
        }
     `);
    const url = `https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${query}`;
    const res = await fetch(url).then((res) => res.json());
    // console.log(res.result);
    setHeader(res.result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="iso-container">
      <div>
        {header.iso}
        {/* An ISO 9001:2015 Certified Companysdfsdf */}
      </div>
      <div>
        <span>
          <FiPhone style={{ fontSize: "1.1rem", marginRight: "0.5rem" }} />
          {header.contact}
          {/* +91 8420112846 | +91 8902036365 | +91 33 2694 4604 / 4605 */}
        </span>
        <span>
          <AiOutlineMail
            style={{
              fontSize: "1.1rem",
              marginRight: "0.5rem",
              marginLeft: "0.5rem",
            }}
          />
          {header.email}
          {/* info@corpuslifescience.com{" "} */}
        </span>
      </div>
    </div>
  );
};

export default Header;
