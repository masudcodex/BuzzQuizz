import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import './QuizTopic.css';

const QuizTopic = ({quizTopic}) => {
    const {id, name, logo, total} = quizTopic;

    return (
        <Col sm={12} md={6} lg={4} className='p-5'>
            <Card>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                </Card.Body>
                <Card.Footer className='bg-transparent'>
                    <Link to={`/${id}`}>
                    <Button>Start Quiz <ArrowRightIcon className='icon'/></Button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default QuizTopic;