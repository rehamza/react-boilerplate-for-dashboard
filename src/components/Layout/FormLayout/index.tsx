import { ReactNode } from 'react';
import Topbar from '../Topbar';
import { BoxComponent, GridComponent } from '../../UILib';
import FormSidebar from '../FormSidebar';
import { IRefData } from '../../../types/ReactTypes';

interface FormLayoutProps {
  children: ReactNode;
  steperLabel: string;
  steperHeight: number;
  marks: { value: number; label: string }[];
  cancelPath?: string;
  handleSave: () => void;
  refData: IRefData[];
}

export default function FormLayout({
  children,
  steperHeight,
  steperLabel,
  marks,
  refData,
  cancelPath,
  handleSave,
}: FormLayoutProps) {
  const isForm = true;

  return (
    <BoxComponent>
      <Topbar isForm={isForm} cancelPath={cancelPath} handleSave={handleSave} />

      <GridComponent spacing={2} container>
        <GridComponent item sm={2} xs={6}>
          <BoxComponent
            sx={{
              position: 'fixed',
              top: '170px',
              width: '100%',
              maxHeight: 'calc(100vh - 200px)',
              padding: '30px 0px 20px 30px',
            }}
          >
            <FormSidebar steperLabel={steperLabel} steperHeight={steperHeight} marks={marks} refData={refData} />
          </BoxComponent>
        </GridComponent>
        <GridComponent item sm={isForm ? 8 : 12} xs={12} sx={{ zIndex: 10 }}>
          <BoxComponent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              padding: '200px 50px 20px 50px',
              gap: 3,
              overflowY: 'auto',
              zIndex: '10',
            }}
          >
            {children}
          </BoxComponent>
        </GridComponent>
      </GridComponent>
    </BoxComponent>
  );
}
