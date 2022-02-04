function start(){
    var endpoint = 'https://sbl-projects-default-rtdb.firebaseio.com/.json'
  $(".btn").text('Connecting...!')
  document.getElementById("progress").style = 'display: block'
    fetch($("#address").val())
.then(res => {
    // code to handle the response data
    return res.json()
  //  console.log(res.json())
})
.then((response) => {
    console.log(response)
  M.toast({html: 'Connected!'})
  setTimeout(() => {
    $(".btn").text('Connected')
    localStorage.setItem('Address', $("#address").val())
    document.getElementById("progress").style = 'display: none'
    setTimeout(() => {
        window.location.href = $("#address").val()
    }, 2500);
  }, 4500);
})
.catch(err => {
    // code to handle request errors
    M.toast({html: 'Not connected!'})
    $(".btn").text('Connect')
    document.getElementById("progress").style = 'display: none'
});
}
if (localStorage.getItem('Address') != null) {
    $("#address").val(localStorage.getItem('Address'))
}