import { useUser } from '../../contexts/User';
import LoginUI from '../../components/Login';

export default function Login() {
  const { login } = useUser();
  return (
    <div>
      <LoginUI login={login} />
    </div>
  );
}
