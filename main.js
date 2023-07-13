// Add Class Hovered to list li
let list = document.querySelectorAll(".navigation ul li")
list.forEach((e=>{
    e.onmouseover=()=>{
        list.forEach((e=>{
            e.classList.remove("hovered")
        }))
        e.classList.add("hovered")

    }
}))


// List Toggle
let listIcon = document.querySelector(".toggle")
let navList = document.querySelector(".navigation")
let main = document.querySelector(".main")

listIcon.onclick=()=>{
    navList.classList.toggle("open")
    main.classList.toggle("open")
}