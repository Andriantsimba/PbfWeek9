// import GetApi from './Get'
// import PostApi from './Post'
// import DeleteApi from './Delete'



const getNewsBlog = () => GetApi('posts?_sort=id&_order=desc'); 

const postNewBlog =(dataygdikirim) => PostApi('posts',dataygdikirim);

const deleteBlog = (dataygdihapus) => DeleteApi('posts', dataygdihapus);

const API = {
    getNewsBlog,
    postNewBlog,
    deleteBlog
} 

export default API; 
// 1