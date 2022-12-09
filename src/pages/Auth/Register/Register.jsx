import styles from './register.module.scss'
import { useFormik } from 'formik';
const Register = () => {
  const formik = useFormik({
    initialValues: {
      username:'',
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
        <h1 className={styles.formTitle}>Register</h1>

        <input
          id="username"
          name="username"
          type="username"
          placeholder='Username'
          onChange={formik.handleChange}
          value={formik.values.username}
        />
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
        <button type='submit' className={styles.submitBtn}>Create</button>

      </form>
    </div>
  )
}

export default Register