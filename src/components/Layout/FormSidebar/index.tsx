import { BaseStack, BaseSlider } from '../../UILib';
import { useState, useEffect, RefObject } from 'react';
import theme from '../../../theme/theme';
import { IRefData } from '../../../types/ReactTypes';

interface FormSidebarProps {
  steperLabel: string;
  steperHeight: number;
  marks: { value: number; label: string }[];
  refData: IRefData[];
}

export default function FormSidebar({ steperLabel, steperHeight, marks, refData }: FormSidebarProps) {
  const [stepperDefaultValue, setStepperDefaultValue] = useState<number | number[]>(3);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refData?.forEach((item, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setStepperDefaultValue(refData.length - index);
          } else if (!entry.isIntersecting) {
            setStepperDefaultValue(refData.length - index + 1);
          }
        },
        { threshold: item.threshold } // Example condition for threshold
      );

      if (item.ref.current) {
        observer.observe(item.ref.current);
      }

      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => {
        refData?.forEach((item) => {
          if (item.ref.current) {
            observer.unobserve(item.ref.current);
          }
        });
      });
    };
  }, []);

  const onClickLabel = (v: number | number[]) => {
    handleSteperLabel(v);
  };

  const handleSteperLabel = (id: number | number[]) => {
    const item = refData?.find((item) => item.id === id);
    if (item) {
      scrollToSection(item.ref);
    }
  };
  const scrollToSection = (sectionRef: RefObject<HTMLElement>) => {
    if (sectionRef.current) {
      const yOffset = -200;
      const yPosition = sectionRef.current.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  };

  return (
    <BaseStack sx={{ height: steperHeight, my: 2 }} direction="row">
      <BaseSlider
        getAriaLabel={() => steperLabel || 'stepper'}
        orientation="vertical"
        value={stepperDefaultValue}
        onChangeCommitted={(e, v) => {
          onClickLabel(v);
          setStepperDefaultValue(v);
        }}
        track="inverted"
        valueLabelDisplay="off"
        marks={marks}
        min={1}
        max={marks?.length}
        sx={{
          pointerEvents: 'none',
          borderRadius: 0,
          '& .MuiSlider-markLabel': {
            pointerEvents: 'auto',
          },
          '& .MuiSlider-track': {
            backgroundColor: theme.palette.grey[200],
            border: 'none',
            width: '0.3rem',
          },
          '& .MuiSlider-mark': {
            display: 'none',
          },
        }}
      />
    </BaseStack>
  );
}
