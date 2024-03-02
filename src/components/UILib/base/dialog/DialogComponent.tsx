'use client';
import styled from '@emotion/styled';
import { Dialog } from '@mui/material';

export const DialogComponent = styled(Dialog)(({ theme }) => ({
  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(220, 221, 225, 0.7)',
  },
  '& .MuiDialog-container .MuiPaper-root': {
    boxShadow: 'none',
  },

  '& .MuiDialog-paper': {
    borderRadius: '20px',
  },
}));
