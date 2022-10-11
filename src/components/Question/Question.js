import React, { useState } from 'react';
import parse from 'html-react-parser';
import { Col, Container, FormLabel, Row } from 'react-bootstrap';
import './Question.css';

const Question = ({ques, handleClickAnswer}) => {
    const [quest, index] = ques;
    const idx = index +  1;
    const { id, correctAnswer, options, question} = quest;
    const parsedQuestion = parse(question);
    const qs = parsedQuestion.props.children;


    return (
        <div>
            <Container className="px-3 py-5">
                <div className='w-75 m-auto pb-4'>
                    <h2>Quiz {idx}: {qs}</h2>
                </div>
                <Row className="justify-content-center">
                    {
                        options.map((option, index, question)=> 
                        <Col sm={12} md={5} key={index} className={`quiz-options form-check text-start px-2 py-3 m-2 border rounded-3`}>
                            <input onClick={()=> handleClickAnswer({option, correctAnswer})} type="radio" name="quizOption" id="quizOptions" value={correctAnswer}/>
                            <label className="form-check-label ms-2">
                                {option}
                            </label>
                        </Col>
                        )
                    }
                </Row>   
            </Container>
            
        </div>
    );
};

export default Question;