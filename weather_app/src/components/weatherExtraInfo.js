import React from 'react';

const weatherExtraInfo = ({humidity, wind}) =>(
  <div>
  <span>{`${humidity}% - `} </span>
  <span>{`${wind} viento`}</span>
  </div>
);

export default weatherExtraInfo