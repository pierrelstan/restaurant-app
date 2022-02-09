/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from '@mui/material';
import type { NextPage } from 'next';
import React from 'react';
import image from '../../public/static/maintenance.png';
import dbConnect from '../../server/lib/dbConnection';
import Post from '../../server/models/Post';
import Maintenance from '../components/Maintenace/Maintenance';
import { PostsProps } from '../types/types';

const Home: NextPage<PostsProps> = () => {
  return (
    <Container maxWidth="lg">
      <Maintenance image={image as any} />
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
