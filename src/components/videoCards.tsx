import React from "react";
import { Flex } from "@chakra-ui/react";
import VimeoPlayer from "./vimeoVideos";

const videoIds = [
  86906020, 1104564189, 953276601, 877734203, 902571486, 949465928,
  891775405, 907652347, 905584986, 927357829, 869580762, 951746102,
  1108161994, 1109894298, 1109095185, 1107331490, 1109183962, 1099455053,
  1108766355, 1107428787, 1093837607, 1096005227, 620172276, 1088909783,
  607528814, 1063281516, 583566769, 724083652, 568157800
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
