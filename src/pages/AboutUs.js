import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import aboutImage from '../assets/images/person.0a601bfd9486e806984c.jpg'

const AboutUs = () => {
    return (
        <section className='container min-h-[calc(100vh-8.4rem)] flex flex-col justify-center py-16 px-4 lg:px-16'>
            <h2 className='text-2xl font-medium border-b-4 border-blue-600 self-start pb-1 pr-4 mb-12'>About Us</h2>
            <div className='flex flex-col md:flex-row gap-8 lg:gap-12'>
                <div className='basis-1/2 aspect-square'>
                    <img src={aboutImage} alt="aboutImage" className='w-full h-full' />
                </div>
                <div className='basis-1/2 text-justify text-gray-800 flex flex-col gap-y-4'>
                    <h3 className='text-xl font-medium'>Lorem, ipsum dolor</h3>
                    <div className='min-h-[80%] flex flex-col gap-y-3 border-b pb-4 border-gray-200'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fugiat, magnam quam eaque, nulla consectetur ea maxime qui quas aspernatur eligendi laboriosam cum quo laudantium praesentium repudiandae odio? Nemo minima dolores animi inventore sit vel voluptatem, accusantium rerum blanditiis officiis?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur iure ad, minus officia in.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci quae omnis sit mollitia reprehenderit atque laborum qui consectetur quidem?</p>
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
        </section>
    );
};

export default AboutUs;