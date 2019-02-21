var representor_value = {
  'Mean': 19.95,
  'Mode': [2, 6, 43],
  'Median': 18.5
}

var hoverAnimation = function(data_representor){
  console.log("Ran")
  var div = document.getElementsByClassName("values")
  var value = document.createElement('h2')

  console.log(div.getAttribute('class'))
  value.innerHTML = representor_value[data_representor.innerHTML]
  div.appendChild(value)
}
