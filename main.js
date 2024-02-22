let tableBody = document.querySelector('tbody');

const employees = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      department: "Engineering",
      role: { title: "Frontend Developer", level: "Mid" },
      contact: { email: "john.doe@example.com", phone: "123-456-7890" },
      skills: ["JavaScript", "React", "CSS"]
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      department: "Design",
      role: { title: "UI/UX Designer", level: "Senior" },
      contact: { email: "jane.smith@example.com", phone: "098-765-4321" },
      skills: ["Figma", "Sketch", "Adobe XD"]
    },
    {
      id: 3,
      name: "Rob Brown",
      age: 32,
      department: "Engineering",
      role: { title: "Software Developer", level: "Senior" },
      contact: { email: "rob.brown@example.com", phone: "098-518-4331" },
      skills: ["C++", "SQL", "STL"]
    },
    {
      id: 4,
      name: "Lily Martin",
      age: 24,
      department: "Engineering",
      role: { title: "Software Developer", level: "Junior" },
      contact: { email: "lily.martin@example.com", phone: "096-400-4300" },
      skills: ["C++", "STL", "QT"]
    },
]

document.addEventListener("DOMContentLoaded", function (){
    addToTbody(employees)
}
)

function addToTbody(arr){
   arr.forEach((elem) => {
    let tr = document.createElement("tr");
    tableBody.appendChild(tr);
    tr.appendChild(document.createElement('td')).textContent = elem.id;
    tr.appendChild(document.createElement('td')).textContent = elem.name;
    tr.appendChild(document.createElement('td')).textContent = elem.age;
    tr.appendChild(document.createElement('td')).textContent = elem.department;
    tr.appendChild(document.createElement('td')).textContent = elem.role.title;
    tr.appendChild(document.createElement('td')).textContent = elem.role.level;
    tr.appendChild(document.createElement('td')).textContent = elem.contact.email;
    tr.appendChild(document.createElement('td')).textContent = elem.contact.phone;
    tr.appendChild(document.createElement('td')).textContent = elem.skills.join(', ');
   })
}
