import {loadPhotoAction, sendToReview} from "../actions/postsAction";
import {connect} from "react-redux";
import LostFound from "../components/posts/LostFound";

function mapStateToProps(state){
    return {
        //USER
        //AVATAR

        imageUrl: state.imgLink,
        errorMessage: state.errorMessage
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadFile: file => dispatch(loadPhotoAction(file)),
        sendToReview: (isFound, type, breed, sex, color,
            minHeight, maxHeight, distFeatures,
            description, tags, location,
            phone, email) => dispatch(sendToReview(isFound, type, breed, sex, color,
                                                   minHeight, maxHeight, distFeatures,
                                                   description, tags, location,
                                                   phone, email)
                             )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LostFound);