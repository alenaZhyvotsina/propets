import LostFoundPostView from "../components/posts/LostFoundPostView";
import {connect} from "react-redux";

function mapStateToProps(state){
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
        datePost: state.datePost,
        phone: state.phone,
        email: state.email

    }
}

export default connect(mapStateToProps)(LostFoundPostView);