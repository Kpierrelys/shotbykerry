import React from 'react';

const SideBar = ({ close, focusOnPortfolioWithoutFeature, focusOnAboutMeWithOutFeature, focusOnContactwithOutFeature, isActive, focusOnPortfolio, focusOnAboutMe, focusOnContact }) => {


    return (
        <div>
            <div className={isActive ? 'show-sidebar' : 'sidebar'}>
                <h1>Sh<img src='images/icons8-camera-100.png' alt='Camera logo'/>tbyKerry</h1>
                <p onClick={close} id={isActive ? 'show-close' : 'hide-close'}>Close</p>
                {isActive ? <p onClick={focusOnPortfolio}>Portfolio</p> : <p onClick={focusOnPortfolioWithoutFeature}>Portfolio</p>}
                {isActive ? <p onClick={focusOnAboutMe}>About Me</p> : <p onClick={focusOnAboutMeWithOutFeature}>About Me</p>}
                {isActive ? <p onClick={focusOnContact}>Contact</p> : <p onClick={focusOnContactwithOutFeature}>Contact</p>}
            </div>
        </div>
    )
}

export default SideBar;
