import { Pagination, Autoplay } from 'swiper/modules';
import {
  StyledCarousel,
  Slide,
  SlideImage,
  VignetteFilter,
} from './Carousel.types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CarouselProps {
  images: string[];
  alt: string;
}

export default function Carousel({ images, alt }: CarouselProps) {
  return (
    <StyledCarousel
      loop
      pagination
      autoplay={{ delay: 3000 }}
      modules={[Pagination, Autoplay]}
    >
      {images.map((image: string, index: number) => (
        <Slide key={index}>
          <SlideImage src={image} alt={alt} fill />
          <VignetteFilter />
        </Slide>
      ))}
    </StyledCarousel>
  );
}
