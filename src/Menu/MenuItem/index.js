import React from 'react';
import PropTypes from 'prop-types';

import Component from '../../Component';

class MenuItem extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    render() {
        return (
            <div
                className={this.className()}
                onClick={this.onClick}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                {this.props.children}
            </div>
        );
    }

    className() {
        // NOTE: see narqo/react-islands#98 for notes about `_js_inited`
        let className = 'menu-item menu-item_js_inited';

        const theme = this.props.theme || this.context.theme;
        if (theme) {
            className += ' menu-item_theme_' + theme;
        }
        if (this.props.size) {
            className += ' menu-item_size_' + this.props.size;
        }
        if (this.props.type) {
            className += ' menu-item_type_' + this.props.type;
        }
        if (this.props.disabled) {
            className += ' menu-item_disabled';
        }
        if (this.props.hovered) {
            className += ' menu-item_hovered';
        }
        if (this.props.checked) {
            className += ' menu-item_checked';
        }

        if (this.props.className) {
            className += ' ' + this.props.className;
        }

        return className;
    }

    onClick(e) {
        if (this.props.disabled) {
            return;
        }

        this.props.onClick(e, this.props);
    }

    onMouseEnter() {
        if (this.props.disabled) {
            return;
        }

        this.props.onHover(true, this.props);
    }

    onMouseLeave() {
        if (this.props.disabled) {
            return;
        }

        this.props.onHover(false, this.props);
    }
}

MenuItem.contextTypes = {
    theme: PropTypes.string,
};

MenuItem.propTypes = {
    index: PropTypes.number,
    theme: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    onClick: PropTypes.func,
    onHover: PropTypes.func,
};

export default MenuItem;
