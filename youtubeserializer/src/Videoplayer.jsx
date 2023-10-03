import React from "react";
import ReactPlayer from "react-player";
import HorizontalScroll from "react-scroll-horizontal";
function Videoplayer({ mainlink }) {

  return (
    <div className="w-full h-[90%] flex justify-center items-center flex-col  ">
      <div className="w-[90%] h-[40%] md:w-[40%] md:h-[80%]">
        <ReactPlayer
          width="100%"
          height={"100%"}
          url={mainlink.youtubelink}
        />
      </div>
      <div className="w-[90%] h-[30%] md:w-[60%] md:h-[25%] overflow-y-auto  bg-slate-400 m-5 flex  justify-center items-center">
        <HorizontalScroll>
          <div className="w-24 h-24 bg-black text-white p-3 m-3 flex flex-col justify-center items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
              className="w-14 h-14"
              alt=""
              srcset=""
            />
            <h2>12:22</h2>
          </div>
          <div className="w-24 h-24 bg-black text-white p-3 m-3 flex flex-col justify-center items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
              className="w-14 h-14"
              alt=""
              srcset=""
            />
            <h2>12:22</h2>
          </div>
          <div className="w-24 h-24 bg-black text-white p-3 m-3 flex flex-col justify-center items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
              className="w-14 h-14"
              alt=""
              srcset=""
            />
            <h2>12:22</h2>
          </div>
          <div className="w-24 h-24 bg-black text-white p-3 m-3 flex flex-col justify-center items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
              className="w-14 h-14"
              alt=""
              srcset=""
            />
            <h2>12:22</h2>
          </div>
          <div className="w-24 h-24 bg-black text-white p-3 m-3 flex flex-col justify-center items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
              className="w-14 h-14"
              alt=""
              srcset=""
            />
            <h2>12:22</h2>
          </div>
          <div className="w-24 h-24 bg-black text-white p-3 m-3 flex flex-col justify-center items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
              className="w-14 h-14"
              alt=""
              srcset=""
            />
            <h2>12:22</h2>
          </div>
          <div className="w-24 h-24 bg-black text-white p-3 m-3 flex flex-col justify-center items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
              className="w-14 h-14"
              alt=""
              srcset=""
            />
            <h2>12:22</h2>
          </div>
          <div className="w-24 h-24 bg-black text-white p-3 m-3 flex flex-col justify-center items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
              className="w-14 h-14"
              alt=""
              srcset=""
            />
            <h2>12:22</h2>
          </div>
        </HorizontalScroll>
      </div>
    </div>
  );
}

export default Videoplayer;
