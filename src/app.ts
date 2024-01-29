type User = {firstname: string, lastname: string} // allias pour User lastanem et firstname
type DateString = string 
type Id = string | number

function identity<ArgTypes>(arg: ArgTypes): ArgTypes {    // Argtype nom géneric
  return arg
}
const aa = identity<number>(3);

function first <Type> (arg: Type[]): Type {
return arg [0]
}

const cc = first (["aze", "bze", "cze"])
 

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
    a
  }
}

function exampleB (a: MouseEvent | HTMLInputElement) {
 if (isDate(a)) {
  a
 }
}

function isDate (a: any): a is Date {
  return a instanceof Date
}
