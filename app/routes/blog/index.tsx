import React from 'react';
import { useLoaderData } from "@remix-run/react";
import {getPosts} from "../../services/posts.server";
import { json } from '@remix-run/node';

export const loader = async () => {
  const post = await getPosts();

  return {post};
};

function Index() {
  const data = useLoaderData<typeof loader>();
  console.log("🚀 ~ file: index.tsx:15", data)
  
  return (
    <div>index</div>
  )
}

export default Index