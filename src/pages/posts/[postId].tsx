/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import dbConnect from '@server/lib/dbConnection';
import Post from '@server/models/Post';
import Error from '../_error';

/* Allows you to view post card info and delete post card*/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PostPage = ({ post, statusCode }: any) => {
  const router = useRouter();
  console.log(router.query);
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    const postID = router.query.postId;
    console.log(router.query);
    console.log(postID);

    try {
      await fetch(`/api/posts/${postID}`, {
        method: 'Delete',
      });
      router.push('/');
    } catch (error) {
      setMessage('Failed to delete the post.');
    }
  };
  if (statusCode) {
    return <Error />;
  }
  return (
    <div>
      <div key={post._id}>
        <div className="card">
          <img src={post.image_url} />
          <h5 className="post-name">{post.name}</h5>
          <div className="main-content">
            <p className="post-name">{post.name}</p>
            <p className="owner">Owner: {post.owner_name}</p>
            <div className="likes info">
              <p className="label">Likes</p>
              <ul>
                {post.likes.map((data: any, index: any) => (
                  <li key={index}>{data} </li>
                ))}
              </ul>
            </div>
            <div className="dislikes info">
              <p className="label">Dislikes</p>
              <ul>
                {post.dislikes.map((data: any, index: any) => (
                  <li key={index}>{data} </li>
                ))}
              </ul>
            </div>

            <div className="btn-container">
              <Link href="/posts/[postId]/edit" as={`/posts/${post._id}/edit`}>
                <button className="btn edit">Edit</button>
              </Link>
              <button className="btn delete" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }: any) {
  console.log(params);
  await dbConnect();
  try {
    const post = await Post.findById(params.postId).lean();
    post._id = post._id.toString();
    return { props: { post, statusCode: false } };
  } catch (error) {
    return { props: { statusCode: true } };
  }
}

export default PostPage;
