import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';
import './Home.css';

const Home = () => {
    const quizTopics = useLoaderData().data;
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
            <div>
                <Container>
                    <div className='py-5'>
                        <div className='pb-5'>
                            <h3 align="start">Featured Quizzes</h3>
                            <hr className='text-success'/>
                        </div>
                        <Row>
                            {
                                quizTopics.map(quizTopic => <QuizTopic 
                                    key={quizTopic.id} 
                                    quizTopic={quizTopic}
                                    >
                                    </QuizTopic>)
                            }
                        </Row>
                    </div>
                </Container>
            </div>
            
        </div>
    );
};

export default Home;