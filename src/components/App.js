import React, { Component } from "react";
import LanguageSlector from "./LangaugeSelector";
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
        <LanguageSlector onLangaugeChange={this.onLangaugeChange} />
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
