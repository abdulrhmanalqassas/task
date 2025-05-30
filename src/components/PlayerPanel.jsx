import React from 'react'
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat } from 'lucide-react'
import logo from "../assets/Group.svg"
const PlayerPanel = ({ currentEpisode, isPlaying, onPausePlay }) => {
  if (!currentEpisode) {
    return (
      <div className="w-[424px] gradient-purple flex flex-col text-white">
      {/* Header */}
      <div className="p-6 text-center ">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <img src={logo} className="size-6 text-white fill-white" />
          <span className="text-base font-semibold font-lexend leading-none text-center">Tocando agora</span>
        </div>
      </div>

      {/* Episode Info */}
      <div className="flex-1 flex flex-col justify-center items-center px-8 py-12" >
     
        <div className=" w-72 h-80 bg-white bg-[#9F75FF] rounded-lg mb-8 flex items-center justify-center "  style={{
    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%23D0BFF6D4' stroke-width='2' stroke-dasharray='9' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
    borderRadius: '20px'
  }} >
          <div className=" text-center w-48 h-48  rounded-lg flex items-center justify-center">
          Selecione um
          podcast para ouvir
          </div>
        </div>
        
        <div className="text-center mb-8">
          {/* <h3 className="text-lg font-semibold mb-2">{currentEpisode.title}</h3>
          <p className="text-sm text-white text-opacity-80">{currentEpisode.hosts}</p> */}
        </div>
      </div>

      {/* Controls */}
      <div className="p-8">
        {/* Progress Bar */}
        <div className="mb-6">
         
        <div className="flex items-center flex-row justify-evenly text-xs text-white text-opacity-70">
          <div>00:00</div>
            <div className="w-[70%] h-1 bg-white  bg-opacity-20 rounded-xl ">
           
            </div>
            <div>00:00</div>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-center space-x-6 mb-6">
          <button className="w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-10 rounded-xl transition-colors">
            <Shuffle className="w-6 h-6" />
          </button>
          
          <button className="w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-10 rounded-xl transition-colors">
            <SkipBack className="w-5 h-5" />
          </button>
          
          <button 
            onClick={onPausePlay}
            className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center hover:bg-opacity-30 transition-colors"
          >
            {true ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white fill-white ml-0.5" />
            )}
          </button>
          
          <button className="w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-10 rounded-xl transition-colors">
            <SkipForward className="w-5 h-5" />
          </button>
          
          <button className="w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-10 rounded-xl transition-colors">
            <Repeat className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
    )
  }

  return (
    <div className="w-[424px] gradient-purple flex flex-col text-white">
      {/* Header */}
      <div className="p-6 text-center ">
        <div className="flex items-center justify-center space-x-2 mb-2">
        <img src={logo} className="size-6 text-white fill-white" />
        <span className="text-base font-semibold font-lexend leading-none text-center">Tocando agora</span>
        </div>
      </div>

      {/* Episode Info */}
      <div className="flex-1 flex flex-col justify-center items-center px-8 py-12">
        <div className="border-dashed border border-[#9F75FF] w-72 h-80 bg-white bg-opacity-10 rounded-lg mb-8 flex items-center justify-center">
          {/* <div className="w-48 h-48 bg-white bg-opacity-20 rounded-lg flex items-center justify-center"> */}
            <Play className="w-16 h-16 text-white opacity-70" />
          {/* </div> */}
        </div>
        
        <div className="text-center mb-8">
          <h3 className="font-lexend font-semibold text-[24px] text-lg font-semibold mb-2">{currentEpisode.title}</h3>
          <p className="text-sm text-white text-opacity-80">{currentEpisode.hosts}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="p-8">
        {/* Progress Bar */}
        <div className="mb-6">
         
          <div className="flex items-center flex-row justify-evenly text-xs text-white text-opacity-70">
          <div>00:00</div>
            <div className="w-[70%] h-1 bg-white  bg-opacity-20 rounded-xl ">
            <div className="w-1/3 h-full bg-green-400 rounded-xl"></div>
            </div>
            <div>00:00</div>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-center space-x-6 mb-6">
          <button className="w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-10 rounded-xl transition-colors">
            <Shuffle className="w-6 h-6" />
          </button>
          
          <button className="w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-10 rounded-xl transition-colors">
            <SkipBack className="w-5 h-5" />
          </button>
          
          <button 
            onClick={onPausePlay}
            className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center hover:bg-opacity-30 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white fill-white ml-0.5" />
            )}
          </button>
          
          <button className="w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-10 rounded-xl transition-colors">
            <SkipForward className="w-5 h-5" />
          </button>
          
          <button className="w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-10 rounded-xl transition-colors">
            <Repeat className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlayerPanel