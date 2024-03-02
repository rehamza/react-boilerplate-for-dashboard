import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { Breadcrumbs } from '../../types/Breadcrumb';

export interface BreadcrumbsContextType {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  breadcrumbs: Breadcrumbs[];
  setBreadcrumbs: React.Dispatch<React.SetStateAction<Breadcrumbs[]>>;
}

const BreadcrumbContext = createContext<BreadcrumbsContextType | null>(null);

interface BreadcrumbProviderProps {
  children: ReactNode;
}

export const BreadcrumbProvider: React.FC<BreadcrumbProviderProps> = ({ children }) => {
  const [title, setTitle] = useState<string>('Untitled');
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumbs[]>([]);

  return (
    <BreadcrumbContext.Provider value={{ title, breadcrumbs, setTitle, setBreadcrumbs }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

interface UseBreadcrumbs {
  title: string | undefined;
  breadcrumbs: Breadcrumbs[] | undefined;
}

export const useBreadcrumbs = (data?: UseBreadcrumbs | undefined) => {
  const context = useContext(BreadcrumbContext);

  if (!context) {
    throw new Error('useBreadcrumbs must be used within a BreadcrumbProvider');
  }

  const { setTitle, setBreadcrumbs } = context;

  useEffect(() => {
    if (data) {
      setBreadcrumbs(data?.breadcrumbs || []);
      setTitle(data?.title || 'Untitled');
    }
  }, []);

  return context;
};
