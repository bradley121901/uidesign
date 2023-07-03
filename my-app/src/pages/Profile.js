import { Link } from 'react-router-dom';
export default function Profile() {
  return (
    <div class="home">
      <div>
        <span>
          <img src="/goodwill.png" class="profile-logo" alt=" " />{' '}
          <img src="/edit.png" class="edit" alt=" " />
          <h1>
            Will Hunting <img src="/edit.png" class="edit" alt=" " />
          </h1>
          <img src="/ig.png" class="social-logo" alt=" " />
          <img src="/edit.png" class="edit" alt=" " />
          <img src="/fb.png" class="social-logo" alt=" " />
          <img src="/edit.png" class="edit" alt=" " />
          <img src="/twitter.png" class="social-logo" alt=" " />
          <img src="/edit.png" class="edit" alt=" " />
        </span>
      </div>
      <p>
        full time golfer part time analyst{' '}
        <img src="/edit.png" class="edit" alt=" " />
      </p>
      <div class="row">
        <div class="col">
          <img src="/golf.png" class="homegolf" alt=" " />
          first time at the new course
          <img src="/edit.png" class="edit" alt=" " />
        </div>

        <div class="col">
          <img src="/dog.png" class="dog" alt=" " />
          <p>
            great to see my buddy again! just look at that smile
            <img src="/edit.png" class="edit" alt=" " />
          </p>
        </div>

        <div class="col ">
          <Link to="/profile">
            <button class="imagebtn" type="submit">
              <img src="./edit.png" alt="bug" height={100} />
            </button>
          </Link>
        </div>
      </div>
      <div>
        <br></br>
        <h1>
          About <img src="/edit.png" class="edit" alt=" " />
        </h1>
        <p>
          Lorem ipsum dolor sit amet. Hic officiis soluta a quam itaque qui
          alias quia. Aut ullam sunt est unde optio et sequi facere. Quo ipsam
          maiores eos earum amet a illo officia cum eveniet fugit qui quia
          placeat cum maxime dolorem. Et impedit eveniet ea ipsum molestias est
          sunt iure. Et autem architecto eos numquam rerum aut nemo cumque sed
          velit esse. Hic quas voluptates est reiciendis galisum qui illo vero
          At eius sapiente hic voluptatum quia et placeat illum et aperiam
          temporibus.
        </p>
      </div>

      <div>
        <h1>
          Wants to learn more about <img src="/edit.png" class="edit" alt=" " />
        </h1>
        <p>
          Lorem ipsum dolor sit amet. Et impedit eveniet ea ipsum molestias est
          sunt iure. Et autem architecto eos numquam rerum aut nemo cumque sed
          velit esse. Hic quas voluptates est reiciendis galisum qui illo vero
          At eius sapiente hic voluptatum quia et placeat illum et aperiam
          temporibus.
        </p>
      </div>
      <br></br>
      <span>
        <Link to="/">
          <button class="ntb findbtn" type="submit">
            Return
          </button>
        </Link>
      </span>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
