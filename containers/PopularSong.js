import {connect} from 'react-redux';
import {songLists} from '../actions';
import PopularSong from '../components/PopularSong';

function mapStateToProps(state) {
    return {
        songs: state.getSongs
    }
}

const mapDispatchToProps = {
    songLists,
}

export default connect(mapStateToProps, mapDispatchToProps) (PopularSong);