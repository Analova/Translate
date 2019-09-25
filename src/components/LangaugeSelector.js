import React, { Component } from "react";

class LangaugeSelector extends Component {
  render() {
    return (
      <div>
        <div>
          Select a langaue:
          <i
            className="flag us"
            onClick={() => this.props.onLangaugeChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.props.onLangaugeChange("dutch")}
          />
        </div>
      </div>
    );
  }
}

export default LangaugeSelector;
