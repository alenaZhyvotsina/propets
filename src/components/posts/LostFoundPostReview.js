import React from 'react';
import style from '../../css_modules/review.module.css';
import LostFoundPostView from "../../containers/lostFoundViewContainer";
import {
    defaultAvatar,
    defaultUser,
    foundsPage, homePage,
    lostsPage,
    postReviewPage,
    prePublishText,
    reviewText
} from "../../utils/constants";
import {Link, Redirect} from "react-router-dom";

const LostFoundPostReview = props => {

    if(!props.type) {
        return <Redirect to={`/${homePage}`}/>
    }

    const forwardPage = props.isFound === '1' ? foundsPage : lostsPage;

    console.log(forwardPage);

    //location: props.location,
    const handleClickPublish = () => {
        const postDto = {
            type: props.type,
            breed: props.breed,
            sex: props.sex,
            color: props.color,
            minHeight: props.minHeight,
            maxHeight: props.maxHeight,
            distFeatures: props.distFeatures,
            tags: props.tags,
            photos: ['https://ichef.bbci.co.uk/news/800/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg'],
            description: props.description,

            userName: props.userName,
            avatar: props.avatar,

            phone: props.phone,
            email: props.email
        }

        props.savePost(props.isFound, postDto);
    }

    return (
        <div className='row flex-column p-3'>
            <h6 className={style.title}>{reviewText}</h6>
            <LostFoundPostView/>
            <p className={style.pColorBold}>{prePublishText}</p>
            <div className='my-3 text-center'>
                <button className='btn btn-primary mx-3'
                >Edit</button>


                <Link to={`/${forwardPage}`} className='btn btn-primary mx-3'
                      onClick={() => handleClickPublish()}
                >Publish</Link>
            </div>
        </div>
    );
};

export default LostFoundPostReview;