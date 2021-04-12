import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookData = [
    {
        _id:'5edhguyt874376bt',
        id: 1,
        subject: 'Teeth Orthodonicts',
        visitingHour: '8.00am - 9.00am',
        totalSpace: 10
    },
    {
        _id:'5edhguyt874376aawbt',
        id: 2,
        subject: 'Cosmic Dentistry',
        visitingHour: '8.00am - 9.00am',
        totalSpace: 10
    },
    {
        _id:'5edhgudfsf5yt874376bt',
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '3.20pm - 4.50pm',
        totalSpace: 10
    },
    {
        _id:'5edhguyt87wqq34376bt',
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: '6.00am - 7.00am',
        totalSpace: 10
    },
    {
        _id:'5edhgu34srDyt874376bt',
        id: 5,
        subject: 'Teeth Orthodonicts',
        visitingHour: '8.00am - 9.00am',
        totalSpace: 10
    },
    {
        _id:'5edhguyt87weG44376bt',
        id: 6,
        subject: 'Teeth Orthodonicts',
        visitingHour: '8.00am - 9.00am',
        totalSpace: 10
    },
]





const BookAppointment = ({ date }) => {
    return (
        <section className='mt-5'>
            <h2 className='text-center pt-3 mb-5 text-brand'>Available Appointments on {date.toDateString()}</h2>

            <div className='row container mx-5'>
                {
                    bookData.map (book=> <BookingCard book={book} date={date} key={book.id}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;