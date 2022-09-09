import React from 'react'
import { dummyStoryData } from './dummyStoryData'
import StoryCard from './StoryCard'

const StoriesList = () => {
    return (
        <div>
            {
                dummyStoryData.map(storyData => {
                    return <StoryCard storyData={storyData} />
                })
            }
        </div>
    )
}

export default StoriesList