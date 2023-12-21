import React, { useState } from "react";

const ParticipantEntry = ({ onParticipantsSubmit }) => {
  const [participants, setParticipants] = useState([]);

  const handleInputChange = (index, key, value) => {
    const updatedParticipants = [...participants];
    updatedParticipants[index][key] = value;
    setParticipants(updatedParticipants);
  };

  const handleAddParticipant = () => {
    if (participants.length < 10) {
      setParticipants([...participants, { name: "", speed: "" }]);
    }
  };

  const handleSubmit = () => {
    onParticipantsSubmit(participants);
  };

  return (
    <div>
      <h2>Participant Entry</h2>
      {participants.map((participant, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Name"
            value={participant.name}
            onChange={(e) => handleInputChange(index, "name", e.target.value)}
          />
          <input
            type="text"
            placeholder="Speed"
            value={participant.speed}
            onChange={(e) => handleInputChange(index, "speed", e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleAddParticipant}>Add Participant</button>
      <button onClick={handleSubmit}>Start Race</button>
    </div>
  );
};

export default ParticipantEntry;
