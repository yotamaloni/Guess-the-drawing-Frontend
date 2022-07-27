import { useState } from "react";
import { StartForm } from "../cmps/start-form";


export const AppHome = () => {


    const [isFormOpen, setIsFormOpen] = useState(false)

    const onToggleForm = () => {
        setIsFormOpen(!isFormOpen)
    }



    return (
        <section className="app-home">
            <div className="left-container">
                <p className="game-description">
                    If you are a talented painter or alternatively, if
                    you have a special talent for identifying paintings -
                    this is the game for you! This game will test how talented you really are

                </p>
                <div className="actions">
                    <button onClick={onToggleForm} className="done">Start</button>
                </div>
            </div>
            <div className="img-container">
                ?
            </div>
            {isFormOpen && <StartForm closeModal={onToggleForm} title={'Come on - Let\'s start'} />}
        </section>
    )
} 