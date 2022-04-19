import { EMPTY, from } from 'rxjs';
import { catchError, count, mergeMap } from 'rxjs/operators';

import client from '../client';
import { Post, PostQueryKey } from '../../types';
import { POST_BATCH_LIMIT } from '../../constants';

type FetchPost = {
  queryKey: PostQueryKey;
};

export const fetchPosts = async (): Promise<Post[]> => client.get('/posts');

export const fetchPost = async ({
  queryKey: [, param],
}: FetchPost): Promise<Post> => client.get(`/posts/${param.postId}`);

export const fetchPostBatch = async ({
  pageParam = 1,
}): Promise<{ data: Post[] }> =>
  client.get(`/posts?_page=${pageParam}&_limit=${POST_BATCH_LIMIT}`);

export const createPost = async (data: Post) => client.post('posts', data);

export const editPost = async (data: Post) =>
  client.put(`/posts/${data.id}`, data);

export const deletePost = async (postId: number) =>
  client.delete(`/posts/${postId}`);

export const deletePostBatch = async (postIds: number[]) =>
  from(postIds)
    .pipe(
      mergeMap(
        (postId) =>
          from(client.delete(`/posts/${postId}`)).pipe(catchError(() => EMPTY)),
        100,
      ),
      count(),
    )
    .toPromise();
