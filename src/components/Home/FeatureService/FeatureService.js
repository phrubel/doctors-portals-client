import React from 'react';
import featurePic from '../../../images/featurePic.png'



const FeatureService = () => {
    return (
        <section className='feature-service pb-0 pb-md-5 mt-5 my-5'>
            <div className='container mb-5'>
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className='img-fluid' src={featurePic} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental care,<br /> On Your Terms</h1>
                        <p className='text-secondary my-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam dicta aut tempora quibusdam modi optio corrupti. Quidem placeat ducimus voluptate perspiciatis quibusdam eaque. Ratione eaque quibusdam esse! Aliquid et, ad odit, eos reprehenderit, dolorem esse illo nulla quia tenetur maxime Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus consequuntur perspiciatis aspernatur magni nam, quibusdam quasi repellat porro illo soluta sequi ipsum, laborum quas officiis?</p>
                        <button className='btn btn-brand'>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureService;