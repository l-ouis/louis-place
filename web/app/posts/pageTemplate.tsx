"use client";

import { Center, ScrollArea } from "@mantine/core";
import Link from 'next/link';
import ProjectPanel from "../components/projectPanel";
import { useState, useEffect } from "react";
import { useMobile } from "../utils/useMobile";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Title } from "@mui/icons-material";

interface PageProps {
    title: string;
    link?: string;
    code?: string;
    content: string;
}

export default function PageTemplate(props: PageProps) {

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
      {mobile ? 
      <div 
          className={`absolute overflow-hidden overscroll-none top-[5vh] w-[80vw] h-[7vh] bg-[rgba(255,255,255,1)] cursor-pointer rounded-lg shadow-md transition-opacity duration-500 ${start ? 'opacity-100' : 'opacity-0'} hover:bg-[rgba(225,225,225,1)]`}
          style={{ cursor: 'pointer', zIndex: 1 }} 
      >
        <Link href="/">
          <div className="h-[100%] w-[100%] flex items-center justify-center">
            <Center className="w-[100%] h-[100%]">
            <ArrowBackIosIcon style={{ color: "rgba(99, 86, 77, 1)" }} className="ml-2" />
            </Center>
          </div>
        </Link>
      </div>
      :
      <div 
          className={`absolute overflow-hidden overscroll-none top-[15vh] left-[14vw] w-[5vw] h-[5vw] bg-[rgba(255,255,255,1)] cursor-pointer rounded-lg shadow-md transition-opacity duration-500 ${start ? 'opacity-100' : 'opacity-0'} hover:bg-[rgba(225,225,225,1)]`}
          style={{ cursor: 'pointer', zIndex: 1 }} 
      >
        <Link href="/">
          <div className="h-[100%] w-[100%] flex items-center justify-center">
            <Center className="w-[100%] h-[100%]">
            <ArrowBackIosIcon style={{ color: "rgba(99, 86, 77, 1)" }} className="ml-2" />
            </Center>
          </div>
        </Link>
      </div>
      }
      <div className={`overflow-hidden overscroll-none transition-opacity duration-500 ${start ? 'opacity-100' : 'opacity-0'}`}>
        <ScrollArea className="h-[100vh] w-[100vw]" type="never">
          <div className="h-[100%] w-[100%] flex items-center justify-center">
            <ProjectPanel title={props.title} link={props.link} code={props.code} content={props.content} />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
