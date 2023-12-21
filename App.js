import React, { useState } from "react";
import ParticipantEntry from "./ParticipantEntry";
import RaceTrack from "./RaceTrack";

function App() {
  const [participants, setParticipants] = useState([]);
  const [showRaceTrack, setShowRaceTrack] = useState(false);

  const handleParticipantsSubmit = (participants) => {
    setParticipants(participants);
    setShowRaceTrack(true);
  };

  return (
    <div className="App">
      {!showRaceTrack ? (
        <ParticipantEntry onParticipantsSubmit={handleParticipantsSubmit} />
      ) : (
        <RaceTrack participants={participants} />
      )}
    </div>
  );
}

export default App;
