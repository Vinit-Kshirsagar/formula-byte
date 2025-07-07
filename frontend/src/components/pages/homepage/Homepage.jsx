import { useState } from 'react';
import './homepage.css'; // This path is correct if homepage.css is in the same folder


const f1Data = {
  "Mercedes": ["Kini Antonelli", "George Russell"],
  "Red Bull": ["Max Verstappen", "Yuki Tsunoda"],
  "Ferrari": ["Charles Leclerc", "Lewis Hamilton"],
  "McLaren": ["Lando Norris", "Oscar Piastri"]
};

export default function TeamDriverSelector() {
  const [team, setTeam] = useState('');
  const [driver, setDriver] = useState('');

  const drivers = team ? f1Data[team] : [];

  return (
    <div>
      <h2>Select F1 Team and Driver</h2>
      <label>
        Team:
        <select value={team} onChange={(e) => { setTeam(e.target.value); setDriver(''); }}>
          <option value="">--Select Team--</option>
          {Object.keys(f1Data).map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </label>

      <label>
        Driver:
        <select value={driver} onChange={(e) => setDriver(e.target.value)} disabled={!team}>
          <option value="">--Select Driver--</option>
          {drivers.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </label>

      {driver && (
        <div>
          <h3>{driver}</h3>
          <p>No stats yet.</p>
        </div>
      )}
    </div>
  );
}
