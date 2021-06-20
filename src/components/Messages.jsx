import Message from './Message'
import PropTypes from 'prop-types'

const Messages = ({messages}) => {
    return (
        <div className="row messages">
            {messages.map(message => (
                <Message key={message.id} text={message.text} username={message.username} />
            ))}
        </div>
    )
}

Messages.proppTypes = {
    messages: PropTypes.array.isRequired
}

export default Messages
