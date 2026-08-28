import axios from "axios";
import type { Post } from './types.ts';

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

const getPosts = async () => {
  const posts = await fetchPosts();
  console.log(posts);
};

const logThreePosts = async () => {
  const posts = await fetchPosts();
  posts.forEach(({ title, body }, index) => {
    if (index < 3) {
      console.log(`Title:\n${title}\nBody:\n${body}`);
    }
  });
}

getPosts();
logThreePosts();
