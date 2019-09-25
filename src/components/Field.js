import React, { Component } from "react";
import LangaugeContext from "../context/LanguageContext";

class Field extends Component {
  static contextType = LangaugeContext;
  render() {
    const text = this.context.language === "english" ? "Submit" : "Namm";
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
