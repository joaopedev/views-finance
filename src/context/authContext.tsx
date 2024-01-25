import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";

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
  const [totalEarnings, setTotalEarnings] = useState<number>(0); // Inicializado com 0 para ser atualizado após a chamada à API
  const [bonusClaimed, setBonusClaimed] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Verificar se emailLogin está definido
        if (emailLogin) {
          const response = await axios.get(
            `http://localhost:3005/accountByEmail/${emailLogin}`
          );

          if (response.status === 200 && response.data && response.data.conta) {
            const { balance, email } = response.data.conta;
            setTotalEarnings(balance);
            setemailLogin(email);
            setIsAuthenticated(true);
          }
        }
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };

    fetchUserData();
  }, [emailLogin]);

  const claimBonus = () => {
    if (!bonusClaimed) {
      setTotalEarnings((prevTotal) => prevTotal + 40);
      setBonusClaimed(true);
    }
  };

  const updateTotalEarnings = (earning: number) => {
    setTotalEarnings((prevTotal) => {
      const newTotal = Number((prevTotal + earning).toFixed(2));
      return newTotal;
    });
  };

  const login = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      setIsAuthenticated(true);
      setemailLogin(email);
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
        setBonusClaimed
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
