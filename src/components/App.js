import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";
class App extends Component {
  state = {
    language: "english"
  };

  onLangaugeChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a langaue:
          <i
            className="flag us"
            onClick={() => this.onLangaugeChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLangaugeChange("dutch")}
          />
        </div>
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
