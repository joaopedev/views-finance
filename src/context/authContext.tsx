import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import axiosInstance from "../utils/axiosInstance";

export interface UserData {
  balance: number;
  email: string;
  createAt: Date;
  ganhos_diarios?: number;
  upadate_at: Date;
  date_login: Date;
  date_request_value: Date;
}

interface AuthContextType {
  isAuthenticated: boolean;
  dailyGoalProgress: number;
  login: (email: string) => void;
  logout: () => void;
  updateDailyGoalProgress: () => void;
  videoEarning?: number | undefined;
  setVideoEarning: React.Dispatch<React.SetStateAction<number>>;
  totalEarnings: number;
  updateTotalEarnings: (earning: number) => void;
  claimBonus: () => void;
  bonusClaimed: boolean;
  setBonusClaimed: (value: boolean) => void;
  emailLogin: string | undefined;
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  addEarnings: (earning: number) => void;
  updateUserData: (data: { balance?: number }) => Promise<void>;
  showInsufficientModal: boolean;
  setShowInsufficientModal: React.Dispatch<React.SetStateAction<boolean>>;
  dailyGains: boolean;
  setDailyGains: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [dailyGoalProgress, setDailyGoalProgress] = useState(0);
  const [emailLogin, setemailLogin] = useState<string | undefined>(undefined);
  const [videoEarning, setVideoEarning] = useState<number>(0);
  const [totalEarnings, setTotalEarnings] = useState<number>(0);
  const [bonusClaimed, setBonusClaimed] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showInsufficientModal, setShowInsufficientModal] = useState(false);
  const [bonusClaimedDate, setBonusClaimedDate] = useState<string | null>(null);
  const [dailyGains, setDailyGains] = useState(false);

  const addEarnings = (earning: number) => {
    setTotalEarnings((prevTotal) => Number((prevTotal + earning).toFixed(2)));
  };

  const claimBonus = () => {
    const today = new Date().toLocaleDateString();
    if (!bonusClaimed || bonusClaimedDate !== today) {
      addEarnings(40);
      setBonusClaimed(true);
      setBonusClaimedDate(today);
    } else {
      return false;
    }
  };

  const updateTotalEarnings = (earning: number) => {
    addEarnings(earning);
  };

  const updateUserData = async (data: { balance?: number }) => {
    try {
      if (emailLogin) {
        const updatedUserData = await axiosInstance.put(
          `updateAccountByEmail/${emailLogin}`,
          data
        );

        if (
          updatedUserData.status === 200 &&
          updatedUserData.data &&
          updatedUserData.data.conta
        ) {
          const { balance } = updatedUserData.data.conta as UserData;
          localStorage.setItem("balance", balance.toString());
          setTotalEarnings(balance);
        }
      }
    } catch (error) {
      console.error("Erro ao atualizar dados do usuário:", error);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedAuth = localStorage.getItem("isAuthenticated");

    if (storedUser && storedAuth === "true") {
      setemailLogin(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      setemailLogin(email);
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user"); // limpar também o usuário
  };

  const updateDailyGoalProgress = () => {
    setDailyGoalProgress((prevProgress) => Math.min(prevProgress + 5, 100));
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
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
        setBonusClaimed,
        addEarnings,
        updateUserData,
        showInsufficientModal,
        setShowInsufficientModal,
        dailyGains,
        setDailyGains,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
