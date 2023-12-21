import React, { useState, useEffect } from "react";

const RaceTrack = ({ participants }) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Race Track</h2>
      <p>Elapsed Time: {elapsedTime} seconds</p>
      {participants.map((participant, index) => (
        <div key={index}>
          <p>
            {participant.name} is running at {participant.speed} speed.
          </p>
        </div>
      ))}
      {/* Add logic to display race results in a popup */}
    </div>
  );
};

export default RaceTrack;
