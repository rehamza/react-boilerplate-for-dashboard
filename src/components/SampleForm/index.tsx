import { useRef } from 'react';
import { BasePaper, TypographyComponent } from '../UILib';
import FormLayout from '../Layout/FormLayout';
import { style } from './style';
import { IRefData } from '../../types/ReactTypes';
import { steperLabel, steperHeight, marks, cancelPath } from '../../constants/FormStepper/menu';

export default function SampleForm() {
  // use decrement
  const generalRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const visibilityRef = useRef<HTMLDivElement>(null);
  const refData: IRefData[] = [
    { id: 3, ref: generalRef, threshold: 0.1 },
    { id: 2, ref: categoryRef, threshold: 0.5 },
    { id: 1, ref: visibilityRef, threshold: 1 },
  ];

  const handleSave = () => {
    console.log('click save');
  };

  return (
    <FormLayout
      steperLabel={steperLabel}
      steperHeight={steperHeight}
      marks={marks}
      cancelPath={cancelPath}
      handleSave={handleSave}
      refData={refData}
    >
      <div ref={generalRef}>
        <BasePaper elevation={0} sx={style.paper}>
          <TypographyComponent variant="h2">General Info</TypographyComponent>
        </BasePaper>
      </div>
      <div ref={categoryRef}>
        <BasePaper elevation={0} sx={style.paper}>
          <TypographyComponent variant="h2">Categories</TypographyComponent>
        </BasePaper>
      </div>
      <div ref={visibilityRef}>
        <BasePaper elevation={0} sx={style.paper}>
          <TypographyComponent variant="h2">Channel Visibility & Availability</TypographyComponent>
        </BasePaper>
      </div>
    </FormLayout>
  );
}
