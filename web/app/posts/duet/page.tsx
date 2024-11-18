"use client";

import PageTemplate from "../pageTemplate.tsx";
import { content } from './md.ts';

export default function Page() {

  const title = "Duet";
  const code = "https://github.com/l-ouis/KAL-Duet";

  return (
    <PageTemplate title={title} code={code} content={content} />
  );
}
