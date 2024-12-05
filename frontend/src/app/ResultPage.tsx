// ResultPage Component

import React, { Dispatch, SetStateAction } from 'react';

interface ResultPageProps {
  setShowResult: Dispatch<SetStateAction<boolean>>;
  homeTeam: string;
  awayTeam: string;
  matchTime: string;
  matchDay: string;
  homeWinPercentage: number; // Add this prop
  homeTeamLogo: string; // Add this prop for home team logo
  awayTeamLogo: string; // Add this prop for away team logo
}

const ResultPage: React.FC<ResultPageProps> = ({
  setShowResult,
  homeTeam,
  awayTeam,
  matchTime,
  matchDay,
  homeWinPercentage,
  homeTeamLogo,
  awayTeamLogo,
}) => {
  // Calculate awayWinPercentage (assuming only win/lose, no draw)
  const awayWinPercentage = 100 - homeWinPercentage;

  // Determine which team has the higher win probability
  const winningTeam = homeWinPercentage > awayWinPercentage ? homeTeam : awayTeam;
  const winningPercentage = homeWinPercentage > awayWinPercentage ? homeWinPercentage : awayWinPercentage;

  return (
    <div className="flex flex-col items-center h-screen w-screen bg-gray-100">
      <div className='flex items-center w-full bg-purple-950 p-4'>
      <img src="/logo/image.png" alt="App Icon" className="h-10 w-15 mr-2" />
        <h1 className="text-xl font-bold text-white text-center">
          Premier League
        </h1>
        <p> - Fantasy Predictor</p>
      </div>
      <div className='flex flex-col items-center w-full px-20 justify-between max-sm:px-4'>
        <h2 className="text-purple-950 font-bold p-4 text-xl">Results</h2>
        
        {/* Home and Away Teams Wrapper */}
        <div className='flex justify-between w-full max-sm:px-4'>
          {/* Home Team */}
          <div className='flex flex-col items-center gap-8'>
            <h3 className='font-bold text-purple-950'>{homeTeam}</h3>
            <div className='w-40 h-40'>
              <img src={homeTeamLogo} alt={`${homeTeam} logo`} className='w-full h-full object-cover'/>
            </div>
          </div>

          {/* Percentage Slider */}
          <div className="w-1/2 flex flex-col items-center">
            <div className="w-full bg-gray-400 rounded-full h-2.5 overflow-hidden relative">
              <div
                className="bg-red-500 h-2.5 rounded-full"
                style={{ width: `${homeWinPercentage}%` }}
              ></div>
              <div
                className="bg-blue-500 h-2.5 rounded-full"
                style={{ width: `${awayWinPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 w-full">
              <span className="text-purple-950 font-bold">{homeWinPercentage}%</span>
              <span className="text-purple-950 font-bold">{awayWinPercentage}%</span>
            </div>
            <div className="text-center text-purple-950 font-bold mt-2">
              Prediction: {winningTeam}
            </div>
            <div className="text-center text-purple-950">
              Probability of {winningTeam} winning: {winningPercentage}%
            </div>
          </div>

          {/* Away Team */}
          <div className='flex flex-col items-center gap-8'>
            <h3 className='font-bold text-purple-950'>{awayTeam}</h3>
            <div className='w-40 h-40'>
              <img src={awayTeamLogo} alt={`${awayTeam} logo`} className='w-full h-full object-cover'/>
            </div>
          </div>
        </div>

        <div className="text-purple-950 mb-4">
          <h3 className="font-bold">Match Details:</h3>
          <ul className="list-disc ml-6">
            <li>Home Team: {homeTeam}</li>
            <li>Away Team: {awayTeam}</li>
            <li>Match Time: {matchTime}</li>
            <li>Match Day: {matchDay}</li>
          </ul>
        </div>

        {/* Centered Small Button */}
        <button 
          onClick={() => setShowResult(false)}
          className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-3 px-6 rounded text-lg"
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default ResultPage;