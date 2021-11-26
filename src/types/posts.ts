export type Post = {
  id: number;
  title: string;
  description: string;
};

export type PostQueryKey = ['post', { postId: number | null }];
