/* eslint-disable react-hooks/exhaustive-deps */

import avatar from '../assets/icons/Oval.svg'
import twitter from '../assets/icons/icon-twitter.svg'
import location from '../assets/icons/icon-location.svg'
import website from '../assets/icons/icon-website.svg'
import company from '../assets/icons/icon-company.svg'
import searchIcon from '../assets/icons/icon-search.svg'

import { useEffect, useState } from 'react'
import Loader from './Loader'
import Toast from './Toast'

export default function Body() {

    const DEFAULT_USERNAME = "MahmoodHashem";
    const url = "https://api.github.com/users";

    const [info, setInfo] = useState({});
    const [input, setInput] = useState('');
    const [shouldFetch, setShouldFetch] = useState(false);
    const [loading, setLoading] = useState(false); 
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

   

    function handleInputChange(event) {
        setInput(event.target.value);
    }

    function handleData(data) {
        setInfo({
            name: data.name,
            username: data.login,
            bio: data.bio,
            joinedDate: data.created_at,
            avatarUrl: data.avatar_url,
            repos: data.public_repos,
            followers: data.followers,
            following: data.following,
            location: data.location,
            twitterLink: data.twitter_username,
            websiteUrl: data.blog,
            companyUrl: data.company,
            profileLink: data.html_url
        });
        setLoading(false)
    }    

    useEffect(() => {
        setLoading(true)

            fetch(`${url}/${input || DEFAULT_USERNAME}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('User not found or network response was not ok');
                    }
                    return res.json();
                })
                .then(handleData)
                .catch(error => {
                    console.error('Error fetching data:', error);
                    handleShowToast(error.message)
                });
        
    }, [shouldFetch]);

    function handleSubmit(event) {
        event.preventDefault();
        if (input) {
            setShouldFetch(prev => !prev);
        }
    }

    function handleShowToast(message) {
        setToastMessage(message);
        setShowToast(true);

        // Automatically hide the toast after 3 seconds
        setTimeout(() => {
            setShowToast(false);
            setLoading(false)
            setToastMessage('');
        }, 3000);
    }

    return (
        <>

        { showToast &&  < Toast message={toastMessage} onClose={()=> setShowToast(false)} />}


        { loading &&  <Loader />}

            <form noValidate onSubmit={handleSubmit} className="search-bar" >
                <img
                    src={searchIcon}
                    alt="search-icon"
                />
                <input
                    type="search"
                    placeholder="Search Github username"
                    value={input}
                    onChange={handleInputChange}
                    required />
                <button type="submit">Search</button>
            </form>
            <div className="container-body">
                <div className="avatar">
                    <img
                        src={info.avatarUrl ? info.avatarUrl : avatar}
                        alt="avatar"
                        className="avatar_img"
                    />
                </div>
                <div className="body-contents">
                    <div className="heading">
                        <div className="user-name">
                            <h2
                             className={`name ${!info.name && 'deactive'}`}
                             >{info.name ? info.name : "No name"}</h2>
                            <a 
                            href={info.profileLink} 
                            target='_blank'
                            className="username">@{info.username ? info.username : "MahmoodHashem"}</a>
                        </div>
                        <h4 className="joined-date">Joined at {new Date(
                            info.joinedDate
                        ).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                        })}</h4>
                    </div>
                    <p 
                    className={`bio ${!info.bio && 'deactive'}`}
                    
                    >{info.bio ? info.bio : "No bio"}</p>
                    <div className="status">
                        <div className="repos">
                            <h5>Repos</h5>
                            <p>{info.repos ? info.repos : 49}</p>
                        </div>
                        <div className="followers">
                            <h5>Followers</h5>
                            <p>{info.followers ? info.followers : 15}</p>
                        </div>
                        <div className="following">
                            <h5>Following</h5>
                            <p>{info.following ? info.following : 14}</p>
                        </div>
                    </div>
                    <div className="footer">
                        <div
                            className={`location ${!info.location && 'deactive'}`}>
                            <img
                                src={location}
                                alt="icon-location"
                            />
                            <p>{info.location ? info.location : "No locatoin"}</p>
                        </div>
                        <div
                            className={`github ${!info.websiteUrl && 'deactive'}`} >
                            <img
                                src={website}
                                alt="icon-link"
                            />
                           <p > {info.websiteUrl ? info.websiteUrl: "No website"}</p> 
                        </div>
                        <div
                            className={`twitter ${!info.twitterLink && 'deactive'}`}>
                            <img
                                src={twitter}
                                alt="icon-twitter"
                            />
                            <p>{info.twitterLink ? info.twitterLink : "No link"} </p>
                        </div>
                        <div
                            className={`company ${!info.companyUrl && 'deactive'}`}>
                            <img
                                src={company}
                                alt="icon-company"
                            />
                            <p>{info.companyUrl ? info.companyUrl : "No campany"} </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}