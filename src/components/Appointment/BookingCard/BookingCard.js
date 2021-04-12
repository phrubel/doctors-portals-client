import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';



const BookingCard = ({book,date}) => {
    // const { subject, visitingHour, totalSpace } = props.book;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className='container col-md-4 mb-5'>
            <div className='card p-3'>
                <div className='card-body text-center'>
                    <h5 className='card-title text-brand'>{book.subject}</h5>
                    <h6>{book.visitingHour}</h6>
                    <p>{book.totalSpace} Spaces Available</p>
                    <btn onClick={openModal} className='btn btn-brand'>BOOK APPOINTMENT</btn>
                    <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={book.subject} date={date} closeModal={closeModal}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;