import {connect} from "react-redux";
import LostFoundPostReview from "../components/posts/LostFoundPostReview";
import {savePost} from "../actions/postsAction";

function mapStateToProps(state) {
    return {
        isFound: state.isFound,
        type: state.type,
        breed: state.breed,
        sex: state.sex,
        color: state.color,
        minHeight: state.minHeight,
        maxHeight: state.maxHeight,
        distFeatures: state.distFeatures,
        tags: state.tags,
        description: state.description,
        location: state.location,
        userName: state.userName,
        avatar: state.avatar,
        phone: state.phone,
        email: state.email

    }
}

function mapDispatchToProps(dispatch) {
    return {
        savePost: (isFound, postDto) => dispatch(savePost(isFound, postDto))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LostFoundPostReview);