import {connect} from 'react-redux';
import {songLists} from '../actions';
import Lyrics from '../components/Lyrics';

function mapStateToProps(state) {
    console.log(state);
    return {
        songs: state.getSongs
    }
}

const mapDispatchToProps = {
    songLists,
}

export default connect(mapStateToProps, mapDispatchToProps) (Lyrics);