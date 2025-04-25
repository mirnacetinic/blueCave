export const dynamic = 'force-dynamic';

import Translate from "./components/Translate";
import { prisma } from "./lib/prisma";

export default async function Home() {
  const sailor = await prisma.sailor.findFirst({
    orderBy: {
      createdAt: "desc",
    },
  });
  return <Translate sailorName={sailor?.name} />;
}
