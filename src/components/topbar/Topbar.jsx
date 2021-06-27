import "./Topbar.css"
import {Search, Person} from "@material-ui/icons"


export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Klashbook</span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search/>
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
                </div>
            </div>
        </div>
    )
}
