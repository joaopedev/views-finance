import React, { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import Vimeo from "@vimeo/player";
import { useAuth } from "../context/authContext";

interface VimeoPlayerProps {
  videoId: number;
}

function calculateVideoEarning(videoDuration: number): number {
  console.log("Video Duration:", videoDuration);

  const earningRates: Record<number, number> = {
    2: 3.41,
    3: 4.32,
    4: 5.23,
    5: 6.14,
    6: 7.55,
    7: 9.67,
    8: 10.76,
    9: 13.98,
    10: 17.1,
  };
  const effectiveDuration = Math.min(videoDuration, 10);
  const rateKeys = Object.keys(earningRates).map(Number);
  const selectedRate =
    rateKeys.find(
      (rate) => effectiveDuration >= rate && effectiveDuration < rate + 1
    ) || 0;
  const earning = selectedRate ? earningRates[selectedRate] : 0;
  const roundedEarning = Math.round(earning * 100) / 100;

  console.log("Earning:", roundedEarning);
  return roundedEarning;
}

const VimeoPlayer: React.FC<VimeoPlayerProps> = ({ videoId }) => {
  const playerRef = useRef<HTMLDivElement | null>(null);
  const { updateDailyGoalProgress, setVideoEarning, updateTotalEarnings } =
    useAuth();
  const [hasUpdatedProgress, setHasUpdatedProgress] = useState(false);

  useEffect(() => {
    const player = new Vimeo(playerRef.current!, {
      id: videoId,
      width: 640,
    });

    const handleVideoEnd = () => {
      player.getDuration().then((duration) => {
        const earning = calculateVideoEarning(duration / 60);
        setVideoEarning(earning !== undefined ? earning : 0);
        updateTotalEarnings(earning);
        updateDailyGoalProgress();
        setHasUpdatedProgress(true);
      });
    };

    player.on("ended", handleVideoEnd);
    player.getDuration();

    return () => {
      player.off("ended");
    };
  }, [
    videoId,
    updateDailyGoalProgress,
    setHasUpdatedProgress,
    setVideoEarning,
  ]);

  return (
    <Box>
      <Box ref={playerRef} />
    </Box>
  );
};

export default VimeoPlayer;
