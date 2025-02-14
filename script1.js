const scriptURL = 'https://script.google.com/macros/s/AKfycbwIT4voQV5ekcZKDT1Z5KzSh6Fqdp-AO2tQQD73dMi1br9zk2MM0Z4wZePqm4HULkww/exec'
const form = document.forms['contact-form']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
        .then(response =>alert("Thank you! your form issubmitted successfully."))
        .then(() =>{ window.location.reloaded();})
        .catch(error => console.error('Error!', error.message))
})