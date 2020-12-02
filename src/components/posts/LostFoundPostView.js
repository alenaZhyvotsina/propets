import React from 'react';
import style from '../../css_modules/review.module.css';
import {heightMeasure} from "../../utils/constants";

/*
{props.tags
                            ? props.tags.map((t, index) => <p className={style.pData}>{`${t}, `}</p>)
                            : ''}
 */

const LostFoundPostView = props => {

    let tagsString = '';
    if(props.tags){
        for(let i = 0; i < props.tags.length; i++){
            if(tagsString > ''){
                tagsString += ', ';
            }
            tagsString += props.tags[i];
        }
    }

    let photoUrl = '';
    if(props.photos){
        photoUrl = props.photos[0];
    }

    return (
        <div className={`row m-2 p-2 ${style.postBox}`}>
            <div className='col-4 m-0 p-0'>
                <img src={photoUrl} width='200' alt='LostFoundPostPhoto'/>
            </div>
            <div className='col-8'>
                <h5 className={`${style.title}`}>{props.type}, {props.breed}</h5>
                <div className='row my-2 p-0'>
                    <div className='col-5'>
                        <div>
                            <p className={style.pPoint}>Color:</p>
                            <p className={style.pData}>{props.color}</p>
                        </div>
                        <div>
                            <p className={style.pPoint}>Sex:</p>
                            <p className={style.pData}>{props.sex}</p>
                        </div>
                        <div>
                            <p className={style.pPoint}>Height:</p>
                            <p className={style.pData}>{props.minHeight} - {props.maxHeight} {heightMeasure}</p>
                        </div>
                    </div>
                    <div className='col-7'>
                        <div>
                            <p className={style.pPoint}>Distinctive features:</p>
                            <p className={style.pData}>{props.distFeatures}</p>
                        </div>
                    </div>
                </div>
                <div className='row my-2 p-0'>
                    <div>
                        <p className={style.pPoint}>Tags:</p>
                        <p className={style.pData}>{tagsString}</p>
                    </div>
                </div>
                <div className='row my-2 p-0'>
                    <div>
                        <p className={style.pPoint}>Description:</p>
                        <p className={style.pData}>{props.description}</p>
                    </div>
                </div>

                <div className={`row my-0 p-2 ${style.borderTop}`}>
                    <p className={style.pData}>{props.location}</p>
                </div>

                <div className={`row m-0 p-2 ${style.borderTop}`}>
                    <img className='col-2' src={props.avatar} alt='Avatar'/>
                    <div className='col-4 justify-content-center'>
                        <p className={style.pUserName}>{props.userName}</p>
                    </div>

                    <p className={`col-6 ${style.pContacts}`}>{props.phone}</p>

                </div>
                <div className={`row m-0 p-2 ${style.noBorder}`}>
                    <p className={`col-6 ${style.pDate}`}>{props.datePost}</p>
                    <p className={`col-6 ${style.pContacts}`}>{props.email}</p>
                </div>
            </div>
        </div>
    );
};

export default LostFoundPostView;