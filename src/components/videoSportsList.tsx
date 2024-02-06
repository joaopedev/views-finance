import React, { useEffect, useState, useRef, useCallback } from "react";
import { Flex, Text } from "@chakra-ui/react";
import Axios from "axios";
// import VimeoPlayer from "./vimeoVideos";

interface Video {
  uri: string;
  embed: {
    html: string;
  };
}

const VideoSportList: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const fetchData = useCallback(async () => {
    if (loading) return;
  
    try {
      setLoading(true);
      const response = await Axios.get(
        `https://v1.nocodeapi.com/shiro666/vimeo/iYlVHGUpTXMruzPN/search?q=sports&page=2&perPage=15`
      );
      const newVideos: Video[] = response.data?.data ?? [];
      setVideos((prevVideos) => [...prevVideos, ...newVideos]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, [loading]);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const { scrollTop, clientHeight, scrollHeight } = containerRef.current;

    if (scrollHeight - scrollTop === clientHeight) {
      fetchData();
    }
  }, [fetchData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <Flex
      mt={8}
      direction={{ base: "column", md: "row" }}
      flexWrap="wrap"
      justify="center"
      align="center"
      gap={4}
      ref={containerRef}
      style={{ overflowY: "auto", height: "80vh" }}
    >
      {videos.map((video) => (
        <React.Fragment key={video.uri}>
          {video.embed && video.embed.html ? (
            <div
              dangerouslySetInnerHTML={{ __html: video.embed.html }}
              style={{ maxWidth: "100%", width: "320px" }}
            />
          ) : (
            <React.Fragment>
              {video.uri && (
                <Text color="red">
                  {`Video at ${video.uri} is not embeddable.`}
                </Text>
              )}
            </React.Fragment>
          )}
        </React.Fragment>
      ))}
    </Flex>
  );
};

export default VideoSportList;