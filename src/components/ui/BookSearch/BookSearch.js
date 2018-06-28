// @flow

import React, {PureComponent} from 'react';


type Props = {}

class BookSearch extends PureComponent<Props> {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    
    handleChange(event) {
        let search = event.target.value;

        this.setState({
            search
        })
    }

    render() {
        return (
            <form 
                className=""
                onSubmit={this.handleSubmit}>
                <input 
                    className="input search-input" 
                    type="text" 
                    value={this.state.search} 
                    placeholder="Введите название книги" 
                    onChange={this.handleChange} />
                <input 
                    className="button" 
                    type="submit" 
                    value="Submit" />
            </form>
        )
    }
}

export default BookSearch;