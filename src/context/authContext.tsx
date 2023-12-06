import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  watchedVideos: string[];
  dailyGoalProgress: number;
  login: (email: string) => void;
  logout: () => void;
  updateDailyGoalProgress: () => void;
  emailLogin: string | undefined;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [watchedVideos, setWatchedVideos] = useState<string[]>([]);
  const [dailyGoalProgress, setDailyGoalProgress] = useState(0);
  const [emailLogin, setemailLogin] = useState<string | undefined>(undefined);


  const login = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      setIsAuthenticated(true);
      setemailLogin(email);
      console.log(email)
      return email;
    } else {
      console.log("E-mail inválido");
      return undefined;
    }
  };


  const logout = () => {
    setIsAuthenticated(false);
  };

  const updateDailyGoalProgress = () => {
    setDailyGoalProgress((prevProgress) => Math.min(prevProgress + 25, 100));
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        watchedVideos,
        login,
        logout,
        dailyGoalProgress,
        updateDailyGoalProgress,
        emailLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};