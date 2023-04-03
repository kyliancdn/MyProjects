// const li = document.querySelector('ul li:first-child')

const corps = document.createElement('div')
const ecran = document.createElement('div')
const result = document.createElement('input')
const grilles = document.createElement('div')
const grille1 = document.createElement('div')
const bouton1 = document.createElement('button')
bouton1.innerText = "1"
const bouton2 = document.createElement('button')
bouton2.innerText = "2"
const bouton3 = document.createElement('button')
bouton3.innerText = "3"
const bouton4 = document.createElement('button')
bouton4.innerText = "4"
const bouton5 = document.createElement('button')
bouton5.innerText = "5"
const bouton6 = document.createElement('button')
bouton6.innerText = "6"
const bouton7 = document.createElement('button')
bouton7.innerText = "7"
const bouton8 = document.createElement('button')
bouton8.innerText = "8"
const bouton9 = document.createElement('button')
bouton9.innerText = "9"
const bouton10 = document.createElement('button')
bouton10.innerText = "0"
const bouton11 = document.createElement('button')
bouton11.innerText = "+"
const bouton12 = document.createElement('button')
bouton12.innerText = "-"
const bouton13 = document.createElement('button')
bouton13.innerText = "*"
const bouton14 = document.createElement('button')
bouton14.innerText = "/"
const grille2 = document.createElement('div')
const bouton1bis = document.createElement('button')
const bouton2bis = document.createElement('button')
const bouton3bis = document.createElement('button')
const bouton4bis = document.createElement('button')
const bouton5bis = document.createElement('button')
const bouton6bis = document.createElement('button')
const bouton7bis = document.createElement('button')

    corps.setAttribute('id', 'corps')
    ecran.setAttribute('id', 'ecran')
    grilles.setAttribute('id', 'grilles')
    grille1.setAttribute('id', 'grille1')
    grille2.setAttribute('id', 'grille2')

    document.querySelector('body').append(corps)
    document.querySelector('div').append(ecran)
    document.querySelector('#corps').append(grilles)
    document.querySelector('#ecran').append(result)
    document.querySelector('#grilles').append(grille1)
    document.querySelector('#grille1').append(bouton1)
    document.querySelector('#grille1').append(bouton2)
    document.querySelector('#grille1').append(bouton3)
    document.querySelector('#grille1').append(bouton4)
    document.querySelector('#grille1').append(bouton5)
    document.querySelector('#grille1').append(bouton6)
    document.querySelector('#grille1').append(bouton7)
    document.querySelector('#grille1').append(bouton8)
    document.querySelector('#grille1').append(bouton9)
    document.querySelector('#grille1').append(bouton10)
    document.querySelector('#grille1').append(bouton11)
    document.querySelector('#grille1').append(bouton12)
    document.querySelector('#grille1').append(bouton13)
    document.querySelector('#grille1').append(bouton14)

// function myTrim(a) {
//     let charac;
//     for(let i = 0; charac !== ''; i++) {
//         charac = a.charAt(i);
//         if(charac === ' ') {
//             a = a.replace(charac, '');
//         }
//         return a
//     }
// }

// // function myCalculate() {
// //     let numbers;
// //     let signe;
// //     let calcul = '';
// //     let result = '';
// //     while(signe !== '=') {
// //         signe = myTrim(prompt('Tapez votre signe. (+, -, x...)'))
// //         if(signe !== '=') {
// //             chiffres = myTrim(prompt('Tapez votre nombre.'))
// //             numbers = myTrim(signe) + myTrim(chiffres)
// //             console.log(numbers)
// //             calcul = calcul + signe + ' ' + chiffres + ' '
// //             // (' ' + myTrim(signe) + ' ') + (' ' + myTrim(chiffres) + ' ')
// //             result = result + parseFloat(numbers)
// //             console.log(result)
// //         } else {
// //             calcul = calcul + '= '
// //         }
// //         // parseFloat(calcul) + parseFloat((' ' + myTrim(numbers) + ' ')) + parseFloat((' ' + myTrim(signe) + ' '))
// //     }
// //     return calcul + result   
// // }

// // alert(myCalculate())

// // function myCalculate2() {
// //     let numbers;
// //     let signe;
// //     let calcul = '15 + 45 x 75';
// //     let result = '';
// //     while(signe !== '=') {
// //         calcul = prompt('Tapez votre calcul.')
    
// //         }
// //         // parseFloat(calcul) + parseFloat((' ' + myTrim(numbers) + ' ')) + parseFloat((' ' + myTrim(signe) + ' '))
// //     }
// //     return calcul + result   
// // }
// let number = ''
// eval(parseInt(number))

// // ' ' + a.trim + ' '
// // ÷
