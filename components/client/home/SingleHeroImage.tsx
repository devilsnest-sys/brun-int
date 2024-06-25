import type { NextPage } from "next";
import Image, { StaticImageData } from "next/image";

interface ISingleHeroImage {
  heading: string;
  image: string | StaticImageData;
  route: string;
};

const SingleHeroImage: NextPage<ISingleHeroImage> = ({ heading, image, route }) => {
  return (
    <section className="singleheroimage">
      <p className="mb-5 md:mb-6 mt-8 text-sm md:text-3xl font-normal font-urbanist ">{heading}</p>
      <Image
        className="flex-1 !relative max-w-full overflow-hidden object-cover mb-6 mt-8"
        loading="eager"
        alt=""
        src={image}
        fill
      />
    </section>
  );
};

export default SingleHeroImage;
