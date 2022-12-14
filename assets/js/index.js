import Student from '../js/class.js'

const inputStudentName = document.getElementById('studentName')
const inputStudentRegistration = document.getElementById('studentRegistration')
const inputStudentGrade1 = (document.getElementById('studentGrade1'))
const inputStudentGrade2 = document.getElementById('studentGrade2')
const inputStudentGrade3 = document.getElementById('studentGrade3')
const studentForm = document.querySelector('form')
const tableStudentInfo = document.querySelector('.studentRegistryList')
const btnDeleteAllStudents = document.querySelector('#deleteAllStudents')


function createStudent() {
    let student = new Student(inputStudentName.value, inputStudentRegistration.value, inputStudentGrade1.value, inputStudentGrade2.value, inputStudentGrade3.value)


    const trElement = document.createElement('tr')
    trElement.setAttribute('class', 'listItem')
    tableStudentInfo.appendChild(trElement)

    const tdElementName = document.createElement('td')
    tdElementName.setAttribute('id', 'name')
    tdElementName.innerText = student.getName()
    trElement.appendChild(tdElementName)

    const tdElementRegistration = document.createElement('td')
    tdElementRegistration.setAttribute('id', 'registration')
    tdElementRegistration.innerText = student.getRegistration()
    trElement.appendChild(tdElementRegistration)

    const tdElementNote1 = document.createElement('td')
    tdElementNote1.setAttribute('id', 'note1')
    tdElementNote1.innerText = student.getNote1()
    trElement.appendChild(tdElementNote1)

    const tdElementNote2 = document.createElement('td')
    tdElementNote2.setAttribute('id', 'note2')
    tdElementNote2.innerText = student.getNote2()
    trElement.appendChild(tdElementNote2)

    const tdElementNote3 = document.createElement('td')
    tdElementNote3.setAttribute('id', 'note3')
    tdElementNote3.innerText = student.getNote3()
    trElement.appendChild(tdElementNote3)

    const tdElementAverage = document.createElement('td')
    tdElementAverage.setAttribute('id', 'average')
    tdElementAverage.innerText = student.calculateAverage()
    trElement.appendChild(tdElementAverage)

    const tdElementBtnDeleteStudent = document.createElement('td')
    tdElementBtnDeleteStudent.innerHTML = '<i class="fa-solid fa-trash delete" style="cursor: pointer;" title="Apagar aluno"></i>'
    trElement.appendChild(tdElementBtnDeleteStudent)
    

    deleteStudent()
}

function deleteStudent() {
    const deleteButtons = document.querySelectorAll('i.delete')
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const elementToRemove = button.closest('tr')
            elementToRemove.remove()
        })
    })
}

function deleteAllStudent() {
    tableStudentInfo.innerHTML = ''
}

studentForm.onsubmit = function (event) {
    event.preventDefault()

    createStudent()
}

btnDeleteAllStudents.onclick = function() {
    let questionToUser = confirm('Deseja apagar todos os alunos?')
    if(questionToUser) {
        deleteAllStudent()
    }
}