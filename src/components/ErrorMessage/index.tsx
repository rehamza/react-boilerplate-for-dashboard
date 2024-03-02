import { BoxComponent } from '../UILib';
import { errorMessage } from '../../constants/messages';

interface ErrorProps {
  readonly children?: JSX.Element;
}

export default function ErrorMessage({ children }: ErrorProps) {
  console.error(children);
  return (
    <BoxComponent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {errorMessage.SOMETHING_WRONG}
      {children}
    </BoxComponent>
  );
}
