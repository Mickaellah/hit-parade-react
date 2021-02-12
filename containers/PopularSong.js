import {connect} from 'react-redux';
import {songLists, toggleFavorite, updateVotes} from '../actions';
import PopularSong from '../components/PopularSong';
function mapStateToProps(state) {
    return {
        songs: state.songs
    }
}

const mapDispatchToProps = {
    songLists,
    toggleFavorite,
    updateVotes
}

export default connect(mapStateToProps, mapDispatchToProps) (PopularSong);