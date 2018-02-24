// function outerParent() {
//   let name = 'Steven';
//   console.log('Inside Parent:', name);

//     function innerChild() {
//       console.log('Inside Child:', name);
//     }

// }

function countDown(count) {
  console.log('Countdown:', count);
  if (count === -5) {
    return;
  } else {
    countDown(count - 1);
  }
}

countDown(10);
