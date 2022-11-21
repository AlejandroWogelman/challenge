import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Tasks } from "../../components/tasks/Tasks";
import { findClient, innerText } from "../../helper";

import "./details.css";

export const Details = () => {
  const { clientName } = useParams();
  const navigate = useNavigate();

  const data = findClient(clientName);

  const { cliente, escenario, preguntas, transcripcion, linkVideo } =
    data || {};

  useEffect(() => {
    if (!data) {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <div className="details">
      <h1 className="details__title">{cliente}</h1>
      <h2>Testeador</h2>
      <video controls type="video/mp4" className="video">
        <source src={linkVideo} />
      </video>
      <article className="details__transcription">
        <h3>Transcripción</h3>
        <p
          className="details__transcription--text"
          dangerouslySetInnerHTML={innerText(transcripcion)}
        ></p>
      </article>
      <Tasks preguntas={preguntas} escenario={escenario} />
    </div>
  );
};
