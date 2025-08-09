import React from "react";
import { Flex } from "@chakra-ui/react";
import VimeoPlayer from "./vimeoVideos";

const videoIds = [
  998834196, 1102980690, 1105590979, 1070139125, 936554382, 1105856452,
  1107063634, 1073481634, 1096005227, 620172276, 1088909783, 607528814,
  1063281516, 583566769, 724083652, 568157800, 442567494, 781627907,
  1030868189, 588496072, 359281775, 335874600, 883775791, 683616283,
  857629415, 660517201, 778246055, 875784142, 869060204
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
