import { Providers } from "@/app/providers";
import type { ReactNode } from "react";

export default function EnLayout({ children }: { children: ReactNode }) {
  return <Providers lang="en">{children}</Providers>;
}
