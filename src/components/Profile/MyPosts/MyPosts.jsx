import s from '../MyPosts/MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

  let posts = [
    {id: 1, message: 'Hi,how are you', likesCount: 12}, 
    {id: 2, message: 'This is my first post', likesCount: 11},
    {id: 3, message: 'uuuuuu', likesCount: 11},
    {id: 4, message: 'Tmmmmm', likesCount: 11}
  ]

  let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postsBlock}>
          <h3>my posts</h3>
          <div>
            <div>
              <textarea></textarea>
            </div>

            <div>
              <button>Add post</button>
            </div>
          </div>
          <div className={s.posts}>
                {/* <img src="https://i.redd.it/wtc3gq9qhe041.jpg" alt="аватар" /> */}
               { postsElements } 
              </div>
           </div>
    )  
}

export default MyPosts;