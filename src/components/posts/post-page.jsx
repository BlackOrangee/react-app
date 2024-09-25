import { useEffect, useState } from 'react';
import axios from 'axios';

const PostsPage = () => {
  const [posts, setPosts] = useState([]); 
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:4000/posts');
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:4000/posts/${postId}`);
      await fetchPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const createPost = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/posts', {
        title: newTitle,
        body: newBody
      });
      await fetchPosts();
      setNewTitle('');
      setNewBody('');
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const startEditing = (post) => {
    setIsEditing(true);
    setEditingPost(post);
    setNewTitle(post.title);
    setNewBody(post.body);
  };

  const updatePost = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/posts/${editingPost._id}`, {
        title: newTitle,
        body: newBody
      });
      await fetchPosts();
      setIsEditing(false);
      setNewTitle('');
      setNewBody('');
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const cancelEditing = () => {
    setIsEditing(false);
    setNewTitle('');
    setNewBody('');
    setEditingPost(null);
  };

  return (
    <div>
      <h1>Posts</h1>
      
      <form onSubmit={isEditing ? updatePost : createPost}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea
            value={newBody}
            onChange={(e) => setNewBody(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isEditing ? 'Update Post' : 'Create Post'}</button>
        {isEditing && <button type="button" onClick={cancelEditing}>Cancel</button>}
      </form>

      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => startEditing(post)}>Edit</button>
            <button onClick={() => deletePost(post._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
