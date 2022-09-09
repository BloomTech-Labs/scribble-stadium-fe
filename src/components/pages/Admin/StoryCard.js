import React from 'react'
import { Card, Button } from 'antd'

const StoryCard = (props) => {
    const { storyData } = props

    return (
        <div>
           <Card title={storyData.title}>
                <p>Author: {storyData.author}</p>
                <p>Description: {storyData.description}</p>
                <p>Date Posted: {storyData.date_posted}</p>
           </Card>
        </div>
    )
}

export default StoryCard