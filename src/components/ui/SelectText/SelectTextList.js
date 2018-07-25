// @flow

import React, { PureComponent } from "react";
import "./SelectText.css";
import randomIndex from "../../../func/randomIndex";
import receivingInfromation from "../../../func/receivingInfromation";

type Props = {
  options: Array<{
    id: string,
    title: string,
    author: string,
    text: string,
    textHTML: string,
    language: string,
    level: string,
    words: string
  }>,
  blocked: boolean,
  onRefActiveTextID: Function
};

type State = {
  language: string,
  level: string,
  arrayLanguage: Array<string>,
  arrayLevel: Array<string>
};

class SelectTextList extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    const { options } = this.props;
    this.state = {
      language: "",
      level: "",
      arrayLanguage: receivingInfromation(options, "language"),
      arrayLevel: receivingInfromation(options, "level")
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const { arrayLanguage, arrayLevel } = this.state;
    const { options } = this.props;
    const selectedLang = String(arrayLanguage[0]);
    const selectedLevel = String(arrayLevel[0]);
    const newData = options.filter(item => item.language === selectedLang);

    this.setState({
      language: selectedLang,
      level: selectedLevel,
      arrayLevel: receivingInfromation(newData, "level")
    });
  }

  handleSubmit: () => void;

  handleSubmit(event: SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    const { options, onRefActiveTextID } = this.props;
    const { language, level } = this.state;
    const newData = options.filter(
      (item: { language: string, level: string }) =>
        item.language === language && item.level === level
    );
    const randomIndexArray = randomIndex(1, newData.length);
    onRefActiveTextID(newData[randomIndexArray - 1].id);
  }

  handleChange: () => void;

  handleChange(event: SyntheticEvent<HTMLButtonElement>) {
    const { options } = this.props;
    const selectName = event.currentTarget.getAttribute("name");
    const selectValue = event.currentTarget.value;
    const newData = options.filter(item => {
      if (selectName && typeof selectName === "string") {
        return item[selectName] === selectValue;
      }
      return false;
    });

    if (selectName === "language") {
      this.setState({
        language: selectValue,
        arrayLevel: receivingInfromation(newData, "level")
      });
    } else if (selectName === "level") {
      this.setState({
        level: selectValue,
        arrayLanguage: receivingInfromation(newData, "language")
      });
    }
  }

  render() {
    const { blocked } = this.props;
    const { language, level, arrayLanguage, arrayLevel } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        className={`select-text-list${
          blocked ? " select-text-list--blocked" : ""
        }`}
      >
        <div className="select-text-item">
          <label className="label">
            Язык
            <select
              className="select-text select"
              value={language}
              name="language"
              onChange={this.handleChange}
            >
              {arrayLanguage.map((currentValue: string, index: number) => (
                <option key={index} value={currentValue}>
                  {currentValue}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="select-text-item">
          <label className="label">
            Уровень
            <select
              className="select-text select"
              value={level}
              name="level"
              onChange={this.handleChange}
            >
              {arrayLevel.map((currentValue: string, index: number) => (
                <option key={index} value={currentValue}>
                  {currentValue}
                </option>
              ))}
            </select>
          </label>
        </div>
        <input
          id="button-submit-form"
          className="button is-hidden"
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}

export default SelectTextList;
