// const me = {
//   name: 'Marisol',
//   age: 0,
//
// };
//
// document.write(me.name + me.age);
// document.write('<h1>hello</h1>');

// Made the right image padding grow and stop after a certain time within HTML

// <img src="http://www.stickpng.com/assets/images/580b57fbd9996e24bc43bbd8.png" alt="dog">
//  <img src="http://www.stickpng.com/assets/images/580b57fbd9996e24bc43bbd8.png" alt="dog">
//
// <script>
//    const imgs = document.getElementsByTagName('img');
//    const img = imgs[0];
//    console.log('img', imgs[0]);
//    const px = 'px';
//    let move = 0;
//
//    img.style['background-color'] = 'red';
//    img.style.padding = '20px';
//    img.style.position = 'absolute';
//    img.style.right = 0 + px;
//    const action = setInterval( () => {
//         move += 20;
//        img.style.padding = move + px;
//        if (move > 200) {
//          clearInterval(action);
//        }
//    }, 100);

//
// const first = 'Marisol'
// const last = 'Garcia';
//
// document.write(`${first} ${last}`); <!-- make name spaced out  -->


// <button onclick="randomName()">Random</button>
// <button onclick="allName()">All</button>
// <script>
//    // LOOPS //
//
//
//    const names = ['Mari', 'Jay', 'Louie'. 'Yesi', 'Brianda', 'Corina', 'Bunny', 'Tori']; //list
//    function randomName() {
//      const name = names[Math.floor(Math.random() * names.length)];
//      console.log(name);
//      const el = document.createElement('h2');
//      el.innerText = name;
//      document.body.appendChild(el);
//      names.splice(pos, 0);
//    }
//
//    function  allNames () {
//      names.forEach( name => {
//        document.write(name);
//      })
//    }
//
// </script>
