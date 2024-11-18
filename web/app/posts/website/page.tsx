"use client";

import PageTemplate from "../pageTemplate.tsx";
import { content } from './md.ts';

export default function Page() {

  const title = "louis.place";
  const code = "https://github.com/l-ouis/louis-place";

  return (
    <PageTemplate title={title} code={code} content={content} />
  );
}
