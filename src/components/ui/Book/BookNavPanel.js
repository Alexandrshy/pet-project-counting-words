// @flow

import React, {PureComponent} from 'react';

type Props = {
    onNavClick: Function;
    navSelected: string;
}

class BookNavPanel extends PureComponent<Props> {
    constructor(props: Props) {
        super(props);

        this.handleNavClick = this.handleNavClick.bind(this);
    }

    handleNavClick: () => void;
    handleNavClick(event: SyntheticEvent<HTMLButtonElement>) {
        event.preventDefault();
        const nav = event.currentTarget.getAttribute('name');
        this.props.onNavClick(nav);
    }

    render() {
        const { navSelected } = this.props;

        return(
            <div className="book-nav-panel">
                <button 
                    className={`button${navSelected === 'bookSearch' ? ' is-active' : ''}`} 
                    name="bookLog" 
                    onClick={this.handleNavClick}>
                        <span>Перейти в журнал</span>
                </button>
                <button 
                    className={`button${navSelected === 'bookLog' ? ' is-active' : ''}`} 
                    name="bookSearch" 
                    onClick={this.handleNavClick}>
                        <span>Перейти в поиск</span>
                </button>
            </div>
        )
    }
}

export default BookNavPanel;