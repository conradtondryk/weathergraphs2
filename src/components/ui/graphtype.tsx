"use client";

import { ChartColumnBig } from "lucide-react";
import { ChartLine } from "lucide-react";
import * as React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function GraphType() {
  const { graphType, setGraphType } = setGraphType();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (graphType === "column") {
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

  if (graphType === "line") {
    return (
      <Button
        variant="outline"
        size="icon"
        onClick={() => setGraphType("column")}
      >
        <ChartLine className="h-[1.2rem] w-[1.2rem] transition-all hover:cursor-pointer" />
      </Button>
    );
  }
}
