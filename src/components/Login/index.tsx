import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BaseTextField,
  BaseFormControl,
  CardComponent,
  BaseContainer,
  TypographyComponent,
} from '../UILib';
import ButtonComponent from '../Shared/Button';
import style from './login.style';

interface LoginProps {
  login: (email: string) => void;
}

export default function Login({ login }: LoginProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onLoginClick = async () => {
    await login(email);
    navigate('/');
  };
  return (
    <BaseContainer sx={style.container}>
      <CardComponent sx={style.card}>
        <BaseFormControl sx={style.form}>
          <TypographyComponent variant="h1" sx={style.h1}>
            Login
          </TypographyComponent>
          <BaseTextField
            id="my-input"
            aria-describedby="my-helper-text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
          <ButtonComponent text="Login" variant="outlined" onClick={onLoginClick} />
        </BaseFormControl>
      </CardComponent>
    </BaseContainer>
  );
}
