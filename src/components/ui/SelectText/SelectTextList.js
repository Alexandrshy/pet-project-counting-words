// @flow

import React, { PureComponent } from 'react';
import './SelectText.css'
import randomIndex from '../../../func/randomIndex'

type Props = {
    options: Array<{
        id: string,
        title: string,
        author: string,
        text: string,
        textHTML: string
    }>;
    blocked: boolean;
}

type State = {
    fragments: Array<{
        id: string,
        title: string,
        author: string,
        text: string,
        textHTML: string
    }>;
    language: string;
    level: string;
    arrayLanguage: Array<{
        id: string,
        title: string,
        author: string,
        text: string
    }>;
    arrayLevel: Array<{
        id: string,
        title: string,
        author: string,
        text: string
    }>;
}

const receivingInfromation = (dataArray:
    Array<{ id: string, title: string, author: string, text: string }>,
    title: string) =>
    dataArray.reduce((prev, curr) => {
        return (prev.indexOf(curr[title]) < 0 ?
            [...prev, curr[title]] :
            prev);
    }, []);

class SelectTextList extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            fragments: this.props.options,
            language: '',
            level: '',
            arrayLanguage: receivingInfromation(this.props.options, 'language'),
            arrayLevel: receivingInfromation(this.props.options, 'level')
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        let selectedLang = String(this.state.arrayLanguage[0]);
        let selectedLevel = String(this.state.arrayLevel[0]);
        let newData = this.state.fragments.filter((item) =>
            item.language === selectedLang
        );

        this.setState({
            language: selectedLang,
            level: selectedLevel,
            arrayLevel: receivingInfromation(newData, 'level')
        });
    }

    handleSubmit: () => void;
    handleSubmit(event: SyntheticEvent<HTMLButtonElement>) {
        event.preventDefault();
        const newData = this.state.fragments.filter((item) => {
            return (item.language === this.state.language && item.level === this.state.level);
        });
        const randomIndexArray = randomIndex(1, newData.length);
        this.props.onRefActiveTextID(newData[randomIndexArray - 1].id);
    }

    handleChange: () => void;
    handleChange(event: SyntheticEvent<HTMLButtonElement>) {
        console.log('1', event.currentTarget)
        console.log('2', event.currentTarget.getAttribute('name'))
        let selectValue = event.currentTarget.value;
        let newData = this.state.fragments.filter((item) => {
            if (selectName && typeof selectName === 'string') {
                return item[selectName] === selectValue
            }
        });

        if (selectName === 'language') {
            this.setState({
                language: selectValue,
                arrayLevel: receivingInfromation(newData, 'level')
            });
        } else if (selectName === 'level') {
            this.setState({
                level: selectValue,
                arrayLanguage: receivingInfromation(newData, 'language')
            });
        }
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className={`select-text-list${this.props.blocked ? ' select-text-list--blocked' : ''}`}>
                <div className="select-text-item">
                    <label class="label">
                        Язык
                            <select
                            className='select-text select'
                            value={this.state.language}
                            name="language"
                            onChange={this.handleChange}>
                            {this.state.arrayLanguage.map((currentValue, index) =>
                                <option key={index} value={currentValue}>{currentValue}</option>
                            )}
                        </select>
                    </label>
                </div>
                <div className="select-text-item">
                    <label class="label">
                        Уровень
                            <select
                            className='select-text select'
                            value={this.state.level}
                            name="level"
                            onChange={this.handleChange}>
                            {this.state.arrayLevel.map((currentValue, index) =>
                                <option key={index} value={currentValue}>{currentValue}</option>
                            )}
                        </select>
                    </label>
                </div>
                <input id="button-submit-form" className="button is-hidden" type="submit" value="Submit" />
            </form>
        )
    }
}

export default SelectTextList;