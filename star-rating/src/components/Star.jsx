/* eslint-disable react/prop-types */

/**
 * Component for rendering a star rating interface.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {number} props.totalStars - The total number of stars to display.
 * @param {number} props.hoverRate - The current hover rate for highlighting stars.
 * @param {Function} props.handleMouseLeave - Function to handle mouse leave event.
 * @param {Function} props.handleMouseOver - Function to handle mouse over event for a specific star index.
 * @param {Function} props.handleClick - Function to handle click event for a specific star index.
 * @returns {JSX.Element} JSX element representing the star rating interface.
 */



export default function Stars(props){
    return(
        <>
          <div className="stars" onMouseLeave={props.handleMouseLeave}>
                {[...Array(props.totalStars)].map((_, index) => (
                    <span
                        key={index}
                        className={`star ${index < props.hoverRate ? 'filled' : ''}`}
                        onMouseOver={() => props.handleMouseOver(index)}
                        onClick={() => props.handleClick(index)}
                    >
                        &#9733;
                    </span>
                ))}
            </div>
        </>
    )
}