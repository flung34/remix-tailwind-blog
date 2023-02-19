import { client } from "./contentfulClient";

// export const getPosts = ()=> {
//     client.getEntries({
//         content_type: 'post'
//       })
//       .then(entries => {
//       console.log("🚀 ~ file: posts.server.ts:27 ~ getPosts ~ entries", entries)

//       return entries

//         // Do something with the entries
        
//       }).then(res => console.log("res", res.items))
//       .catch(error => {
//         console.log(error);
//       });
// }

export const getPosts = async () => {
    const posts = await client.getEntries({
        content_type: 'post'
    })
    console.log("🚀 ~ file: posts.server.ts:24 ~ getPosts ~ posts", posts)
    return posts;
}