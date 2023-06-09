import prisma from "../../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { Post } from "@prisma/client";

// PUT /api/publish/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Post>
) {
  const postId = req.query.id;
  const post = await prisma.post.update({
    where: { id: postId as string },
    data: { published: true },
  });
  res.json(post);
}
