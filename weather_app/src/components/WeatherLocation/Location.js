import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'
const Location = (/*props*/{city}) => (
// destructuring
// const city = props.city mientras tenga el mismo nombre  puede hacerse destructuring
  /* const {city} = props */
  <div className="locationCont">
  <h1>{city}</h1>
  </div>
)
    

Location.propTypes = {
  city: PropTypes.string.isRequired,
}
export default Location;