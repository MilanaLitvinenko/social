import s from '../Post/Post.module.css'

const Post = (props) => {
  return (
            <div className={s.item}>
                <img src="https://i.redd.it/wtc3gq9qhe041.jpg" alt="аватар" />
               <div>
               <span>{props.message}</span>
               <div>Likes: {props.likesCount}</div>
               </div>
            </div>
    )  
}

export default Post
