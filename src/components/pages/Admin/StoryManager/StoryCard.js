import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { Card, Button, Modal } from 'antd'
import '../../../../styles/less/Admin/StoryCard.less'

const initialFormValues = {
    title: "",
    author: "",
    description: ""
}

const StoryCard = (props) => {
    const { storyData } = props
    const [formValues, setFormValues] = useState(initialFormValues)
    const [modalOpen, setModalOpen] = useState(false)

    const displayModal = () => {
        console.log("displayModal")
    }

    const onOk = () => {
        setModalOpen(false)
    }

    const onCancel = () => {
        setModalOpen(false)
    }

    const handleChanges = (e) => {
        setFormValues(e.target.value)
    }

    const editBtnStyle = {
        width: '4rem',
    }

    return (
        <div>
            <Card
                // size="small" 
                title={storyData.title}
                extra={<Button style={editBtnStyle} onClick={displayModal} type="text">Edit 1</Button>}
                style={{
                    width: 500,
                    marginBottom: 10,
                }}
            >
                <p>Author: {storyData.author}</p>
                <p>Description: {storyData.description}</p>
                <p>Date Posted: {storyData.date_posted}</p>
            </Card>
            <Modal 
                open={modalOpen} 
                onOk={onOk} 
                onCancel={onCancel}
            >
                <form>
                    <label>Title 
                        <input
                            type='text'
                            name='title'
                            onChange={handleChanges}
                            value={storyData.title}
                        />
                    </label>
                    <label>Author
                        <input 
                            type='text'
                            name='author'
                            onChange={handleChanges}
                            value={storyData.author}
                        />
                    </label>
                    <label>Description
                        <input 
                            type='text'
                            name='description'
                            onChange={handleChanges}
                            value={storyData.description}
                        />
                    </label>
                </form>    
            </Modal>
        </div>
    )
}

export default StoryCard