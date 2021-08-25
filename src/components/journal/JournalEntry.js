import React from 'react';

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize:"cover",
                    backgroundImage:"url(https://cdn1.eldia.com/042019/1556446220965.jpg?&cw=630)"
                }}>

            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                </p>
                <p className="journal__entry-content">
                    dsa dsa dsaf ds afg ad tre atb frtbrgbfdsgbfsgfdb gfbfbgsfgsbgbsgbd
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>

        </div>
    )
}
