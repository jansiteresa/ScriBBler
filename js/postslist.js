
var model = document.getElementById("Delete-Model");

function deleteModel() {
    model.style.display = "block";
    }

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

// var del = document.getElementsByClassName("postTrash");
// var i;
// var delModal = document.getElementById("Delete-Model")

// for (i = 0; i < del.length; i++) {
//   del[i].onclick = function(){
//     delModal.style.display = "block";
//   }
// }