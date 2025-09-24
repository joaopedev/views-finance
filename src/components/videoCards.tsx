import React from "react";
import { Flex } from "@chakra-ui/react";
import VimeoPlayer from "./vimeoVideos";

const videoIds = [
  1121526266, 1119607860, 1120735582, 1113169877, 1119107684, 1119045354,
  1118851183, 1119107684, 1082377130, 1117117497, 1079623899, 1070840679,
  1093837607, 1062059075, 1101244533, 1079349198, 1099892481, 1064681837,
  1088647394, 1061248313, 1079623899, 1058332495, 1058332495, 724083652,
  1096005227, 620172276, 1088909783, 607528814, 1063281516, 583566769
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
