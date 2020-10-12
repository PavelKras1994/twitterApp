import React, { Component } from 'react';
import './App.scss';
import axios from 'axios';

import Posts from './Components/Posts/Posts';
import Header from './Components/Header/Header';
import UserPage from './Components/UserPage/UserPage';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  state = {
    posts: [],
    comments: {},
    isShown: {},
    randomPosts: [],
    filteredComments: [],
    newPost: {
      content:''
    },
    myPosts: [],
  }

  componentDidMount() {
    axios.get(`http://jsonplaceholder.typicode.com/posts/`)
      .then(
        res => {
          this.setState(
            { posts: res.data }
          )
          this.getComments()
          for (let i = 0; i < 10; i++) {
            let n = Math.floor(Math.random() * 100)
            const { randomPosts } = this.state
            const post = this.state.posts[n]
            randomPosts.push(post)
            this.setState({
              randomPosts: randomPosts
            })
          }

        })

      .catch(error => {
        console.log('[error]', error);
      })
      .finally(
        () => {
          console.log('[this.state.randomPosts!!]', this.state.randomPosts);
        }
      )
  }


  getComments = () => {
    axios.get(`http://jsonplaceholder.typicode.com/comments`)
      .then(res => {
        this.setState(
          { comments: res.data }
        )
      })
  }


  getFilteredComments = (id, comments) => {
    const fC = comments.filter(comment => comment.postId === id)
    this.shownHandler(id)
    this.setState({
      filteredComments: fC
    })
    setTimeout(() => {
      console.log('[this.state.fil]', this.state.filteredComments)
    }, 1000
    )
  }


  shownHandler = (id) => {
    const { isShown } = this.state
    if (isShown['post' + id] === undefined) {
      isShown['post' + id] = true
    }
    else {
      isShown['post' + id] = !this.state.isShown['post' + id]
    }
    this.setState({
        isShown: isShown
      }
    )
  }


  myPostHandler = (e) => {
    const newPost = {      
    content: '',
    id: '',
    isUpdating: false,
    edit: false,
    comments: [],
    seeComments: false
  }
    newPost.content = e.target.value
    this.setState({
      newPost: newPost
    })
  }


  addPost = () => {
    if (this.state.newPost.content === '') {
      return
    }
    const { myPosts } = this.state
    const {newPost} = this.state
    newPost.id=Math.random()
    newPost.edit=newPost.content
    myPosts.push(newPost)
    const nP = {...newPost}
    nP.content =''
    this.setState({
      myPosts: myPosts,
      newPost: nP
    })
  }


  delMyPost = (id) => {
    let filteredPosts = this.state.myPosts.filter(post => post.id !== id)
    this.setState({
      myPosts: filteredPosts
    })
  }


  changeMyPost = (id) => {
    const { myPosts } = this.state
    const indexPost = this.state.myPosts.findIndex(post => post.id === id)
    myPosts[indexPost].content = myPosts[indexPost].edit
    myPosts[indexPost].isUpdating = !myPosts[indexPost].isUpdating
    this.setState({
      myPosts: myPosts,

    })
  }


  updateMyPost =(id) => {
    const { myPosts } = this.state
    const indexPost = this.state.myPosts.findIndex(post => post.id === id)
    myPosts[indexPost].isUpdating = !this.state.myPosts[indexPost].isUpdating
    console.log('[this.state.myPosts[indexPost].isUpdating]', this.state.myPosts[indexPost].isUpdating);
    this.setState({
      myPosts: myPosts
    })
  }

  
  editMyPost = (e)  => { 
    const { myPosts } = this.state
    const id = +e.target.name
    const indexPost = this.state.myPosts.findIndex(post => post.id === id)
    myPosts[indexPost].edit = e.target.value
    this.setState({
      myPosts: myPosts
    })
  }


  createComment = (e) => {
    const { myPosts } = this.state
    const id = +e.target.name
    const indexPost = this.state.myPosts.findIndex(post => post.id === id)
    myPosts[indexPost].commentEdit = e.target.value

    this.setState({
      myPosts: myPosts
    })
  }


  addComment = (id) => {
    const { myPosts } = this.state
    const indexPost = this.state.myPosts.findIndex(post => post.id === id)
    const newComment = {
      content: myPosts[indexPost].commentEdit,
      id,
      author: "User",
    }
    myPosts[indexPost].comments.push(newComment)
    myPosts[indexPost].commentEdit = ""
    this.setState({
      myPosts: myPosts,
    })
  }


  myCommentsSeeHandler = (id) => {
    const { myPosts } = this.state
    const indexPost = this.state.myPosts.findIndex(post => post.id === id)
    myPosts[indexPost].comments.seeComments = !this.state.myPosts[indexPost].comments.seeComments
    this.setState({
      myPosts
    })
  }


  render() {
    const { posts, comments, isShown, randomPosts, myPosts, newPost } = this.state
    return (
      <div className="App">
        <Header />
        <Switch>
        <Route path="/" exact render={({ match }) => (
          <Posts
            posts={posts}
            comments={comments}
            isShown={isShown}
            getComments={this.getComments}
            state={this.state}
            shownHandler={this.shownHandler}
            randomPosts={randomPosts}
            getFilteredComments={this.getFilteredComments}
            filteredComments={this.state.filteredComments}
          />
        )} />
        <Route path="/user" render={() => (
          <UserPage
            myPostHandler={this.myPostHandler}
            myPosts={myPosts}
            addPost={this.addPost}
            newPost={newPost}
            delMyPost={this.delMyPost}
            changeMyPost={this.changeMyPost}
            editMyPost={this.editMyPost}
            updateMyPost={this.updateMyPost}
            createComment={this.createComment}
            addComment={this.addComment}
            myCommentsSeeHandler={this.myCommentsSeeHandler}
          />
          )} />
          <Redirect to="/" />
        </Switch>

      </div>
    );
  }

}

export default App;
