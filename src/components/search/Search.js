import React from 'react'
import './SearchStyles.css'

import Gold from '../../assets/gold.png'

function Search() {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>Uexplored Trip Tourism</h2>
                    <p>We offer popular Sikkim packages for your family and friends which facilitates you to see the entire prominent destinations for travel enthusiasts simply because it comprises the tour of the Himalayan environment, gurgling streams, snowcapped mountains, its richness of culture, monasteries, flora and fauna. Our Sikkim travel Packages are tailored in such a manner that allows you to and your family to completely enjoy untouched beauty of nature and bask in the glory of all its freshness.</p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Gold} alt="/" style={{ marginRight: '1rem' }} />
                            </div>
                            <div>
                                <h3>WORLD'S LEADING</h3>
                                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h3>NO ONE INCLUDES MORE</h3>
                                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                                <button>View Packages</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className="save">GET AN ADDITIONAL 7% OFF</h4>
                        <p className="timer">12 HOURS LEFT!</p>
                        <p className="offers">VIEW ALL CURRENT OFFERS</p>
                    </div>
                    <form>
                        <div className="input-wrap">
                            <label>Destination</label>
                            <select>
                                <option value="1">North Sikkim</option>
                                <option value="1">South Sikkim</option>
                                <option value="1"> East Sikim</option>
                                <option value="1">West Sikkim</option>
                                <option value="1">Gurudongmar</option>
                                <option value="1">Nathula Pass</option>
                                <option value="1">Yumthang valley</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Check-In</label>
                                <input type="date" />
                            </div>
                            <div className="input-wrap">
                                <label>Check-Out</label>
                                <input type="date" />
                            </div>
                        </div>
                        <button>Rates & Availabilities </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search
