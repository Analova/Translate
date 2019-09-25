import React, { Component } from "react";
import LangaugeContext from "../context/LanguageContext";

class LanguageSelector extends Component {
  static contextType = LangaugeContext;

  render() {
    console.log(this.context);
    return (
      <div>
        <div>
          Select a langaue:
          <i
            className="flag us"
            onClick={() => this.context.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.context.onLanguageChange("dutch")}
          />
        </div>
      </div>
    );
  }
}

export default LanguageSelector;
