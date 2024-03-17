import React, { useState } from 'react';

const Item = () => {
    const [selectedAnswer, setSelectedAnswer] = useState({});

    const riddles = [
        {
            id: 1,
            description: "Год выхода анимэ атака титанов",
            option1: "1998",
            option2: "2006",
            option3: "2013",
            option4: "2018",
            correct: 3
        },
        {
            id: 2,
            description: "Кто главный герой анимэ Атака Титанов?",
            option1: "Микаса Акерман",
            option2: "Эрен Йегер",
            option3: "Леви Акерман",
            option4: "Кони Спрингер",
            correct: 2
        },
        {
            id: 3,
            description: "Кто был владельцем звероподобного титана?",
            option1: "Зик",
            option2: "Леви",
            option3: "Эрен",
            option4: "Фалько",
            correct: 1
        },
        {
            id: 4,
            description: "Как называлась внешняя стена острова парадиз?",
            option1: "Сина",
            option2: "Мария",
            option3: "Роза",
            correct: 2
        },
        {
            id: 5,
            description: "Как умер Зик в последней эпизоде атаки титанов",
            option1: "Он отдал свою силу фалько",
            option2: "Он был убит титаном основателем",
            option3: "Леви акерман сдержал слово и убил его",
            option4: "Его временной цикл титана подошел к концу",
            correct: 3
        }
    ];

    const handleAnswerClick = (riddleId, selectedOption) => {
        setSelectedAnswer({ ...selectedAnswer, [riddleId]: selectedOption });
    };

    const checkAnswer = (riddleId, selectedOption) => {
        return selectedAnswer[riddleId] === selectedOption;
    };

    return (
        <div style={styles.container}>
            {riddles.map(riddle => (
                <div key={riddle.id} style={styles.riddleContainer}>
                    <h3 style={styles.riddleDescription}>{riddle.description}</h3>
                    <ul style={styles.optionsList}>
                        <li onClick={() => handleAnswerClick(riddle.id, 1)} style={{ ...styles.option, ...(selectedAnswer[riddle.id] === 1 ? styles.selectedOption : {}) }}>{riddle.option1}</li>
                        <li onClick={() => handleAnswerClick(riddle.id, 2)} style={{ ...styles.option, ...(selectedAnswer[riddle.id] === 2 ? styles.selectedOption : {}) }}>{riddle.option2}</li>
                        <li onClick={() => handleAnswerClick(riddle.id, 3)} style={{ ...styles.option, ...(selectedAnswer[riddle.id] === 3 ? styles.selectedOption : {}) }}>{riddle.option3}</li>
                        {riddle.option4 && <li onClick={() => handleAnswerClick(riddle.id, 4)} style={{ ...styles.option, ...(selectedAnswer[riddle.id] === 4 ? styles.selectedOption : {}) }}>{riddle.option4}</li>}
                    </ul>
                    {selectedAnswer[riddle.id] && checkAnswer(riddle.id, riddle.correct) ? <p style={styles.correctAnswer}>Верно!</p> : (selectedAnswer[riddle.id] && riddle.correct !== selectedAnswer[riddle.id]) ? <p style={styles.wrongAnswer}>Неверно!</p> : null}
                </div>
            ))}
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '500px',
        margin: '50px',
        padding: '20px'
    },
    riddleContainer: {
        marginBottom: '20px',
        textAlign: 'left'
    },
    riddleDescription: {
        fontSize: '18px',
        fontWeight: 'bold',
        margin: '10px 0'
    },
    optionsList: {
        listStyleType: 'none',
        padding: '0',
        margin: '0'
    },
    option: {
        cursor: 'pointer',
        padding: '10px',
        backgroundColor: '#ebebeb',
        margin: '5px',
        borderRadius: '5px',
        transition: 'background-color 0.3s'
    },
    selectedOption: {
        fontWeight: 'bold',
        fontSize: '20px'
    },
    correctAnswer: {
        color: 'green',
        fontWeight: 'bold',
        marginTop: '10px'
    },
    wrongAnswer: {
        color: 'red',
        fontWeight: 'bold',
        marginTop: '10px'
    }
};

export default Item;