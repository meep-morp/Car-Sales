import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { useParams } from 'react-router-dom';

const AdditionalFeatures = props => {

  const UrlId = useParams()
  const id = UrlId.id;


  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} car={props.car[id]}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
