import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css'


const InfoCard = (props) => {
    const { title, description, icon,background} = props.info


    return (
        <div className="col-md-4 text-white px-2">
            <div className={`d-flex justify-content-center info-container info-${background}`}>
                <div className='mr-3'>
                    <FontAwesomeIcon className='info-icon' icon={icon} />
                </div>
                <div>
                    <h6>{title}</h6>
                    <small>{description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;