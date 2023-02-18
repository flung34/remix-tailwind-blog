import React from 'react';
import { json } from 'react-router-dom';
import {getPost} from "../../../services/posts.server";

export const loader = async () => {
  const post = getPost();
  return json({
    post
  });
};

function index() {
  
  return (
    <div>index</div>
  )
}

export default index