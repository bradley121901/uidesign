import { Link } from 'react-router-dom';
export default function Confirm() {
  return (
    <div class="confirm">
      <br></br>
      <br></br>
      <h1 class="middle">
        <img src="./logo.png" alt="bug" height={80} />
      </h1>
      <br></br>
      <br></br>
      <h2>Successful Registration! Start Chatting</h2>
      <br></br>
      <br></br>
      <p class="middlebtn">
        <Link to="/login">
          <button class="ntb" type="submit">
            LOGIN
          </button>
        </Link>
      </p>
      <br></br>
      <br></br>
    </div>
  );
}
