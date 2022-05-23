import React from 'react';
import fluoried from "../../../assets/images/fluoride.png"
import cavity from "../../../assets/images/cavity.png"
import whitening from "../../../assets/images/whitening.png"
import Service from './Service';

const Services = () => {

    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoried
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Tooth Whitening',
            description: '',
            img: whitening
        }
    ]

    return (
        <div className='my-28'>
            <div className='text-center'>
                <h2 className='text-primary font-bold'>Our Services</h2>
                <h1 className='text-3xl'>Services We Provide</h1>
            </div>
            <div className='grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;