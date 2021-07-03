import "./Topbar.css"
import {Search, Person, Chat, Notifications} from "@material-ui/icons"


export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Klashbook</span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon" />
                    <input placeholder="Buscar amigos, publicaciones o videos" className="searchInput"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Inicio</span>
                    <span className="topbarLink">Publicaciones</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/profile-pic.png" alt="" className="topbarImg" />
            </div>
        </div>
    )
}
