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
      <div className="flex-1 flex flex-col justify-center items-center px-8 py-12">
        <div className="w-72 h-80 bg-white bg-opacity-10 rounded-lg mb-8 flex items-center justify-center">
          <div className="w-48 h-48  rounded-lg flex items-center justify-center">
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
          <div className="w-full h-1 bg-green-400 bg-opacity-20 rounded-full mb-2">
            {/* <div className="w-1/3 h-full bg-green-400 rounded-full"></div> */}
          </div>
          <div className="flex justify-between text-xs text-white text-opacity-70">
            <span>00:00</span>
            <span>00:00</span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-center space-x-6 mb-6">
          <button className="w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-10 rounded-full transition-colors">
            <Shuffle className="w-4 h-4" />
          </button>
          
          <button className="w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-10 rounded-full transition-colors">
            <SkipBack className="w-5 h-5" />
          </button>
          
          <button 
            onClick={onPausePlay}
            className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
          >
            {true ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white fill-white ml-0.5" />
            )}
          </button>
          
          <button className="w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-10 rounded-full transition-colors">
            <SkipForward className="w-5 h-5" />
          </button>
          
          <button className="w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-10 rounded-full transition-colors">
            <Repeat className="w-4 h-4" />
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
          <Play className="w-4 h-4 text-white fill-white" />
          <span className="text-sm font-medium">Tocando agora</span>
        </div>
      </div>

      {/* Episode Info */}
      <div className="flex-1 flex flex-col justify-center items-center px-8 py-12">
        <div className="border-dashed border-2 border-[#9F75FF] w-72 h-80 bg-white bg-opacity-10 rounded-lg mb-8 flex items-center justify-center">
          {/* <div className="w-48 h-48 bg-white bg-opacity-20 rounded-lg flex items-center justify-center"> */}
            <Play className="w-12 h-12 text-white opacity-70" />
          {/* </div> */}
        </div>
        
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold mb-2">{currentEpisode.title}</h3>
          <p className="text-sm text-white text-opacity-80">{currentEpisode.hosts}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="p-8">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full h-1 bg-green-400 bg-opacity-20 rounded-full mb-2">
            <div className="w-1/3 h-full bg-green-400 rounded-full"></div>
          </div>
          <div className="flex justify-between text-xs text-white text-opacity-70">
            <span>00:00</span>
            <span>00:00</span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-center space-x-6 mb-6">
          <button className="w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-10 rounded-full transition-colors">
            <Shuffle className="w-4 h-4" />
          </button>
          
          <button className="w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-10 rounded-full transition-colors">
            <SkipBack className="w-5 h-5" />
          </button>
          
          <button 
            onClick={onPausePlay}
            className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white fill-white ml-0.5" />
            )}
          </button>
          
          <button className="w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-10 rounded-full transition-colors">
            <SkipForward className="w-5 h-5" />
          </button>
          
          <button className="w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-10 rounded-full transition-colors">
            <Repeat className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlayerPanel