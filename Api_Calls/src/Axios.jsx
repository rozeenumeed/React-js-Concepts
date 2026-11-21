
import axios from '../../Node_modules/axios'

// axios is a library thata is used to to send or receive dta from apis it handle errors more efficiently

const Axios = () => {

    const [data,setdata]=useState([]);

    const getData= async function(){
      const response=await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      console.log(response.data);
      setdata(response.data)
    }

  return (
    <div>
      {data.map(function(elem,idx){
        return <h3>{elem.author}{idx}</h3>
      })}
    </div>
  )
}

export default Axios
