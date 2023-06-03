function search() {
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const storeItems = document.getElementById("Activity-list")
    const activity = document.querySelectorAll(".Activity")
    const activityName = storeItems.getElementsByTagName("h2")

    for(var i=0; i<activityName.length;i++){
        let match = activity[i].getElementsByTagName('h2')[0];

        if(match){
          let textValue =  match.textContent || match.innerHTML

          if(textValue.toUpperCase().indexOf(searchBox)>-1){
            activity[i].style.display = "";
          }
          else{
            activity[i].style.display = "none";
          }
        }
    }
}