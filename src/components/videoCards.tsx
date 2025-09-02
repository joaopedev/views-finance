import React from "react";
import { Flex } from "@chakra-ui/react";
import VimeoPlayer from "./vimeoVideos";

const videoIds = [
  1018644295, 1066401656, 1015908690, 1103959085, 1113063867, 1099582089,
  1112540889, 1113006112, 1102841980, 1113240264, 1103064159, 607528814,
  1030868189, 583566769, 724083652, 568157800, 588496072, 1105856452,
  1062871920, 1094815419, 1039417305, 1073481634, 1018644295, 1066401656,
  1099582089, 893534598, 644908467, 1099455053, 1098523964
];

const VideoCards: React.FC = () => {
  const emailLogin = localStorage.getItem("emailLogin") || "";
  return (
    <Flex
      mt={8}
      direction={{ base: "column", md: "row" }}
      flexWrap="wrap"
      justify="center"
      align="center"
      gap={4}
    >
      {videoIds.map((id) => (
        <VimeoPlayer key={id} email={emailLogin} videoId={id} />
      ))}
    </Flex>
  );
};

export default VideoCards;
