import client from '../client';
import { Post, PostQueryKey } from '../../types';
import { POST_BATCH_LIMIT } from '../../constants';

type FetchPost = {
  queryKey: PostQueryKey;
};

export const fetchPosts = (): Promise<Post[]> => client.get('/posts');

export const fetchPost = ({ queryKey: [, param] }: FetchPost): Promise<Post> =>
  client.get(`/posts/${param.postId}`);

export const fetchPostBatch = ({ pageParam = 1 }): Promise<{ data: Post[] }> =>
  client.get(`/posts?_page=${pageParam}&_limit=${POST_BATCH_LIMIT}`);

export const createPost = (data: Post) => client.post('posts', data);

export const editPost = (data: Post) => client.put(`/posts/${data.id}`, data);

export const deletePost = (postId: number) => client.delete(`/posts/${postId}`);
