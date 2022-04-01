import Image_, { ImageProps as ImageProps_ } from "next/image";
import { useState } from "react";
import { imagePlaceholder } from "./imagePlaceholder";

// omit alt because it is optional
// this ensures alt is always needed
interface ImageProps extends Omit<ImageProps_, "alt" | "src"> {
  alt: string;
  src: string;
}

const Image = ({ unoptimized = true, ...props }: ImageProps) => {
  const [imageSrc, setImageSrc] = useState(props.src);

  const handleError = () => {
    setImageSrc(imagePlaceholder);
  };

  return (
    <Image_
      {...props}
      unoptimized={unoptimized}
      src={imageSrc}
      onError={handleError}
    />
  );
};

export type { ImageProps };
export { Image };
