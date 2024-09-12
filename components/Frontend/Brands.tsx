import React from "react";

// Define the SingleImageProps type to match individual image properties
export type SingleImageProps = {
  link: string;
  imageSrc: string;
  lightImageSrc: string;
  altText: string;
};

// Array of brand data
const brandsData: SingleImageProps[] = [
  {
    imageSrc:
      "https://siddha.lk/wp-content/uploads/2024/03/yakka-remake2400-x-430-px-2-1024x183.png",
    lightImageSrc:
      "https://siddha.lk/wp-content/uploads/2024/03/yakka-remake2400-x-430-px-2-1024x183.png",
    altText: "graygrids",
    link: "#",
  },
  {
    imageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/lineicons.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/lineIcons-white.svg",
    altText: "lineicons",
    link: "#",
  },
  {
    imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/uideck.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/uideck-white.svg",
    altText: "uideck",
    link: "#",
  },
  {
    imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui-white.svg",
    altText: "ayroui",
    link: "#",
  },
];

// Main component rendering brand images
export default function Brands() {
  return (
    <section className="bg-white py-20 lg:py-[120px] dark:bg-dark -mt-[120px]">
        <h2 className="text-center pb-6"><b>Our Partners</b></h2>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              {brandsData.map((brand, i) => (
                <SingleImage
                  key={i}
                  link={brand.link}
                  imageSrc={brand.imageSrc}
                  lightImageSrc={brand.lightImageSrc}
                  altText={brand.altText}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// SingleImage component handling individual brand images
const SingleImage = ({ link, imageSrc, lightImageSrc, altText }: SingleImageProps) => {
  return (
    <a
      href={link}
      className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
    >
      {/* Normal Image for light mode */}
      <img src={imageSrc} alt={altText} className="h-10 w-full dark:hidden" />

      {/* Light Image for dark mode */}
      <img src={lightImageSrc} alt={altText} className="hidden h-10 w-full dark:block" />
    </a>
  );
};
