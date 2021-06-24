import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <nav>
      <h1>THE PLANETS</h1>
      <ul>
        <li>
          <Link to="/">MERCURY</Link>
        </li>
        <li>
          <Link to="/venus">VENUS</Link>
        </li>
        <li>
          <Link to="/earth">EARTH</Link>
        </li>
        <li>
          <Link to="/mars">MARS</Link>
        </li>
        <li>
          <Link to="/jupiter">JUPITER</Link>
        </li>
        <li>
          <Link to="/saturn">SATURN</Link>
        </li>
        <li>
          <Link to="/uranus">URANUS</Link>
        </li>
        <li>
          <Link to="/neptune">NEPTUNE</Link>
        </li>
      </ul>
    </nav>
  );
}
