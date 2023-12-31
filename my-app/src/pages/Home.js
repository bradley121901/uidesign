import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div class="home">
      <br></br>
      <div>
        <h1>Daily Updates</h1>
      </div>
      <br></br>
      <div class="row">
        <div class="col">
          <div>@cole</div>
          <img src="/uidesign/golf.png" class="homegolf" alt=" " />
        </div>

        <div class="col">
          <div>@nick</div>
          <img src="/uidesign/travel.png" class="hometravel" alt=" " />
          <div class="row">
            <div>@kita</div>
            <img src="/uidesign/travel2.png" class="homeeyelashes" alt=" " />
          </div>
        </div>
        <div class="col">
          <div>@brad</div>
          <img src="/uidesign/sushi.png" class="homesushi" alt=" " />
          <div>@nico</div>
          <img src="/uidesign/drawing.png" class="homedrawing" alt=" " />
        </div>
      </div>
      <br></br>
      <span>
        <Link to="/post">
          <button class="ntb " type="submit">
            Post
          </button>
        </Link>
      </span>

      <span class="findbtn">
        <Link to="/find">
          <button class="ntb " type="submit">
            Start Chatting
          </button>
        </Link>
      </span>
    </div>
  );
}
