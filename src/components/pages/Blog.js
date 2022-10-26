import React from 'react';

const Blog = () => {
    return (
        <div className='text-start m-10'>

            <div className='bg-cyan-200 p-8 shadow-lg hover:shadow-2xl rounded-md'>
                <h1 className='font-bold text-xl mb-5 '>1. what is cors?</h1>
                <p>Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>
            </div>
            <div className='bg-cyan-200 p-8 shadow-lg hover:shadow-2xl mt-7 rounded-md'>
                <h1 className=' font-bold text-xl mt-5'>2 Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.</p> <br />
                <p>
                    Authentication is used by a server when the server needs to know exactly who is accessing their information or site.
                    Authentication is used by a client when the client needs to know that the server is system it claims to be.
                    In authentication, the user or computer has to prove its identity to the server or client.
                    Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                    Authentication by a client usually involves the server giving a certificate to the client in which a trusted third party such as Verisign or Thawte states that the server belongs to the entity (such as a bank) that the client expects it to.
                    Authentication does not determine what tasks the individual can do or what files the individual can see. Authentication merely identifies and verifies who the person or system is.</p>
            </div>

            <div className='bg-cyan-200 p-8 shadow-lg hover:shadow-2xl mt-8 rounded-md'>
                <h1 className=' font-bold text-xl mb-5'>3.How does the private route work?</h1>
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in) Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
            </div>

            <div className='bg-cyan-200 p-8 shadow-lg hover:shadow-2xl mt-8 rounded-md'>
                <h1 className=' font-bold text-xl mb-5'>4.What is Node? How does Node work?</h1>
                <p>Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.</p>
                <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>
        </div>
    );
};

export default Blog;