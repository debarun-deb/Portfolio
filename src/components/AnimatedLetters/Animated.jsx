import './Animated.scss';

const Animated = ({letterClass,strArray,idx}) => {
    return (
        <span>
            {
            strArray.map((letter, index) => (
                <span key={letter + index} className={`${letterClass} _${index + idx}`}>
                    {letter}
                </span>
            ))

            }   
        </span>
    )
}

export default Animated