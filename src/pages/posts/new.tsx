import Form from '@components/Form';

const NewPet = () => {
  const postForm = {
    name: '',
    owner_name: '',
    species: '',
    age: 0,
    poddy_trained: false,
    diet: [],
    image_url: '',
    likes: [],
    dislikes: [],
  };
  return <Form formId="new-form" postForm={postForm} forNewPost={true} />;
};

export default NewPet;
