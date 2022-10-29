import React from 'react'
import AddFriends from './AddFriends';
import '../styles/posts.css';
import PostsLIst from './PostsLIst';
import Friends from './Friends';
import Main from './Main';



function Home() {
  return (
    <React.Fragment>
      <AddFriends />
       <Main  />
      <Friends />
    </React.Fragment>
  )
}

export default Home;