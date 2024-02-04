import React from 'react'
import './progressbar.css'

export default function ProgressBar({formsIndex}) {



  return (
    <div className="container">
      <div className="container-lignes">
        <div className="lignes">
          <div
            className="ligne ligne-dessus"
            style={{
              width:
                formsIndex === 1
                  ? "0%"
                  : formsIndex === 2
                  ? "25%"
                  : formsIndex === 3
                  ? "50%"
                  : formsIndex === 4
                  ? "75%"
                  : formsIndex === 5
                  ? "100%"
                  : "",
            }}
          ></div>
          <div className="ligne ligne-dessous"></div>
        </div>
      </div>
      <div className="ronds">
        <div
          className="rond rond1"
          style={{
            backgroundColor:
              formsIndex === 1
                ? "#ff3939"
                : formsIndex === 2
                ? "#ff3939"
                : formsIndex === 3
                ? "#ff3939"
                : formsIndex === 4
                ? "#ff3939"
                : formsIndex === 5
                ? "#ff3939"
                : "",
          }}
        ></div>
        <div
          className="rond rond2"
          style={{
            backgroundColor:
              formsIndex === 1
                ? "#f1f1f1"
                : formsIndex === 2
                ? "#ff3939"
                : formsIndex === 3
                ? "#ff3939"
                : formsIndex === 4
                ? "#ff3939"
                : formsIndex === 5
                ? "#ff3939"
                : "",
          }}
        ></div>
        <div
          className="rond rond3"
          style={{
            backgroundColor:
              formsIndex === 1
                ? "#f1f1f1"
                : formsIndex === 2
                ? "#f1f1f1"
                : formsIndex === 3
                ? "#ff3939"
                : formsIndex === 4
                ? "#ff3939"
                : formsIndex === 5
                ? "#ff3939"
                : "",
          }}
        ></div>
        <div
          className="rond rond4"
          style={{
            backgroundColor:
              formsIndex === 1
                ? "#f1f1f1"
                : formsIndex === 2
                ? "#f1f1f1"
                : formsIndex === 3
                ? "#f1f1f1"
                : formsIndex === 4
                ? "#ff3939"
                : formsIndex === 5
                ? "#ff3939"
                : "",
          }}
        ></div>
        <div
          className="rond rond5"
          style={{
            backgroundColor:
              formsIndex === 1
                ? "#f1f1f1"
                : formsIndex === 2
                ? "#f1f1f1"
                : formsIndex === 3
                ? "#f1f1f1"
                : formsIndex === 4
                ? "#f1f1f1"
                : formsIndex === 5
                ? "#ff3939"
                : "",
          }}
        ></div>
      </div>
    </div>
  );
}
