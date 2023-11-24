import { VoteMap } from "./components/voteMap";
import { VoteProgress } from "./components/voteProgress";

const App = () => {
  return (
    <main className="w-screen h-screen">
      <h1 className="w-full text-border border uppercase h-fit py-4 flex justify-center items-center text-4xl font-bold text-violet-900 bg-gradient-to-r from-blue-600 via-purple-200 to-red-500">
        road to 270
      </h1>
      <span className="w-full py-4 flex justify-center items-center text-md px-auto text-center md:px-48 lg:px-[200px] xl:px-[400px] 2xl:px-[600px]">
        It takes 270 electoral votes to win the 2020 presidential election.
        Build your own road to 270 starting with a map of reliably red and blue
        states, as well as the battlegrounds CNN is tracking most closely. You
        also can view CNN's current race ratings or use the 2016 electoral map
        as a starting point. Clicking an individual state will change who is
        winning its electoral votes.
      </span>
      <VoteProgress />
      <div className="w-full flex flex-col items-center justify-center p-2 bg-slate-100">
        <div className="flex items-center justify-center space-x-1 text-center md:space-x-4">
          <div className="flex flex-col items-center justify-center space-x-2 md:flex">
            <div className="w-4 h-4 bg-democrat-win"></div>
            <p className="text-xs md:text-sm font-normal text-gray-900">
              Solid Democratic
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-x-2 md:flex">
            <div className="w-4 h-4 bg-democrat-disputed"></div>
            <p className="text-xs md:text-sm font-normal text-gray-900">
              Lean Democratic
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-x-2 md:flex">
            <div className="w-4 h-4 bg-vote-tossup"></div>
            <p className="text-xs md:text-sm font-normal text-gray-900">
              Battleground State
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-x-2 md:flex">
            <div className="w-4 h-4 bg-republican-disputed"></div>
            <p className="text-xs md:text-sm font-normal text-gray-900">
              Lean Republican
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-x-2 md:flex">
            <div className="w-4 h-4 bg-republican-win"></div>
            <p className="text-xs md:text-sm font-normal text-gray-900">
              Solid Republican
            </p>
          </div>
        </div>
      </div>
      <VoteMap />
    </main>
  );
};

export default App;
