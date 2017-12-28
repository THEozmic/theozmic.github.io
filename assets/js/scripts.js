// let index = parseInt(location.hash.split("")[1]) || 0
// let lastIndex = 0


// $(window).bind('mousewheel', function(event) {
//   event.preventDefault();
//   if (event.originalEvent.wheelDelta >= 0) {
//     console.log('up', index)
//     if (index !== 0) {
//       $('.pagelets').animate({
//         scrollTop: $(`#${index-1}`).offset().top
//       }, 1000);
//       index = index - 1
//       location.hash = index
//       return;
//     }
//   } else {
//     console.log('down', index)
//     if ($(`#${index+1}`).length != 0) {
//       if ((index + 1) - lastIndex === 1) {
//         $('.pagelets').animate({
//           scrollTop: $(`#${index+1}`).offset().top
//         }, 1000);
//         index = index + 1
        
//         lastIndex = index - 1
//       }
//       location.hash = index
//       return;
//     }
//   }
// });