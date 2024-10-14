"use client";

import PageTemplate from "../pageTemplate";
import { content } from './md.ts';

export default function Page() {

  return (
    <PageTemplate content={content} />
  );
}
