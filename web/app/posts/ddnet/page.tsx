"use client";

import PageTemplate from "../pageTemplate.tsx";
import { content } from './md.ts';

export default function Page() {

  return (
    <PageTemplate content={content} />
  );
}
