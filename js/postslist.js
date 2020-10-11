
  var model = document.getElementById("DeleteModel");
  var postElem = document.getElementsByClassName("post");

  function deleteModel(postId) {

    postElem[postId].style.display = 'none'

    // deleteBtn.onclick = function() {
    //   model.style.display = "block";
    // }

    // console.log(postId)
    // deletePost.onclick = function() {
    //   postElem[postId].style.display = 'none'
    // }
  }

  // function closeModel() {
  //   model.style.display = "none";
  // }

 

  window.onclick = function (event) {
    if (event.target == model) {
      model.style.display = "none";
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