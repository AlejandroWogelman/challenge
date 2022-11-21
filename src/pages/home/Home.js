import React from "react";
import { Link } from "react-router-dom";
import data from "../../data.json";
import "./home.css";

export const Home = () => {
  const clients = data.users.map(({ cliente }) => cliente);

  return (
    <section className="home">
      <h1 className="home__title">GreyDive</h1>
      <h2>Lista de links</h2>
      <div className="links">
        {clients.map((client) => (
          <Link key={client} className="link" to={client}>
            {client}
          </Link>
        ))}
      </div>
    </section>
  );
};
