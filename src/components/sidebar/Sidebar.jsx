import "./Sidebar.css"
import {RssFeed, Chat, PlayCircleFilled as Videos, Group, Bookmark, Work, Event, School, LiveHelp as FAQ} from "@material-ui/icons"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Inicio</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Mensajes</span>
                    </li>
                    <li className="sidebarListItem">
                        <Videos className="sidebarIcon"/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">Grupos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon"/>
                        <span className="sidebarListItemText">Marcadores</span>
                    </li>
                    <li className="sidebarListItem">
                        <Work className="sidebarIcon"/>
                        <span className="sidebarListItemText">Empleo</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarListItemText">Eventos</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon"/>
                        <span className="sidebarListItemText">Educacion</span>
                    </li>
                    <li className="sidebarListItem">
                        <FAQ className="sidebarIcon"/>
                        <span className="sidebarListItemText">FAQ</span>
                    </li>
                </ul>
                <button className="sidebarButton">Mostrar más</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/profile-pic-m.jpeg" alt="" />
                        <span className="sidebarFriendName">Marti Manzo</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/4.jpeg" alt="" />
                        <span className="sidebarFriendName">Andrés Ceballos</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/7.jpeg" alt="" />
                        <span className="sidebarFriendName">María Gutierrez</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/8.jpeg" alt="" />
                        <span className="sidebarFriendName">Cristian Rodriguez</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/9.jpeg" alt="" />
                        <span className="sidebarFriendName">Carla Fernandez</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/10.jpeg" alt="" />
                        <span className="sidebarFriendName">Ernesto Durán</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Ivan Menendez</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Daniela Diaz</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Augusto Gonzalez</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Candela Pereyra</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Juan Perez</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Natalia Dominguez</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Pedro Martinez</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Mercedes Fray</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Hugo Lopez</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
