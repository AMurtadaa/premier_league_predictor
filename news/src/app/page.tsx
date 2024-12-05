"use client";

import React, { useState } from 'react';
import ResultPage from './ResultPage';

interface Team {
  name: string;
  logo: string;
}

const teams: Team[] = [
  { name: 'Arsenal', logo: '/logo/arsenal.png' },
  { name: 'Aston Villa', logo: '/logo/aston_villa.png' },
  { name: 'Bournemouth', logo: '/logo/bournemouth.png' },
  { name: 'Brentford', logo: '/logo/brentford.png' },
  { name: 'Brighton & Hove Albion', logo: '/logo/brighton.png' },
  { name: 'Chelsea', logo: '/logo/chelsea.png' },
  { name: 'Crystal Palace', logo: '/logo/crystal_palace.png' },
  { name: 'Everton', logo: '/logo/everton.png' },
  { name: 'Fulham', logo: '/logo/fulham.png' },
  { name: 'Liverpool', logo: '/logo/liverpool.png' },
  { name: 'Luton Town', logo: '/logo/luton_town.png' },
  { name: 'Manchester City', logo: '/logo/mancity.png' },
  { name: 'Manchester United', logo: '/logo/man_u.png' },
  { name: 'Newcastle United', logo: '/logo/newcastle.png' },
  { name: 'Nottingham Forest', logo: '/logo/nottingham_forest.png' },
  { name: 'Sheffield United', logo: '/logo/sheffield_united.png' },
  { name: 'Tottenham Hotspur', logo: '/logo/tottenham.png' },
  { name: 'West Ham United', logo: '/logo/west_ham.png' },
  { name: 'Wolverhampton Wanderers', logo: '/logo/wolves.png' },
];


const Page: React.FC = () => {
  const [homeTeam, setHomeTeam] = useState<Team | null>(null);
  const [awayTeam, setAwayTeam] = useState<Team | null>(null);
  const [matchTime, setMatchTime] = useState('');
  const [matchDay, setMatchDay] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [homeWinPercentage, setHomeWinPercentage] = useState(0); // Add this for the result page

  const handleHomeTeamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTeam = teams.find((team) => team.name === event.target.value);
    setHomeTeam(selectedTeam || null);
  };

  const handleAwayTeamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTeam = teams.find((team) => team.name === event.target.value);
    setAwayTeam(selectedTeam || null);
  };

  const handleMatchTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMatchTime(event.target.value);
  };

  const handleMatchDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMatchDay(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // In a real application, you would make an API call here to get the
    // prediction results. For now, we'll generate a random percentage.
    const randomPercentage = Math.floor(Math.random() * 100) + 1;
    setHomeWinPercentage(randomPercentage);
    setShowResult(true);
  };

  if (showResult) {
    return (
      <ResultPage
        setShowResult={setShowResult}
        homeTeam={homeTeam?.name || ''}
        awayTeam={awayTeam?.name || ''}
        matchTime={matchTime}
        matchDay={matchDay}
        homeWinPercentage={homeWinPercentage}
        homeTeamLogo={homeTeam ? homeTeam.logo : ""}
        awayTeamLogo={awayTeam ? awayTeam.logo : ""}
      />
    );
  }

  const TeamSelector = ({ title, value, onChange }: { title: string, value: Team | null, onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void }) => {
    return (
      <div className='flex flex-col items-center gap-8'>
        <h3 className='font-bold text-purple-950'>{title}</h3>
        <div className='w-40 h-40'>
          <img src={value?.logo} className='w-full h-full'/>
        </div>
        <select
          className="w-full border border-gray-400 rounded px-3 py-2  text-black"
          onChange={onChange}
          value={value?.name || ''}
        >
          <option value="" className='text-slate-400'>Select a team</option>
          {teams.map((team) => (
            <option key={team.name} value={team.name}>
              {team.name}
            </option>
          ))}
        </select>
      </div>
    )
  }

  const PredictorFormMain = () => {
    return (
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-purple-950 font-bold">Match Time</h3>
        <div className="flex flex-col gap-4 w-full text-center">
          <input
            type="text"
            placeholder="(input match hour)"
            className="w-full border border-gray-400 rounded px-3 py-2 text-black"
            onChange={handleMatchTimeChange}
            value={matchTime}
          />
          <h3 className="text-purple-950 font-bold">Match Day</h3>
          <select
            className="w-full border border-gray-400 rounded px-3 py-2  text-black"
            onChange={handleMatchDayChange}
            value={matchDay}
          >
            <option value="">Select a day</option>
            {['Saturday',
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',].map(
              (day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              )
            )}
          </select>
        </div>
        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-3 px-6 rounded text-lg disabled:bg-purple-400 disabled:hover:cursor-default hover:cursor-pointer"
          disabled={!homeTeam || !awayTeam}
        >
          Predict
        </button>
      </div>
    )
  }

  return (
    <div className=" flex flex-col items-center h-screen w-screen bg-gray-100">
      <div className='flex items-center w-full bg-purple-950 p-4'>
      <img src="/logo/image.png" alt="App Icon" className="h-10 w-15 mr-2" />
        <h1 className="text-xl font-bold text-white text-center">
          Premier League
        </h1>
        <p> - Fantasy Predictor</p>
      </div>
      <div className='flex flex-col items-center w-full'>
        <h2 className="text-purple-950 font-bold p-4 text-xl">Match Predictor</h2>
        <form
          onSubmit={handleSubmit}
          className="flex w-full px-20 justify-between max-sm:px-4">
          {/* Home Team */}
          <TeamSelector title={"HOME TEAM"} value={homeTeam} onChange={handleHomeTeamChange} />

          {/* Match Time and Day and Submit*/}
          <PredictorFormMain />

          {/* Away Team */}
          <TeamSelector title="AWAY TEAM" value={awayTeam} onChange={handleAwayTeamChange} />
        </form>
      </div>

    </div>
  );
};

export default Page;
