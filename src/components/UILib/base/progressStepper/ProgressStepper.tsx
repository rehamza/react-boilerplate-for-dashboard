'use client';
import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import styled from '@emotion/styled';
import { StepIconProps } from '@mui/material/StepIcon';
import { StepConnector } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { BoxComponent } from '../box/Box';

interface ProgressStepperProps {
  activeStep: number;
  totalSteps: number;
}

export const ProgressStepper: React.FC<ProgressStepperProps> = ({ activeStep, totalSteps }: ProgressStepperProps) => {
  const stepArray = Array.from({ length: totalSteps }, (_, index) => index);
  return (
    <BoxComponent sx={{ width: '60%', margin: '0px auto' }}>
      <Stepper activeStep={activeStep} connector={<StyledStepConnector activeStep={activeStep} />}>
        {stepArray.map((label, index) => {
          const stepProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel StepIconComponent={StepComponentIcon} />
            </Step>
          );
        })}
      </Stepper>
    </BoxComponent>
  );
};

function StepComponentIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {completed ? <DoneIcon sx={{ height: '15px' }} /> : null}
    </ColorlibStepIconRoot>
  );
}

const StyledStepConnector = styled(StepConnector)<{ activeStep: number }>(({ theme, activeStep }) => ({
  backgroundColor: '#888d95',
  marginLeft: '-16px',
  marginRight: '-8px',
  height: '2px',
  '&.Mui-active': {
    backgroundColor: '#EF8549',
    border: 'none',
  },
  '&.Mui-completed': {
    backgroundColor: '#EF8549',
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  border: ownerState.completed ? '2px solid #ef8549' : '2px solid #888d95',
  zIndex: 1,
  color: '#fff',
  width: 22,
  height: 22,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    border: '7px solid #ef8549',
  }),
  backgroundColor: ownerState.completed ? '#ef8549' : undefined,
}));
