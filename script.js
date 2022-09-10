center = document.querySelector('.center')
illustration = document.querySelector('.illustration')
ali = document.getElementById('ali')
anisha = document.getElementById('anisha')
richard = document.getElementById('richard')
shanai = document.getElementById('shanai')
const menu = document.querySelector('.menu')
const closeImg = document.querySelector('.close')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
menu.addEventListener('click',() =>{
  menu.style.display = 'none'
  center.style.display = 'grid'
  closeImg.style.display = 'block'
  illustration.style.marginTop = '12.5em'
})
closeImg.addEventListener('click',() =>{
  closeImg.style.display = 'none'
  center.style.display = 'none'
  menu.style.display = 'block'
  illustration.style.marginTop = '0'
})
btn1.addEventListener('click',() =>{
  anisha.style.display = 'block'
  shanai.style.display = 'none'
  ali.style.display = 'none'
  richard.style.display = 'none'
})
btn2.addEventListener('click',() =>{
  anisha.style.display = 'none'
  ali.style.display = 'block'
  shanai.style.display = 'none'
  richard.style.display = 'none'
})
btn3.addEventListener('click',() =>{
  anisha.style.display = 'none'
  richard.style.display = 'block'
  ali.style.display = 'none'
  shanai.style.display = 'none'
})
btn4.addEventListener('click',() =>{
  anisha.style.display = 'none'
  shanai.style.display = 'block'
  ali.style.display = 'none'
  richard.style.display = 'none'
})