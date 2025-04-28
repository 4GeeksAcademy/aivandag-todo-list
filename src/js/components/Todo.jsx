import React, { useState } from "react";



const Todo = () => {
    const [tarea, setTarea] = useState("");


    return (

        <div className="container">
            <h1 className="titulo"> To Dos</h1>
            <form className="border p-3" > 
            <input 
            className="input-tarea" 
            type="text" 
            placeholder="What needs to be done?"
            />
</form>





        </div>

    );

};

export default Todo;

// import React, { useState } from "react";
// import "../../styles/semaforo.css";

// const Semaforo = () => {
//     const [color, setColor] = useState("");

//     return (

//         <div className="container">
//             <div className="barra"></div>
//             <div className="semaforo">
//                 <div

//                     className={`luz roja ${color === "roja" ? "on" : ""}`}
//                     onClick={() => setColor("roja")}

//                 ></div>

//                 <div

//                     className={`luz amarilla ${color === "amarilla" ? "on" : ""}`} r
//                     onClick={() => setColor("amarilla")}

//                 ></div>

//                 <div

//                     className={`luz verde ${color === "verde" ? "on" : ""}`}
//                     onClick={() => setColor("verde")}

//                 ></div>

//             </div>
//         </div >

//     );
// };

// export default Semaforo;