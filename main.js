//TODO add imports if needed
//TODO doc

import { count } from "console";

/**
 * The main function which calls the application. 
 * Funkce main má za úkol nahodně vytvořit daný počet osob s náhodným jménem, příjmením, datem narození a pracovním úvazkem.
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} of employees
 */

export function main(dtoIn) {
let dtoOut =[];//deklarace proměnné dtoOut která se stane později výstupem funkce 
const femaleNames = [// konstanta pro pole s ženskými jmény
  "Anna","Marie","Eliška","Adéla","Tereza",
];
const femaleSurnames = [// konstanta pro pole s ženskými příjmeními
  "Nováková", "Svobodová", "Dvořáková", "Horáková", "Pokorná",
];
const maleNames = [// konstanta pro pole s mužskými jmény
  "Jan","Petr","Jiří","Tomáš","Lukáš",
];
const maleSurnames = [// konstanta pro pole s mužskými příjmeními
  "Novák", "Svoboda", "Dvořák", "Horák", "Pokorný",
];
const Workload=[// konstanta pro pole s 4 zadanými pracovními úvazky  
    10,20,30,40
];
function getRandomBirthday(minAge, maxAge) {//funkce pro datum narození
    const now = new Date();

    // nejstarší povolené datum 
    const oldest = new Date(now);
    oldest.setFullYear(oldest.getFullYear() - maxAge);

    // nejmladší povolené datum 
    const youngest = new Date(now);
    youngest.setFullYear(youngest.getFullYear() - minAge);

    // vybrání náhodné milisekundy v intervalu 
    const randomTime = oldest.getTime() + Math.random() * (youngest.getTime() - oldest.getTime());

    return new Date(randomTime).toISOString(); // převedení na správný ISO formát
};
function randomsex() {// funkce pro vybrání nahdoně mezi pohlavým 
    return Math.random() < 0.5 ? "male" : "female";
}
function getRandomFromNames(names) {//vybrání náhodného jména ze seznamu jmen
    return names[Math.floor(Math.random() * names.length)];// vybírá se náhodně podle počtu jmen v seznamu
};
function chooseName(sex){//zde zjistíme pohlavý osoby a přiřadíme jí jméno
    if (sex==="male"){
        return getRandomFromNames(maleNames);
    }
    if (sex==="female"){
        return getRandomFromNames(femaleNames);
    }
};
function getRandomFromSurnames(surnames) {// vybírá se náhodně podle počtu příjmení v seznamu
    return surnames[Math.floor(Math.random() * surnames.length)];
};
function chooseSurname(sex){//zde znovu zjistíme pohlavý osoby a přiřadíme jí příjmení
    if (sex==="male"){
        return getRandomFromSurnames(maleSurnames);

    }
    if (sex==="female"){
        return getRandomFromSurnames(femaleSurnames);
    }
};
function getRandomWorkload() {//funkce pro nahodný výběr mezi pracovními úvazky
    return Workload[Math.floor(Math.random() * Workload.length)];
};

    for ( let i=0; i < dtoIn.count; i++) {// cyklus for který se řídí podle zadaného počtu osob v dtoIn
        let sex = randomsex()// deklarace proměnné "sex" pro její využití v příštích krocích 
        let person = {// deklarace objektu pro vytvoření daných osob 
            gender: sex, // pohlavý
            birthdate: getRandomBirthday(dtoIn.age.min,dtoIn.age.max),//datum narození s intervaly zadanými v dtoIn
            name: chooseName(sex),// náhodné jméno přiřazené podle pohlavý
            surname: chooseSurname(sex),//náhodné příjmení přiřazené podle pohlavý
            workload: getRandomWorkload()//nahodné přiřazení pracovní úvazek 
        };
        dtoOut.push(person);//uložení osoby do dtoOut
}
return dtoOut;// výsledný výsledek funkce 
}