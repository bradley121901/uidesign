import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div class="login">
      <br></br>
      <br></br>
      <h1>
        Welcome to
        <img src="./logo.png" alt="bug" height={50} />
      </h1>
      <br></br>
      <br></br>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">
          Username
        </label>
        <div class="col-sm-6">
          <input type="text" class="form-control" id="staticEmail"></input>
        </div>
      </div>

      <br></br>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">
          Password
        </label>
        <div class="col-sm-6">
          <input type="text" class="form-control" id="staticEmail"></input>
        </div>
      </div>

      <br></br>
      <br></br>
      <p>
        &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Forgot username or
        password?
      </p>

      <br></br>
      <span>
        &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
        <Link to="/">
          <button class="ntb" type="submit">
            LOGIN
          </button>
        </Link>
      </span>
      <br></br>
      <br></br>
      <p>
        <Link to="/register">
          &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; New here? Register
          now!
        </Link>
      </p>
      <br></br>
      <br></br>
    </div>
  );
}
