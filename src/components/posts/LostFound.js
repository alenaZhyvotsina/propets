import React, {useState} from 'react';
import {
    emailStr,
    foundTitle,
    heightMeasure,
    heights,
    lostTitle,
    petTypes,
    phoneStr, postReviewPage,
    sexes
} from "../../utils/constants";
import style from "../../css_modules/post.module.css";
import {Link} from "react-router-dom";

const LostFound = props => {

    const title = props.isFound === '1' ? foundTitle : lostTitle;

    const [type, setType] = useState(petTypes[0]);
    const [breed, setBreed] = useState('');
    const [sex, setSex] = useState(sexes[0]);
    const [color, setColor] = useState('');
    const [minHeight, setMinHeight] = useState(heights[0]);
    const [maxHeight, setMaxHeight] = useState(heights[1]);
    const [distFeatures, setDistFeatures] = useState('');
    const [tags, setTags] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');

    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleClickReview = () => {
        let tagsSet = [];
        if (tags) {
            let regex = /\W+/;
            tagsSet = tags.split(regex);
        }
        props.sendToReview(props.isFound, type, breed, sex, color,
            minHeight, maxHeight, distFeatures,
            description, tagsSet, location,
            phone, email);
    }

    return (
        <div>
            <h5 className={style.title}>{title}</h5>
            <div className={`row m-1 ${style.postBox}`}>
                <div className='col-6'>
                    <label htmlFor='type' className='col-4 text-right pl-1 my-1'>Type</label>
                    <select id='type' className={`col-8 ${style.inputStyle}`}
                            onChange={(e) => setType(e.target.value)}>
                        {petTypes.map((t, i) => {
                            return <option key={i}
                                           value={t}
                            >{t}</option>
                        })}
                    </select>

                    <label htmlFor='sex' className='col-4 text-right pl-1 my-1'>Sex</label>
                    <select id='sex' className={`col-8 ${style.inputStyle}`}
                            onChange={(e) => setSex(e.target.value)}>
                        {sexes.map((t, i) => {
                            return <option key={i}
                                           value={t}
                            >{t}</option>
                        })}
                    </select>

                    <label htmlFor='breed' className='col-4 text-right pl-1 my-1'>Breed</label>
                    <input type='text' id='breed' className={`col-8 ${style.inputStyle}`}
                           value={breed}
                           onChange={e => setBreed(e.target.value)}/>

                    <label htmlFor='sex' className='col-4 text-right pl-1 my-1'>Color</label>
                    <input type='text' id='sex' className={`col-8 ${style.inputStyle}`}
                           value={color}
                           onChange={e => setColor(e.target.value)}/>

                    <label htmlFor='height' className='col-4 text-right pl-1 my-1'>Height</label>
                    <select
                        id='height' className={`col-8 ${style.inputStyle}`}
                        onChange={e => {
                            setMinHeight(+e.target.value);
                            setMaxHeight(heights[heights.indexOf(+e.target.value) + 1]);
                        }}>
                        {heights.filter((v, index) => index < heights.length - 1)
                            .map((v, index) =>
                                <option
                                    key={index}
                                    value={v}
                                >{`${v} - ${heights[index + 1]} ${heightMeasure}`}
                                </option>)
                        }
                    </select>

                    <label htmlFor='distFeatures' className='col-4 text-right py-0 my-2 align-top'>
                        Distinctive features
                    </label>
                    <textarea id='distFeatures' className={`col-8 ${style.textAreaStyle}`}
                              value={distFeatures}
                              onChange={e => setDistFeatures(e.target.value)}/>

                    <label htmlFor='tags' className='col-4 text-right pl-1 my-1 align-top'>Tags</label>
                    <textarea id='tags' className={`col-8 ${style.textAreaStyle} ${style.textBig}`}
                              value={tags}
                              onChange={e => setTags(e.target.value)}/>

                    <label htmlFor='description' className='col-4 text-right pl-1 my-1 align-top'>
                        Description
                    </label>
                    <textarea id='description' className={`col-8 ${style.textAreaStyle}`}
                              value={description}
                              onChange={e => setDescription(e.target.value)}/>

                    <label htmlFor='location' className='col-4 text-right py-1 my-1 align-top'>
                        Location
                    </label>
                    <textarea id='location' className={`col-8 ${style.textAreaStyle}`}
                              value={location}
                              onChange={e => setLocation(e.target.value)}/>

                </div>
                <div className='col-6'>
                    Picture height
                    <br/>
                    <div className='photos'>
                        <input type='file' onChange={e => props.loadFile(e.target.files)}/>
                        {props.imageUrl}
                    </div>
                </div>
                <div className={`${style.borderTop}`}>
                    <p className={`${style.pInline} ${style.bold}`}>Contacts:</p>
                    <input type='text' className={`${style.inputStyle} ${style.inputContact}`}
                           placeholder={phoneStr}
                           value={phone}
                           onChange={e => setPhone(e.target.value)}
                    />
                    <input type='text' className={`${style.inputStyle} ${style.inputContact}`}
                           size='30'
                           placeholder={emailStr}
                           value={email}
                           onChange={e => setEmail(e.target.value)}
                    />
                    <div className='my-4 text-center'>
                        <Link to={`/${postReviewPage}`} className='btn btn-primary'
                              onClick={handleClickReview}
                        >Publish</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LostFound;