
//exo 1: Favorite food

let favorite_food = 'rice';

let favorite_meal = 'lunch';

console.log(' I eat ' + favorite_food + ' at every ' + favorite_meal);

//exo2: series   Part I

//Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// 1. Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
let myWatchedSeriesLength = myWatchedSeries.length

//2.Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched

let myWatchedSeriesSentence = "black mirror, money heist, and the big bang theory";

//3.Console.log a sentence using both of the variables created above

console.log("I watch " + myWatchedSeriesLength + " series " + myWatchedSeriesSentence);

/*
//Part II

 1.Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
 2.Add, at the end of the array, the name of another series you watched.
 3.Add, at the beginning of the array, the name of your favorite series.
 4.Delete the series “black mirror”.
 5.Console.log the third letter of the series “money heist”.
 6.Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made. */

 //1
  myWatchedSeries.pop();

  myWatchedSeries.push("friend")

  //2
  myWatchedSeries.push("fast and furious");

  //3

  myWatchedSeries.unshift("bloodsport");

  //4
     myWatchedSeries.splice(1,1)

  //5

    myWatchedSeries[1].charAt(3);

  //6

  console.log(myWatchedSeries);

//Part III

// 1.Store a celsius temperature into a variable.

let temperatureenC = 26

//2 

let temperatureenF = (temperatureenC * 9/5) + 32

console.log( temperatureenC + " °C " + " is " + temperatureenF + " °F " )

//Part IV

1.

let c;
let a = 34;
let b = 21;

console.log(c) 
console.log(a+b) //first expression
//prediction:55

//actuelle :55

a = 2;

console.log(a+b) //second expression
// Prediction:23
// Actual:23

 let valeurC = undefined

//Analysez le code ci-dessous, quel sera le résultat ?
console.log(3 + 4 + '5');

//le resultat sera 75 car il y aura une concatenation

//part V

typeof(15)
// Prediction:nombre parceque 15 est un nombre
// Actual:number

typeof(5.5)
// Prediction:nombre parceque c'est un nombre
// Actual:number

typeof(NaN)
// Prediction: pas d'idee
// Actual:number

typeof("hello")
// Prediction: c4est une chaine de caractere car hello est un mot
// Actual:string

typeof(true)
// Prediction: booleen car true est une reponse booleenne
// Actual:boolean

typeof(1 != 2)
// Prediction: booleen parceque nous avons affaire a une condition
// Actual:boolean

"hamburger" + "s"
// Prediction: hamburgers parcequ'il y aura une concatenation entre les deux chaines 
// Actual:String

"hamburgers" - "s"
// Prediction: NaN impossible car on ne peut pas faire la soustration de deux chaines qu'on ne peut pas conertir
// Actual:Nan

"1" + "3"
// Prediction:13 parceque nous avons deux chaines et il y aura une concatenation des deux chaines
// Actual:13

"1" - "3"
// Prediction:-2 parceque javascript va voir le type au dela des chaines qu'on a et il s'agit de chine de deux nombres donc l'operateur (-) passe
// Actual: -2

"johnny" + 5
// Prediction:johnny5 parceque il y aura concatenation 
// Actual:johnny5

"johnny" - 5
// Prediction:NaN, impossible a cause de l'operateur (-)
// Actual:NaN

99 * "hello"
// Prediction:NaN, impossible de faire cette operation entre un nombre et une chaine de caractere
// Actual:NaN

1 != 1
// Prediction: False parceque c est le meme nombre
// Actual:False

1 == "1"
// Prediction: NaN parceque la premiere est un nombre et l autre string
// Actual:NaN

1 === "1"
// Prediction: False parceque les deux ne sont pas du meme type
// Actual:False


//Part VI

//What is the output of each of the expressions below?


5 + "34"
// Prediction:534 car il y aura une concatenation du string au nombre par l'operateur(+)
// Actual:534

5 - "4"
// Prediction:1 parceque le deux nombre sera convertir pour effectuer l'operation
// Actual:1

10 % 5
// Prediction:0 parceque l'operateur % nous rend le reste de l'operation
// Actual:0

5 % 10
// Prediction:5
// Actual:5

"Java" + "Script"
// Prediction:JavaScript parcequ' il y aura une conactenation
// Actual:JavaScript 

" " + " "
// Prediction:"  " parcequ' il y aura une concatenation
// Actual:"  "

" " + 0
// Prediction:" 0"
// Actual:"0"

true + true
// Prediction:true parceque nous avons deux booleen de meme valeur true avec l'operateur ou(+)
// Actual:2

true + false
// Prediction:false parceque nous avons deux booleen avec l'operateur ou(+)
// Actual:1

false + true
// Prediction:false parceque nous avons deux booleen avec l'operateur ou(+)
// Actual:1

false - true
// Prediction:NaN parcequ'on ne peut pas faire la soustration de deux booleen
// Actual:

!true
// Prediction:false parceque ! represente ce qui est negative
// Actual:false

3 - 4
// Prediction: -1 parceque c est une operation entre deux nombres
// Actual:-1

"Bob" - "bill"
// Prediction:NaN car impossible de faire operation - de deux chaines de caracteres.
// Actual:

