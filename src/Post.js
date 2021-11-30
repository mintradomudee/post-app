import PropTypes from 'prop-types'

const Post=(props)=> {
    const {post} = props;

    return <div data-testid='post-title'>{post.title}</div>;
}

Post.propTypes ={
    post:PropTypes.object.isRequired,
}
export default Post;