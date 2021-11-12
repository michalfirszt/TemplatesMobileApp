import { useQuery } from 'react-query';

import { fetchPosts } from './requests';
import { getPosts } from './selectors';

export const useGetPosts = ({ ...options } = {}) =>
  useQuery('posts', fetchPosts, {
    select: getPosts,
    ...options,
  });
