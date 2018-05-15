import React, { Component, Fragment } from 'react';

import Header from '../../components/Header';
import Post from '../../components/Post';

import './styles.scss';

export default class Main extends Component {
  state = {
    posts: [
      {
        id: 1,
        avatar: 'https://avatars1.githubusercontent.com/u/14861463?s=460&v=4',
        author: 'Raí Vieira Adriano',
        time: 'há 3 min',
        content:
          'alksdsnladlkadnla d,ma d,ma sd,mas da dadk asdnakjsdnakjsdnad ,a, sd,as d,am sdasdnaksj dasdas dj ajsdn ad as dnasd',
      },
      {
        id: 2,
        avatar: 'https://avatars1.githubusercontent.com/u/14861463?s=460&v=4',
        author: 'Raí Vieira Adriano',
        time: 'há 3 min',
        content:
          'alksdsnladlkadnla d,ma d,ma sd,mas da dadk asdnakjsdnakjsdnad ,a, sd,as d,am sdasdnaksj dasdas dj ajsdn ad as dnasd',
      },
      {
        id: 3,
        avatar: 'https://avatars1.githubusercontent.com/u/14861463?s=460&v=4',
        author: 'Raí Vieira Adriano',
        time: 'há 3 min',
        content:
          'alksdsnladlkadnla d,ma d,ma sd,mas da dadk asdnakjsdnakjsdnad ,a, sd,as d,am sdasdnaksj dasdas dj ajsdn ad as dnasd',
      },
    ],
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="posts">
          {this.state.posts.map(post => <Post key={post.id} post={post} />)}
        </div>
      </Fragment>
    );
  }
}
