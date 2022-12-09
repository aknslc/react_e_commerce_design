import { useFormik } from 'formik';
import styles from './login.module.scss'
import { Link } from 'react-router-dom';
const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log(values)
    },
  });
  return (
    <div className={styles.formContainer}>
      <form onSubmit={formik.handleSubmit}>
        <h1 className={styles.formTitle}>Login</h1>

        <input
          id="email"
          name="email"
          type="email"
          placeholder='Email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder='Password'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button className={styles.submitBtn} type="submit">Login</button>

        <Link style={{fontWeight:"100", marginTop:"2rem"}} to="/register">
          Create account!
        </Link>
      </form>
    </div>
  )
}

export default Login