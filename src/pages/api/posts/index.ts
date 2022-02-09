import dbConnect from '../../../../server/lib/dbConnection';
import Post from '../../../../server/models/Post';

export default async function handler(
  req: { body?: object; method?: string },
  res: {
    status: (arg0: number) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (): any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      new (): any;
      json: {
        (arg0: { success: boolean; data?: object }): void;
        new (): unknown;
      };
    };
  }
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const posts = await Post.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: posts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const post = await Post.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: post });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
