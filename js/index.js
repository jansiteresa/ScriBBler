function showCreatePost(){
  document.getElementById("createPostModal").style.display = "flex";
  }
  
  function hideCreatePostModal(){
    document.getElementById("createPostModal").style.display = "none";
  }
  
  function navigateToBlogList(){
    window.location.href = "/html/postslist.html"
  }

  // var createPostModal =  document.getElementById("createPostModal");
  // var createPostBtn = document.getElementByclass[1]("CreatePostBtn");
  // var createPostSpan = document.getElementById("close");

  // createPostBtn.onclick = function() {
  //   createPostModal.style.display ="block";
  // }
  // createPostSpan.onclick = function() {
  //   createPostModal.style.display ="none";
  // }

  // window.onclick = function(event) {
  //   if (event.target == createPostModal) {
  //     createPostModal.style.display = "none";
  //   }
  // }