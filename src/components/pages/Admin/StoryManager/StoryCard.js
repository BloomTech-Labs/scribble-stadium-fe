import React from 'react'
import { Card, Button } from 'antd'

const StoryCard = (props) => {
    const { storyData } = props

    return (
        <div>
            <Card 
                title={storyData.title}
                extra={<Button>Edit</Button>}
                style={{
                    width: 500,
                    marginBottom: 10,
                }}
            >
                <p>Author: {storyData.author}</p>
                <p>Description: {storyData.description}</p>
                <p>Date Posted: {storyData.date_posted}</p>
            </Card>
        </div>
    )
}

export default StoryCard