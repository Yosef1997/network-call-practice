import { Navbar } from "../components"
import { useState } from "react"
import { IoIosEye } from "react-icons/io"
import { IoIosEyeOff } from "react-icons/io"
import useRegister from "../hooks/useRegister"
import { useNavigate } from "react-router-dom"
import { Formik, Form, Field, FormikProps } from "formik"
import * as yup from "yup"

const RegisterSchema = yup.object().shape({
  name: yup
    .string()
    .min(8, "Name must be 8 characters at minimum")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be 8 characters at minimum")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
    )
    .required("Password is required"),
})

interface registerValues {
  name: string
  email: string
  password: string
}

const Register = () => {
  const [isShow, setIsShow] = useState(false)
  const navigate = useNavigate()
  const { handleRegister } = useRegister()
  const initialValues: registerValues = { name: "", email: "", password: "" }

  return (
    <div>
      <Navbar />
      <div className='bg-blue p-5 w-1/2 mx-auto'>
        <h1 className='font-bold mb-2'>Page Register</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={RegisterSchema}
          onSubmit={async (values) => {
            console.log(values)
            let result = await handleRegister(values)
            if (result) navigate("/user")
          }}
        >
          {(props: FormikProps<registerValues>) => {
            const { values, errors, touched, handleChange } = props
            console.log(props.values)
            return (
              <Form>
                <div className='flex flex-col '>
                  <label htmlFor='name'>Name</label>
                  <Field
                    className='rounded-lg p-1  focus:outline-none'
                    type='text'
                    name='name'
                    onChange={handleChange}
                    value={values.name}
                  />
                  {touched.name && errors.name ? (
                    <div className='text-red text-xs'>{errors.name}</div>
                  ) : null}
                </div>
                <div className='flex flex-col '>
                  <label htmlFor='email'>Email</label>
                  <Field
                    className='rounded-lg p-1 focus:outline-none'
                    type='email'
                    name='email'
                    onChange={handleChange}
                    value={values.email}
                  />
                  {touched.email && errors.email ? (
                    <div className='text-red text-xs'>{errors.email}</div>
                  ) : null}
                </div>
                <div className='flex flex-col '>
                  <label htmlFor='password'>password</label>
                  <div className='flex bg-white rounded-lg p-1'>
                    <Field
                      className='w-full focus:outline-none'
                      type={!isShow ? "password" : "text"}
                      name='password'
                      onChange={handleChange}
                      value={values.password}
                    />
                    <button type='button' onClick={() => setIsShow(!isShow)}>
                      {!isShow ? (
                        <IoIosEye size={20} />
                      ) : (
                        <IoIosEyeOff size={20} />
                      )}
                    </button>
                  </div>
                  {touched.password && errors.password ? (
                    <div className='text-red text-xs'>{errors.password}</div>
                  ) : null}
                </div>
                <button
                  className='bg-white w-fit py-2 px-5 rounded-lg mx-auto mt-2'
                  type='submit'
                >
                  Submit
                </button>
              </Form>
            )
          }}
        </Formik>
      </div>
    </div>
  )
}

export default Register
