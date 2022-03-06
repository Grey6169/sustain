import './game.css';
import { gameshow } from '../gameshow';
import {useState} from 'react';
 
function Game() {
    const [story, setStory] = useState(null);
    const [disabled, setDisabled] = useState(false);

    function startGame() {
        const min = 1;
        const max = 100;
        const rand = min + Math.random() * (max - min);

        console.log(rand);
        setDisabled(true);

        const bodyEl = document.getElementById("Game");

        const newDiv = document.createElement("div");

        if (rand <= 10.5) {
            newDiv.innerHTML = ("Unfortunately you have been born into a food insecure family. <br/>");

            const button1 = document.createElement("button");
            button1.innerHTML = ("Eat healthy, but expensive");
            newDiv.appendChild(button1);

            const button2 = document.createElement("button");
            button2.innerHTML = ("Eat unhealthy, but cheap");
            newDiv.appendChild(button2);
        }
        else {
            newDiv.innerHTML = ("Thankfully, you were born into a food secure family!")

            const button1 = document.createElement("button");
            button1.innerHTML = ("Button");
            newDiv.appendChild(button1);
        }

        bodyEl.appendChild(newDiv);
    }

    return (
        <div className='game' id="Game">
            <h1> Welcome to the Game of Life</h1>

            <button disabled={disabled} className='begin' onClick={startGame}> Begin </button>

            <div className='story'>
                {story && 
                    story.map((pieces) => (
                        <> 
                        
                        </>
                    ))
                } 
            </div>
        </div>
    );
}

export default Game;
