import {connect} from 'react-redux';
import {addToCart} from '../actions';
import Cart from '../components/Cart';

function mapStateToProps(state) {
    return {
        cartItems: state.cartItems
    }
}

const mapDispatchToProps = {
    addToCart,
}

export default connect(mapStateToProps, mapDispatchToProps) (Cart);