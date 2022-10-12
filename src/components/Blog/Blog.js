import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <div className='page-header'>
                <h2>Buzz Blog</h2>
                <p>Our blog page contains different types of Q/A</p>
            </div>
            <div className='my-5'>
                <Container className='w-75'>
                    <Card className='text-start'>
                    <Card.Header as="h5">What is the purpose of React Router?</Card.Header>
                    <Card.Body>
                        <Card.Text>  
                        <b>React Router</b> is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                        <br />
                        React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.
                        <br />
                        By preventing a page refresh, and using Router or Link, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.


                        </Card.Text>
                    </Card.Body>
                    </Card>
                    <Card className='text-start my-5'>
                    <Card.Header as="h5">How does Context API work?</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    <Card className='text-start'>
                    <Card.Header as="h5">What is Useref hook?</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Container>
            </div>
        </div>
    );
};

export default Blog;