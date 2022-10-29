import {useEffect} from 'react'
import Loading from './Loading'
import PostsLIst from './PostsLIst'
import UploadPost from './UploadPost'
import {useSelector , useDispatch} from 'react-redux';
import { fetchPost } from "../actions/posts";

function Main() {
  const {isUploaded , isUploading , isDeleting , isDeleted} = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  // fetch posts
  useEffect(() => {
    fetchPost(dispatch);
  }, [isUploaded , isDeleted , dispatch]);
  
  return (
    <main>
       <UploadPost/>
       {(isUploading || isDeleting) && <Loading />}
       <PostsLIst isUploaded={isUploaded}/>
    </main>
  )
}

export default Main