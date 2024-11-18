"use client";

import PageTemplate from "../pageTemplate";
import { content } from './md.ts';

export default function Page() {

  const title = "24cast.org";
  const link = "https://24cast.org";
  const code = "https://github.com/BPR-Data-Team";

  return (
    <PageTemplate title={title} link={link} code={code} content={content} />
  );
}
