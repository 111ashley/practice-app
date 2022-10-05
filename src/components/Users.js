import { getDoc } from "firebase/firestore";
import { useState } from "react";

const Post = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const getPost = async () => {
      const docRef = doc(db, "posts", params.postId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log(docSnap.data());
        setPost(docSnap.data());
        setLoading(false);
      }
    }
    const getUser = async () => {
      const userRef = doc(db, 'users', params.userName)
    }

    getPost();
    getUser();
  }, [navigate, params.postId]);

  const User = () => {
    const [user, setUser] = useState(null)


  }
}

  export default User