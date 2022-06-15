const pics = {
  "photo1": "https://img.freepik.com/free-photo/young-delivery-man-wor_23-2147914168.jpg?t=st=1655226622~exp=1655227222~hmac=6fc9ad00d82ac05dec49faacda430933cf910fd4cc609dd6d99d2661a5803c59&w=996",
  "photo2": "https://img.freepik.com/free-photo/young-delivery-man-wor_23-2147914147.jpg?t=st=1655226622~exp=1655227222~hmac=8b40056390af4ab383869cb6f8d24339133cdbf9c5d1979bab767f5715c9e14f&w=996",
}

function check_value(event){
  document.getElementById("photo").src = pics[event.target.value] ;
}
