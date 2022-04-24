import React from "react";
import Chat from "./chat";

export default class ClassName extends React.Component<any, {}> {
  render() {
    {
      return (
        <>
          <div className="chat">
            <div className="chat-container">
              <label className="chat-open" htmlFor="chat-open">
                <input
                  className="chat-input-open"
                  id="chat-open"
                  type="checkbox"
                  name="chat-open-chat"
                />
                <div className="chat-button">
                  <i className="fas fa-comment"></i>
                </div>

                <div className="chat-content">
                  <div className="chat-title">
                    <figure>
                      <img
                        className="chat-thumb"
                        src="https://i.pravatar.cc/100"
                      />
                    </figure>
                    Bem vindo(a) ao nosso chat!
                  </div>
                  <div className="chat-container-dialog">
                    <div className="interaction-container">
                      <div className="interaction client">
                        <p>Boa tarde, tudo bem?</p>
                        <div className="dot"></div>
                      </div>
                      <div className="interaction agent">
                        <div className="photo">
                          <figure>
                            <img
                              className="chat-thumb"
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
