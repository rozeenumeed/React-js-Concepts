import React from 'react'

const Cards = (props) => {
  return (

  <div className="card">
    <button className="save">Save ♡</button>

    <div className="content">
      <p className="company">{props.company}<span>•{props.post}</span></p>
      <h2>{props.role}</h2>

      <div className="tags">
        <span>{props.tags[0]}</span>
        <span>{props.tags[1]}</span>
      </div>
    </div>

    <div className="footer">
      <div>
        <h3>{props.salary} {props.currency}</h3>
        <p>{props.location}</p>
      </div>
      <button className="apply">Apply Now</button>
    </div>
  

</div>
  )
}

export default Cards
