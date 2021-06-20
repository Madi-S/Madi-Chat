import PropTypes from 'prop-types'


const Button = ({id, text, onClick}) => {
    return (
        <button id={id} onClick={onClick} type="button" className="btn-lg btn-dark btn-message">{text}</button>
    )
}

Button.proppTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button
