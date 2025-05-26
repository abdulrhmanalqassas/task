import React from 'react'
import { Play } from 'lucide-react'
import { podcastData } from '../data/podcastData'

const MainContent = ({ episodes, onPlayEpisode, currentEpisode, isPlaying }) => {
  return (
    <div className="w-[70.5%] flex-1 bg-white text-gray-900 overflow-y-auto">
      {/* Header */}
      <div className="pt-0 p-8 pb-6]">
        <div className="h-[104px] flex items-center justify-between mb-8  bg-white border-b border-[#E6E8EB">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Play className="w-4 h-4 text-white fill-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Podcastr</h1>
          </div>
          <p className="text-gray-500">Qui, 8 Abril</p>
        </div>

        {/* Recent Episodes */}
        <div className="mb-8 m-auto">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 font-lexend text-[16px] font-[600] tracking-[0%]">Últimos lançamentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            {podcastData.recentEpisodes.map((episode) => (
              <div key={episode.id} className="w-[432px] bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-inter font-[400] text-[14px] leading-[100%] tracking-[0%] text-gray-900 mb-1 truncate">{episode.title}</h3>
                    
                    <div className="flex items-center justify-between">
                   <div>
                   <p className="font-inter font-[400] text-[14px] leading-[100%] tracking-[0%] text-[#808080] mt-2">{episode.hosts}</p>
                   <span className="font-inter font-[400] text-[14px] leading-[100%] tracking-[0%] text-[#808080]">{episode.date} • {episode.duration}</span>
                  </div>
                    
                      <button
                        onClick={() => onPlayEpisode(episode)}
                        className="w-10 h-10 bg-white border-2 border-[#04D361] rounded-lg flex items-center justify-center hover:bg-purple-50 transition-colors"
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
        <div>
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Todos os episódios</h2>
            
            {/* Table Header */}
            <div className="grid grid-cols-12  gap-8 px-6 py-3 text-xs font-medium text-[#808080] uppercase">
              <div className="col-span-4">PODCAST</div>
              <div className="col-span-3">INTEGRANTES</div>
              <div className="col-span-2">DATA</div>
              <div className="col-span-2">DURAÇÃO</div>
              <div className="col-span-1"></div>
            </div>

            {/* Episode List */}
            <div className="divide-y divide-[#E6E8EB]">
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
                      className="w-8 h-8 bg-white rounded-lg flex items-center justify-center hover:bg-[#04D361] group/play transition-colors"
                    >
                      <Play className="w-3 h-3 text-[#04D361] group-hover/play:text-white ml-0.5" />
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