export const getPosts = async () => {
    const result = await fetch('https://dummyjson.com/posts');
    return result.json();
}