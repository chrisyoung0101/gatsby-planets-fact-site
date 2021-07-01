import React from 'react';

export default function PlanetList({ planets }) {
  return (
    <>
      {planets.map((planet) => (
        <>
          {planet.name}
          <br />
          {planet.overviewContent}
          <br />
          {planet.overviewSource}
          <br />
        </>
      ))}
    </>
  );
}
