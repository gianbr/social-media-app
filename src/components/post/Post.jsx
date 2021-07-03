import "./Post.css"
import {MoreVert} from "@material-ui/icons"

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImage" src="/assets/person/profile-pic.png" alt="" />
                        <span className="postUserName">Gianluca Brunner</span>
                        <span className="postDate">Hace 5 minutos</span>
                    </div>
                    <div className="postTopRight"></div>
                    <MoreVert/>
                </div>
                <div className="postCenter">
                    <span className="postText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Neque aliquam architecto saepe pariatur optio eum nulla praesentium consequuntur nisi blanditiis!</span>
                    <img className="postImage" src="assets/post/building.jpg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="postLikeIcon" src="assets/like.png" alt="" />
                        <img className="postLikeIcon" src="assets/heart.png" alt="" />
                        <span className="postLikeCounter">A 1506 personas les gusta esto.</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">2002 comentarios</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
