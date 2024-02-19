import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FaMapMarkerAlt } from 'react-icons/fa';

const LocationCard = ({ title, address }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [copyNotification, setCopyNotification] = useState(false);

    const handleHover = () => {
        setIsFlipped(!isFlipped);
    };

    const handleMapClick = () => {
        // Copy address to clipboard
        navigator.clipboard.writeText(address);
        // Show copy notification
        setCopyNotification(true);
        // Hide notification after 2 seconds
        setTimeout(() => setCopyNotification(false), 2000);
      };

    const openMapsInNewTab = () => {
        // Open Google Maps link in a new tab
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
    };

    return (
        <div
            className={`location-card flip-card ${isFlipped ? 'flipped' : ''}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <Card className='flipSide-180' style={{ width: '25rem', height: '10rem'}}>
                        <Card.Body>
                            <h3 style={{paddingTop: '15px'}}>{title}</h3>
                            <Card.Text>{address}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="flip-card-back">
                    <Card className='flipSide-180' style={{ width: '25rem', height: '10rem', backgroundColor:'#EEDFD2' }}>
                        <Card.Body>
                            <h3 style={{marginBottom: '25px',paddingTop: '15px'}}>{title}</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={openMapsInNewTab} style={{cursor: 'pointer'}} width="30" height="30" viewBox="0 0 50 50" fill="none">
                                <path d="M25.0031 24.7221C26.0397 24.7221 26.9259 24.353 27.6618 23.6148C28.3976 22.8766 28.7655 21.9892 28.7655 20.9526C28.7655 19.9159 28.3964 19.0297 27.6582 18.2939C26.92 17.558 26.0326 17.1901 24.996 17.1901C23.9593 17.1901 23.0731 17.5592 22.3373 18.2974C21.6014 19.0356 21.2335 19.923 21.2335 20.9596C21.2335 21.9963 21.6026 22.8825 22.3408 23.6183C23.079 24.3542 23.9664 24.7221 25.0031 24.7221ZM24.9995 44.8142C19.7565 40.2709 15.8249 36.0428 13.2047 32.1299C10.5845 28.217 9.27441 24.6246 9.27441 21.3527C9.27441 16.5451 10.8296 12.6529 13.9399 9.67609C17.0502 6.69932 20.7367 5.21094 24.9995 5.21094C29.2623 5.21094 32.9489 6.69932 36.0592 9.67609C39.1695 12.6529 40.7246 16.5451 40.7246 21.3527C40.7246 24.6246 39.4145 28.217 36.7944 32.1299C34.1742 36.0428 30.2425 40.2709 24.9995 44.8142Z" fill="#251741" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{cursor: 'pointer'}} onClick={handleMapClick} width="30" height="30" viewBox="0 0 50 50" fill="none">
                                <path d="M18.8701 36.4608C17.8177 36.4608 16.927 36.0963 16.1979 35.3671C15.4687 34.6379 15.1041 33.7472 15.1041 32.6948V8.97698C15.1041 7.92462 15.4687 7.03385 16.1979 6.30469C16.927 5.57552 17.8177 5.21094 18.8701 5.21094H36.338C37.3903 5.21094 38.281 5.57552 39.0102 6.30469C39.7394 7.03385 40.104 7.92462 40.104 8.97698V32.6948C40.104 33.7472 39.7394 34.6379 39.0102 35.3671C38.281 36.0963 37.3903 36.4608 36.338 36.4608H18.8701ZM11.5785 43.7524C10.5262 43.7524 9.63542 43.3878 8.90625 42.6586C8.17708 41.9295 7.8125 41.0387 7.8125 39.9864V13.1436H10.9374V39.9864C10.9374 40.1467 11.0042 40.2936 11.1378 40.4271C11.2713 40.5607 11.4182 40.6275 11.5785 40.6275H32.1713V43.7524H11.5785Z" fill="#251741" />
                            </svg>
                            {copyNotification && <p style={{ marginTop: '10px', color: 'green' }}>Address Copied!</p>}
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default LocationCard;
