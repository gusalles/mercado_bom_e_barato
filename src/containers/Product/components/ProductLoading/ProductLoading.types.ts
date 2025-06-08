import { Skeleton, SkeletonProps, styled } from '@mui/material';

export const ImageLoading = styled(Skeleton)<SkeletonProps>(({ theme }) => ({
  height: 300,
  width: '100%',
  marginBottom: '40px',
  [theme.breakpoints.down('md')]: {
    height: 150,
    marginBottom: '24px',
  },
}));

export const TitleLoading = styled(Skeleton)<SkeletonProps>(({ theme }) => ({
  height: 60,
  width: '100%',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const DetailsContainerLoading = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '16px',
  [theme.breakpoints.down('md')]: {
    gap: '8px',
  },
}));

export const DetailsTitleLoading = styled(Skeleton)<SkeletonProps>(() => ({
  height: 50,
  width: '30%',
}));

export const DetailsLoading = styled(Skeleton)<SkeletonProps>(({ theme }) => ({
  height: 60,
  width: '80%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const DescriptionTitleLoading = styled(Skeleton)<SkeletonProps>(
  ({ theme }) => ({
    height: 50,
    width: '50%',
    marginTop: '40px',
    [theme.breakpoints.down('md')]: {
      marginTop: '24px',
    },
  })
);

export const DescriptionLoading = styled(Skeleton)<SkeletonProps>(() => ({
  height: 200,
  width: '100%',
}));
