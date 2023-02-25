import React, { useState } from 'react';
import SocialLinks from '../../common/socialLinks/socialLinks';
import classes from './allLinksBlock.module.css';
import Burger from './burger/burger';
import MobileMenu from './mobileMenu/mobileMenu';

const AllLinksBlock = () => {
    const { twoBlocksWrap, topBlock, popupBlock, showPopup, tabMenuWrap } =
        classes;
    const [popupClass, setPopupClass] = useState(popupBlock);
    const handlePopup = () => {
        setPopupClass((prevstate) =>
            prevstate === popupBlock ? `${popupBlock} ${showPopup}` : popupBlock
        );
    };
    return (
        <div className={twoBlocksWrap}>
            <div className={topBlock}>
                <Burger handleClick={handlePopup} />
                <div className={tabMenuWrap}>
                    <MobileMenu />
                </div>
                <div>
                    <SocialLinks />
                </div>
            </div>
            <div className={popupClass}>
                {popupClass !== popupBlock && <MobileMenu />}
            </div>
        </div>
    );
};

export default AllLinksBlock;
