import "./Rightbar.css"

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImage" src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Andrés Ceballos</b> y <b> 2 personas</b> más cumplen años hoy
                    </span>
                </div>
                <img className="rightbarAd" src="assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Amigos conectados</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img className="rightbarProfileImage" src="assets/person/profile-pic-m.jpeg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Marti Manzo</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img className="rightbarProfileImage" src="assets/person/4.jpeg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Andrés Ceballos</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img className="rightbarProfileImage" src="assets/person/7.jpeg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">María Gutierrez</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img className="rightbarProfileImage" src="assets/person/8.jpeg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Cristian Rodriguez</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img className="rightbarProfileImage" src="assets/person/9.jpeg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Carla Fernandez</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img className="rightbarProfileImage" src="assets/person/10.jpeg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Ernesto Durán</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img className="rightbarProfileImage" src="assets/person/2.jpeg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Ivan Menendez</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img className="rightbarProfileImage" src="assets/person/2.jpeg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Daniela Diaz</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img className="rightbarProfileImage" src="assets/person/2.jpeg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Augusto Gonzalez</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
