//Imprimir en consola los numeros impares del 1 al 50
console.log("Números impares del 1 al 50:");
for (let i = 1; i <= 50; i += 2) {
    console.log(i);
}

//nombres pokemons
const pokemons = [
    { id: 1, nombre: "Bulbasaur" },
    { id: 2, nombre: "Ivysaur" },
    { id: 3, nombre: "Venusaur" },
    { id: 4, nombre: "Charmander" },
    { id: 5, nombre: "Charmeleon" },
    { id: 6, nombre: "Charizard" },
    { id: 7, nombre: "Squirtle" },
    { id: 8, nombre: "Wartortle" },
    { id: 9, nombre: "Blastoise" },
    { id: 10, nombre: "Caterpie" },
    { id: 11, nombre: "Metapod" },
    { id: 12, nombre: "Butterfree" },
    { id: 13, nombre: "Weedle" },
    { id: 14, nombre: "Kakuna" },
    { id: 15, nombre: "Beedrill" },
    { id: 16, nombre: "Pidgey" },
    { id: 17, nombre: "Pidgeotto" },
    { id: 18, nombre: "Pidgeot" },
    { id: 19, nombre: "Rattata" },
    { id: 20, nombre: "Raticate" },
    { id: 21, nombre: "Spearow" },
    { id: 22, nombre: "Fearow" },
    { id: 23, nombre: "Ekans" },
    { id: 24, nombre: "Arbok" },
    { id: 25, nombre: "Pikachu" },
    { id: 26, nombre: "Raichu" },
    { id: 27, nombre: "Sandshrew" },
    { id: 28, nombre: "Sandslash" },
    { id: 29, nombre: "Nidoran♀" },
    { id: 30, nombre: "Nidorina" },
    { id: 31, nombre: "Nidoqueen" },
    { id: 32, nombre: "Nidoran♂" },
    { id: 33, nombre: "Nidorino" },
    { id: 34, nombre: "Nidoking" },
    { id: 35, nombre: "Clefairy" },
    { id: 36, nombre: "Clefable" },
    { id: 37, nombre: "Vulpix" },
    { id: 38, nombre: "Ninetales" },
    { id: 39, nombre: "Jigglypuff" },
    { id: 40, nombre: "Wigglytuff" },
    { id: 41, nombre: "Zubat" },
    { id: 42, nombre: "Golbat" },
    { id: 43, nombre: "Oddish" },
    { id: 44, nombre: "Gloom" },
    { id: 45, nombre: "Vileplume" },
    { id: 46, nombre: "Paras" },
    { id: 47, nombre: "Parasect" },
    { id: 48, nombre: "Venonat" },
    { id: 49, nombre: "Venomoth" },
    { id: 50, nombre: "Diglett" },
    { id: 51, nombre: "Dugtrio" },
    { id: 52, nombre: "Meowth" },
    { id: 53, nombre: "Persian" },
    { id: 54, nombre: "Psyduck" },
    { id: 55, nombre: "Golduck" },
    { id: 56, nombre: "Mankey" },
    { id: 57, nombre: "Primeape" },
    { id: 58, nombre: "Growlithe" },
    { id: 59, nombre: "Arcanine" },
    { id: 60, nombre: "Poliwag" },
    { id: 61, nombre: "Poliwhirl" },
    { id: 62, nombre: "Poliwrath" },
    { id: 63, nombre: "Abra" },
    { id: 64, nombre: "Kadabra" },
    { id: 65, nombre: "Alakazam" },
    { id: 66, nombre: "Machop" },
    { id: 67, nombre: "Machoke" },
    { id: 68, nombre: "Machamp" },
    { id: 69, nombre: "Bellsprout" },
    { id: 70, nombre: "Weepinbell" },
    { id: 71, nombre: "Victreebel" },
    { id: 72, nombre: "Tentacool" },
    { id: 73, nombre: "Tentacruel" },
    { id: 74, nombre: "Geodude" },
    { id: 75, nombre: "Graveler" },
    { id: 76, nombre: "Golem" },
    { id: 77, nombre: "Ponyta" },
    { id: 78, nombre: "Rapidash" },
    { id: 79, nombre: "Slowpoke" },
    { id: 80, nombre: "Slowbro" },
    { id: 81, nombre: "Magnemite" },
    { id: 82, nombre: "Magneton" },
    { id: 83, nombre: "Farfetch'd" },
    { id: 84, nombre: "Doduo" },
    { id: 85, nombre: "Dodrio" },
    { id: 86, nombre: "Seel" },
    { id: 87, nombre: "Dewgong" },
    { id: 88, nombre: "Grimer" },
    { id: 89, nombre: "Muk" },
    { id: 90, nombre: "Shellder" },
    { id: 91, nombre: "Cloyster" },
    { id: 92, nombre: "Gastly" },
    { id: 93, nombre: "Haunter" },
    { id: 94, nombre: "Gengar" },
    { id: 95, nombre: "Onix" },
    { id: 96, nombre: "Drowzee" },
    { id: 97, nombre: "Hypno" },
    { id: 98, nombre: "Krabby" },
    { id: 99, nombre: "Kingler" },
    { id: 100, nombre: "Voltorb" },
    { id: 101, nombre: "Electrode" },
    { id: 102, nombre: "Exeggcute" },
    { id: 103, nombre: "Exeggutor" },
    { id: 104, nombre: "Cubone" },
    { id: 105, nombre: "Marowak" },
    { id: 106, nombre: "Hitmonlee" },
    { id: 107, nombre: "Hitmonchan" },
    { id: 108, nombre: "Lickitung" },
    { id: 109, nombre: "Koffing" },
    { id: 110, nombre: "Weezing" },
    { id: 111, nombre: "Rhyhorn" },
    { id: 112, nombre: "Rhydon" },
    { id: 113, nombre: "Chansey" },
    { id: 114, nombre: "Tangela" },
    { id: 115, nombre: "Kangaskhan" },
    { id: 116, nombre: "Horsea" },
    { id: 117, nombre: "Seadra" },
    { id: 118, nombre: "Goldeen" },
    { id: 119, nombre: "Seaking" },
    { id: 120, nombre: "Staryu" },
    { id: 121, nombre: "Starmie" },
    { id: 122, nombre: "Mr. Mime" },
    { id: 123, nombre: "Scyther" },
    { id: 124, nombre: "Jynx" },
    { id: 125, nombre: "Electabuzz" },
    { id: 126, nombre: "Magmar" },
    { id: 127, nombre: "Pinsir" },
    { id: 128, nombre: "Tauros" },
    { id: 129, nombre: "Magikarp" },
    { id: 130, nombre: "Gyarados" },
    { id: 131, nombre: "Lapras" },
    { id: 132, nombre: "Ditto" },
    { id: 133, nombre: "Eevee" },
    { id: 134, nombre: "Vaporeon" },
    { id: 135, nombre: "Jolteon" },
    { id: 136, nombre: "Flareon" },
    { id: 137, nombre: "Porygon" },
    { id: 138, nombre: "Omanyte" },
    { id: 139, nombre: "Omastar" },
    { id: 140, nombre: "Kabuto" },
    { id: 141, nombre: "Kabutops" },
    { id: 142, nombre: "Aerodactyl" },
    { id: 143, nombre: "Snorlax" },
    { id: 144, nombre: "Articuno" },
    { id: 145, nombre: "Zapdos" },
    { id: 146, nombre: "Moltres" },
    { id: 147, nombre: "Dratini" },
    { id: 148, nombre: "Dragonair" },
    { id: 149, nombre: "Dragonite" },
    { id: 150, nombre: "Mewtwo" },
    { id: 151, nombre: "Mew" }
];

let numeroUsuario = parseInt(prompt("Ingrese un número:"));

console.log(`Pokémons cuyos números son múltiplos de 5 hasta ${numeroUsuario}:`);
for (let i = 1; i <= numeroUsuario; i++) {
    if (i % 5 == 0) {
        let pokemon = pokemons.find(pokemon => pokemon.id == i);
        if (pokemon) {
            console.log(pokemon.nombre);
        }
    }
}

//Recorrer el arreglo y mostrar solo los elementos que son tipo numero
const arreglo = [4, "dos", 8, "tres", 5, 9, 1, "cero"];
console.log("Elementos tipo número en el arreglo:");
for (let elemento of arreglo) {
    if (typeof elemento == "number") {
        console.log(elemento);
    }
}