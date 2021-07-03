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
                        <img className="sidebarFriendImage" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
