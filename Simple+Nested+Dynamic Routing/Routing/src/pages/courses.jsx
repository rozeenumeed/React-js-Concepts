import React from 'react'

const Courses = () => {

    const params = useParams();
  return (

    

    <div>
      <h1>Courses Details</h1>
      <p>Course ID: {params.id}</p>
    </div>
  )
}

export default Courses
