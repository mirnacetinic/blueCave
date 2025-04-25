export const dynamic = 'force-dynamic';

import { prisma } from "../lib/prisma";
import { redirect } from "next/navigation";

export default async function SailorPage() {
  async function handleAddSailor(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    if (name) {
      await prisma.sailor.create({ data: { name } });
    }
    redirect("/mornar");
  }

  const sailor = await prisma.sailor.findFirst({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 p-6 border rounded-2xl shadow-md bg-white">
        <h1 className="text-2xl font-bold mb-4">⛵ Trenutno stanje mornara</h1>

        <div className="mb-6 p-4 border rounded-lg bg-gray-100 text-lg">
          {sailor ? (
            <p>
              Ante i <span className="font-semibold">{sailor.name}</span>
            </p>
          ) : (
            <p>Nema nijednog mornara.</p>
          )}
        </div>

        <form action={handleAddSailor} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Ime novog mornara"
            className="p-2 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Dodaj mornara
          </button>
        </form>
      </div>
      <div className="flex justify-center mt-6">
        <a
          href="https://blue-cave.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-105">
             Ajde kući, starče
          </button>
        </a>
      </div>
    </div>
  );
}
