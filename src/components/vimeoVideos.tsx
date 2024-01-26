import React, { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import Vimeo from "@vimeo/player";
import { useAuth } from "../context/authContext";
import axiosInstance from "../utils/axiosInstance";

interface VimeoPlayerProps {
  videoId: number;
  email: string;
}

function calculateVideoEarning(videoDuration: number): number {
  const earningRates: Record<number, number> = {
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
    getUserData,
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
        try {
          const userData = (await getUserData()) as
            | { balance?: number }
            | undefined;
          const currentBalance = userData?.balance || 0;

          player.getDuration().then(async (duration: number) => {
            const earning = calculateVideoEarning(duration / 60);
            const newBalance = currentBalance + earning;

            try {
              await axiosInstance.post(
                "http://localhost:3005/add-balance-video",
                {
                  email: email,
                  balance: earning,
                }
              );
            } catch (error) {
              console.error("Erro ao enviar ganhos para o backend:", error);
            }

            const updatedUserData = await updateUserData({
              balance: newBalance,
            });

            console.log(updatedUserData);
            setVideoEarning(earning !== undefined ? earning : 0);
            updateTotalEarnings(earning);
            updateDailyGoalProgress();
            setHasUpdatedProgress(true);
          });
        } catch (error) {
          console.error("Erro ao obter dados do usuário:", error);
        }
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
    getUserData,
    email,
  ]);

  return <Box ref={playerRef} />;
};

export default VimeoPlayer;
