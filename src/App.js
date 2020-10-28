import logo from './logo.svg';
import './App.css';

const list = ["1", "2", "3", "4", "5"]
const currentNumber = 0

// const carousel = (function(){
//   var box = document.querySelector('.carouselbox');
//   var next = box.querySelector('.next');
//   var prev = box.querySelector('.prev');
//   var items = box.querySelectorAll('.content li');
//   var counter = 0;
//   var amount = items.length;
//   var current = items[0];
//   box.classList.add('active');
//   function navigate(direction) {
//     current.classList.remove('current');
//     counter = counter + direction;
//     if (direction === -1 && 
//         counter < 0) { 
//       counter = amount - 1; 
//     }
//     if (direction === 1 && 
//         !items[counter]) { 
//       counter = 0;
//     }
//     current = items[counter];
//     current.classList.add('current');
//   }
//   next.addEventListener('click', function(ev) {
//     navigate(1);
//   });
//   prev.addEventListener('click', function(ev) {
//     navigate(-1);
//   });
//   navigate(0);
// })();

let num = 0
let direction = 0
const add = () => {
  direction = 1
  if (direction === 1 && 
            counter < 0) { 
            num + 1; 
        }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>carousel </h1>
      </header>

      <div class="carouselbox">
  <div class="buttons">
    <button class="prev">
      ◀ <span onClick={minus} class="offscreen">Previous</span>
    </button>
    <button onClick={add} class="next">
      <span class="offscreen">Next</span> ▶ 
    </button>
  </div>
  <ol class="content">
  <li>{num}</li>
  </ol>
</div>

      {/* <div className="container">
        <div className="h5">Circular carousal</div>
        <div className="carousel">
          <div className="slider">
            <section>1</section>
            <section>2</section>
            <section>3</section>
            <section>4</section>
            <section>5</section>
          </div>
          <div className="controls">
            <button className="next"><i className="material-icons">
              keyboard_arrow_right
            </i>
            </button>
            <button className="prev"><i className="material-icons">
              keyboard_arrow_left
            </i>
            </button>
          </div>
        </div>
      </div> */}

    </div>
  );
}

export default App;
