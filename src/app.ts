
 

/*
const a: string = "Hello world"  // Déclarer une chaine de caractere
const n: number = 15 // déclarer un nombre
const b: boolean = true // déclarer un boolean
const d: null = null  // déclaration null
const date : DateString = 'string'
const arr :string[] = ['a','b','c',]  // déclarer un tableau avec des chaines de caracteres
const other : any[] = ['a', 3] // any est un peu la déclaration fourre tout
const user : { firstname: string, lastname?: string} = {firstname: "john", lastname: "3",} // le ? nous informe que le champs n'est pas obligatoire
const users : { firstname: string, [key:string]:string} = {firstname: "john", lastname: "3",} //  [key:string]:string}  on attends un objet avec une chaine de caractere en clef et des chaines de caractere en valeur
const date : Date = new Date();
const callback: (e: MouseEvent) => void = (e: MouseEvent) : number =>  {
return 3
}
function printID (id:number): void {
    console.log(id.toString());
}
function printID1 (id:number | string ): void {  //  le | permet de dire que ma function sera sois une chaine de caractere ou un number
    console.log(id.toString());
}
const compteur = document.querySelector('#compteur') as HTMLButtonElement  // as suivi du type permet d'indiquer que le compteur et de type button
*/


const compteur = document.getElementById("compteur")

let i =0; 
const increment = (e: Event) => {
    e.preventDefault();
    i++; 
const span = compteur?.querySelector("span") 
  if (span) {
    span.innerText = i.toString() 
  }
}
compteur?.addEventListener("click",increment);  // ?  n'utilise addEventListener que si compteur existe

function printID(id: string | number) {
  if (typeof id ==="number") {
      console.log((id*3).toString())
  } else {
      console.log(id.toUpperCase())
  }
}
function example ( a: string | boolean, b: string | number | boolean ) {
  if (a===b) {
    a     // Type scrit sait automatiquement que a sera un string ou boolean
  }
}

function isDate (a: any): a is Date {
  return a instanceof Date  // on defini que a est une date
}

function exampleB (a: Date | HTMLInputElement) {  // en precisant date et HTMLInpputelement il sait que a est une date car on la definit plus haut
 if (isDate(a)) {  
  a
 }
}


// type 

type User = {firstname: string, lastname: string} // allias pour User lastanem et firstname
const user :User = {firstname: "john", lastname: "doe"}

type DateString = string 
const date : DateString ='string'

type Id = string | number
type Username = User['firstname'] 
type Users = keyof User // keyof permet d'avoir accées a l'ensemble des clées

const utilisateur ={
  firstname: "John", 
  lastname: "Doe",
  age: 32
}
type User1 = typeof utilisateur  // va aller extraire le type qu'il cible 


// géneric

function identity<ArgTypes>(arg: ArgTypes): ArgTypes {    // Argtype nom géneric on le nomme comme on le veux
  return arg
}
const aa = identity<number>(3); // precise le type que l'on va recevoir ici number, TS comprends juste si l'on met 3

const cc = first (["aze", "bze", "cze"]);

const bb : Array<string | number> = ["aze", 1, "cze"]; // ici c'est un type géneric


function first <Type> (arg: Type[]): Type {   
return arg [0]
}

const compteurs = document.querySelector<HTMLButtonElement>('#compteur') // l'on defini que compteur sera un HtmlButtonElement


type Identity<Argtype> = (arg: Argtype) => Argtype  // ici c'est un Type Géneric

function consoleSize<Type extends {length :number}>(arg: Type) : Type {
  console.log(arg.length)
  return arg
}
const abb = consoleSize(["1", 2, 3])

// readonly permet de ne pas modifier une propriété  en entrée

function reverse <T> (arr: readonly T[]): T[] {
  return [...arr].reverse();    // permet de garder le tableau de base et d'en retournée un nouveau crée grace au spread opérateur
} 




// les classes en TypeScript

class A {
  private a = 3  // private ne peut etre accédé que a l'interieur de la classe
  log (){
    console.log(this.a)
  }
}

const aInstance = new A ();
console.log(aInstance)
