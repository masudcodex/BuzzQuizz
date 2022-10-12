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
                        <b>React Router</b> is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.<br /> <br />
                        React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information. <br /> <br />
                        By preventing a page refresh, and using Router or Link, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.


                        </Card.Text>
                    </Card.Body>
                    </Card>
                    <Card className='text-start my-5'>
                    <Card.Header as="h5">How does Context API work?</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. <br /> <br />
                        React.createContext() is all we need to start working to React Context API. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    <Card className='text-start'>
                    <Card.Header as="h5">What is useRef hook?</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        Ref means just reference, so it can be a reference to anything (DOM node, Javascript value, etc). The useRef hook returns a mutable object which doesn’t re-render the component when it’s changed. It may looks like useState, but unlike useState, doesn’t trigger re-render of the component. The object that useRef returns have a current property that can hold any modifiable value.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Container>
            </div>
        </div>
    );
};

export default Blog;