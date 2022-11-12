import React from 'react';

const Blog = () => {
    return (
        <div className='my-10'>
            <div className='shadow-lg text-center w-3/4 mx-auto p-5 rounded bg-slate-100 mb-8'>
                <h4 className='my-3'><span className='font-medium'>Question:</span> What is cors?</h4>
                <p className='text-justify'><span className='font-medium'>Answer:</span>  Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            </div>
            <div className='shadow-lg text-center w-3/4 mx-auto p-5 rounded bg-slate-100 mb-8'>
                <h4 className='my-3'><span className='font-medium'>Question:</span> Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p className='text-justify'><span className='font-medium'>Answer:</span> Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices. Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Cybercriminals always improve their attacks. As a result, security teams are facing plenty of authentication-related challenges. This is why companies are starting to implement more sophisticated incident response strategies, including authentication as part of the process. The list below reviews some common authentication methods used to secure modern systems.</p>
                <div className=' text-left my-3 font-medium'>
                    <p>1. Password-based authentication</p>
                    <p>2. Multi-factor authentication</p>
                    <p>3. Certificate-based authentication</p>
                    <p>4. Biometric authentication</p>
                    <p>5. Token-based authentication</p>
                </div>
            </div>
            <div className='shadow-lg text-center w-3/4 mx-auto p-5 rounded bg-slate-100 mb-8'>
                <h4 className='my-3'><span className='font-medium'>Question:</span> How does the private route work?</h4>
                <p className='text-justify'><span className='font-medium'>Answer:</span> The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property. The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.</p>
            </div>
            <div className='shadow-lg text-center w-3/4 mx-auto p-5 rounded bg-slate-100 mb-8'>
                <h4 className='my-3'><span className='font-medium'>Question:</span> What is Node? How does Node work?</h4>
                <p className='text-justify'><span className='font-medium'>Answer:</span> Node.js is an open-source backend javascript runtime environment. It is used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return.</p>
            </div>
        </div>
    );
};

export default Blog;