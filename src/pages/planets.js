import React from 'react';
import { graphql } from 'gatsby';

export default function PlanetsPage({ data }) {
  console.log({ data });
  const planets = data.planets.nodes;
  return (
    <>
      <p>This page is all about the planet {planets.name}</p>
    </>
  );
}

export const query = graphql`
  query PlanetQuery {
    planets: allSanityPlanet {
      nodes {
        name
        id
        slug {
          current
        }
      }
    }
  }
`;
