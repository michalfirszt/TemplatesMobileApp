import client from '../client';
import { Post } from '../../types';

export const fetchPosts = (): Promise<Post[]> => client.get('/posts');
