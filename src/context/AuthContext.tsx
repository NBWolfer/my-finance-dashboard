import React, { createContext, useState, useContext, ReactNode } from 'react';

// Context'in tutacağı verinin tipini tanımlıyoruz
interface AuthContextType {
  user: { name: string } | null;
  login: (name: string) => void;
  logout: () => void;
}

// Context'i oluşturuyoruz
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider bileşenini oluşturuyoruz. Bu bileşen tüm uygulamayı sarmalayacak.
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ name: string } | null>(null);

  // Bu örnekte şifre kontrolü yapmıyoruz, sadece kullanıcı adını alıp state'e kaydediyoruz.
  const login = (name: string) => {
    setUser({ name });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Context'i kolayca kullanmak için bir custom hook oluşturuyoruz
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};