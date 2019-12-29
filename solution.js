// Question 1 part A) Solution
var swapCase = swapString =>
{
  let stringArr = swapString.split(' ')
  //console.log(stringArr)
  let arr = stringArr.map((word,index) => 
  {
    if (index % 2 === 0)
    {
      return word.toUpperCase()
    }
    else
    {
      return word
    }

  })
  return arr.join()
  
}
swapCase("my penguin is cute")

// Question 1 part B) Solution

var shiftLetters = string => 
{
  let wordLetter = string.split('')
  let word = wordLetter.map((shift) => String.fromCharCode
  (shift.charCodeAt()+1))
  //console.log(word)
  return word.join('')
}
shiftLetters('abcxyz');


// Question 2 part A) Solution
var cards = ["ace","2","3","4","5","6","7","8","9","jack","queen","king"]
var cate = ["clubs","hearts","diamonds","spades"]
var deck = []


// loop twice first cards then hearts and join them togetehr i guess?
cards.forEach(card=> 
{
  cate.forEach(gory =>
  {
    deck.push(card + " " + "of" + " "+ gory)
  }
  )

})
console.log(deck)



// Question 2 part B) Solution

var form = string =>
{
  let splitString = string.split(" ")
  //console.log(splitString)
  const arrString = splitString.map(word =>
  //console.log(arrString)
  {
    if (word.length >= 3)
    {
      return word
    }
    else
    {
      return " "
    }


  })

  console.log(arrString.join())

}

form("I hope I did this question correctly")