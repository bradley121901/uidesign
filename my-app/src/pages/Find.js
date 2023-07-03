import { Link } from 'react-router-dom';
export default function Find() {
  return (
    <div class="home">
      <div>
        <br></br>
        <span>
          <h1>
            <img src="/person4.png" class="profile-logo" alt=" " />
            &nbsp; Nicole Hortons
            <img src="/ig.png" class="social-logo" alt=" " />
            <img src="/fb.png" class="social-logo" alt=" " />
            <img src="/twitter.png" class="social-logo" alt=" " />
          </h1>
        </span>
      </div>
      <p>live laugh love cake</p>
      <br></br>

      <div class="row">
        <div class="col">
          special thanks to Tod for driving
          <img src="/findphoto.png" class="findtravel" alt=" " />
        </div>

        <div class="col">
          <img src="/clover.png" class="clover" alt=" " />
          <p>feeling lucky today!</p>
        </div>

        <div class="col ">
          new receipe!!!
          <img src="/dessert.png" class="dessert" alt=" " />
        </div>
      </div>
      <br></br>
      <div>
        <h1>About</h1>
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
      <br></br>
      <div>
        <h1>Mutuals</h1>
        <img src="/person1.png" class="profile-logo" alt=" " />{' '}
        <img src="/goodwill.png" class="profile-logo" alt=" " />{' '}
        <img src="/person2.png" class="profile-logo" alt=" " />{' '}
        <img src="/person3.png" class="profile-logo" alt=" " />{' '}
      </div>
      <br></br>

      <div>
        <h1>Wants to learn more about</h1>
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
        <Link to="/chat">
          <button class="ntb" type="submit">
            Chat
          </button>
        </Link>
      </span>
      <span>
        <Link to="/find">
          <button class="nextbtn" type="submit">
            Next
          </button>
        </Link>
      </span>
    </div>
  );
}
