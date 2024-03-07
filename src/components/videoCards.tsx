import React from "react";
import { Flex } from "@chakra-ui/react";
import VimeoPlayer from "./vimeoVideos";

const VideoCards: React.FC = () => {
  const emailLogin = localStorage.getItem("emailLogin") || "";
  const vimeoVideoPrimeiroExperimental = 909768963;
  const vimeoVideoIdAnimation = 915208708;
  const vimeoVideoMusician = 918618154;
  const vimeoVideoSports = 910072870;
  const vimeoVideoExperimental = 893263974;
  const vimeoVideoMusicianRapper = 886818636;
  const vimeoVideoMusicianExperimental2 = 885684703;
  const vimeoVideoMusicianExperimental3 = 884381349;
  const vimeoVideoMusicianExperimental4 = 910178392;
  // const vimeoVideoMusicianExperimental5 = 901621701;
  const vimeoVideoMusicianExperimental6 = 61942488;
  const vimeoVideoMusicianExperimental7 = 44720014;
  const vimeoVideoMusicianExperimental8 = 29020023;
  const vimeoVideoMusicianExperimenta19 = 73694145;
  const vimeoVideoMusicianExperimenta20 = 47517765;
  const vimeoVideoMusicianExperimenta21 = 29074357;
  const vimeoVideoMusicianExperimenta22 = 26059875;
  const vimeoVideoMusicianExperimenta29 = 29233934;
  const vimeoVideoMusicianExperimenta30 = 31897754;
  const vimeoVideoMusicianExperimenta31 = 38937783;
  const vimeoVideoMusicianExperimenta32 = 55286384;
  const vimeoVideoMusicianExperimenta33 = 18117969;
  const vimeoVideoMusicianExperimenta34 = 5206660;
  const vimeoVideoMusicianExperimenta35 = 74700025;
  const vimeoVideoMusicianExperimenta36 = 77430178;
  const vimeoVideoMusicianExperimenta37 = 39078758;
  const vimeoVideoMusicianExperimenta38 = 342760123;
  const vimeoVideoMusicianExperimenta39 = 358920139;
  const vimeoVideoMusicianExperimenta40 = 321329074;
  const vimeoVideoMusicianExperimenta41 = 377022828;
  const vimeoVideoMusicianExperimenta42 = 275637879;
  const vimeoVideoMusicianExperimenta43 = 885917167;
  const vimeoVideoMusicianExperimenta44 = 380553672;
  const vimeoVideoMusicianExperimenta45 = 903371114;
  const vimeoVideoMusicianExperimenta46 = 375957610;
  const vimeoVideoMusicianExperimenta47 = 249654935;
  const vimeoVideoMusicianExperimenta48 = 250231574;
  const vimeoVideoMusicianExperimenta49 = 236751999;
  const vimeoVideoMusicianExperimenta50 = 252948828;
  const vimeoVideoMusicianExperimenta51 = 254460171;
  const vimeoVideoMusicianExperimenta52 = 254211423;
  const vimeoVideoMusicianExperimenta53 = 253898691;
  const vimeoVideoMusicianExperimenta54 = 253804159;
  const vimeoVideoMusicianExperimenta55 = 251957445;

  return (
    <Flex
      mt={8}
      direction={{ base: "column", md: "row" }}
      flexWrap="wrap"
      justify="center"
      align="center"
      gap={4}
    >
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoPrimeiroExperimental)}
      />
      <VimeoPlayer email={emailLogin} videoId={Number(vimeoVideoIdAnimation)} />
      <VimeoPlayer email={emailLogin} videoId={Number(vimeoVideoMusician)} />
      <VimeoPlayer email={emailLogin} videoId={Number(vimeoVideoSports)} />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoExperimental)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianRapper)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimental2)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimental3)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimental4)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimental8)}
      />
      {/* <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimental5)}
      /> */}
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimental7)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta19)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta20)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta21)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta22)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta29)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta30)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimental6)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta22)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta29)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta30)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta47)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimental6)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta42)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta43)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta44)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta45)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta46)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta48)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta49)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta50)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta51)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta52)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta53)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta54)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta38)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta55)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta39)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta40)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta41)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta33)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta32)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta35)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta31)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta34)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta36)}
      />
      <VimeoPlayer
        email={emailLogin}
        videoId={Number(vimeoVideoMusicianExperimenta37)}
      />
    </Flex>
  );
};

export default VideoCards;
