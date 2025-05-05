import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/hover-card";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";

const portfolioLink = (
  <Link href="https://portfolio.ctondryk.dev" className="text-blue-500">
    portfolio.ctondryk.dev
  </Link>
);

export function HoverCard1() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@ctondryk.dev</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@ctondryk.dev</h4>
            <p className="text-sm">
              A project for my portfolio, view my other work at {portfolioLink}
            </p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
