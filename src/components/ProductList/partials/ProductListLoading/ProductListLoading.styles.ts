import { Skeleton, SkeletonProps, styled } from '@mui/material';

export const LoadingContainer = styled('div')(({ theme }) => ({
  padding: '16px',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export const LoadingContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    marginLeft: '16px',
    width: 'calc(100% - 116px)',
  },
}));

export const ImageLoading = styled(Skeleton)<SkeletonProps>(({ theme }) => ({
  height: 200,
  width: '100%',
  [theme.breakpoints.down('md')]: {
    height: 100,
    width: 100,
  },
}));

export const TitleLoading = styled(Skeleton)<SkeletonProps>(() => ({
  width: '80%',
  marginTop: '8px',
}));

export const SubTitleLoading = styled(Skeleton)<SkeletonProps>(() => ({
  width: '60%',
  marginTop: '4px',
}));

export const ButtonLoading = styled(Skeleton)<SkeletonProps>(({ theme }) => ({
  width: '100%',
  height: 56,
  marginTop: '8px',
  [theme.breakpoints.down('md')]: {
    height: 32,
    marginTop: '8px',
  },
}));
