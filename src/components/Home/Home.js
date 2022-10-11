import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="hero-banner">
                <Container>
                    <Row>
                        <Col align="start" className='py-5'>
                            <h2 className='pb-3'>Best Online Quizzes</h2>
                            <p>Keeping yourself entertained and educated is just a quiz away. Want to have some fun or learn about a topic? Curated to learn while having fun, our online quizzes are an excellent source of knowledge and entertainment. Take a quiz today to discover amazing facts about yourself or the world.</p>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container> 
            </div>
        </div>
    );
};

export default Home;