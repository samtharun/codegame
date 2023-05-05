// // function dragStartHandler(event) {
// //     event.dataTransfer.setData("text/plain", event.target.id);
// //   }
// //   function dragOverHandler(event) {
// //     event.preventDefault();
// //   }
// //   function dropHandler(event) {
// //     event.preventDefault();
// //     const data = event.dataTransfer.getData("text/plain");
// //     const draggableElement = document.getElementById(data);
// //     const droppableElement = event.target;
// //     droppableElement.appendChild(draggableElement);
// //     droppableElement.innerHTML = `<p>Dropped item: ${draggableElement.innerHTML}</p>`;
// //   }
// //   const draggableElements = document.querySelectorAll(".draggable");
// //   draggableElements.forEach((elem) => {
// //     elem.addEventListener("dragstart", dragStartHandler);
// //   });






// // function allowDrop(event) {
// //     event.preventDefault();
// //   }

// //   function drag(event) {
// //     event.dataTransfer.setData("text", event.target.id);
// //   }

// //   function drop(event) {
// //     event.preventDefault();
// //     var data = event.dataTransfer.getData("text");
// //     var draggedImage = document.getElementById(data);
// //     event.target.appendChild(draggedImage);
// //   }











// const rows = document.querySelector('.row');
// const dragdroparea = document.getElementsByClassName('.drag-drop-area');

// rows.addEventListener('dragstart', (e)=>{
//     e.target.className += ' hold';
// });
// rows.addEventListener('dragend', ()=>{
//     e.target.className = 'rows';
// });

// rows.forEach((row) => {
//     row.addEventListener("dragover", (e) => {
//         e.preventDefault();
//         row.classList.add("hovered");
//     });
//     row.addEventListener("dragleave", () => {
//         row.classList.remove("hovered");
//     });
//     row.addEventListener("drop", () => {
//         row.appendChild(drag-drop-area);
//         row.classList.remove("hovered");
//     });
// });

function allowDrop(even) {
    even.preventDefault();
}

function drag(even) {
    even.dataTransfer.setData("text", even.target.id);
}

function drop(even) {
    even.preventDefault();
    var fetchData = even.dataTransfer.getData("text");
    even.target.appendChild(document.getElementById(fetchData));
}