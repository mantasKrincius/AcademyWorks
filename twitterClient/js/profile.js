let token
let url = 'http://localhost:3000/api/v1'
let user

window.addEventListener('DOMContentLoaded', () => {
    token = localStorage.getItem('twitterauth')

    if (!token) return window.location.href = './login.html'

    user = JSON.parse(localStorage.getItem('twitter-user'))

    setUpNavBar()
})

const setUpNavBar = async () => {
    document.getElementById('profile').innerHTML = user.email
}

const logOut = async () => {
    let response = await fetch(`${url}/user/logOut`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'twitterauth': token
        }
    })
    localStorage.removeItem('twitterauth')
    window.location.href = './login.html'
    localStorage.removeItem('twitter-user')
}

const updateProfile = async () => {
    const formData = new FormData()
    let profileImgElement = document.getElementById('profileImageInput')

    formData.append('avatar', profileImgElement.files[0])
    formData.append('test', 'test')
    console.log(formData)
    console.log(profileImgElement.files)

    let response = await fetch(`${url}/user/updateUserInfo`, {
        method: "POST",
        headers: {
            'twitterauth': token
        },
        body: formData
    })
}