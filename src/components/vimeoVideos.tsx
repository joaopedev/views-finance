import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@chakra-ui/react';
import Vimeo from '@vimeo/player';
import { useAuth } from '../context/authContext';

interface VimeoPlayerProps {
  videoId: number;
}

const VideoPlayer: React.FC<VimeoPlayerProps> = ({ videoId }) => {
  const playerRef = useRef<HTMLDivElement | null>(null);
  const { updateDailyGoalProgress } = useAuth();
  const [hasUpdatedProgress, setHasUpdatedProgress] = useState(false);

  useEffect(() => {
    const player = new Vimeo(playerRef.current!, {
      id: videoId,
      width: 640,
    });

    const handleVideoEnd = () => {
      player.getBuffered().then((buffered) => {
        console.log('Buffer do vídeo:', buffered);
      });

      if (!hasUpdatedProgress) {
        updateDailyGoalProgress();
        setHasUpdatedProgress(true);
      }

      console.log('Vídeo concluído');
    };

    player.on('ended', handleVideoEnd);

    return () => {
      player.off("ended")
    };
  }, [videoId, updateDailyGoalProgress, hasUpdatedProgress]);

  return (
    <Box>
      <Box ref={playerRef} />
    </Box>
  );
};

export default VideoPlayer;