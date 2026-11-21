import React from 'react'
import Cards from './components/cards'

const App = () => {

  const jobs = [
  {
    id: 1,
    company: "Meta",
    role: "Frontend Engineer",
    salary: 65,
    currency: "USD",
    location: "Mumbai, India",
    tags: ["Full Time", "Junior Level"],
    posted: "8 days ago"
  },
  {
    id: 2,
    company: "Amazon",
    role: "Backend Developer",
    salary: 70,
    currency: "USD",
    location: "Bangalore, India",
    tags: ["Full Time", "Mid Level"],
    posted: "2 weeks ago"
  },
  {
    id: 3,
    company: "Apple",
    role: "iOS Developer",
    salary: 90,
    currency: "USD",
    location: "Delhi, India",
    tags: ["Part Time", "Senior Level"],
    posted: "3 weeks ago"
  },
  {
    id: 4,
    company: "Google",
    role: "Cloud Solutions Architect",
    salary: 85,
    currency: "USD",
    location: "Hyderabad, India",
    tags: ["Full Time", "Mid Level"],
    posted: "1 week ago"
  },
  {
    id: 5,
    company: "Microsoft",
    role: "Data Scientist",
    salary: 75,
    currency: "USD",
    location: "Chennai, India",
    tags: ["Full Time", "Junior Level"],
    posted: "4 weeks ago"
  },
  {
    id: 6,
    company: "IBM",
    role: "AI Research Engineer",
    salary: 95,
    currency: "USD",
    location: "Pune, India",
    tags: ["Full Time", "Senior Level"],
    posted: "2 days ago"
  }
];

  return (
 <div className="container">
    {jobs.map((elem) => (
      <Cards
        key={elem.id}
        company={elem.company}
        role={elem.role}
        salary={elem.salary}
        currency={elem.currency}
        location={elem.location}
        tags={elem.tags}
        post={elem.posted}
      />
    ))}
  </div>
  )
}

export default App
