import React from "react";
import { Flex } from "@chakra-ui/react";
import VimeoPlayer from "./vimeoVideos";

const videoIds = [
  857642601, 694186102, 714220746, 919411397, 1085144635, 1117857125,
  1105473906, 1110282810, 1109616543, 1116887889, 1117117497, 1117117497,
  1117117497, 1070840679, 1062059075, 1093837607, 1082377130, 1039746267,
  1101244533, 1079349198, 1099892481, 1064681837, 1088647394, 1061248313,
  1079623899, 1058332495, 1115564084, 1098738023, 1102980690, 1079623899
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
