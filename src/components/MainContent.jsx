import React from 'react'
import { Play } from 'lucide-react'
import { podcastData } from '../data/podcastData'
import musicLogo  from "../assets/music.svg"

const MainContent = ({ episodes, onPlayEpisode, currentEpisode, isPlaying }) => {
  return (
    <div className="scrollbar-hide w-[70.5%] max-h-full bg-slate-100 flex-1 text-gray-900 overflow-y-auto">
      {/* Header */}
      <div className="h-[104px] p-8  bg-white flex items-center justify-between mb-8  bg-white border-b border-[#E6E8EB">
          <div className="flex items-center space-x-3">
            <img src={musicLogo} alt="Music Logo" className="w-8 h-8" />
            <h1 className="text-2xl font-bold text-[#494D4B] pe">Podcastr</h1>
            <div className="w-[1px] h-4 bg-[#E6E8EB] mx-4"></div>
            <span className="mx-4 text-[14px] font-normal font-[400]  text-[#808080]">O melhor para você ouvir, sempre</span>
          </div>
          <p className="text-gray-500 font-normal text-[14px] text-gray-400">Qui, 8 Abril</p>
      </div>
      <div className=" pt-0 p-4 md:p-8 pb-6]">
      

        {/* Recent Episodes */}
        <div className="mb-8 m-auto">
          <h2 className="text-xl font-semibold text-[#494D4B] mb-6 font-lexend text-[16px] font-[600] tracking-[0%]">Últimos lançamentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            {podcastData.recentEpisodes.map((episode) => (
              <div key={episode.id} className="w-full md:w-[432px] md:h-[136px] bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0"></div>
                  <div className="p-2 w-full flex flex-col flex-wrap content-between justify-between h-24">
                    <div>   <h3 className="font-inter font-[400] text-[14px] leading-[100%] tracking-[0%] text-gray-900 mb-1 truncate">{episode.title}</h3> </div>
                  
                    
                    <div className="w-full flex items-center justify-between">
                   <div>
                   <p className="font-inter font-[400] text-[14px] leading-[100%] tracking-[0%] text-[#808080] ">{episode.hosts}</p>
                   <span className="font-inter font-[400] text-[14px] leading-[100%] tracking-[0%] text-[#808080]">{episode.date} • {episode.duration}</span>
                  </div>
                    
                      <button
                        onClick={() => onPlayEpisode(episode)}
                        className="w-10 h-10  border border-[#E6E8EB] rounded-lg flex items-center justify-center hover:bg-purple-50 transition-colors"
                      >
                        <Play className="w-4 h-4 text-[#04D361] fill-[#04D361] ml-0.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Episodes */}
        <div className="scrollbar-hide">
          <div className="pt-8">
            <h2 className="text-xl font-semibold text-[#494D4B] mb-6">Todos os episódios</h2>
            
            {/* Table Header */}
            <div className="grid grid-cols-12  gap-8 px-6 py-3 text-xs font-medium text-[#808080] uppercase">
              <div className="col-span-4">PODCAST</div>
              <div className="col-span-3">INTEGRANTES</div>
              <div className="col-span-2">DATA</div>
              <div className="col-span-2">DURAÇÃO</div>
              <div className="col-span-1"></div>
            </div>

            {/* Episode List */}
            <div className="divide-y divide-[#E6E8EB] overflow-y-auto scrollbar-hide">
              {episodes.map((episode) => (
                <div key={episode.id} className="grid grid-cols-12 gap-8 px-6 py-3 hover:bg-[#F7F8FA] transition-colors">
                  <div className="col-span-4 flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-200 rounded"></div>
                    <h3 className="font-semibold text-[#494D4B] font-lexend text-base leading-none">{episode.title}</h3>
                  </div>
                  <div className="col-span-3 flex items-center">
                    <p className="text-sm text-[#808080]">{episode.hosts}</p>
                  </div>
                  <div className="col-span-2 flex items-center text-sm text-[#808080] ">{episode.date}</div>
                  <div className="col-span-2 flex items-center text-sm text-[#808080]">{episode.duration}</div>
                  <div className="col-span-1 flex items-center justify-end">
                    <button 
                      onClick={() => onPlayEpisode(episode)}
                      className="w-8 h-8 border border-[#E6E8EB] rounded-lg flex items-center justify-center hover:bg-[#04D361] group/play transition-colors"
                    >
                      <Play className="w-3 h-3 text-[#04D361] fill-[#04D361] group-hover/play:text-white ml-0.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent