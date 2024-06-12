import React from "react";
import './Main.css';

export default function Main({ houses }) {
    return (
        <div className="main-container">
            <div className="flag">
                <h1>What's Your Hogwarts House?</h1>
                <a href="https://www.wizardingworld.com/sorting-hat" className="btn">GET SORTED NOW</a>
            </div>
            <div className="flag-container">
                {houses.map((house, index) => (
                    <div key={index} className="house">
                        <img src={house.src} alt={house.alt} width="100px" />
                    </div>
                ))}
            </div>
            <div className="quizzes">
                <h1>Quizzes</h1>
                <a href="https://www.wizardingworld.com/quiz/the-time-turner-quiz" target="_blank" rel="noopener noreferrer">
                    <img src="https://i.pinimg.com/736x/dd/a6/23/dda623924cd61c85e3b443d63989fe2a.jpg" alt="The Time-Turner quiz" width="100px"/>
                </a>
                <a href="https://www.wizardingworld.com/quiz/true-or-false-peter-pettigrew-edition" target="_blank" rel="noopener noreferrer">
                    <img src="https://i.pinimg.com/564x/66/8c/d8/668cd897bdad015bf50774812b4e7b4f.jpg" alt="True or False: Peter Pettigrew edition" width="100px"/>
                </a>
                <a href="https://www.wizardingworld.com/quiz/the-ultimate-slytherin-quiz" target="_blank" rel="noopener noreferrer">
                    <img src="https://i.pinimg.com/736x/a1/db/aa/a1dbaad1e019737a8547d971444ca200.jpg" alt="The ultimate Slytherin quiz" width="100px"/>
                </a>
            </div>
        </div>
    );
}
