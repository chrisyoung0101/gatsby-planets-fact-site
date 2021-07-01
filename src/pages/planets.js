import React from 'react';
import { graphql } from 'gatsby';
import PlanetList from '../components/PlanetList';

export default function PlanetsPage({ data }) {
  console.log({ data });
  const planets = data.planets.nodes;
  return (
    <>
      <PlanetList planets={planets} />
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
        overviewContent
        overviewSource
        # overviewImage {
        #   asset {
        #     fixed(width: 200, height: 200) {
        #       ...GatsbySanityImageFixed
        #     }
        #     fluid(maxWidth: 400) {

        #       ...GatsbySanityImageFluid
        #     }
        #   }
      }
    }
  }
`;
