"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton className="size-9" />;
  }

  if (theme === "system") {
    return (
      <Button variant="outline" size="icon" onClick={() => setTheme("light")}>
        <Monitor className="h-[1.2rem] w-[1.2rem] transition-all hover:cursor-pointer" />
      </Button>
    );
  }

  if (theme === "light") {
    return (
      <Button variant="outline" size="icon" onClick={() => setTheme("dark")}>
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all hover:cursor-pointer" />
      </Button>
    );
  }

  if (theme === "dark") {
    return (
      <Button variant="outline" size="icon" onClick={() => setTheme("system")}>
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all hover:cursor-pointer" />
      </Button>
    );
  }
}
