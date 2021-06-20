import PropTypes from 'prop-types'

const Message = ({username, text}) => {
    return (
        <div className="card shadow-sm">    
            <div className="card-body">
                <h5 className="card-title">{username}</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>
    )
}

Message.proppTypes = {
    text: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
}

export default Message
