import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";
class PostsNew extends Component {
  renderField(field) {
    const { meta } = field;
    const className = `form-group ${meta.touched && meta.error
      ? "has-danger"
      : ""}`;

    return (
      <div className={className}>
        <label> {field.label} </label>{" "}
        <input className="form-control" type="text" {...field.input} />{" "}
        <div className="text-help"> {meta.touched ? meta.error : ""} </div>{" "}
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          label="Title for post"
          component={this.renderField}
        />{" "}
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
        />{" "}
        <Field
          name="content"
          label="Post Content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title!";
  }

  if (!values.categories) {
    errors.categories = "Enter a category!";
  }

  if (!values.content) {
    errors.content = "Enter content!";
  }

  return errors;
}

export default reduxForm({
  validate: validate,
  form: "PostNewForm"
})(connect(null, { createPost })(PostsNew));
