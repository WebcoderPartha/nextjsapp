export const getPosts = async () => {
    const result = await fetch('https://dummyjson.com/posts');
    const data = await result.json();
    return data.posts; // Return only the posts array
}