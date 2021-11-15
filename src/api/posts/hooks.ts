import { useQuery } from 'react-query';

import { fetchPosts } from './requests';
import { getPosts } from './selectors';
import { handleSelectors } from '../shared';

export const useGetPosts = ({
  selectors = { posts: getPosts },
  ...options
} = {}) =>
  useQuery('posts', fetchPosts, {
    select: handleSelectors(selectors),
    ...options,
  });
