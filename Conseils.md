# Petits conseils en JS


* let pour initialiser ue variable ; const pour initialiser une constante


* Les notions de "conditions" sont gérées avec les if/else


* Utiliser les switch/case pour éviter les embriquements infinis de if/else, quand il y a des exceptions de 
valeurs précises à traiter différemment par exemple
```
switch (motUtilisateur){
    case listeMots[0]:
        console.log("Bravo!")
        break
    case "Gredin" :
        console.log("Restez correct!")
        break
    case "Mécréant" :
        console.log("Restez correct!")
        break
    default:
        console.log("Erreur de frappe...")
}
```


* Simplifier des répétitions d'instructions avec des boucles for et while ?


* Ecrire des fonctions - conseils :
  * définir une tâche spécifique pour chaque fonction 
  * écrire des fonctions courtes (éviter de dépasser 30 lignes). 
  * nommer clairement les fonctions (utiliser un verbe et un un sujet)
  * nommer clairement les paramètres


* Penser aux commentaires en cas de doute sur la clareté d'un élément


* Parfois prioriser de déclarer une variable localement dans plusieurs fonctions différentes,
plutôt qu'une seule fois globalemet et de se retrouver avec 2 variables globales qui définissent le même élément


# Petits conseils en HTML

* On peut représenter les imbrications de balises et donc les éléments de la page sous forme d'arbre, pour y voir plus clair, 
notamment quand on cherche un élément qu'on souhaite récupéré avec le JS. Cet arbre représente le DOM.


* Structure en HTML
```
<html>
  <head>
  </head>
  
  <body>
    <header>
    </header>
    
    <main>
    </main>
    
    <footer>
    </footer>
  </body>
</html>
```

# Récupérer un élément d'HTML en JS :

```
let maBaliseDiv = document.getElementById("jeu")
console.log(maBaliseDiv)

let maBaliseMain = document.querySelector("main")
console.log(maBaliseMain)

let mesBalisesDiv = document.querySelectorAll("div")
console.log(mesBalisesDiv)
```


* Ajouter le mot-clé defer dans la balise script : concrètement, cela revient à demander au navigateur “Si tu rencontres la balise script, diffère sa prise en compte et attends que la page soit chargée.”


* Bouts de code :

```
<body>
    <div id="zoneProposition">
        Entrez le mot : <span>Cachalot</span>
    </div>
</body>

//---

#zoneProposition span {
    font-weight: bold;
}
//Ce code signifie : “Il faut mettre la police d’écriture en gras pour tous les span contenus dans un élément qui a l’id zoneProposition.”

//OU

let baliseZonePropositionSpan = document.querySelector("#zoneProposition span");
console.log(baliseZonePropositionSpan);
//permet de trouver le premier élément qui correspond au sélecteur CSS proposé
```