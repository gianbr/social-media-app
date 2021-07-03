import "./Share.css"
import {PermMedia, Label, Room, EmojiEmotions,} from "@material-ui/icons"

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImage" src="/assets/person/profile-pic.png" alt="" />
                    <input placeholder="¿Qué vas a publicar hoy?" className="shareInput" />
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Foto/Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText">Etiqueta personas</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Estoy aquí</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                            <span className="shareOptionText">Sentimiento/Actividad</span>
                        </div>
                    </div>
                    <button className="shareButton">Compartir</button>
                </div>
            </div>
        </div>
    )
}
