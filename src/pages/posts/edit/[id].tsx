import { useRouter } from 'next/router';
import React from 'react';
import useSWR from 'swr';
import Form from '@components/Form';

const fetcher = (url: RequestInfo) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const EditPost = () => {
  const router = useRouter();

  const { id } = router.query;

  console.log(router.query);

  const { data: post, error } = useSWR(id ? `/api/posts/${id}` : null, fetcher);

  if (error) return <p>Failed to load</p>;
  if (!post) return <p>Loading...TTT</p>;

  const postForm = {
    FormId: post._id,
    name: post.name,
    owner_name: post.owner_name,
    species: post.species,
    age: post.age,
    poddy_trained: post.poddy_trained,
    diet: post.diet,
    image_url: post.image_url,
    likes: post.likes,
    dislikes: post.dislikes,
  };

  return <Form formId="edit-form" postForm={postForm} forNewPost={false} />;
};

export default EditPost;
