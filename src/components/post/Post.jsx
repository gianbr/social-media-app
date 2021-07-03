import "./Post.css"
import {MoreVert} from "@material-ui/icons"
import { Users } from "../../dummyData"

export default function Post({post}) {

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImage" src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" />
                        <span className="postUserName">{Users.filter(u=>u.id===post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight"></div>
                    <MoreVert className="postTopRightIcon"/>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImage" src={post?.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="postLikeIcon" src="assets/like.png" alt="" />
                        <img className="postLikeIcon" src="assets/heart.png" alt="" />
                        <span className="postLikeCounter">A {post.like} personas les gusta esto.</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comentarios</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
