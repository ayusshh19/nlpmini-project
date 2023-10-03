import React from 'react'

function Formpage({handlesubmit,handlechange}) {
  return (
    <div className="w-full h-[90%] flex justify-center items-center flex-col">
        <div className="p-2  m-5 rounded-lg md:w-[70%] bg-slate-700 text-white">
          <p className="text-3xl md:text-4xl font-bold text-center">
            Stuck with searching particular content from a{" "}
            <span className="bg-red-600  my-5">YouTube video</span> here's
            solution for you!
          </p>
        </div>
        <input
          type="text"
          placeholder="Share your Youtube link here.."
          className="m-5 w-[80%] md:w-[70%] p-5 rounded-lg"
          name="youtubelink"
          onChange={(e)=>handlechange(e)}
        />
        <input
          type="text"
          placeholder="What content you are looking for?."
          className="m-5 w-[80%] md:w-[70%] p-5 rounded-lg"
          name="userinput"
          onChange={(e)=>handlechange(e)}
        />
        <button className="bg-slate-600 p-4 rounded-lg font-bold text-white hover:bg-red-500 hover:scale-110 hover:transition-all" onClick={handlesubmit}>
          Generate Timestamp
        </button>
      </div>
  )
}

export default Formpage