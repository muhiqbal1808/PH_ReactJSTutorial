import React, { Component } from "react";

import "./BlogPost.css";
import Post from "../../../components/Post/Post";
import API from "../../../services";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      title: "",
      body: "",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    isUpdate: false,
    comments: [],
  };

  getPostAPI = () => {
    API.getNewsBlog().then((res) => {
      this.setState({
        post: res,
      });
    });
    API.getComments().then((res) => {
      this.setState({
        comments: res,
      });
    });
  };

  handleUpdate = (data) => {
    this.setState({
      isUpdate: true,
      formBlogPost: data,
    });
  };

  handleRemove = (data) => {
    API.deleteNewsBlog(data).then((res) => {
      this.getPostAPI();
    });
  };

  handleFormchange = (e) => {
    let formBlogPostNew = { ...this.state.formBlogPost };
    formBlogPostNew[e.target.name] = e.target.value;
    this.setState({
      formBlogPost: formBlogPostNew,
    });
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
  };

  handleCancelUpdate = () => {
    this.setState({
      isUpdate: false,
      formBlogPost: {
        title: "",
        body: "",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  };

  postDataToAPI = () => {
    API.postNewsBlog(this.state.formBlogPost).then((res) => {
      this.setState({
        formBlogPost: {
          title: "",
          body: "",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
      this.getPostAPI();
    });
  };

  putDataToAPI = () => {
    let fromBlogPostUpdate = {
      title: this.state.formBlogPost.title,
      body: this.state.formBlogPost.body,
      userId: this.state.formBlogPost.userId,
      createdAt: this.state.formBlogPost.createdAt,
      updatedAt: new Date(),
    };
    API.updateNewsBlog(fromBlogPostUpdate, this.state.formBlogPost.id).then(
      (res) => {
        this.setState({
          isUpdate: false,
          formBlogPost: {
            title: "",
            body: "",
            userId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        });

        this.getPostAPI();
      }
    );
  };

  componentDidMount() {
    this.getPostAPI();
  }

  render() {
    return (
      <>
        <p>Halaman Blog Post</p>
        <hr />
        <div>
          <p className="section-title">Blog Post</p>
          <div className="form-add-post">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Add Title"
              value={this.state.formBlogPost.title}
              onChange={this.handleFormchange}
            />
            <label htmlFor="body">Blog Content</label>
            <textarea
              name="body"
              id="body"
              placeholder="Add Blog Content"
              cols="30"
              rows="10"
              value={this.state.formBlogPost.body}
              onChange={this.handleFormchange}
            ></textarea>
            {this.state.isUpdate ? (
              <>
                <button className="btn-submit" onClick={this.handleSubmit}>
                  Update
                </button>
                <button
                  className="btn-submit"
                  onClick={this.handleCancelUpdate}
                >
                  Batal
                </button>
              </>
            ) : (
              <button className="btn-submit" onClick={this.handleSubmit}>
                Simpan
              </button>
            )}
          </div>
          {/* {this.state.comments.map((comment) => {
            return (
              <p>
                {comment.name} - {comment.email}
              </p>
            );
          })} */}
          {this.state.post.map((post) => {
            return (
              <Post
                data={post}
                key={post.id}
                onUpdate={this.handleUpdate}
                onDelete={this.handleRemove}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default BlogPost;
