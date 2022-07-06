// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {Button} from "@acme/core";
import {log} from "logger";
//import {getMaximumAccomodableItemCount} from "React-carousel";
//import {raed} from "turbo-ignore";

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'change name' })
}
