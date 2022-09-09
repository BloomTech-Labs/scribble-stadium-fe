import React from 'react'
import { dummyStoryData } from './dummyStoryData'
import StoryCard from './StoryCard'

const StoriesList = () => {
    return (
        <div>
            {
                dummyStoryData.map(storyData => {
                    return <StoryCard key={storyData.id} storyData={storyData} />
                })
            }
        </div>
    )
}

export default StoriesList