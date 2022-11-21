import React from "react";
import { innerText } from "../../helper";
import "./task.css";

export const Tasks = ({ preguntas, escenario }) => {
  return (
    <>
      <h3>Tareas</h3>
      <p className="p">Escenario: {escenario}</p>
      {preguntas?.map(({ tiempo, tipoTarea, respuesta, texto }, i) => {
        const condition = respuesta !== "respuesta verbal";
        return (
          <article key={i} className="details__tasks">
            <p>Tarea {i + 1}:</p>
            <p dangerouslySetInnerHTML={innerText(texto)}></p>
            {condition && <p>{respuesta}</p>}
            <p className="details__time">Duración de la tarea: {tiempo}</p>
          </article>
        );
      })}
    </>
  );
};
