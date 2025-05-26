import React, { useState } from 'react'
import MainContent from './components/MainContent'
import PlayerPanel from './components/PlayerPanel'
import { podcastData } from './data/podcastData'

function App() {
  const [currentEpisode, setCurrentEpisode] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayEpisode = (episode) => {
    setCurrentEpisode(episode)
    setIsPlaying(true)
  }

  const handlePausePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 flex">
        <MainContent 
          episodes={podcastData.episodes}
          onPlayEpisode={handlePlayEpisode}
          currentEpisode={currentEpisode}
          isPlaying={isPlaying}
        />
        {/* Player Panel */}
        <PlayerPanel 
          currentEpisode={currentEpisode}
          isPlaying={isPlaying}
          onPausePlay={handlePausePlay}
        />
      </div>
    </div>
  )
}

export default App