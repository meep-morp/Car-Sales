import React from 'react';
import { useParams } from "react-router-dom";
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {

  const UrlId = useParams()
  const id = UrlId.id;
  

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car[id].features.length !== 0 ? (
        <ol type="1">
          {props.car[id].features.map(item => (
            <AddedFeature key={item.id} feature={item} car={props.car[id]}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
