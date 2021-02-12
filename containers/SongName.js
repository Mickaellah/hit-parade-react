import {connect} from 'react-redux';
import {songLists} from '../actions';
import SongName from '../components/SongName';

function mapStateToProps(state) {
    return {
        songs: state.songs
    }
}

const mapDispatchToProps = {
    songLists,
}

export default connect(mapStateToProps, mapDispatchToProps) (SongName);