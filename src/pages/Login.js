import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div class="card border-0 shadow rounded-3 my-5">
                                <div class="card-body p-4 p-sm-5">
                                    <h5 class="card-title text-center mb-5 fw-light fs-5"><strong>INICIAR SESION</strong></h5>
                                    <form>
                                        <div class="form-floating mb-3">
                                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                                <label for="floatingInput">Email</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña"/>
                                                <label for="floatingPassword">Contraseña</label>
                                        </div>

                                        <div class="d-flex mb-3">
                                            <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                                                <label class="form-check-label" for="rememberPasswordCheck">Recordarme
                                                </label>
                                        </div>
                                        <div class="d-grid">
                                            <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Entrar</button>
                                        </div>
                                        <hr class="my-4"/>
                                            <div class="d-grid mb-2">
                                               <h5>No tenes cuenta?<Link to='/register'>Registrate</Link></h5> 
                                            </div>
                                            <div class="d-grid">
                        
                                            </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Login