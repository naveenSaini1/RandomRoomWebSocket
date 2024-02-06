import style from "../css/TopicArea.module.css"
const Topic=({text,makeHanllerPopup})=>{

    return (
        <>
        <div onClick={()=> makeHanllerPopup(text)} className={style.hoverBox}>{text}</div>
        </>
    )
}
export default Topic;