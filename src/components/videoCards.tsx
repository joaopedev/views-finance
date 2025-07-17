import React from "react";
import { Flex } from "@chakra-ui/react";
import VimeoPlayer from "./vimeoVideos";

const videoIds = [
  1066401656, 1099844696, 1099043999, 1094815419, 1100513906,
  1064365727, 1099892481, 1099020986, 1093837607, 620172276,
  1100254230, 1063281516, 583566769, 724083652, 568157800,
  1078821786, 1097665557, 983021496, 1090797153, 945935458,
  1052283071, 1099692577, 913165013, 588496072, 1030868189,
  1096005227, 620172276, 1088909783, 607528814, 1063281516,
  583566769, 724083652, 568157800,
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
