let idToDelate = 2

let notesStore = [
    {
        id : 1,
        text : 'text',
    },
    {
        id : 2,
        text : 'text'
    },
    {
        id : 3,
        text : 'text'
    }
]

notesStore = notesStore.filter((note) =>{
    if (note.id != idToDelate){
        return note
    }
})

console.log(notesStore)

/*let names = prompt('Enter name:')
let username = prompt('Enter usename:')
let passwords = prompt('Enter password:')



const button = document.getElementById('my-button');
button.addEventListener('click', () => {
  const text = document.getElementById('my-text');
  const p = document.getElementById('my-username')
  const password = document.getElementById('my-password')
  text.innerText = `${names} ${username}`;
  password.innerText = `Пароль користувача ${passwords}`
});*/