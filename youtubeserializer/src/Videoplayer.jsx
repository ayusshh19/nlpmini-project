import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import HorizontalScroll from "react-scroll-horizontal";
import axios from "axios";
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}
function Videoplayer({ mainlink, setyoutubelink }) {
  const [timestamp, settimestamp] = useState([]);
  const changelink = (link) => {
    setyoutubelink((prevState) => {
      return {
        ...prevState,
        youtubelink: link,
      };
    });
  };
  
  useEffect(() => {
    const api="https://nlpminiproject-21xm.onrender.com/data"
    // const localapi="http://127.0.0.1:5000/data"
    const fetchData = async () => {
      try {
        const params = {
          youtubelink: mainlink.youtubelink,
          words: mainlink.userinput,
        };
        const response = await axios.get(api, {
          params: { params: JSON.stringify(params) },
        });
        settimestamp(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-[90%] flex justify-center items-center flex-col">
      <div className="w-[90%] h-[40%] md:w-[40%] md:h-[80%]">
        <ReactPlayer width="100%" height={"100%"} url={mainlink.youtubelink}  playing={true} controls={true}/>
      </div>
      <div className="w-[90%] h-[30%] md:w-[60%] md:h-[25%] overflow-y-auto  bg-red-500 m-5 flex justify-center items-center">
        {timestamp.length > 0 ? (
          timestamp.length <7 ?
          ( <>
          
            {timestamp.map((data) => (
              <div
                key={data[0]}
                className="w-24 h-24 bg-black text-white p-3 m-4 flex flex-col justify-center items-center"
                onClick={()=>changelink(data[1])}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                  className="w-14 h-14"
                  alt=""
                  srcSet=""
                />
                <h2>{formatTime(data[0])}</h2>
              </div>
            ))}</>):<HorizontalScroll>
          {timestamp.map((data) => (
            <div
              key={data[0]}
              className="w-24 h-24 bg-black text-white p-3 m-4 flex flex-col justify-center items-center"
              onClick={()=>changelink(data[1])}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                className="w-14 h-14"
                alt=""
                srcSet=""
              />
              <h2>{formatTime(data[0])}</h2>
            </div>
          ))}
          </HorizontalScroll>
        ) : (
          
          <div className="w-full flex justify-center items-center">
            Loading .....
          </div>

        )}
      </div>
    </div>
  );
}

export default Videoplayer;
