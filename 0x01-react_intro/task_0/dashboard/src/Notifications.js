import React from 'react';
import closeIcon from './close-icon.png';
import './Notifications.css';
import { getLatestNotification } from './utils';

export function Notifications() {
    const handleButtonClick = () => {
        console.log('Close button has been clicked');
    }
    return (
        <dev>
            <div className="notifications" style={{ position: 'relative', padding: '20px', border: '1px dashed red' }}>
                <button
                    aria-label="close"
                    onClick={handleButtonClick}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        backgroundColor: 'none',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    <img src={closeIcon} alt="close icon" style={{ width: '10px', height: '10px' }} />
                </button>
                <p>Here is the list of notifications</p>

                <ul>
                    <li data-priority="default">New course available</li>
                    <li data-priority="urgent">New resume available</li>
                    <li
                        data-priority="urgent"
                        dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
                    ></li>
                </ul>
            </div>
        </dev >
    )
}