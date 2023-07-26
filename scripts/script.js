function afficherResultat(score, nombreQuestions){
    console.log("Votre score final est de : " + score + "/" + nombreQuestions)
}

function choisirMotsOuPhrases(){
    let choixTypeJeu = prompt("Mots ou phrases ?")
    while ((choixTypeJeu !== "mots") && (choixTypeJeu !== "phrases")){
        choixTypeJeu = prompt("Mots ou phrases ?")
    }
    console.log("Vous avez choisi " + choixTypeJeu)
    return choixTypeJeu
}

function lancerBoucleDeJeu(liste){
    let score = 0
    for (let i = 0 ; i<liste.length ; i++){
        let proposUtilisateur = prompt("Réécrivez : " + liste[i])
        if (proposUtilisateur === liste[i]){
            console.log("Bravo!")
            score ++
            console.log(score)
        } else{
            console.log("Echec...")
            console.log(score)
        }
    }
    return score
}

function lancerJeu(){
    let choixTypeJeu = choisirMotsOuPhrases()
    let score = 0
    let nombreQuestions = 0

    if (choixTypeJeu === "mots"){
        score = lancerBoucleDeJeu(listeMots)
        nombreQuestions = listeMots.length
    } else {
        score = lancerBoucleDeJeu(listePhrases)
        nombreQuestions = listePhrases.length
    }
    afficherResultat(score,nombreQuestions)
}

let baliseZoneDeTest = document.querySelector("#zoneProposition span");
console.log(baliseZoneDeTest)
let listeInputRadio = document.querySelectorAll(".zoneChoix input");
for (let i = 0; i < listeInputRadio.length; i++) {
    console.log(listeInputRadio[i]);
}



