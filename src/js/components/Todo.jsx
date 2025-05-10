import React, { useState } from "react";
import "../../styles/Todo.css";

const inicialEstadoTarea = {
    label: "",
    is_done: false
}
const Todo = () => {
    const [tarea, setTarea] = useState(inicialEstadoTarea);
    const [listaTarea, setListaTarea] = useState([]);

    const handleChange = (evento) => {
        setTarea({
            is_done: false,
            label: evento.target.value,
        });
    };

    const handleKeyDown = (evento) => {
        if (evento.key === "Enter" && tarea.label.trim() !== "") {
            evento.preventDefault();
            setListaTarea([...listaTarea, tarea]);
            console.log("lista actualizada", [...listaTarea, tarea]);
            setTarea(inicialEstadoTarea);
        }
    };


    return (

        <div className="container">
            <h1 className="titulo"> To Dos</h1>
            <form className="border" >
                <input
                    className="input-tarea"
                    type="text"
                    placeholder="What needs to be done?"
                    name="label"
                    value={tarea.label}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </form>

            <ul className="lista">
                {listaTarea.length === 0 ? (
                    <li className="lista-item">no tienes tareas pendientes, agrega 1 tarea</li>
                ) : (

                    listaTarea.map((item, index) => (
                        < li
                            key={index}
                            className="lista-item"
                        >
                            {item.label}
                            <span
                                className="text-danger"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    setListaTarea(listaTarea.filter((_, i) => i !== index))
               }
               >
🗑
                        </span>
        </li>
            ))
)}
        </ul >
        </div >

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