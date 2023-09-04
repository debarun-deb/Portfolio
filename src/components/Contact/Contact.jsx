import Animated from '../AnimatedLetters/Animated';
import { useState, useEffect, useRef } from 'react';
import './contact.scss';
import emailjs from '@emailjs/browser';
import Loader from '../Loader/Loader'
import { MapContainer, TileLayer, Marker ,Popup } from 'react-leaflet'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();


    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 6000);
      setTimeout(() => {
        setLoading(false); // Set loading to false when data is loaded
      }, 1500); 

    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_d7ohkyt',
                'template_pq4efvf',
                refForm.current,
                '-bbgIoJMC4l4rgPbN'
            )
            .then(
                () => {
                    alert('Message sent successfully');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send message, please try again');
                }
            );
    };

    return (
        <>
            <Loader loading={loading} />
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <Animated
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I specialize in backend web development, focusing on making digital experiences smooth and efficient. Whether you're a fellow developer, looking to collaborate, or have an interesting project in mind, I'd love to hear from you. Let&apos;s chat and see how we can create something great together.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required />
                                </li>
                                <li>
                                    <input type="email" name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='Message' required></textarea>
                                </li>
                            </ul>
                            <button className='flat-button'>SEND</button>
                        </form>
                    </div>
                </div>
                <div className='info'>
                    Debarun Deb,
                    <br />
                    India,
                    <br />
                    Sikkim Manipal Institute of Technology,
                    737136, 
                    Majitar Sikkim
                    <span>debarrun@gmail.com</span>
                </div>
                <div className='map'>
                    <MapContainer center ={[ 27.182099,88.503365 ]} zoom={13}>
                        <TileLayer
                            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        />
                        <Marker position = {[27.182099,88.503365]}>
                            <Popup>Hello from Sikkim 🫰</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>

        </>
    );
};

export default Contact;
