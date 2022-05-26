import React from 'react';

const Blogs = () => {
    return (
        <div className='w-11/12 lg:w-11/12 mx-auto py-8 md:py-26 text-primary'>
            <h1 className='text-2xl lg:text-4xl font-bold text-center mb-6 lg:mb-14'>Simple Question Answer</h1>
            <div className='my-5 bg-primary text-secondary p-5 shadow-xl'>
                <h1 className='mb-2'>Q1: How will you improve the performance of a React Application?</h1>
                <p>Answer: Optimizing performance in a React application</p>
                <ul>
                    <li>1. Keeping component state local where necessary.</li>
                    <li>2. Memoizing React components to prevent unnecessary re-renders.</li>
                    <li>3. Code-splitting in React using dynamic import</li>
                    <li>4 .Windowing or list virtualization in React.</li>
                    <li>5. Lazy loading images in React.</li>
                </ul>
            </div>
            <div className='my-5 bg-primary text-secondary p-5 shadow-xl'>
                <h1 className='mb-2'>Q2: What are the different ways to manage a state in a React application?</h1>
                <p>Answer: The Four Kinds of React State to Manage</p>
                <ul>
                    <li>1. Local state</li>
                    <li>2. Global state</li>
                    <li>3. Server state</li>
                    <li>4. URL state</li>
                </ul>
            </div>
            <div className='my-5 bg-primary text-secondary p-5 shadow-xl'>
                <h1 className='mb-2'>Q3: How does prototypical inheritance work?</h1>
                <p>Answer: When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. Nearly all objects in JavaScript are instances of Object, which has null as its prototype.</p>
            </div>
            <div className='my-5 bg-primary text-secondary p-5 shadow-xl'>
                <h1 className='mb-2'>Q4: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                <p>Answer: One should never update the state directly because of the following reasons:</p>
                <ul>
                    <li>1. If update it directly, calling the setState() afterward may just replace the update you made.</li>
                    <li>2. When directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</li>
                    <li>3. You will lose control of the state across all components.
                    </li>
                </ul>
            </div>
            <div className='my-5 bg-primary text-secondary p-5 shadow-xl'>
                <h1 className='mb-2'>Q6: What is a unit test? Why should write unit tests?</h1>
                <p>Answer: Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.

                    Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.

                    Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.</p>
            </div >
        </div>
    );
};

export default Blogs;