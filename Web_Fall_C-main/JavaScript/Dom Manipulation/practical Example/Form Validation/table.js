const body = document.body;
const div1 = document.createElement('div')
const table = document.createElement('table')
const thead = document.createElement('thead')
const tr = document.createElement('tr')

//contents 

const names = document.createElement('th')
const marks = document.createElement('th')

names.textContent = "Names";
marks.textContent = "Marks";
body.appendChild(div1)
div1.appendChild(table)
table.append(names, marks)
table.setAttribute('border','2px')
table.setAttribute('cellpadding', '2')
table.style.margin = '20px';

const form = document.createElement('form')
const namesF = document.createElement('label')
const nameInput = document.createElement('input')
const marksF = document.createElement('label')
const marksInput= document.createElement('input')
const submitbtn = document.createElement('button')
namesF.textContent = 'Name  :';
marksF.textContent = 'Marks  :';

submitbtn.innerHTML= "Submit"
submitbtn.style.width =  '60px'
submitbtn.style.height =  '20px'

form.append(namesF, nameInput, marksF, marksInput,submitbtn);
div1.appendChild(form)
