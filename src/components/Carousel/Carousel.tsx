import { Pagination, Autoplay } from 'swiper/modules';
import {
  StyledCarousel,
  Slide,
  SlideImage,
  VignetteFilter,
} from './Carousel.types';

interface CarouselProps {
  images: string[];
  alt: string;
}

export function Carousel({ images, alt }: CarouselProps) {
  return (
    <StyledCarousel
      loop
      pagination
      autoplay={{ delay: 3000 }}
      modules={[Pagination, Autoplay]}
    >
      {images.map((image: string) => (
        <Slide key={Math.random()}>
          <SlideImage src={image} alt={alt} fill />
          <VignetteFilter />
        </Slide>
      ))}
    </StyledCarousel>
  );
}
