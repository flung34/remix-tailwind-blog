import {client} from "./contentful";


export const getPost = async (postId: string = "4uSC5c1xWN7riLNP8aK9pW") =>  {
    const post = await client.getEntry('4uSC5c1xWN7riLNP8aK9pW');
    return post;
}


