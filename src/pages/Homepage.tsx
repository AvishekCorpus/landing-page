import React, { useEffect, useState } from "react";
import HomepageDivision from "../components/Homepage/HomepageDivision/HomepageDivision";
import HomepageImages from "../components/Homepage/HomepageImages/HomepageImages";
import HomepageManagement from "../components/Homepage/HomepageManagement/HomepageManagement";
import HomepageProducts from "../components/Homepage/HomepageProducts/HomepageProducts";
import TaglineSection from "../components/Homepage/TaglineSection/TaglineSection";

export interface result {
  result: HomepageData;
}

export interface HomepageData {
  images: Image[];
  divisions: Division[];
  video: VideoState;
  products: Products[];
  management: Management[];
}
export interface Image {
  src: string;
  caption: string;
}

export interface Division {
  imageUrl: string;
  title: string;
  description?: string;
}

export interface VideoState {
  url: string;
  description: string;
}

export interface Products {
  title: string;
  division: string;
  imagesUrl: string;
}

export interface Management {
  name: string;
  position: string;
  image: string;
  description: string;
}

const Homepage: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [divisions, setDivisions] = useState<Division[]>([]);
  const [videoState, setVideoState] = useState<VideoState | null>(null);
  const [cardData, setCardData] = useState<Products[] | null>(null);
  const [managementData, setManagementData] = useState<Management[]>([]);

  const getData = async () => {
    const query = encodeURIComponent(`*[_type == "home"][0] {
      images[] {
        asset -> {
          _id,
          url
        },
        caption
      },
      divisions[]-> {
        name,
        description,
        "imageUrl": image.asset->url
      },
      video {
        "url": videoFile.asset->url,
        description
      },
      products[]-> {
          name,
          "imagesUrl": images[0].asset->url,      

      },
      management[] {
        name,
        position,
        image {
          asset->{
            url
          }
        },
        description
      }
    }`);
    const url = `https://tr3yh6z2.api.sanity.io/v1/data/query/production?query=${query}`;
    const res: result = await fetch(url).then((res) => res.json());

    console.log(res);

    if (res?.result) {
      setImages(transformImages(res.result));
      setDivisions(transformDivisions(res.result));
      setVideoState(transformVideo(res.result.video));
      setCardData(transformProductsResponse(res?.result.products));
      setManagementData(transformManagementData(res?.result.management));
    }
  };

  const transformImages = (data: HomepageData): Image[] => {
    return data?.images?.map((image: any) => ({
      src: image?.asset?.url || "",
      caption: image.caption || "No caption available",
    }));
  };

  const transformDivisions = (data: HomepageData): Division[] => {
    return data?.divisions?.map((division: Division) => ({
      imageUrl: division.imageUrl,
      title: division.title,
      description:
        (division.description
          ? division.description.split(" ").slice(0, 10).join(" ")
          : "No description available") + "...",
    }));
  };

  const transformVideo = (videoData: VideoState): VideoState => {
    return {
      url: videoData?.url || "",
      description: videoData?.description || "No description available",
    };
  };

  function transformProductsResponse(products: Products[]) {
    return products?.map((product: Products) => ({
      title: product?.title,
      division: product?.division,
      imagesUrl: product?.imagesUrl || "https://via.placeholder.com/150",
    }));
  }

  function transformManagementData(management: Management[]) {
    return management?.map((item: any) => ({
      name: item?.name,
      position: item?.position,
      image:
        item?.image && item?.image?.asset
          ? item?.image?.asset?.url
          : "https://via.placeholder.com/100",
      description: item.description,
    }));
  }

  useEffect(() => {
    document.title = "Home | Corpus Life Science";
    getData();
  }, []);

  return (
    <div>
      <HomepageImages images={images} />
      <HomepageDivision cardData={divisions} />
      <TaglineSection videoState={videoState} />
      <HomepageProducts cardData={cardData} />
      <HomepageManagement management managementData={managementData} />
    </div>
  );
};

export default Homepage;
