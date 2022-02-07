/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { Container } from '@mui/material';
import Link from '../components/common/Link';
import type { NextPage } from 'next';
import dbConnect from '../../server/lib/dbConnection';
import Post from '../../server/models/Post';
import Maintenance from '../components/Maintenance';

interface PetProps {
  _id: string;
  name: string;
  owner_name: string;
  species: string;
  age: number;
  poddy_trained: boolean;
  diet: any[];
  image_url: string;
  likes: any[];
  dislikes: any[];
}
const Home: NextPage<PetProps> = ({ posts }: any) => {
  return (
    <Container maxWidth="lg">
      <Maintenance />
      <>
        {posts.map(
          (post: {
            _id: React.Key | null | undefined;
            image_url: string | undefined;
            name: {} | null | undefined;
            owner_name:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
            likes: any[];
            dislikes: any[];
          }) => (
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
                    <Link href="/[id]/edit" as={`/${post._id}/edit`}>
                      <button className="btn edit">Edit</button>
                    </Link>
                    <Link href="/[id]" as={`/${post._id}`}>
                      <button className="btn view">View</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </>
    </Container>
  );
};

/* Retrieves post(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Post.find({});
  const posts = result.map((doc) => {
    const post = doc.toObject();
    post._id = post._id.toString();
    return post;
  });

  return { props: { posts: posts } };
}

export default Home;
