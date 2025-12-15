import type { quiz, question, answer } from "src/pages/quiz/useQuizContent";
import styles from './quizComponent.module.css'
import { useNavigate, useParams } from "react-router-dom";
import {  useEffect, useState } from "react";
import type { FormEvent, } from "react";
import { IconButton } from 'src/components/iconButton/iconButton'
import { MdOutlineQuiz } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaArrowLeft, FaArrowRight  } from "react-icons/fa6";


interface props {
    content: quiz[];
}

type questionState = "correct" | "incorrect" | "unanswered";

export function QuizComponent({content}: props) {

    const navigate = useNavigate();
    const id: number = Number(useParams<{id: string}>().id);
    const [quizState, setQuizState] = useState<questionState[]>([]);
    const [currentQuiz, setCurrentQuiz] = useState<quiz>(content[0]);
    const [currentQuestion, setCurrentQuestion] = useState<question>(currentQuiz.questions[0]);
    const [questionStyleClass, setQuestionStyleClass] = useState<string>(styles.questionType1);

    useEffect(() => {
        if(id < content.length && id >= 0){
            const quiz = content.find((quiz) => quiz.id === id);
            if (!quiz) return;
            setCurrentQuiz(quiz)
        }else{
            navigate(`/home`);
        } 
    }, [id]);

    useEffect(() => {
        const initial = Array(currentQuiz.questions.length).fill("unanswered") as questionState[];
        setQuizState(initial);
        setCurrentQuestion(currentQuiz.questions[0])
    }, [currentQuiz]);

    useEffect(() => {
        
        if(currentQuestion.type === 1){
            setQuestionStyleClass(styles.questionType1)
        }else if(currentQuestion.type === 2){
            setQuestionStyleClass(styles.questionType2) 
        }else{
            setQuestionStyleClass(styles.questionType3) 
        }
        
    }, [currentQuestion]);


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const inputs = Array.from(form.elements) as HTMLInputElement[];
        const names = inputs.filter((el) => el.type === "checkbox" && el.checked).map((checkbox) => checkbox.name);
        const areEqual = names.length === currentQuestion.validation.length && names.every((value, index) => value === String(currentQuestion.validation[index]));

        setQuizState(prev => {
            const copy = [...prev];   
            copy[currentQuestion.id] = areEqual ? "correct" : "incorrect";
            return copy;              
        })
    };

    const resetQuestion = () => {
        setQuizState(prev => {
            const copy = [...prev];   
            copy[currentQuestion.id] = "unanswered";
            return copy;              
        })
    }


    const goPrev = () => {
        const prevId = id > 0 ? id - 1 : content[content.length - 1].id;
        navigate(`/lessons/quiz/${prevId}`);                
    }

    const goNext = () => {
        const nextId = id < content.length-1 ? id + 1: content[0].id;
        navigate(`/lessons/quiz/${nextId}`);    
    }

    return (
        <section>
            <h1 className={styles.pageTitle}>{currentQuiz.title}</h1>

            <div className={styles.quizNav}>
                <button onClick = {goPrev}><FaArrowLeft /> Previous Lesson</button>
                <button onClick = {goNext}>Next Lesson <FaArrowRight /></button>
            </div>
            <div className={styles.questionNav}>{currentQuiz.questions.map(question => <button className={currentQuestion.id === question.id ? styles.questionNavActive : ""} key={question.id} onClick={() => setCurrentQuestion(question)} />)}</div>           

            <em>{currentQuestion.id+1}/{currentQuiz.questions.length} Question</em>
            <h2>{currentQuestion.id+1 + ". " +currentQuestion.title}</h2>
            {currentQuestion.type === 3 &&<span className={styles.questionImage}>{currentQuestion.image}</span>}
            <form onSubmit={handleSubmit}>
                <div className={questionStyleClass}>
                    {currentQuestion.answers.map(answer => 
                        <label key={answer.id} className={styles.questionWrapper}>
                            {answer.image}
                            <input 
                                type="checkbox" 
                                name={answer.id.toString()}
                                className={styles.checkboxRound}                      
                            />
                        {answer.text}</label>
                    )}
                </div>
                <div className={styles.formControls}>
                    <IconButton text="Reset Answers" stylemode="dark" onClick={resetQuestion} type="button"><MdOutlineQuiz /></IconButton>
                    <IconButton text="Check Answers" className={quizState[currentQuestion.id] === "incorrect" ? styles.wrongAnswer : ""} stylemode="dark" type="submit"><IoMdCheckmarkCircleOutline /></IconButton>
                </div>
                
            </form>
        </section>
    );
}