import React from 'react';
import { Form, Field, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { signup } from '../service/UserService';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function SignUp(props) {
    const navigate = useNavigate()
    return (
        <div>
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <div className="col-md-4 p-5 shadow-sm border rounded-3">
                    <h2 className="text-center mb-4 text-primary">Đăng Ký</h2>
                    <Formik
                        initialValues={{
                            userName: "",
                            password: "",
                            email: "",
                            phone: "",

                        }}
                        validationSchema={Yup.object({
                            userName: Yup.string().required("Vui lòng nhập userName"),
                            password: Yup.string().required("Vui lòng nhập"),
                            email: Yup.string().required("Vui lòng nhập"),
                            phone: Yup.string().required("Vui lòng nhập")
                        })}
                        onSubmit={(value, { setErro }) => {
                            console.log(1);
                            signup(value, { setErro })
                            Swal.fire({
                                icon: "success",
                                title: "Đăng ký thành công !",
                                showConfirmButton: false,
                                timer: 2000,
                                customClass: {
                                    icon: "icon-post",
                                },
                            });
                            navigate("/login")
                        }}>
                        <Form>
                            <div className="mb-1">
                                <label htmlFor="phone" className="form-label">
                                    Số Điện Thoại <span className="text-danger">*</span>
                                </label>
                                <Field
                                    type="text"
                                    className="form-control border border-primary"
                                    name="phone"

                                    aria-describedby="emailHelp"
                                    onblur="inputAcc()"
                                />
                                <ErrorMessage style={{ height: 15 }}>
                                    <small className="text-danger" id="errAcc" />
                                </ErrorMessage>
                            </div>
                            <div className="mb-1">
                                <label htmlFor="email" className="form-label">
                                    Email <span className="text-danger">*</span>
                                </label>
                                <Field
                                    type="text"
                                    className="form-control border border-primary"
                                    name="email"
                                    aria-describedby="emailHelp"
                                    onblur="inputAcc()"
                                />
                                <ErrorMessage style={{ height: 15 }}>
                                    <small className="text-danger" id="errAcc" />
                                </ErrorMessage>
                            </div>
                            <div className="mb-1">
                                <label htmlFor="userName" className="form-label">
                                    Tài khoản <span className="text-danger">*</span>
                                </label>
                                <Field
                                    type="text"
                                    className="form-control border border-primary"
                                    name="userName"
                                    aria-describedby="emailHelp"
                                    onblur="inputAcc()"
                                />
                                <ErrorMessage style={{ height: 15 }}>
                                    <small className="text-danger" id="errAcc" />
                                </ErrorMessage>
                            </div>
                            <div className="mb-1">
                                <label htmlFor="password" className="form-label">
                                    Mật khẩu <span className="text-danger">*</span>
                                </label>
                                <Field
                                    type="password"
                                    onblur="inputPass()"
                                    className="form-control border border-primary"
                                    name="password"
                                />
                                <ErrorMessage style={{ height: 15 }}>
                                    <small className="text-danger" id="errPass" />
                                </ErrorMessage>
                            </div>
                            <div className="mb-1">
                                <label htmlFor="confirmPassword" className="form-label">
                                    Nhập lại mật khẩu <span className="text-danger">*</span>
                                </label>
                                <Field
                                    type="password"
                                    onblur="inputConfirmPass()"
                                    className="form-control border border-primary"
                                    name="confirmPassword"
                                />
                                <ErrorMessage style={{ height: 15 }}>
                                    <small className="text-danger" id="errConfirmPass" />
                                </ErrorMessage>
                            </div>
                            <div className="d-grid mt-3">
                                <button className="btn btn-primary" type="submit">
                                    Đăng ký
                                </button>
                            </div>
                        </Form>
                    </Formik>
                    <div className="mt-3">
                        <p className="mb-0 text-end">
                            <a href="NhatNHH_login.html" className="text-primary fw-bold">
                                Quay lại
                            </a>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SignUp;