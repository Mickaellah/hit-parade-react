import {connect} from 'react-redux';
import {songLists} from '../actions';
import popularSong from '../components/PopularSong';

function mapStateToProps(state) {
    console.log(state);
    return {
        songs: state.songs
    }
}

const mapDispatchToProps = {
    songLists,
}

export default connect(mapStateToProps, mapDispatchToProps) (popularSong);