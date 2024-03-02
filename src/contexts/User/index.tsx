import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { User } from '../../types/User/auth';
import { setToLocalStorage, removeLocalStorage, getLocalStorage } from '../../utils/Storage/localStorage';
import { environment } from '../../configs/environments/environment';
export interface AuthContextType {
  user: User | null;
  login: (email: string) => void;
  logout: (role: string) => void;
  isloading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    const verifiedUser = getLocalStorage('user');
    // It is not working
    console.log(
      'environments',
      process.env.API_URL,
      process.env.PORT,
      environment.NODE_ENV,
      environment.PORT,
      environment.API_URL
    );
    setUser(verifiedUser);
    setLoading(false);
  }, []);

  const login = (email: string) => {
    const verifiedUsers = ['aio@aioapp.com'];
    const isVerify = verifiedUsers.some((v) => v === email);
    if (isVerify) {
      const verifyUser = {
        id: '1',
        role: 'owner',
        token: 'abcdddd',
        email,
      };
      setToLocalStorage('user', verifyUser);
      setUser(verifyUser);
    }
  };
  const logout = () => {
    removeLocalStorage('user');
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, isloading, login, logout }}>{children}</AuthContext.Provider>;
};

export const useUser = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
