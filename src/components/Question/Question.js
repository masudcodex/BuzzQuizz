import React, { useState } from 'react';
import parse from 'html-react-parser';
import { Col, Container, Row } from 'react-bootstrap';
import { EyeIcon } from '@heroicons/react/24/solid';
import './Question.css';
import { toast } from 'react-toastify';

const Question = ({ques, handleClickAnswer}) => {
    const [quest, index] = ques;
    const idx = index +  1;
    const { id, correctAnswer, options, question} = quest;
    // const parsedQuestion = parse(question);
    // const qs = parsedQuestion.props.children;

    const handleShowAnswer = (ans) => {
        toast.success(`The Correct answer is: ${ans} !`, {
            position: toast.POSITION.TOP_CENTER
        });
    }

    return (
        <div>
            <Container className="py-5 my-5 quiz-single">
                <span onClick={()=>handleShowAnswer(correctAnswer)}><EyeIcon className='question-icon'/></span>
                <div className='w-75 m-auto pb-4'>
                    <div><span><b>Quiz {idx}</b></span><h2 dangerouslySetInnerHTML={{ __html: question }}></h2></div>
                </div>
                <Row className="justify-content-center">
                    {
                        options.map((option, index, question)=> 
                        <Col sm={12} md={5} key={index} className="quiz-options form-check text-start px-2 py-3 m-2 border rounded-3">
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