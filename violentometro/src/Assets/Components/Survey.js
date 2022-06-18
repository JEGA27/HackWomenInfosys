import React, {useState} from 'react';
import '../CSS/survey.css';
import {db} from '../../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
import wave from "../../images/Wave.gif"
export default function Survey(){
   
    const questions = [
        {
            questionText: '¿Tu pareja se victima o te amenaza?',
            answerOptions: [
                {answerText: 'Sí', isPoint: true},
                {answerText: 'No', isPoint: false}
            ]
        },

        {
            questionText: '¿Te has percatado de mentiras o engaños por parte de tu pareja?',
            answerOptions: [
                {answerText: 'Sí', isPoint: true},
                {answerText: 'No', isPoint: false}
            ]
        },

        {
            questionText: '¿Has sentido que tu pareja te cela demasiado?',
            answerOptions: [
                {answerText: 'Sí', isPoint: true},
                {answerText: 'No', isPoint: false}
            ]
        },

        {
            questionText: '¿Tu pareja te culpa de manera injustificada?',
            answerOptions: [
                {answerText: 'Sí', isPoint: true},
                {answerText: 'No', isPoint: false}
            ]
        },

        {
            questionText: '¿Constantemente sufres de humillaciones, críticas y opiniones negativas?',
            answerOptions: [
                {answerText: 'Sí', isPoint: true},
                {answerText: 'No', isPoint: false}
            ]
        },

        {
            questionText: '¿Sientes que tu pareja quiere controlarte “por tu bien”?',
            answerOptions: [
                {answerText: 'Sí', isPoint: true},
                {answerText: 'No', isPoint: false}
            ]
        },

        {
            questionText: '¿Te toca de manera que te hace sentir incómoda?',
            answerOptions: [
                {answerText: 'Sí', isPoint: true},
                {answerText: 'No', isPoint: false}
            ]
        },

        {
            questionText: '¿Te empuja, pellizca o golpea “sin querer”?',
            answerOptions: [
                {answerText: 'Sí', isPoint: true},
                {answerText: 'No', isPoint: false}
            ]
        },

        {
            questionText: '¿Te ha aislado de tus amigos, familiares o personas cercanas?',
            answerOptions: [
                {answerText: 'Sí', isPoint: true},
                {answerText: 'No', isPoint: false}
            ]
        },

        {
            questionText: '¿Amenaza con que te va a matar y se pone violento?',
            answerOptions: [
                {answerText: 'Sí', isPoint: true},
                {answerText: 'No', isPoint: false}
            ]
        },

        {
            questionText: '¿Te sientes amenazada al cumplir con tus peticiones sexuales?',
            answerOptions: [
                {answerText: 'Sí', isPoint: true},
                {answerText: 'No', isPoint: false}
            ]
        },

        {
            questionText: '¿En algún momento has tenido que ser atendida por alguna lesión que te ha causado?',
            answerOptions: [
                {answerText: 'Sí', isPoint: true},
                {answerText: 'No', isPoint: false}
            ]
        },

        {
            questionText: '¿Has sufrido de un abuso sexual por parte de tu pareja?',
            answerOptions: [
                {answerText: 'Sí', isPoint: true},
                {answerText: 'No', isPoint: false}
            ]
        }

    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    var color;
    const navigate = useNavigate();
    
  
	const handleAnswerOptionClick = (isPoint) => {
		if (isPoint) {
			setScore(score + 1);
		}

        if(score >= 1 && score <=2 ){
            color = 'Yellow'
        }
        else if(score >= 3 && score <=5 ){
            color = 'Orange'
        }
        else if(score== 6){
            color = 'Red'
        }
        else if(score >= 7 && score <= 9){
            color = 'Purple'
        }
        else if(score >= 10 && score <= 13){
            color = 'Blue'
        }

        const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
            addDoc(collection(db, 'violentometer'), {
                points: score, 
                level: color
              })
              navigate('charts', {state: {userPoints: score, userLevel: color}});

		}

        console.log(score, color)
        
	};



	return (
        
        <div className='s-div'>
            <div className='survey'>
                {showScore ? (
                    <div className='score-section'>
                    </div>
                ) : (
                    <>
                    <div className='izq'>
                <h1>Violentómetro</h1>
                <h2>Si hay violencia en la pareja, no hay amor.</h2>
                <img src={require("../Images/imagen.png")} alt="Foto" />
                    </div>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span> Pregunta {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button onClick={() => handleAnswerOptionClick(answerOption.isPoint)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
		    </div>
            
        </div>
		
        
	);
}