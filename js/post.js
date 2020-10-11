let likes = 0 ;
function incLikes()
{   likes = likes + 1 ;
    let ContentChange = document.getElementById('like-number-update') ;
   if(likes === 1)
   {
       ContentChange.innerHTML = `${likes} person likes this` ;
   }
   else
   {
    ContentChange.innerHTML =`${likes} people have like this !` ;
   }
}