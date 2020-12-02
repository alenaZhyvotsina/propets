import PostsList from "../components/posts/PostsList";
import {connect} from "react-redux";
import {getLostFoundPosts} from "../actions/postsAction";

function mapStateToProps(state){
    return {
        listOfPosts: state.listOfPosts
    }
}

function mapDispatchToProps(dispatch){
    return {
        getPostsList: isFound => dispatch(getLostFoundPosts(isFound))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);