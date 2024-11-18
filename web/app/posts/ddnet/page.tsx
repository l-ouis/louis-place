"use client";

import PageTemplate from "../pageTemplate.tsx";
import { content } from './md.ts';

export default function Page() {

  const title = "DDNet";
  const link = "https://ddnet.org";
  const code = "https://github.com/ddnet/ddnet";

  return (
    <PageTemplate title={title} link={link} code={code} content={content} />
  );
}
