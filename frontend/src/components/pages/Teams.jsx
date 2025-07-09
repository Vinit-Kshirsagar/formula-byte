// src/pages/Teams.jsx
import teamsData from "@/data/teamsData";
import "./Teams.css";

function Teams() {
  return (
    <div className="teams-page">
      <h1>Formula 1 Teams</h1>
      <div className="teams-list">
  {teamsData.map((team, index) => (
    <div className="team-row" key={index}>
     <div className="team-card" key={team.name}>
  <div className="team-info-left">
    <img src={team.logo} alt={`${team.name} logo`} />
    <h2>{team.name}</h2>
     <p className="team-tagline">{team.tagline}</p> {/* 👈 render here */}
  </div>
  <div className="team-info-right">
   <p><strong>Full Team Name:</strong> {team.fullTeamName}</p>
    <p><strong>Base:</strong> {team.base}</p>
    <p><strong>Team Principal:</strong> {team.principal}</p>
    <p><strong>Chassis:</strong> {team.chassis}</p>
    <p><strong>Power Unit:</strong> {team.powerUnit}</p>
    <p><strong>Drivers:</strong> {team.drivers.join(' & ')}</p>
  </div>
</div>
    </div>
  ))}
</div>

    </div>
  );
}

export default Teams;
