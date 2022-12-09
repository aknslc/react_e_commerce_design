import { useState } from 'react'
import styles from './productcomments.module.scss'
import { RxAvatar } from 'react-icons/rx'
import { useFormik } from 'formik';
const ProductComments = () => {
  const [comment, setComment] = useState({ sender: "", content: "" });
  

  const formik = useFormik({
    initialValues: {
      comment: {
        sender: '11',
        content: '',
      },
    },
    onSubmit: values => {
      setComment({ sender: values.comment.sender, content: values.comment.content })
      console.log(comment)
    },
  });
  return (
    <div className={styles.productComments}>
      <div className="container">
        <form onSubmit={formik.handleSubmit} className={styles.commentsArea}>

          <div className={styles.inputDiv}>
            <textarea
              id="comment"
              name="comment.content"
              onChange={formik.handleChange}
              placeholder='Comment . . .'
              value={formik.values.comment.content}
            />
            <button type="submit">Comment</button>
          </div>

        </form>

        <h1>Comments</h1>
        <div className={styles.userComments}>


          <div className={styles.commentsItem}>
            <div className={styles.commentsContent}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo debitis est provident iusto facilis distinctio, esse harum? Ducimus et quam perspiciatis aspernatur ipsam cumque culpa.
            </div>
            <div className={styles.commentsAuthor}>
              <div><RxAvatar size={20} /></div>
              <div>aknselc</div>
            </div>
            <div className={styles.commentsDate}>
              20/04/2020
            </div>
          </div>
          <div className={styles.commentsItem}>
            <div className={styles.commentsContent}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo debitis est provident iusto facilis distinctio, esse harum? Ducimus et quam perspiciatis aspernatur ipsam cumque culpa.
            </div>
            <div className={styles.commentsAuthor}>
              <div><RxAvatar size={20} /></div>
              <div>aknselc</div>
            </div>
            <div className={styles.commentsDate}>
              20/04/2020
            </div>
          </div>
          <div className={styles.commentsItem}>
            <div className={styles.commentsContent}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo debitis est provident iusto facilis distinctio, esse harum? Ducimus et quam perspiciatis aspernatur ipsam cumque culpa.
            </div>
            <div className={styles.commentsAuthor}>
              <div><RxAvatar size={20} /></div>
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