import {useState, useEffect} from 'react'

import './index.css'
import Header from './components/Header'
import Messages from './components/Messages'
import MessageForm from './components/MessageForm'


function App() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([
      {
        id: 1,
        username: 'Jack123',
        text: 'Hello everybody in this server. I like playing minecraft and hearthstone. Anyone up for a match against me?'
      },
      {
        id: 2,
        username: 'Jack123',
        text: 'Hello everybody in this server. I like playing minecraft and hearthstone. Anyone up for a match against me?'
      },
      {
        id: 3,
        username: 'Jack123',
        text: 'Hello everybody in this server. I like playing minecraft and hearthstone. Anyone up for a match against me?'
      },
      {
        id: 4,
        username: 'Jack123',
        text: 'Hello everybody in this server. I like playing minecraft and hearthstone. Anyone up for a match against me?'
      },
    ])
  }, [])

  const onSubmitMessageForm = (username, text) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newMessage = {id, username, text}
    setMessages([...messages, newMessage])
  }

  return (
    <div className="container">
      <Header />
      <Messages messages={messages} />
      <MessageForm onSubmit={onSubmitMessageForm} />
    </div>
  )
}

export default App
