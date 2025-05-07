"use client";

import { ChartColumnBig } from "lucide-react";
import { ChartLine } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { useGraphType } from "@/contexts/graph-context";

export default function GraphButton() {
  const { graphType, setGraphType } = useGraphType();

  if (graphType === "bar") {
    return (
      <Button
        variant="outline"
        size="icon"
        onClick={() => setGraphType("line")}
      >
        <ChartColumnBig className="h-[1.2rem] w-[1.2rem] transition-all hover:cursor-pointer" />
      </Button>
    );
  }

  return (
    <Button variant="outline" size="icon" onClick={() => setGraphType("bar")}>
      <ChartLine className="h-[1.2rem] w-[1.2rem] transition-all hover:cursor-pointer" />
    </Button>
  );
}
