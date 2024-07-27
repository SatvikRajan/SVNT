import React, { useState } from 'react';

const LocationCard = ({ title, address, phoneNumber, backgroundImage }) => {
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

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    }

    return (
        <div
            className={`location-card ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}

        >
            <div className="card-content" >
                <div className="front" style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', color: 'white' }}>
                    <h3 className='location-cardtitle'>{title}</h3>
                    {/* <p className='location-cardaddress'>{address}</p> */}
                </div>
                <svg className='gotoback' width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.01912 25.0673L0.245117 23.2933L10.5384 13L0.245117 2.70672L2.01912 0.932724L14.0864 13L2.01912 25.0673Z" fill="#363636" />
                </svg>

                <div className="back" style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', color: 'white' }}>
                    <h3>{title}</h3>
                    <div className="icons">
                        <div className='loc-icon'>
                            <svg onClick={openMapsInNewTab} style={{ cursor: 'pointer' }} width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.0072 29.3269C31.1201 29.3269 32.0699 28.9306 32.8566 28.1381C33.6436 27.3456 34.0372 26.3929 34.0372 25.28C34.0372 24.1671 33.6407 23.2171 32.8478 22.43C32.0553 21.6433 31.1026 21.25 29.9897 21.25C28.8768 21.25 27.927 21.6463 27.1403 22.4388C26.3532 23.2313 25.9597 24.184 25.9597 25.2969C25.9597 26.4098 26.3561 27.3598 27.1491 28.1469C27.9416 28.9335 28.8943 29.3269 30.0072 29.3269ZM29.9984 52.5481C24.1234 47.3527 19.698 42.5073 16.7222 38.0119C13.7459 33.5169 12.2578 29.4265 12.2578 25.7406C12.2578 20.4519 13.9799 16.0896 17.4241 12.6538C20.8678 9.21792 25.0593 7.5 29.9984 7.5C34.9376 7.5 39.1291 9.21792 42.5728 12.6538C46.017 16.0896 47.7391 20.4519 47.7391 25.7406C47.7391 29.4265 46.2509 33.5169 43.2747 38.0119C40.2989 42.5073 35.8734 47.3527 29.9984 52.5481Z" fill="#F1FAFF" />
                            </svg>

                            <p>Open Location</p>

                        </div>
                        <div className="map-icon">
                            <svg style={{ cursor: 'pointer' }} onClick={handleMapClick} width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.7887 42.5C21.6379 42.5 20.6771 42.1146 19.9062 41.3438C19.1354 40.5729 18.75 39.6121 18.75 38.4613V11.5387C18.75 10.3879 19.1354 9.42708 19.9062 8.65625C20.6771 7.88542 21.6379 7.5 22.7887 7.5H42.2113C43.3621 7.5 44.3229 7.88542 45.0938 8.65625C45.8646 9.42708 46.25 10.3879 46.25 11.5387V38.4613C46.25 39.6121 45.8646 40.5729 45.0938 41.3438C44.3229 42.1146 43.3621 42.5 42.2113 42.5H22.7887ZM15.2887 50C14.1379 50 13.1771 49.6146 12.4062 48.8438C11.6354 48.0729 11.25 47.1123 11.25 45.9619V16.5387H13.75V45.9619C13.75 46.3465 13.9102 46.699 14.2306 47.0194C14.551 47.3398 14.9037 47.5 15.2887 47.5H37.2113V50H15.2887Z" fill="#F1FAFF" />
                            </svg>

                            <p>Copy Location</p>
                        </div>
                        <div className='call'>
                            <svg style={{ cursor: 'pointer' }} onClick={handleCall} width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.3269 50C43.1123 50 38.7919 48.9448 34.3656 46.8344C29.9394 44.7235 25.8192 41.761 22.005 37.9469C18.2229 34.1331 15.2765 30.021 13.1656 25.6106C11.0552 21.2002 10 16.8877 10 12.6731C10 11.9231 10.25 11.29 10.75 10.7738C11.25 10.2579 11.875 10 12.625 10H18.8075C19.4871 10 20.08 10.214 20.5863 10.6419C21.0929 11.0698 21.436 11.6187 21.6156 12.2887L22.8556 18.25C22.971 18.9487 22.9502 19.5594 22.7931 20.0819C22.636 20.6044 22.3588 21.0323 21.9613 21.3656L16.4762 26.4806C17.5017 28.3427 18.6354 30.0727 19.8775 31.6706C21.1196 33.2685 22.4442 34.7821 23.8512 36.2113C25.3029 37.6633 26.8654 39.0135 28.5387 40.2619C30.2117 41.5102 32.0481 42.689 34.0481 43.7981L39.3944 38.3556C39.8015 37.9165 40.259 37.6273 40.7669 37.4881C41.2748 37.3485 41.8365 37.3204 42.4519 37.4037L47.7113 38.4806C48.3908 38.6473 48.9423 38.9896 49.3656 39.5075C49.7885 40.025 50 40.6187 50 41.2887V47.375C50 48.125 49.7421 48.75 49.2262 49.25C48.71 49.75 48.0769 50 47.3269 50Z" fill="#F1FAFF" />
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
