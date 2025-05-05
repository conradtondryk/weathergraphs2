import Graph2 from "@/components/graph2";
import TemperatureGraph from "@/components/TemperatureGraph";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 max-w-4xl mx-auto">
      <TemperatureGraph />
      <Graph2 />
    </main>
  );
}
