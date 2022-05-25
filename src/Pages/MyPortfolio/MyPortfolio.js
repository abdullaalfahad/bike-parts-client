import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-center items-center text-primary' style={{ height: '80vh' }}>
            <div class="card w-96 bg-primary text-white shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-secondary"><u>Name:</u> Abdulla Al Fahad</h2>
                    <p><u>Email Address:</u> aafahad02@gmail.com</p>
                    <p><u>Educational Background:</u> BSc in Computer Science and Engineer from Daffodil International University</p>
                    <p><u>Skills as a Web Developer:</u> HTML, CSS, JavaScript, React.js, React Router, Node.js, Express.js, MongoDB, Tailwind, Bootstrap, Material UI, Daisy UI, Git, NPM, Netlify, Firebase, Heroku.</p>
                    <p><u>Projects:</u></p>
                    <ol className='text-secondary'>
                        <li><a href="https://warehouse-management-7d323.web.app/" target="blank"><button className='btn btn-secondary btn-xs'>Beverage Warehouse Management</button></a></li>
                        <li className='my-2'><a href="https://pure-doctor.web.app/" target="blank"><button className='btn btn-secondary btn-xs'>Pure Doctor PortFolio</button></a></li>
                        <li><a href="https://muslimshop.netlify.app/home" target="blank"><button className='btn btn-secondary btn-xs'>Laptop Shop</button></a></li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;