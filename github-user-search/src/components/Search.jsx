
import searchIcon from '../assets/icons/icon-search.svg'

export default function Search() {
    return (
        <>
            <form className="search-bar" >
                <img
                src={searchIcon}
                    alt="search-icon"
                />
                <input type="search" placeholder="Search Github username" required />
                <button type="submit">Search</button>
            </form>
        </>

    )
}