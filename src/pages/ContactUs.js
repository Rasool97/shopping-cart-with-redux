import { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import validateForm from '../helpers/validateForm';
import Toast from '../components/Toast';

const ContactUs = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        subject: false,
        message: false,
    })

    const [toast, setToast] = useState({
        type: '',
        message: '',
    })

    const changeHandler = event => {
        setData(prevData => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }))    
    }

    
    const submitHandler = event => {
        event.preventDefault();


        if(Object.keys(errors).length) {
            setTouched({
                name: true,
                email: true,
                subject: true,
                message: true,
            })

            setToast({
                type: 'error',
                message: 'Invalid data!',
            })
        } else {
            setData({
                name: '',
                email: '',
                subject: '',
                message: '',
            })

            setTouched({
                name: false,
                email: false,
                subject: false,
                message: false,
            })
            
            setToast({
                type: 'success',
                message: 'You signed up successfully',
            })
        }
    }

    const focuseHandler = event => {
        setTouched(prevTouched => ({
                ...prevTouched,
                [event.target.name]: true,
            }))
    } 

    useEffect(() => {
        setErrors(validateForm(data))
    }, [data, touched])

    return (
        <section className='container min-h-[calc(100vh-8.4rem)] flex flex-col justify-center py-16 px-4 lg:px-16'>
            <h2 className='text-2xl font-medium border-b-4 border-blue-600 self-start pb-1 pr-4 mb-12'>Contact Us</h2>
            <div className='flex flex-col md:flex-row gap-8 lg:gap-12'>
                <div className='basis-1/2 aspect-square'>
                    <iframe className='w-full h-full' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809992.6589061549!2d48.7678205!3d37.53069995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7a15a78202373969!2zMzfCsDI0JzMyLjUiTiA0OcKwNTAnMzcuMSJF!5e0!3m2!1sen!2snl!4v1651757901848!5m2!1sen!2snl'></iframe>
                </div>
                <div className='basis-1/2 text-justify text-gray-800 flex flex-col gap-y-4'>
                    <div className='min-h-[90%] border-b pb-4 border-gray-200'>
                        <form onSubmit={submitHandler} className='flex flex-col gap-y-8'>
                            <div className='flex gap-x-4'>
                                <div className='basis-1/2'>
                                    <input className='w-full input h-10' onChange={changeHandler} onFocus={focuseHandler} value={data.name} type="text" name='name' placeholder='Your Name...' />
                                    {touched.name && errors.name && <small className='text-red-700 bg-red-200 rounded-md px-2 ml-2'>{errors.name}</small>}
                                </div>
                                <div className='basis-1/2'>
                                    <input className='w-full input h-10' onChange={changeHandler} onFocus={focuseHandler} value={data.email} type="email" name='email' placeholder='Your Email...' />
                                    {touched.email && errors.email && <small className='text-red-700 bg-red-200 rounded-md px-2 ml-2'>{errors.email}</small>}
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-1'>
                                <input className='input h-10' onChange={changeHandler} onFocus={focuseHandler} value={data.subject} type="text" name='subject' placeholder='Subject...' />
                                {touched.subject && errors.subject && <small className='text-red-700 bg-red-200 rounded-md px-2 ml-2 self-start'>{errors.subject}</small>}
                            </div>
                            <div className='flex flex-col gap-y-1'>
                                <textarea className='input' name="message" onChange={changeHandler} onFocus={focuseHandler} value={data.message} placeholder='Your Message'  cols="30" rows="10"></textarea>
                                {touched.message && errors.message && <small className='text-red-700 bg-red-200 rounded-md px-2 ml-2 self-start'>{errors.message}</small>}
                            </div>
                            <button className='btn font-medium self-start'>SEND MESSAGE</button>
                        </form>
                    </div>
                    <ul className='flex justify-start gap-x-6'>
                      <li>
                          <a>
                            <FaFacebook className='text-gray-400 text-2xl transition-colors hover:text-blue-400 cursor-pointer' />
                          </a>
                      </li>
                      <li>
                          <a>
                            <FaTwitter className='text-gray-400 text-2xl transition-colors hover:text-blue-400 cursor-pointer' /> 
                          </a>
                      </li>
                      <li>
                          <a>
                            <FaLinkedin className='text-gray-400 text-2xl transition-colors hover:text-blue-400 cursor-pointer' />
                          </a>
                      </li>
                      <li>
                          <a>
                            <FaInstagram className='text-gray-400 text-2xl transition-colors hover:text-blue-400 cursor-pointer' />
                          </a>
                      </li>
                    </ul>
                </div>
            </div>
            <Toast type={toast.type} message={toast.message} />
        </section>
    );
};

export default ContactUs;