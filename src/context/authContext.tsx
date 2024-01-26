import React, {
  createContext,
  useContext,
  useState,
  ReactNode
} from "react";
import axios from "axios";

export interface UserData {
  balance: number;
  email: string;
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
  getUserData: () => Promise<void>;
  addEarnings: (earning: number) => void;
  updateUserData: (data: { balance?: number }) => Promise<void>;
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

  const getUserData = async () => {
    try {
      if (emailLogin) {
        const response = await axios.get(
          `http://localhost:3005/accountByEmail/${emailLogin}`
        );
  
        if (
          response.status === 200 &&
          response.data &&
          response.data.conta &&
          response.data.conta.email &&
          response.data.conta.balance !== undefined
        ) {
          const { balance, email } = response.data.conta as UserData;
          setTotalEarnings(balance);
          setemailLogin(email);
          setIsAuthenticated(true);
        } else {
          console.error("Dados do usuário incompletos ou inválidos:", response.data);
        }
      }
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
    }
  };

  const addEarnings = (earning: number) => {
    setTotalEarnings((prevTotal) => Number((prevTotal + earning).toFixed(2)));
  };

  // useEffect(() => {
  //   getUserData();
  // }, [emailLogin]);

  const claimBonus = () => {
    if (!bonusClaimed) {
      addEarnings(40);
      setBonusClaimed(true);
    }
  };

  const updateTotalEarnings = (earning: number) => {
    addEarnings(earning);
  };

  const updateUserData = async (data: { balance?: number }) => {
    try {
      if (emailLogin) {
        const updatedUserData = await axios.put(
          `http://localhost:3005/updateAccountByEmail/${emailLogin}`,
          data
        );

        if (
          updatedUserData.status === 200 &&
          updatedUserData.data &&
          updatedUserData.data.conta
        ) {
          const { balance } = updatedUserData.data.conta as UserData;
          setTotalEarnings(balance);
        }
      }
    } catch (error) {
      console.error("Erro ao atualizar dados do usuário:", error);
    }
  };

  const login = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailRegex.test(email)) {
      setemailLogin(email);
      setIsAuthenticated(true);
      return true;
    } else {
      console.log("E-mail inválido");
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const updateDailyGoalProgress = () => {
    setDailyGoalProgress((prevProgress) => Math.min(prevProgress + 10, 100));
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
        getUserData,
        addEarnings,
        updateUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
