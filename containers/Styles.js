import {connect} from 'react-redux';
import {songLists} from '../actions';
import Styles from '../components/Styles';

function mapStateToProps(state) {
    return {
        songs: state.songs
    }
}

const mapDispatchToProps = {
    songLists,
}

export default connect(mapStateToProps, mapDispatchToProps) (Styles);