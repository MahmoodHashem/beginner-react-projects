/* eslint-disable react/prop-types */



/**
 * Component for a simple image slider.
 * 
 * @param {Object} props - The properties passed to the Slider component.
 * @param {Function} props.prev - Function to show the previous image.
 * @param {Function} props.next - Function to show the next image.
 * @param {Array} props.images - Array of image URLs to display in the slider.
 * @param {number} props.index - Index of the current image being displayed.
 * @returns {JSX.Element} A div element representing the image slider with navigation buttons.
 */

export default function Slider(props){
    return (
        <div className="slider">
            <button className="btn prev" onClick={props.prev}>
                <img className="icon" src="/images/arrow-left-solid.svg" alt="prevoius" />
            </button>
            <div className="image">
                 <img src={props.images[props.index]} alt={`Slide ${props.index+ 1}`} />
            </div>
            <button className="btn next" onClick={props.next}>
                <img className="icon" src="/images/arrow-right-solid.svg" alt="next" />
            </button>
        </div>
    );
}