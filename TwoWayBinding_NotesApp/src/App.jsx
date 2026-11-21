import React, { useState } from 'react'

const App = () => {

  const [detail, setDet] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function submitFun(e) {
    e.preventDefault();

    setDet([...detail, { title, desc }]);

    setTitle("");
    setDesc("");
  }

  return (
    <div className='flex w-full h-screen'>


      <form
        onSubmit={submitFun}
        className="w-1/2 h-full flex flex-col p-6 bg-black gap-5"
      > 
        <div className='flex justify-center items-center'>
        <h1 className='bg-white h-12 text-red-700 font-bold w-2xs flex justify-center items-center rounded-2xl text-4xl'>Notes App</h1>
        </div>

        <input
          value={title}
          type="text"
          placeholder='Enter Title'
          onChange={(e) => setTitle(e.target.value)}
          className='h-14 p-3 rounded-md bg-white'
        />

        <textarea
          value={desc}
          type="text"
          placeholder='Description'
          onChange={(e) => setDesc(e.target.value)}
          className='h-36 p-3 rounded-md bg-white flex justify-start'
        />
        
        <div className='flex justify-center items-center'>
        <button
          type="submit"
          className='h-12 w-48 rounded-md bg-white'
        >
          Submit
        </button>
        </div>

      </form>

      <div className='w-1/2 h-full bg-blue-600 flex flex-wrap'>

        {detail.map((item, index) => (
          <div
            key={index}
            className="w-52 h-64 rounded-xl m-4  p-4 border-black-500 border-2 border-solid flex flex-col justify-between bg>-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9UpE8LwgugRrCWnqzXgDtq_DCD7QfAjPvbMkLKuNhA&s=10')]"
          >
            <div>
            <h1 className='font-extrabold text-4x '>{item.title}</h1>
            <p>{item.desc}</p>
            </div>
            <div>
            <button className='w-full p-4 h-3 rounded-3xl flex justify-center items-center bg-red-600 hover:zoom-105' 
            onClick={function(e){
              detail.splice(index,1);
              setDet([...detail]);
            }}
            >Delete</button>
          </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default App