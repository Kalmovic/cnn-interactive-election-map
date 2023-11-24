import { useStatesStore } from "@/stores/statesStore";
import { Zap } from "lucide-react";

export function VoteProgress(props) {
  const [demsWin, demsDisputed, battlegrounds, repsWin, repsDisputed] =
    useStatesStore((state) => state.voteProgress);
  const demsWidth = demsWin;
  const repsWidth = repsWin;
  const otherWidth = battlegrounds;
  const demsDisputedWidth = demsDisputed;
  const repsDisputedWidth = repsDisputed;

  return (
    <div className="flex items-center justify-center h-20 space-y-7">
      <div className=" w-full  px-48  bg-white p-4 rounded shadow-md flex items-center space-x-2  flex-col">
        <div className="flex items-center w-full justify-between space-x-6">
          <div className="flex items-center justify-center text-red-500 gap-2">
            <img
              src="src/assets/biden-small.png"
              alt="biden"
              width={32}
              height={32}
              className="rounded-full bg-democrat-win"
            />
            <div className="flex flex-col items-center justify-center text-blue-500">
              <p className="text-3xl font-bold text-blue-500 flex align-bottom justify-self-end">
                {demsWidth}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-amber-500">
            <div className="flex items-center space-x-2 justify-center">
              <Zap size={24} />
              <p className="text-3xl font-bold text-amber-500 flex align-bottom justify-self-end">
                {otherWidth}
              </p>
            </div>
            <p className="text-md text-black font-bold">Battleground</p>
          </div>
          <div className="flex items-center justify-center text-red-500 gap-2">
            <div className="flex flex-col items-center justify-center text-red-500">
              <p className="text-3xl font-bold text-red-500 flex align-bottom justify-self-end">
                {repsWidth}
              </p>
            </div>
            <img
              src="src/assets/trump-small.png"
              alt="trump"
              width={32}
              height={32}
              className="rounded-full bg-republican-win"
            />
          </div>
        </div>
        <div className="flex items-center align-baseline w-full justify-center">
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
        </div>
        <div className="absolute bottom-0 left-1/2 w-0.5 h-12 bg-black"></div>
      </div>
    </div>
  );
}
