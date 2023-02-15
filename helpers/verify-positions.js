const verifyPositionsX = () => {
  let elements = []

  for(let i = 1; i < 9; i++){
    elements.push(document.getElementById(i))
  }
  if(elements[0].innerHTML === "X" & elements[1].innerHTML === "X" & elements[2].innerHTML === "X" ){
    console.log("x ganhhou")
  }
  if(elements[0].innerHTML === "X" & elements[4].innerHTML === "X" & elements[8].innerHTML === "X" ){
    console.log("x ganhhou")
  }
  if(elements[0].innerHTML === "X" & elements[3].innerHTML === "X" & elements[6].innerHTML === "X" ){
    console.log("x ganhhou")
  }
  if(elements[1].innerHTML === "X" & elements[4].innerHTML === "X" & elements[6].innerHTML === "X" ){
    console.log("x ganhhou")
  }
  if(elements[2].innerHTML === "X" & elements[4].innerHTML === "X" & elements[6].innerHTML === "X" ){
    console.log("x ganhhou")
  }
  if(elements[2].innerHTML === "X" & elements[5].innerHTML === "X" & elements[8].innerHTML === "X" ){
    console.log("x ganhhou")
  }
  if(elements[3].innerHTML === "X" & elements[4].innerHTML === "X" & elements[5].innerHTML === "X" ){
    console.log("x ganhhou")
  }
  if(elements[6].innerHTML === "X" & elements[7].innerHTML === "X" & elements[8].innerHTML === "X" ){
    console.log("x ganhhou")
  }
  if(elements[7].innerHTML === "X" & elements[4].innerHTML === "X" & elements[2].innerHTML === "X" ){
    console.log("x ganhhou")
  }
}

module.exports = {
  verifyPositionsX
}