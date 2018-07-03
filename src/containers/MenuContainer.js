import { connect } from 'react-redux'; 

import Menu from '../components/ui/Menu/Menu';
import { navChange } from '../actions';

const mapStateToProps = state => {
    return {
        navSelected: state.menu,
        result: state.result
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNavClick: (event) => {
            const nameNavItem = event.currentTarget.getAttribute('name');
            dispatch(navChange(nameNavItem));
        }
    }
}

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default MenuContainer;