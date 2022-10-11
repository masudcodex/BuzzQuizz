import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';


const Quiz = () => {
    const quiz = useLoaderData().data;
    const {name, questions} = quiz;



    const handleClickAnswer = ({option, correctAnswer}) => {
        if (option === correctAnswer) {
            toast.success('Your answer is correct !', {
                position: toast.POSITION.CENTER_RIGHT
            });
            
        }else{
            toast.error('Your answer is wrong !', {
                position: toast.POSITION.TOP_RIGHT
            });

        }
        return;
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
                    <ToastContainer />
                </div>
            </Container>
        </div>
    );
};

export default Quiz;