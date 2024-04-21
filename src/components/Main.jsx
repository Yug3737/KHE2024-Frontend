import Header from "./Header";
import { useState } from "react"
const Main = () => {

    return(
        <>
            <Header/>
            <section className="container">
                <h4 className="explain">Practice Quiz based on your slides</h4>
                <p className="des">Please use the drop-down menu to choose the courses
                    and related concepts for the quiz.
                </p>
          
                <div className="dropdown-container" >
                    <select className="dropdown">
                        <option>Select a course</option>
                        <option>CS-1A</option>
                        <option>CS-1B</option>
                        <option>CS-2</option>
                        <option>CS-3</option>
                    </select>
                  
                
                </div>
            </section>
        </>
    )
}

export default Main;
