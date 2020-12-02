import React, {useEffect} from 'react';
import LostFoundPostView from "./LostFoundPostView";

const PostsList = props => {
    console.log(props.isFound);

    useEffect(() => {
        props.getPostsList(props.isFound);
    }, [props.isFound]);   // ,[] = componentDidMount()   ,[compCards] = componentDidUpdate()

    if(props.listOfPosts) {
        return (
            <div className='row flex-column'>
                {props.listOfPosts.map((p, index) =>
                    <LostFoundPostView key={p.id}
                                       userName={p.userName} avatar={p.avatar}
                                       type={p.type} breed={p.breed} color={p.color}
                                       sex={p.sex} minHeight={p.minHeight} maxHeight={p.maxHeight}
                                       distFeatures={p.distFeatures} tags={p.tags}
                                       description={p.description}
                                       photos={p.photos}
                                       datePost={p.datePost}
                                       phone={p.phone} email={p.email}

                    />
                )
                }
            </div>
        );
    }
    else {
        return <div className='row flex-column'>
            <p>Not posts yet</p>
        </div>
    }
};

export default PostsList;