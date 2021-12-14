const Button = (props) => {
    return (
        <button className={'button'} id={props.id} onClick={() => window.open('https://en.wikipedia.org/wiki/Rickrolling', '_blank')}>
            Click me
        </button>
    )
}

export default Button;