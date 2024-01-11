/* eslint-disable react/no-unescaped-entities */
import { useRouteError } from "react-router-dom";
import "../assets/styles/error.css";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-container">
      <h1>
        4<span>0</span>4
      </h1>
      <p>We do not have the page you're looking for.</p>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default Error;
