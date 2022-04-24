import React from "react";
import Chat from "./chat";

export default class ClassName extends React.Component<any, {}> {
  render() {
    {
      return (
        <>
          <div className="widget-chat">
            <div className="widget-container">
              <label className="widget-open" htmlFor="widget-open">
                <input
                  className="widget-input-open"
                  id="widget-open"
                  type="checkbox"
                  name="widget-open-chat"
                />
                <div className="widget-button">
                  <i className="fa-solid fa-message"></i>
                </div>

                <div className="widget-content">
                  <div className="widget-title">
                    <figure>
                      <img
                        className="widget-thumb"
                        src="https://i.pravatar.cc/100"
                      />
                    </figure>
                    Bem vindo(a) ao nosso chat!
                  </div>
                  <div className="widget-container-dialog">
                    <div className="interaction-container">
                      <p className="inicio-chat">Inicio: 20:00 - 24/04/2022</p>
                      <div className="interaction client">
                        <p>Boa tarde, tudo bem?</p>
                        <div className="dot"></div>
                      </div>
                      <div className="interaction agent">
                        <div className="photo">
                          <figure>
                            <img
                              className="widget-thumb"
                              src="https://i.pravatar.cc/100"
                            />
                          </figure>
                        </div>
                        <p>Tudo otimo, e com voce?</p>
                      </div>
                    </div>
                    <div className="send-message">
                      <input className="send-message-input"></input>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </>
      );
    }
  }
}
