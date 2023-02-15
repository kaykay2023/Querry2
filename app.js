stars = {
  angelina: {
      age: "47years old",
      url: 'https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_.jpg',
      text: 'Angelina Jolie(zelzy) is an American actress, filmmaker, and humanitarian. The recipient of numerous accolades, including an Academy Award and three Golden Globe Awards, she has been named Hollywoods highestpaid actress multiple times.'
  },
  jessica: { 
      age: "40years old",
      url: 'https://m.media-amazon.com/images/M/MV5BMjI1NjEwMDEyMF5BMl5BanBnXkFtZTcwMTI3ODQ1Mw@@._V1_.jpg',
      text: 'Jessica Claire Timberlake is an American actress. She has received various accolades, including a Young Artist Award, and nominations for a Primetime Emmy'
  },
  jonathan: {
      age: "33years old",
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm_G3veHEJHyX5wHLATqYrK81uzqIPSE1vKJyUNZJkXgtvOs8mjmPKF8BWCkEsXzUYQBE&usqp=CAU',
      text: 'Jonathan Michael Majors is an American actor. He first rose to prominence after starring in the independent feature film The Last Black Man in San Francisco'
  },
}

const changeAngelina = ()=>{
  let firstpic = document.querySelector('.sImg')
  firstpic.setAttribute('src', stars.angelina.url )
  // -----------------------------------------------
  // targetBlue
  let blue = document.querySelector('.AgeContainer')
  // append Temp
  blue.innerHTML = stars.angelina.age

  // target green 
  let green = document.querySelector('.txt')

  // append text
  green.innerHTML = stars.angelina.text

}


const changeJessica = ()=>{
  let firstpic = document.querySelector('.sImg')
  firstpic.setAttribute('src', stars.jessica.url )
  // -----------------------------------------------
  // targetAge
  let blue = document.querySelector('.AgeContainer')
  // append Age
  blue.innerHTML = stars.jessica.age

  // target green 
  let green = document.querySelector('.txt')

  // append text
  green.innerHTML = stars.jessica.text


}

const changeJonathan = ()=>{
  let firstpic = document.querySelector('.sImg')
  firstpic.setAttribute('src', stars.jonathan.url )
  // -----------------------------------------------
  // target
  let blue = document.querySelector('.AgeContainer')
  // append Temp
  blue.innerHTML = stars.jonathan.age

  // target green 
  let green = document.querySelector('.txt')

  // append text
  green.innerHTML = stars.jonathan.text

}




