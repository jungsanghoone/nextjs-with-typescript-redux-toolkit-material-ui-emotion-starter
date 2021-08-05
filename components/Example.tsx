/* eslint-disable no-nested-ternary */
import * as React from 'react';
import { usePaginatePosts } from '../libs/useRequest';
import Post from './Post';

interface Data {
  id: string;
  title: string;
  body: string;
}

export default function InfiniteExample(): JSX.Element {
  const { posts, error, isLoadingMore, size, setSize, isReachingEnd } =
    usePaginatePosts('https://jsonplaceholder.typicode.com/posts');
  if (error) return <h1>Something went wrong!</h1>;
  if (!posts) return <h1>Loading...</h1>;

  return (
    <div style={{ textAlign: 'center' }}>
      <div className="container">
        <h1>My Posts</h1>
        {posts.map((post: Data) => (
          <Post post={post} key={post.id} />
        ))}
        <button
          type="button"
          disabled={isLoadingMore || isReachingEnd}
          onClick={() => setSize(size + 1)}
        >
          {isLoadingMore
            ? 'Loading...'
            : isReachingEnd
            ? 'No more posts'
            : 'Load more'}
        </button>
      </div>
    </div>
  );
}
