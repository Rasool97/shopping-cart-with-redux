import React from 'react';

const Subscribe = () => {
    return (
        <section className='w-full bg-blue-500 text-gray-100'>
            <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto text-center px-8 py-20">
                <h3 className='text-xl font-medium mb-6'>Subscribe on ONLINESHOP now!</h3>
                <p className='text-lg leading-7 mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ad maxime, nobis repellat exercitationem libero assumenda rerum, illo nemo, dicta nam sapiente. Sed, porro repudiandae.</p>
                <form onSubmit={event => event.preventDefault()} className='grid grid-cols-5 gap-x-4 w-full sm:w-4/5 mx-auto'>
                    <input type="email" placeholder='YOUR EMAIL...' className='col-span-3 h-9 rounded-sm p-2 border-2  border-gray-100 bg-transparent text-gray-100 placeholder:text-gray-100 focus:outline-none' />
                    <button className='col-span-2 h-9 bg-gray-50 text-blue-600 rounded-sm text-xs sm:text-sm font-medium transition-colors hover:bg-blue-300 hover:text-white'>Subscribe Now!</button>
                </form>
            </div>
        </section>
    );
};

export default Subscribe;