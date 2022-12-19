import { useState, useEffect } from 'react'
import styles from './productcomments.module.scss'
import { RxAvatar } from 'react-icons/rx'
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useAuth } from '../../context/AuthContext'
import useFetch from '../../hooks/useFetch'

const ProductComments = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { data, loading, error } = useFetch(`/comments/${id}`)



  const formik = useFormik({
    initialValues: {
      comment: '',
      product_id: id,
      //user_id: user._id
    },
    onSubmit: async values => {
      await axios.post(`/comments/${id}`, values)
    },
  });
  return (
    <div className={styles.productComments}>
      <div className="container">
        <form onSubmit={formik.handleSubmit} className={styles.commentsArea}>

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

        <h1>Comments</h1>
        <div className={styles.userComments}>
          {data.map((item) => {
            return (
              <div key={item._id} className={styles.commentsItem}>
                <div className={styles.commentsContent}>
                  {item.comment}
                </div>
                <div className={styles.commentsAuthor}>
                  <div><RxAvatar size={20} /></div>
                  <div>{item.user_id }</div>
                </div>
                <div className={styles.commentsDate}>
                  {item.createdAt}
                </div>
              </div>
            )
          }
          )}


          <div className='text-center'>
            <button className='btn btn-outline-secondary btn-lg'>Load More Comments</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductComments