function firstSeq() {
    let count = 0;
    function cc(card) {
      (card > 1 && card < 7) ?
      count ++:
      (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
      count --: null
    result = count + ((count > 0) ? ' Bet' : ' Hold');
    return count;
  }
  document.querySelector("#first",cc(2) + cc(3) + cc(4)+ cc(5)+ cc(6)).textContent = result;
  }
  function reset1() {
    document.querySelector("#first").textContent = " ";
  }

function secondSeq() {
  let count = 0;
  function cc(card) {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0) ? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#second",cc(7) + cc(8) + cc(9)).textContent = result;
}
function reset2() {
  document.querySelector("#second").textContent = " ";
}

function thirdSeq() {
  let count = 0;
  function cc(card) {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0) ? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#third",cc(10) + cc('j') + cc('k') + cc('q') + cc(1)).textContent = result;
}
function reset3() {
  document.querySelector("#third").textContent = " ";
}

function fourthSeq() {
  let count = 0;
  function cc(card) {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0) ? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#fourth",cc(3) + cc(7) + cc('q') + cc(8) + cc(1)).textContent = result;
}
function reset4() {
  document.querySelector("#fourth").textContent = " ";
}

function fifthSeq() {
  let count = 0;
  function cc(card) {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0) ? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#fifth",cc(2) + cc('j') + cc(9) + cc(2) + cc(7)).textContent = result;
}
function reset5() {
  document.querySelector("#fifth").textContent = " ";
}

function sixSeq() {
  let count = 0;
  function cc(card) {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0) ? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#sixth",cc(2) + cc(2) + cc(10)).textContent = result;
}
function reset6() {
  document.querySelector("#sixth").textContent = " ";
}

function sevenSeq() {
  let count = 0;
  function cc(card) {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0) ? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#seventh",cc(3) + cc(2) + cc(1) + cc(1) + cc('k')).textContent = result;
}
function reset7() {
  document.querySelector("#seventh").textContent = " ";
}


