import { BoxComponent } from '../UILib';
import { errorMessage } from '../../constants/messages';

export default function NotFound() {
  return (
    <BoxComponent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1>{errorMessage.NOT_FOUND}</h1>
      <p>{errorMessage.NOT_FOUND_DESCRIPTION}</p>
    </BoxComponent>
  );
}
