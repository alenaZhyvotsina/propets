import {DATA_TO_REVIEW, ERROR_LOADING, ERROR_SAVING, LIST_OF_POSTS, LOAD_PHOTO} from "../actions/postsAction";
import {defaultAvatar, defaultUser, foundsPage, lostsPage, postReviewPage} from "../utils/constants";

function postsReducer(state, action){
    switch (action.type){
        case LOAD_PHOTO:
            return {...state, imgLink: action.payload, errorMessage: ''};
        case ERROR_LOADING:
            return {...state, imgLink: '', errorMessage: action.payload};
        case DATA_TO_REVIEW:
            return {...state, isFound: action.payload.isFound,
                              userName: defaultUser, avatar: defaultAvatar,
                              type: action.payload.type, breed: action.payload.breed,
                              sex: action.payload.sex, color: action.payload.color,
                              minHeight: action.payload.minHeight, maxHeight: action.payload.maxHeight,
                              distFeatures: action.payload.distFeatures, tags: action.payload.tags,
                              description: action.payload.description, location: action.payload.location,
                              phone: action.payload.phone, email: action.payload.email,
                              errorMessage: ''
            }
        case ERROR_SAVING:
            return {...state, errorMessage: action.payload}
        case LIST_OF_POSTS:
            return {...state, listOfPosts: action.payload}
        default:
            return state;
    }
}

export default postsReducer;