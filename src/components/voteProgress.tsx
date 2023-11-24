import { cn } from "@/lib/utils";
import { useStatesStore } from "@/stores/statesStore";
import { ChevronUp, ChevronUpSquare, Star, Zap } from "lucide-react";
import { Button } from "./ui/button";

export function VoteProgress(props) {
  const [demsWin, demsDisputed, battlegrounds, repsWin, repsDisputed] =
    useStatesStore((state) => state.voteProgress);
  const resetMap = useStatesStore((state) => state.resetMap);
  const demsWidth = demsWin;
  const repsWidth = repsWin;
  const otherWidth = battlegrounds;
  const demsDisputedWidth = demsDisputed;
  const repsDisputedWidth = repsDisputed;

  return (
    <div className="flex items-center justify-center space-y-7 sm:flex-col">
      <div className="w-full px-2 bg-white p-4 rounded shadow-md flex flex-col gap-2 sm:px-44">
        <div className="flex items-center w-full justify-between space-x-6">
          <div className="flex items-center justify-between min-w-[80px] min-h-[70px] gap-2 md:min-w-[134px] md:justify-start">
            <img
              src="src/assets/biden-small.png"
              alt="biden"
              width={48}
              height={48}
              className="rounded-full bg-democrat-win self-end hidden md:block"
            />
            <div className="flex flex-col items-center justify-between text-blue-500">
              <div className="self-start">
                <Star
                  size={22}
                  fill="#F59E0B"
                  className={cn(
                    "text-amber-500",
                    demsWidth + demsDisputedWidth >= 270
                      ? "visible"
                      : "invisible"
                  )}
                />
              </div>
              <p className="text-5xl font-normal text-blue-500 self-end justify-end">
                {demsWidth}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-amber-500">
            <div className="flex items-center space-x-2 justify-center">
              <Zap size={24} />
              <p className="text-3xl font-semibold text-amber-500">
                {otherWidth}
              </p>
            </div>
            <p className="text-md text-black font-semibold">Battleground</p>
          </div>
          <div className="flex items-center justify-end min-w-[80px] min-h-[70px] gap-2 md:min-w-[134px]">
            <div className="flex flex-col items-center justify-between text-red-500">
              <div className="self-start">
                <Star
                  size={22}
                  fill="#F59E0B"
                  className={cn(
                    "text-amber-500",
                    repsWidth + repsDisputedWidth >= 270
                      ? "visible"
                      : "invisible"
                  )}
                />
              </div>
              <p className="text-5xl font-normal text-red-500 self-start justify-start">
                {repsWidth}
              </p>
            </div>
            <img
              src="src/assets/trump-small.png"
              alt="trump"
              width={48}
              height={48}
              className="rounded-full bg-republican-win self-end hidden md:block"
            />
          </div>
        </div>
        <div className="relative flex items-center align-baseline w-full justify-center">
          <div
            className="bg-democrat-win h-8 w-full rounded-s-md"
            style={{ width: `${demsWidth}%` }}
          ></div>
          <div
            className="bg-democrat-disputed h-8 w-full"
            style={{ width: `${demsDisputedWidth}%` }}
          ></div>
          <div
            className="bg-vote-tossup h-8 w-full"
            style={{ width: `${otherWidth}%` }}
          ></div>
          <div
            className="bg-republican-disputed h-8 w-full"
            style={{ width: `${repsDisputedWidth}%` }}
          ></div>
          <div
            className="bg-republican-win h-8 w-full rounded-e-md"
            style={{ width: `${repsWidth}%` }}
          ></div>
          <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-black"></div>
        </div>
        <div className="flex items-center justify-between text-black">
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div className="flex flex-col items-center">
            <ChevronUp height={16} width={16} color="black" />
            <span className="text-sm text-black font-bold">270 to Win</span>
          </div>
          <Button
            variant="outline"
            className="p-1 text-center text-xs font-semibold md:text-md md:p-4"
            onClick={resetMap}
          >
            reset map
          </Button>
        </div>
      </div>
    </div>
  );
}
