"use client";

import { Stack, Center, Button, Text, Title, Divider, Group, SegmentedControl, ScrollArea, Image } from "@mantine/core";
import ProjectComponent from "./components/projectComponent";
import { useState, useEffect } from "react";
import { useMobile } from "./utils/useMobile";
import posts from "./posts/posts";

export default function Home() {

  const mobile = useMobile();

  const [start, setStart] = useState<boolean>(false);
  useEffect(() => {
    setStart(true);
  }, [start]);

  return (
    <div className="static bg-gray-100 w-[100vw] h-[100vh] flex items-center justify-center" 
    style={{ backgroundImage: 
    "linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
    backgroundSize: "20px 20px" }}>
      <div className={`absolute overflow-hidden overscroll-none transition-opacity duration-500 ${start ? 'opacity-100' : 'opacity-0'}`}>
        <ScrollArea className="h-[100vh] w-[100vw] flex items-center justify-center" type="never">
          <div className="w-[100%] h-[100%] flex items-center justify-center">
            <div className={`bg-white mt-[15vh] pb-[50px] ${mobile ? 'w-[100%]' : 'w-[60vw] max-w-[60vw] mx-[5vw]'} pt-[3vh] px-[2vw] rounded-lg shadow-md border border-gray-200`}>
            <Image
            className="relative -top-[3vh] left-0"
            w={128}
            h={128}
            src="https://github.com/ddnet/ddnet-accounts/blob/main/templates/email/b2.png?raw=true"/>
            <Stack gap="sm" >
            <Title order={1}>Hi!</Title>
            <Divider className="w-[80%]" size="xl" color="black" />
            <Text className="">
              I'm Louis, and I love anything that has to do with technology and computers!
              I also love music (both playing and producing), games, puzzles, and learning new things.
            </Text>
            <Text className="">
              I'm currently a sophomore at Brown University studying Computer Science and Applied Math.
            </Text>
            <br />

            <Title order={5}>Quick Links:</Title>
            <Group>
                <Button 
                component="a" color="rgba(235, 223, 204, 1)" c="rgba(99, 86, 77, 1)"
                href="https://www.github.com/l-ouis" target="_blank" rel="noopener noreferrer">
                  GitHub
                </Button>
            </Group>

            <span><br /> <br /> <br /></span>

            <Group justify="space-between">
              <Title order={2}>Projects</Title>
              {/* <SegmentedControl
                color="rgba(99, 86, 77, 1)"
                transitionDuration={300}
                data={['all', 'cs', 'music', 'fun']}
              /> */}
            </Group>
            <Divider className="w-[50%]" size="sm" />
            {
              posts.map((post, index) => {
                return (
                  <div key={index}>
                  <div className="h-[1rem]" />
                  <ProjectComponent 
                    key={index}
                    title={post.title}
                    desc={post.desc}
                    path={post.path}
                    site={post.site}
                    code={post.code}
                    image={post.image}
                    tags={post.tags}
                  />
                  </div>
                );
              })
            }
          </Stack>
          </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
