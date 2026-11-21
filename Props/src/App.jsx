import React from 'react'
import Cards from "./Cards";

const App = () => {
  return (
    <div className="allCards">
      <Cards user="Aman" />
      <Cards user="Emaan"/>
      <Cards user="Noman" age={18}/>
    
    </div>
  );
}

export default App;
