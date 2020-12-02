import {defaultAvatar, defaultUser} from "../utils/constants";
import {Redirect} from "react-router";

const IMGUR_CLIENT_ID = '0c7d82b1467c73e';
const IMGUR_CLIENT_SECRET = '721a6bf64584f5c0115fd04a3c69043239759752';
const IMGUR_Image_UPLOAD_URL = 'https://api.imgur.com/3/upload';
const IMGUR_AUTHORIZATION_URL = 'https://api.imgur.com/oauth2/authorize';

//const BACKEND_LOSTFOUND_URL = 'http://localhost:8080/lostfound/en/v1';
const BACKEND_LOSTFOUND_URL = 'https://zh-propets-lostfound.herokuapp.com/lostfound/en/v1';

export const LOAD_PHOTO = 'LOAD_PHOTO';
export const ERROR_LOADING = 'ERROR_LOADING';
export const DATA_TO_REVIEW = 'DATA_TO_REVIEW';
export const ERROR_SAVING = 'ERROR_SAVING';
export const LIST_OF_POSTS = 'LIST_OF_POSTS';

export const getPhotoUrlAction = photoUrl => {
    return {
        type: LOAD_PHOTO,
        payload: photoUrl
    }
}

export const errorAction = message => {
    return {
        type: ERROR_LOADING,
        payload: message
    }
}

export const getDataToReview = postData => {
    return {
        type: DATA_TO_REVIEW,
        payload: postData
    }
}

export const errorSavingAction = message => {
    return {
        type: ERROR_SAVING,
        payload: message
    }
}

export  const listOfPostsAction = (isFound, list) => {
    return {
        type: LIST_OF_POSTS,
        isFound: isFound,
        payload: list
    }
}


export const loadPhotoAction = files => {
    let file = files[0];
    let contentKey = ('' + file.type).includes('video') ? 'video' : 'image';
    console.log(file.type);
    return (dispatch) => {

        fetch(`${IMGUR_AUTHORIZATION_URL}?client_id=${IMGUR_CLIENT_ID}&response_type=token`)
            .then(response => {
                console.log(response);
                if(response.ok){
                    console.log(response);
                    console.log(window.location);
                    return response.json();
                }
                else {
                    throw new Error();
                }
            })
            .then(data => {
                console.log(data);
                console.log(data.access_token);
            })
            .then(token => {


                fetch(`${IMGUR_Image_UPLOAD_URL}`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Client-ID ${IMGUR_CLIENT_ID}`
                    },
                    body: {
                        'image': file
                    }
                })
                    .then(response => {
                        console.log(document.location.hash);
                        console.log(response);
                        if (response.ok) {
                            console.log('!!!');
                            return response.data;
                        } else {
                            throw new Error('imgur error');
                        }
                    })
                    .then(img_data => {
                        console.log(img_data.link);
                        dispatch(getPhotoUrlAction(img_data.link));
                    })
            })
            .catch(e => dispatch(errorAction(e.message)));


    }
}

export const sendToReview = (isFound, type, breed, sex, color,
                             minHeight, maxHeight, distFeatures,
                             description, tags, location,
                             phone, email) => {

    return (dispatch) => {
        const postData = {
            isFound,
            type, breed, sex, color,
            minHeight, maxHeight, distFeatures,
            description, tags, location,
            phone, email
        }
        dispatch(getDataToReview(postData));
    }
}

export const savePost = (isFound, postDto) => {
    let urlLostFound = isFound === '1' ? 'found' : 'lost';
    console.log(urlLostFound, postDto);
    return (dispatch) => {
        fetch(`${BACKEND_LOSTFOUND_URL}/${urlLostFound}/userTest`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postDto)
        })
            .then(response => {
                if(response.ok){
                    return response.json();
                } else {
                    throw new Error('Backend error');
                }
            })
            .then(post => console.log(post))
            .catch(e => dispatch(errorSavingAction(e.message)));
    }
}

export const getLostFoundPosts = isFound => {
    let urlLostFound = isFound == '1' ? 'founds' : 'losts';
    return (dispatch) => {
        fetch(`${BACKEND_LOSTFOUND_URL}/${urlLostFound}`)
            .then(response => {
                if(response.ok){
                    return response.json();
                } else {
                    throw new Error('Backend error');
                }
            })
            .then(postsList => {
                console.log(postsList);
                dispatch(listOfPostsAction(isFound, postsList));
            })
            .catch(e => dispatch(errorSavingAction(e.message)));
    }
}