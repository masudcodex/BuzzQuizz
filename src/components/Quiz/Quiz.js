import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData().data;
    const {name, questions} = quiz;

    const handleClickAnswer = (value) => {
        console.log(value);
    }
    return (
        <div>    
            <Container>
                <div className='quiz-heading'>
                    <h2 className='fw-bolder'>Quiz of {name}</h2>
                </div>
                <div>
                    {
                        questions.map((question, index)=> <Question key={question.id} ques={[question, index]} handleClickAnswer={handleClickAnswer}></Question>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Quiz;