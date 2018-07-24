// @flow

import React, { PureComponent } from 'react';

type Props = {
  onNavClick: Function;
  navSelected: string;
  bookLog: string;
}

class BookNavPanel extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick: () => void;

  handleNavClick(event: SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    const { onNavClick } = this.props;
    const nav = event.currentTarget.getAttribute('name');
    onNavClick(nav);
  }

  render() {
    const { navSelected, bookLog } = this.props;

    return (
      <div>
        {bookLog.length
          ? (
            <div className="book-nav-panel">
              <button
                type="button"
                className={`button${navSelected === 'bookSearch' ? ' is-active' : ''}`}
                name="bookLog"
                onClick={this.handleNavClick}
              >
                <span>
                  Перейти в журнал
                </span>
              </button>
              <button
                type="button"
                className={`button${navSelected === 'bookLog' ? ' is-active' : ''}`}
                name="bookSearch"
                onClick={this.handleNavClick}
              >
                <span>
                  Перейти в поиск
                </span>
              </button>
            </div>
          )
          : (
            ''
          )
        }
      </div>
    );
  }
}

export default BookNavPanel;
