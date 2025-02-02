import React, { useEffect, useState } from "react";
import HomepageDivision from "../components/Homepage/HomepageDivision/HomepageDivision";
import HomepageImages from "../components/Homepage/HomepageImages/HomepageImages";
import HomepageManagement from "../components/Homepage/HomepageManagement/HomepageManagement";
import HomepageProducts from "../components/Homepage/HomepageProducts/HomepageProducts";
import TaglineSection from "../components/Homepage/TaglineSection/TaglineSection";

interface Props {}

export interface Image {
  src: string;
  caption: string;
}

export interface Division {
  imageUrl: string;
  title: string;
  description: string;
}

export interface VideoState {
  url: string;
  description: string;
}

export interface Products {
  title: string;
  division: string;
  imageUrl: string;
}

export interface Management {
  name: string;
  position: string;
  image: string;
  description: string;
}

const Homepage: React.FC<Props> = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [divisions, setDivisions] = useState<Division[]>([]);
  const [videoState, setVideoState] = useState<VideoState | null>(null);
  const [cardData, setCardData] = useState<Products[] | null>(null);
  const [managementData, setManagementData] = useState<Management[]>([]);

  const getData = async () => {
    const query = encodeURIComponent(`*[_type == "homepage"][0] {
      images[] {
        asset -> {
          _id,
          url
        },
        caption
      },
      divisions[] {
        image {
          asset -> {
            url
          }
        },
        title,
        description
      },
      video {
        videoFile {
          asset -> {
            url
          }
        },
        description
      },
      products[] {
          title,
          division,
          imageUrl {
            asset->{
              url
            }
          }
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
    const res = await fetch(url).then((res) => res.json());

    if (res?.result) {
      setImages(transformImages(res.result));
      setDivisions(transformDivisions(res.result));
      setVideoState(transformVideo(res.result.video));
      setCardData(transformProductsResponse(res?.result.products));
      setManagementData(transformManagementData(res?.result.management));
    }
  };

  const transformImages = (data: any): Image[] => {
    return data?.images?.map((image: any) => ({
      src: image?.asset?.url || "",
      caption: image.caption || "No caption available",
    }));
  };

  const transformDivisions = (data: any): Division[] => {
    return data?.divisions?.map((division: any) => ({
      imageUrl: division.image.asset.url,
      title: division.title,
      description: division.description,
    }));
  };

  const transformVideo = (videoData: any): VideoState => {
    return {
      url: videoData?.videoFile?.asset?.url || "",
      description: videoData?.description || "No description available",
    };
  };

  function transformProductsResponse(products: any) {
    return products?.map((product: any) => ({
      title: product?.title,
      division: product?.division,
      imageUrl: product?.imageUrl?.asset?.url,
    }));
  }

  function transformManagementData(management: any) {
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
