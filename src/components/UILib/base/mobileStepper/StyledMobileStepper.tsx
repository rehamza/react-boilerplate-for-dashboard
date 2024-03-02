'use client';
import styled from '@emotion/styled';
import { MobileStepper } from '@mui/material';

export const StyledMobileStepper = styled(MobileStepper)(({ theme }) => ({
  '& .MuiMobileStepper-root': {
    backgroundColor: '#f4f4f8',
    background: '#f4f4f8',
  },
  '& .MuiMobileStepper-dot.MuiMobileStepper-dotActive.MuiMobileStepper-dot': {
    backgroundColor: '#000',
  },
  '& .MuiMobileStepper-dot.MuiMobileStepper-dot': {
    marginRight: '5px',
  },
}));
