import React from "react";
import { Flex } from "@chakra-ui/react";
import VimeoPlayer from "./vimeoVideos";

const videoIds = [
  1108123122, 1099582089, 1096930005, 1113006112, 1113394307, 1103959085,
  1113063867, 1101244533, 1079349198, 1099892481, 1064681837, 1088647394,
  1061248313, 1079623899, 1058332495, 1102980690, 1079623899, 1109095185,
  453768973, 1109894298, 377193784, 1098738023, 1057583208, 537369045,
  763941723, 1102841980, 1113006112, 859328016, 855134283
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
