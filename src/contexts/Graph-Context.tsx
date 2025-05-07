"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type GraphType = "bar" | "line";

interface GraphContextType {
  graphType: GraphType;
  setGraphType: (type: GraphType) => void;
}

const GraphContext = createContext<GraphContextType | undefined>(undefined);

export function GraphProvider({ children }: { children: ReactNode }) {
  const [graphType, setGraphType] = useState<GraphType>("bar");

  return (
    <GraphContext.Provider value={{ graphType, setGraphType }}>
      {children}
    </GraphContext.Provider>
  );
}

export function useGraphType() {
  const context = useContext(GraphContext);
  if (context === undefined) {
    throw new Error("useGraphType must be used within a GraphProvider");
  }
  return context;
}
