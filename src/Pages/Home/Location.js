import React from 'react';
import './AllHome.css';

const Location = () => {
    return (
        <div className='location'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7302.570962932979!2d90.35027497230065!3d23.772846356844344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0bcdf50fd59%3A0x9ab0a63bb3267107!2sAdabar%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1653268603877!5m2!1sen!2sbd" style={{ border: 'none', width: '100%', height: '550px' }} allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default Location;