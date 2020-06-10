import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Header = props => {

  const UrlId = useParams()
  const id = UrlId.id;
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car[id].image} alt={props.car[id].name} />
      </figure>
      <h2>{props.car[id].name}</h2>
      <p>Amount: ${props.car[id].price}</p>
    </>
  );
};

export default Header;
