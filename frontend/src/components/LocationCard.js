import React, { useState } from 'react';

const LocationCard = ({ title, address }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [copyNotification, setCopyNotification] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    const handleMapClick = () => {
        navigator.clipboard.writeText(address);
        setCopyNotification(true);
        setTimeout(() => setCopyNotification(false), 2000);
    };

    const openMapsInNewTab = () => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
    };

    return (
        <div
            className={`location-card ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            <div className="card-content">
                <div className="front">
                    <h3 className='location-cardtitle'>{title}</h3>
                    <p className='location-cardaddress'>{address}</p>
                </div>
                <div className="back">
                    <h3>{title}</h3>
                    <div className="icons">
                        <div className="map">
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={openMapsInNewTab} style={{ cursor: 'pointer' }} width="30" height="30" viewBox="0 0 50 50" fill="none">
                                <path d="M25.0031 24.7221C26.0397 24.7221 26.9259 24.353 27.6618 23.6148C28.3976 22.8766 28.7655 21.9892 28.7655 20.9526C28.7655 19.9159 28.3964 19.0297 27.6582 18.2939C26.92 17.558 26.0326 17.1901 24.996 17.1901C23.9593 17.1901 23.0731 17.5592 22.3373 18.2974C21.6014 19.0356 21.2335 19.923 21.2335 20.9596C21.2335 21.9963 21.6026 22.8825 22.3408 23.6183C23.079 24.3542 23.9664 24.7221 25.0031 24.7221ZM24.9995 44.8142C19.7565 40.2709 15.8249 36.0428 13.2047 32.1299C10.5845 28.217 9.27441 24.6246 9.27441 21.3527C9.27441 16.5451 10.8296 12.6529 13.9399 9.67609C17.0502 6.69932 20.7367 5.21094 24.9995 5.21094C29.2623 5.21094 32.9489 6.69932 36.0592 9.67609C39.1695 12.6529 40.7246 16.5451 40.7246 21.3527C40.7246 24.6246 39.4145 28.217 36.7944 32.1299C34.1742 36.0428 30.2425 40.2709 24.9995 44.8142Z" fill="#251741" />
                            </svg>
                            <p>Open Map</p>
                        </div>
                        <div className="copyadd">
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }} onClick={handleMapClick} width="30" height="30" viewBox="0 0 50 50" fill="none">
                                <path d="M18.8701 36.4608C17.8177 36.4608 16.927 36.0963 16.1979 35.3671C15.4687 34.6379 15.1041 33.7472 15.1041 32.6948V8.97698C15.1041 7.92462 15.4687 7.03385 16.1979 6.30469C16.927 5.57552 17.8177 5.21094 18.8701 5.21094H36.338C37.3903 5.21094 38.281 5.57552 39.0102 6.30469C39.7394 7.03385 40.104 7.92462 40.104 8.97698V32.6948C40.104 33.7472 39.7394 34.6379 39.0102 35.3671C38.281 36.0963 37.3903 36.4608 36.338 36.4608H18.8701ZM11.5785 43.7524C10.5262 43.7524 9.63542 43.3878 8.90625 42.6586C8.17708 41.9295 7.8125 41.0387 7.8125 39.9864V13.1436H10.9374V39.9864C10.9374 40.1467 11.0042 40.2936 11.1378 40.4271C11.2713 40.5607 11.4182 40.6275 11.5785 40.6275H32.1713V43.7524H11.5785Z" fill="#251741" />
                            </svg>
                            <p>Copy Address</p>
                        </div>
                        <div className="call flex-grow-1">
                            <svg style={{ cursor: 'pointer' }} width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.3269 50C43.1123 50 38.7919 48.9448 34.3656 46.8344C29.9394 44.7235 25.8192 41.761 22.005 37.9469C18.2229 34.1331 15.2765 30.021 13.1656 25.6106C11.0552 21.2002 10 16.8877 10 12.6731C10 11.9231 10.25 11.29 10.75 10.7738C11.25 10.2579 11.875 10 12.625 10H18.8075C19.4871 10 20.08 10.214 20.5863 10.6419C21.0929 11.0698 21.436 11.6187 21.6156 12.2887L22.8556 18.25C22.971 18.9487 22.9502 19.5594 22.7931 20.0819C22.636 20.6044 22.3588 21.0323 21.9613 21.3656L16.4762 26.4806C17.5017 28.3427 18.6354 30.0727 19.8775 31.6706C21.1196 33.2685 22.4442 34.7821 23.8512 36.2113C25.3029 37.6633 26.8654 39.0135 28.5387 40.2619C30.2117 41.5102 32.0481 42.689 34.0481 43.7981L39.3944 38.3556C39.8015 37.9165 40.259 37.6273 40.7669 37.4881C41.2748 37.3485 41.8365 37.3204 42.4519 37.4037L47.7113 38.4806C48.3908 38.6473 48.9423 38.9896 49.3656 39.5075C49.7885 40.025 50 40.6187 50 41.2887V47.375C50 48.125 49.7421 48.75 49.2262 49.25C48.71 49.75 48.0769 50 47.3269 50Z" fill="#363636" />
                            </svg>
                            <p>Phone Call</p>
                        </div>
                    </div>
                    {copyNotification && <p className="copy-notification">Address Copied!</p>}
                </div>
            </div>
        </div>
    );
};

export default LocationCard;
