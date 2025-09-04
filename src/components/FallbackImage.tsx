import React, { useState } from 'react';
import logo from '@/assets/logo.png';

type FallbackImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
};

const FallbackImage: React.FC<FallbackImageProps> = ({ src, alt, ...rest }) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);

  return (
    <img
      src={currentSrc}
      alt={alt}
      onError={() => setCurrentSrc(logo)}
      {...rest}
    />
  );
};

export default FallbackImage;


