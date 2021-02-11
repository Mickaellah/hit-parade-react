import {connect} from 'react-redux';
import {songLists, toggleFavorite, increase, decrease} from '../actions';
import PopularSong from '../components/PopularSong';

function mapStateToProps(state) {
    console.log(state.getSongs);
    return {
        songs: state,
        // upVotes: state.getSongs.upVotes,
        // downVotes: state.getSongs.downVotes
    }
}

const mapDispatchToProps = {
    songLists,
    toggleFavorite,
    increase,
    decrease
}

export default connect(mapStateToProps, mapDispatchToProps) (PopularSong);