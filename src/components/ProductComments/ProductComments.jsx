import { useState, useEffect } from 'react';
import styles from './productcomments.module.scss'
import { RxAvatar } from 'react-icons/rx'
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useAuth } from '../../context/AuthContext'
import useFetch from '../../hooks/useFetch'
import { AiTwotoneStar } from 'react-icons/ai'

const ProductComments = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { data, loading, error } = useFetch(`/comments/${id}`)


  // comment load more
  const [next, setNext] = useState(0);
  const [commentPerLoad, setCommentPerLoad] = useState(2)
  const [commentsArray, setCommentsArray] = useState([])
  const dataToShow = data.slice(next, commentPerLoad);
  const handleToShowMore = () => {
    setNext((prev) => prev + 2)
    setCommentPerLoad((prev) => prev + 2)
    setCommentsArray([...commentsArray, ...dataToShow])
  }
  // formik
  const formik = useFormik({
    initialValues: {
      comment: '',
      product_id: id,
      //user_id: user._id
    },
    onSubmit: async values => {
      await axios.post(`/comments/${id}`, values)
      window.location.reload();
    },
  });
  return (
    <div className={styles.productComments}>
      <div className="container">
        <div className="text-center">
          <h3 className='text-secondary fs-1 my-5'>Product Reviews</h3>
        </div>
        <form onSubmit={formik.handleSubmit} className={`${styles.commentsArea}`}>

          <div className={styles.inputDiv}>
            <textarea
              id="comment"
              name="comment"
              onChange={formik.handleChange}
              placeholder='Comment . . .'
              value={formik.values.comment}
            />
            <button type="submit">Comment</button>
          </div>

        </form>

        <div className={`${styles.userComments}`}>
          {commentsArray.map((item) => (
              <div key={item._id} className={styles.commentsItem}>
                <div className={styles.commentsContent}>
                  {item.comment}
                </div>
                <div className={styles.commentsAuthor}>
                  <div><RxAvatar size={20} /></div>
                  <div>{item.user_id}</div>
                </div>
                <div className={styles.commentsDate}>
                  {item.createdAt}
                </div>
                <div className="stars">
                  <AiTwotoneStar color='orange' size={15} />
                  <AiTwotoneStar color='orange' size={15} />
                  <AiTwotoneStar color='orange' size={15} />
                  <AiTwotoneStar color='orange' size={15} />
                  <AiTwotoneStar color='orange' size={15} />
                </div>
              </div>
            )
          )}

          <div className="text-center">
            <button disabled={commentsArray.length === data.length} onClick={handleToShowMore} className='btn btn-outline-secondary btn-lg w-50'>{commentsArray.length === 0 ? 'Show Comments' : 'Load More'}</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductComments