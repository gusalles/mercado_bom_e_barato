import { styled } from '@mui/material';
import Image from 'next/image';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

export const StyledCarousel = styled(Swiper)<SwiperProps>(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 300,
  borderRadius: 4,
  [theme.breakpoints.down('sm')]: {
    borderRadius: 0,
    height: 150,
  },
}));

export const Slide = styled(SwiperSlide)(() => ({
  position: 'relative',
  width: '100%',
  height: '100%',
}));

export const SlideImage = styled(Image)(() => ({
  objectFit: 'contain',
}));

export const VignetteFilter = styled('span')(() => ({
  position: 'absolute',
  inset: 0,
  background: `radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0, 0, 0, 0.082) 100%)`,
  pointerEvents: 'none',
}));
