function submitForm(){
    let nama = document.getElementById('name').value
    let email = document.getElementById('email').value
    let PN = document.getElementById('phone number').value
    let Subject = document.getElementById('Subject').value
    let Massage = document.getElementById('Massage').value

    if (nama == '') {
        alert("Nama harus diisi ya kawan")
    } else if (PN == '') {
        alert("diisi nomernya ya kawan")
    } else if (email == '') {
        alert("Emailnya diisi ya kawan")
    } else if (Subject == '') {
        alert("Subjectnya diisi ya kawan")
    } else if (Massage == '') {
        alert("Massage harus diisi ya kawan")
    }
    
    console.log(nama)
    console.log(email)
    console.log(PN)
    console.log(Subject)
    console.log(Massage)

    let penerima = 'jokowi@mail.com'
    let a = document.createElement('a')

    a.href = 'mailto: ' + penerima + '?Subject=' + '&body=Halo Nama Saya ' + nama + ', ' + Massage
    
    a.click()
}