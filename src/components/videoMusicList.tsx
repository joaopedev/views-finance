import React, { useEffect, useState, useRef } from "react";
import { Flex, Text } from "@chakra-ui/react";
import Axios from "axios";
import VimeoPlayer from "./vimeoVideos";

interface Video {
  uri: string;
  embed: {
    html: string;
  };
}

const VideoMusicList: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const fetchData = async () => {
    if (loading) return;

    try {
      setLoading(true);
      const response = await Axios.get(
        `https://v1.nocodeapi.com/joaopedev/vimeo/jVOSJzuLGyTSCQKv/search?q=music&page=${page}`
      );
      const newVideos: Video[] = response.data?.data ?? [];
      setVideos((prevVideos) => [...prevVideos, ...newVideos]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollTop, clientHeight, scrollHeight } = containerRef.current;

    if (scrollHeight - scrollTop === clientHeight) {
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <div dangerouslySetInnerHTML={{ __html: video.embed.html }} />
          ) : (
            <Text color="red">
              Video at {video.uri} is not embeddable.
            </Text>
          )}
        </React.Fragment>
      ))}
    </Flex>
  );
};

export default VideoMusicList;