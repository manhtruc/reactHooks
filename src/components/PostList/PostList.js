import React from 'react';

const PostList = (props) => {
    const { post } = props
    return (
        <ul>
            {post.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
};

export default PostList;