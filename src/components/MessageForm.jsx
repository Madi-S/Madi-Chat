import {useState} from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const MESSAGE_INTERVAL = 15000

let timeout
let sentRecently

const blockMessageFlood = () => {
    sentRecently = true
        if (!timeout) {
            setTimeout(() => sentRecently = false, MESSAGE_INTERVAL)
    }
}

const MessageForm = ({onSubmit}) => {
    const [text, setText] = useState('')
    const [username, setUsername] = useState('')

    const onClick = e => {
        if (sentRecently) {
            alert('Wait 1 minute before sending another message')
            return
        }

        if (!text || !username) {
            alert('Please provide your username and text message')
        }

        setText('')
        onSubmit(username, text)
        blockMessageFlood()
    }


    return (
        <div className="row fixed-bottom">
            <div className="message-form">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label display-5">Username</label>
                    <input value={username} onChange={e => setUsername(e.target.value)} type="text" className="form-control" id="username" placeholder="floppy932" />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label display-6">Message</label>
                    <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Hello everybody ..." className="form-control" id="message" rows="3"></textarea>
                </div>
                <Button id='submitMessage' onClick={onClick} text='Send' />
            </div>
        </div>
    )
}

MessageForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
} 

export default MessageForm

// Class realization:
/*

import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const MESSAGE_INTERVAL = 15

let timeout
let sentRecently

const blockMessageFlood = () => {
    sentRecently = true
        if (!timeout) {
            setTimeout(() => sentRecently = false, MESSAGE_INTERVAL)
    }
}

class MessageForm extends React.Component {
    constructor(props) {
        super(props)
        this.onSubmit = props.onSubmit
        this.state = {username: '', text: ''}
    }

    btnOnClick() {
        if (sentRecently) {
            alert('Wait 1 minute before sending another message')
            return
        }

        if (!this.state.text || !this.state.username) {
            alert('Please provide your username and text message')
        }
        
        this.setState({text: ''})
        this.onSubmit(this.state.username, this.state.text)
        blockMessageFlood()
    }

    render() {
        return (
            <div className="row fixed-bottom">
                <div className="message-form">
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label display-5">Username</label>
                        <input value={this.state.username} onChange={e => this.setState({username: e.target.value})} type="text" className="form-control" id="username" placeholder="floppy932" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label display-6">Message</label>
                        <textarea value={this.state.text} onChange={e => this.setState({text: e.target.value})} placeholder="Hello everybody ..." className="form-control" id="message" rows="3"></textarea>
                    </div>
                    <Button id='submitMessage' onClick={() => this.btnOnClick()} text='Send' />
                </div>
            </div>
        )
    }

    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }
}

export default MessageForm

*/