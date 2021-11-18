    function getVal() {
    var date = new Date();
    var y = date.getFullYear();
    var yearBorn = document.querySelector('.year').value;   
    var age = y - yearBorn;
    var ho = document.getElementById('homem');
    var mu = document.getElementById('mulher');
    
    if (ho.checked == true && yearBorn >= 1920 && yearBorn <= 2010) {
        console.log('Homem');
        document.querySelector('.result').innerHTML = 'Você tem ' + age +' anos e você é homem!';
        document.getElementById('image').classList.remove('mulher');
        document.getElementById('image').classList.add('homem');

    }

    if (mu.checked == true && yearBorn >= 1920 && yearBorn <= 2010) {
        console.log('Mulher');
        document.querySelector('.result').innerHTML = 'Você tem ' + age +' anos e você é mulher!';
        document.getElementById('image').classList.remove('homem');
        document.getElementById('image').classList.add('mulher');
    }

    if (mu.checked == false && ho.checked == false) {
        document.querySelector('.result').innerHTML = 'Você tem ' + age +' anos!';
    } 
    
    if (yearBorn < 1920 || yearBorn > 2010) {
        document.querySelector('.result').innerHTML = 'As condições não foram atendidas';
        document.getElementById('image').classList.remove('homem');
        document.getElementById('image').classList.remove('mulher');
    }
    
}