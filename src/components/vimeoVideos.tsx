import React, { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import Vimeo from "@vimeo/player";
import { useAuth } from "../context/authContext";
import axiosInstance from "../utils/axiosInstance";

interface VimeoPlayerProps {
  videoId: number;
  email: string;
  data_login?: Date;
}

function calculateVideoEarning(videoDuration: number): number {
  const earningRates: Record<number, number> = {
    1: 3,
    2: 4,
    3: 5,
    4: 6,
    5: 7,
    6: 8,
    7: 10,
    8: 11,
    9: 14,
    10: 17,
  };
  const effectiveDuration = Math.min(videoDuration, 10);
  const rateKeys = Object.keys(earningRates).map(Number);
  const selectedRate =
    rateKeys.find(
      (rate) => effectiveDuration >= rate && effectiveDuration < rate + 1
    ) || 0;
  const earning = selectedRate ? earningRates[selectedRate] : 0;
  const roundedEarning = Math.round(earning * 100) / 100;

  return roundedEarning;
}

const VimeoPlayer: React.FC<VimeoPlayerProps> = ({ videoId, email }) => {
  const {
    updateUserData,
    updateTotalEarnings,
    setVideoEarning,
    updateDailyGoalProgress,
  } = useAuth();
  const playerRef = useRef<HTMLDivElement | null>(null);
  const [hasUpdatedProgress, setHasUpdatedProgress] = useState(false);

  useEffect(() => {
    let player: Vimeo;
  
    const handleVideoEnd = async () => {
      if (!hasUpdatedProgress) {
        player.getDuration().then(async (duration: number) => {
          const currentDate = new Date().toISOString();
          if (isNaN(duration)) {
            console.error("Duração do vídeo inválida:", duration);
            return;
          }
          const earning = calculateVideoEarning(duration / 60);
          try {
            await axiosInstance.post("add-balance-video", {
              email: email,
              balance: earning,
              ganhos_diarios: earning,
              data_login: currentDate,
            });
          } catch (error) {
            console.error("Erro ao enviar ganhos para o backend:", error);
          }
  
          setVideoEarning(earning !== undefined ? earning : 0);
          updateTotalEarnings(earning);
          updateDailyGoalProgress();
          setHasUpdatedProgress(true);
        });
      }
    };
  
    if (playerRef.current) {
      player = new Vimeo(playerRef.current, {
        id: videoId,
        width: 320,
      });
  
      player.on("ended", handleVideoEnd);
      player.getDuration();
    }
  
    return () => {
      if (player) {
        player.off("ended");
      }
    };
  }, [
    videoId,
    updateUserData,
    updateDailyGoalProgress,
    setHasUpdatedProgress,
    setVideoEarning,
    updateTotalEarnings,
    hasUpdatedProgress,
    email,
  ]);


  return <Box ref={playerRef} />;
};

export default VimeoPlayer;
