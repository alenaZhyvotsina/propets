import React from 'react';
import SideBar from "./SideBar";
import Home from "./Home";
import Advertisement from "./Advertisement";
import LostFound from "../containers/lostFoundContainer";
import {Route, Switch} from "react-router";
import {foundPostPage, foundsPage, homePage, lostPostPage, lostsPage, postReviewPage} from "../utils/constants";
import LostFoundPostReview from "../containers/lostFoundReviewContainer";
import PostsList from "../containers/postsListContainer";


const Main = () => {
    return (
        <div className='row'>
            <SideBar/>
            <div className='col-12 col-sm-8 col-md-8'>
                <Switch>
                    <Route path={[`/`,`/${homePage}`]} exact component={Home}/>

                    <Route path={`/${lostsPage}`} exact
                           render={({match}) => <PostsList isFound='0' match={match}/>}
                    />
                    <Route path={`/${foundsPage}`} exact
                           render={({match}) => <PostsList isFound='1' match={match}/>}
                    />


                    <Route path={`/${lostPostPage}`} exact
                           render={({match}) => <LostFound isFound='0' match={match}/>}
                    />
                    <Route path={`/${foundPostPage}`} exact
                           render={({match}) => <LostFound isFound='1' match={match}/>}
                    />
                    <Route path={`/${postReviewPage}`} exact
                           render={({match}) => <LostFoundPostReview match={match}/>}
                    />
                </Switch>
            </div>
            <Advertisement/>
        </div>
    );
};

export default Main;