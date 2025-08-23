import React from "react";
import { Flex } from "@chakra-ui/react";
import VimeoPlayer from "./vimeoVideos";

const videoIds = [
  1102841980, 1089788907, 1103064159, 1106557677, 1098523964, 1108161994,
  1091044142, 1109095185, 1096005227, 620172276, 1088909783, 607528814,
  1063281516, 583566769, 724083652, 568157800, 588496072, 1030868189,
  442567494, 781627907, 359281775, 335874600, 883775791, 683616283,
  1105856452, 1062871920, 1094815419, 1039417305, 1073481634
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
