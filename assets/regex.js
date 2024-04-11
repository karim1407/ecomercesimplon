import './styles/inscription.scss';

window.onload = () => {
    document.getElementById('user_password_first').addEventListener('input', checkPass);
}

function checkPass() {
    let score = 0;
    let mdp = this.value;

    let minuscule = document.querySelector('#minuscule');
    let majuscule = document.querySelector('#majuscule');
    let speciaux = document.querySelector('#special');
    let longueur = document.querySelector('#longueur');
    let chiffre = document.querySelector('#chiffre');
    let btn = document.querySelector('#soumettre');

    if (/[a-z]/.test(mdp)) {
        minuscule.classList.replace('invalid','valid');
        score++;
    } else {
        minuscule.classList.replace('valid','invalid');
    }

    
    if (/[0-9]/.test(mdp)) {
        chiffre.classList.replace('invalid','valid');
        score++;
    } else {
        chiffre.classList.replace('valid','invalid');
    }

    if(/[A-Z]/.test(mdp)) {
        majuscule.classList.replace('invalid','valid');
        score++;
    } else {
        majuscule.classList.replace('valid','invalid');
    }

    if(/[&@§!?.]/.test(mdp)) {
        speciaux.classList.replace('invalid','valid');
        score++;
    } else {
        speciaux.classList.replace('valid','invalid');
    }

    if(mdp.length >= 6) {
        longueur.classList.replace('invalid','valid');
        score++;
    } else {
        longueur.classList.replace('valid','invalid');
    }

   
    if (score === 5) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}
