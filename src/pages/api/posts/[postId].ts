/* eslint-disable @typescript-eslint/no-explicit-any */
import dbConnect from '@server/lib/dbConnection';
import Post from '@server/models/Post';

export default async function handler(
  req: { body?: any; query?: any; method?: string },
  res: {
    status: (arg0: number) => {
      (): any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      new (): any;
      json: {
        (arg0: { success: boolean; data?: any }): void;
        new (): any;
      };
    };
  }
) {
  const {
    query: { postId, id },
    method,
  } = req;
  console.log(postId);
  console.log(id);
  await dbConnect();

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const post = await Post.findById(postId);

        if (!post) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: post });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'PUT' /* Edit a model by its ID */:
      try {
        const post: any = await Post.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!post) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: post });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedPet = await Post.deleteOne({ _id: postId });
        if (!deletedPet) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
