
import s from'./ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div cl>
           <div>
             <img className={s.img}src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'></img>
           </div>
           <div className={s.descriptionBlock}>
               ava + discription
           </div>
        </div>

    )  
}

export default ProfileInfo;