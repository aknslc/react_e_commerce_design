import { useState } from 'react'
import styles from './productcomments.module.scss'
import { RxAvatar } from 'react-icons/rx'
const ProductComments = () => {
  const [comment, setComment] = useState({ user_id: "", content: "" });

  const handleComment = () => {
    console.log(comment);

  }

  return (
    <div className={styles.productComments}>


      <div className="container">

        <div className={styles.commentsArea}>
          <div className={styles.item}>
            <div className={styles.inputDiv}>
              <textarea onChange={e => setComment({ ...comment, content: e.target.value })} placeholder='Comment . . .' />
              <button onClick={handleComment} >Comment</button>
            </div>
          </div>
        </div>

        <h1>Comments</h1>
        <div className={styles.userComments}>
          <div className={styles.commentsItem}>
            <div className={styles.commentsContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit. Repudia Repudiandae itaque, nesciunt dolorum quas consectetur delectus.
            </div>
            <div className={styles.commentsAuthor}>
              <div><RxAvatar size={25} /></div>
              <div>aknselc</div>
            </div>
            <div className={styles.commentsDate}>
              20/04/2020
            </div>
          </div>
          <div className={styles.commentsItem}>
            <div className={styles.commentsContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit. Repudia Repudiandae itaque, nesciunt dolorum quas consectetur delectus.
            </div>
            <div className={styles.commentsAuthor}>
              <div><RxAvatar size={25} /></div>
              <div>aknselc</div>
            </div>
            <div className={styles.commentsDate}>
              20/04/2020
            </div>
          </div>
          <div className={styles.commentsItem}>
            <div className={styles.commentsContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit. Repudia Repudiandae itaque, nesciunt dolorum quas consectetur delectus.
            </div>
            <div className={styles.commentsAuthor}>
              <div><RxAvatar size={25} /></div>
              <div>aknselc</div>
            </div>
            <div className={styles.commentsDate}>
              20/04/2020
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductComments