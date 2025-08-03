import React from "react";
import { Flex } from "@chakra-ui/react";
import VimeoPlayer from "./vimeoVideos";

const videoIds = [
  998834196, 1106189787, 1105590979, 1085958891, 1105059948, 1082327151,
  1092555591, 1096005227, 620172276, 1088909783, 607528814, 1063281516,
  583566769, 724083652, 568157800, 1078821786, 389010276, 983021496,
  1061991239, 945935458, 1052283071, 913165013, 1042644022, 588496072,
  1030868189, 442567494, 781627907, 359281775, 335874600
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
