import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  watchedVideos: string[];
  dailyGoalProgress: number;
  login: (email: string) => void;
  logout: () => void;
  updateDailyGoalProgress: () => void;
  videoEarning?: number | undefined,
  setVideoEarning: React.Dispatch<React.SetStateAction<number>>,
  totalEarnings: number;
  updateTotalEarnings: (earning: number) => void;
  claimBonus: () => void;
  bonusClaimed: boolean;
  emailLogin: string | undefined;
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  requestWithdrawal: () => void;
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
  const [videoEarning, setVideoEarning] = useState<number>(0);
  const [totalEarnings, setTotalEarnings] = useState<number>(300);
  const [bonusClaimed, setBonusClaimed] = useState(false);
  const [showForm, setShowForm] = useState(false); 

  const claimBonus = () => {
    if (!bonusClaimed) {
      setTotalEarnings((prevTotal) => prevTotal + 10);
      setBonusClaimed(true);
    }
  };
  const updateTotalEarnings = (earning: number) => {
    setTotalEarnings((prevTotal) => prevTotal + earning);
  };

  const login =  (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      setIsAuthenticated(true);
      setemailLogin(email);
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
    setDailyGoalProgress((prevProgress) => Math.min(prevProgress + 12.5, 100));
  };

  const requestWithdrawal = () => {
    // Lógica para solicitar a retirada
    // Pode ser adicionada aqui ou em uma função separada
    // Dependendo de como você deseja estruturar o código
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
        videoEarning,
        setVideoEarning,
        totalEarnings,
        updateTotalEarnings,
        claimBonus,
        bonusClaimed,
        emailLogin,
        showForm,
        setShowForm,
        requestWithdrawal
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};