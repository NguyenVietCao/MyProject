import { Field, Formik,Form } from 'formik';
import * as Yup from 'yup'
import React,{useState} from 'react';
import { login } from '../service/UserService';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Header';

function Login() {
    const navigate = useNavigate();
    const [userNames, setUserName] = useState('');
    
    return (
        <div>
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <div className="col-md-4 p-5 shadow-sm border rounded-3">
                    <h2 className="text-center mb-4 text-primary">Đăng Nhập</h2>
                    <Formik
                        initialValues={{
                            userName: "",
                            password: ""
                        }}
                        // validationSchema={Yup.object({
                        //     userName: Yup.string().required(),
                        //     password: Yup.string().required()
                        // })}
                        onSubmit={async (value)  =>  {
                           
                        
                            try {
                                const data = await login(value)
                               localStorage.setItem("JWT", data.token);
                               Swal.fire({
                                   icon: "success",
                                   title: "Đăng ký thành công !",
                                   showConfirmButton: false,
                                   timer: 2000,
                                   customClass: {
                                       icon: "icon-post",
                                   },
                               });
                               localStorage.setItem("userName", data.userName)
                             await  navigate('*')
                             await setUserName(data.userName)
                           } catch (error) {
                            console.log(alert('tai khoan khong dung'));
                           }
                            
                    }}>
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="userName" className="form-label">
                                    Tài khoản <span className="text-danger">*</span>
                                </label>
                                <Field
                                    type="text"
                                    className="form-control border border-primary"
                                    id="userName"
                                    name="userName"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Mật khẩu <span className="text-danger">*</span>
                                </label>
                                <Field
                                    type="password"
                                    className="form-control border border-primary"
                                    id="password"
                                    name="password"
                                />
                            </div>
                            <p className="small">
                                <a className="text-primary" href="forget-password.html">
                                    Quên mật khẩu?
                                </a>
                            </p>
                            <div className="d-grid">
                                <button
                                   
                                    className="btn btn-primary"
                                    type="submit"
                                >
                                    Đăng nhập
                                </button>
                            </div>
                        </Form>
                    </Formik>
                    <div className="mt-3 d">
                        <div style={{ float: "left" }}>
                            <a href="#">
                                <i
                                    className="fa-brands fa-square-facebook"
                                    style={{ color: "#115cdf" }}
                                />
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-google" style={{ color: "#ff0000" }} />
                            </a>
                        </div>
                        <div className="mb-0" style={{ float: "right" }}>
                            Bạn chưa có tài khoản?
                            <a href="NhatNHH_signup.html" className="text-primary fw-bold">
                                Đăng ký
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;