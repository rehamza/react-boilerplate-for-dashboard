import { LinearProgress } from '@mui/material';
import { BoxComponent, TypographyComponent } from '../../../../UILib';

export default function UploadingCard({ progress, fileData }: any) {
  return (
    <BoxComponent
      sx={{
        maxWidth: 240,
        maxHeight: 240,
        display: 'inline-flex',
        flexDirection: 'column',
        position: 'relative',
        mb: 8,
        cursor: 'pointer',
      }}
    >
      <BoxComponent sx={{ height: '240px', width: '240px' }}>
        <img src={fileData} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
      </BoxComponent>
      <LinearProgress variant="determinate" value={progress} />
      <TypographyComponent>{progress}%</TypographyComponent>
    </BoxComponent>
  );
}
