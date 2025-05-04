import Graph1 from "@/components/graph1";
import Graph2 from "@/components/graph2";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 max-w-4xl mx-auto">
      <Graph1 />
      <Graph2 />
    </main>
  );
}
