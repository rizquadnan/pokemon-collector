import { PokemonMove, PokemonType } from "./PokemonDetailPage";

const heroImageSrc =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png";
const pokemonName = "Charmander";

const pokemonMoves: PokemonMove[] = [
  {
    pokemon_v2_move: {
      name: "mega-punch",
    },
    move_id: 5,
  },
  {
    pokemon_v2_move: {
      name: "fire-punch",
    },
    move_id: 7,
  },
  {
    pokemon_v2_move: {
      name: "thunder-punch",
    },
    move_id: 9,
  },
  {
    pokemon_v2_move: {
      name: "scratch",
    },
    move_id: 10,
  },
  {
    pokemon_v2_move: {
      name: "swords-dance",
    },
    move_id: 14,
  },
  {
    pokemon_v2_move: {
      name: "cut",
    },
    move_id: 15,
  },
  {
    pokemon_v2_move: {
      name: "wing-attack",
    },
    move_id: 17,
  },
  {
    pokemon_v2_move: {
      name: "mega-kick",
    },
    move_id: 25,
  },
  {
    pokemon_v2_move: {
      name: "headbutt",
    },
    move_id: 29,
  },
  {
    pokemon_v2_move: {
      name: "body-slam",
    },
    move_id: 34,
  },
  {
    pokemon_v2_move: {
      name: "take-down",
    },
    move_id: 36,
  },
  {
    pokemon_v2_move: {
      name: "double-edge",
    },
    move_id: 38,
  },
  {
    pokemon_v2_move: {
      name: "leer",
    },
    move_id: 43,
  },
  {
    pokemon_v2_move: {
      name: "bite",
    },
    move_id: 44,
  },
  {
    pokemon_v2_move: {
      name: "growl",
    },
    move_id: 45,
  },
  {
    pokemon_v2_move: {
      name: "ember",
    },
    move_id: 52,
  },
  {
    pokemon_v2_move: {
      name: "flamethrower",
    },
    move_id: 53,
  },
  {
    pokemon_v2_move: {
      name: "submission",
    },
    move_id: 66,
  },
  {
    pokemon_v2_move: {
      name: "counter",
    },
    move_id: 68,
  },
  {
    pokemon_v2_move: {
      name: "seismic-toss",
    },
    move_id: 69,
  },
  {
    pokemon_v2_move: {
      name: "strength",
    },
    move_id: 70,
  },
  {
    pokemon_v2_move: {
      name: "dragon-rage",
    },
    move_id: 82,
  },
  {
    pokemon_v2_move: {
      name: "fire-spin",
    },
    move_id: 83,
  },
  {
    pokemon_v2_move: {
      name: "dig",
    },
    move_id: 91,
  },
  {
    pokemon_v2_move: {
      name: "toxic",
    },
    move_id: 92,
  },
  {
    pokemon_v2_move: {
      name: "rage",
    },
    move_id: 99,
  },
  {
    pokemon_v2_move: {
      name: "mimic",
    },
    move_id: 102,
  },
  {
    pokemon_v2_move: {
      name: "double-team",
    },
    move_id: 104,
  },
  {
    pokemon_v2_move: {
      name: "smokescreen",
    },
    move_id: 108,
  },
  {
    pokemon_v2_move: {
      name: "defense-curl",
    },
    move_id: 111,
  },
  {
    pokemon_v2_move: {
      name: "reflect",
    },
    move_id: 115,
  },
  {
    pokemon_v2_move: {
      name: "bide",
    },
    move_id: 117,
  },
  {
    pokemon_v2_move: {
      name: "fire-blast",
    },
    move_id: 126,
  },
  {
    pokemon_v2_move: {
      name: "swift",
    },
    move_id: 129,
  },
  {
    pokemon_v2_move: {
      name: "skull-bash",
    },
    move_id: 130,
  },
  {
    pokemon_v2_move: {
      name: "fury-swipes",
    },
    move_id: 154,
  },
  {
    pokemon_v2_move: {
      name: "rest",
    },
    move_id: 156,
  },
  {
    pokemon_v2_move: {
      name: "rock-slide",
    },
    move_id: 157,
  },
  {
    pokemon_v2_move: {
      name: "slash",
    },
    move_id: 163,
  },
  {
    pokemon_v2_move: {
      name: "substitute",
    },
    move_id: 164,
  },
  {
    pokemon_v2_move: {
      name: "snore",
    },
    move_id: 173,
  },
  {
    pokemon_v2_move: {
      name: "curse",
    },
    move_id: 174,
  },
  {
    pokemon_v2_move: {
      name: "protect",
    },
    move_id: 182,
  },
  {
    pokemon_v2_move: {
      name: "scary-face",
    },
    move_id: 184,
  },
  {
    pokemon_v2_move: {
      name: "belly-drum",
    },
    move_id: 187,
  },
  {
    pokemon_v2_move: {
      name: "mud-slap",
    },
    move_id: 189,
  },
  {
    pokemon_v2_move: {
      name: "outrage",
    },
    move_id: 200,
  },
  {
    pokemon_v2_move: {
      name: "endure",
    },
    move_id: 203,
  },
  {
    pokemon_v2_move: {
      name: "false-swipe",
    },
    move_id: 206,
  },
  {
    pokemon_v2_move: {
      name: "swagger",
    },
    move_id: 207,
  },
  {
    pokemon_v2_move: {
      name: "fury-cutter",
    },
    move_id: 210,
  },
  {
    pokemon_v2_move: {
      name: "attract",
    },
    move_id: 213,
  },
  {
    pokemon_v2_move: {
      name: "sleep-talk",
    },
    move_id: 214,
  },
  {
    pokemon_v2_move: {
      name: "return",
    },
    move_id: 216,
  },
  {
    pokemon_v2_move: {
      name: "frustration",
    },
    move_id: 218,
  },
  {
    pokemon_v2_move: {
      name: "dynamic-punch",
    },
    move_id: 223,
  },
  {
    pokemon_v2_move: {
      name: "dragon-breath",
    },
    move_id: 225,
  },
  {
    pokemon_v2_move: {
      name: "iron-tail",
    },
    move_id: 231,
  },
  {
    pokemon_v2_move: {
      name: "metal-claw",
    },
    move_id: 232,
  },
  {
    pokemon_v2_move: {
      name: "hidden-power",
    },
    move_id: 237,
  },
  {
    pokemon_v2_move: {
      name: "sunny-day",
    },
    move_id: 241,
  },
  {
    pokemon_v2_move: {
      name: "crunch",
    },
    move_id: 242,
  },
  {
    pokemon_v2_move: {
      name: "ancient-power",
    },
    move_id: 246,
  },
  {
    pokemon_v2_move: {
      name: "rock-smash",
    },
    move_id: 249,
  },
  {
    pokemon_v2_move: {
      name: "beat-up",
    },
    move_id: 251,
  },
  {
    pokemon_v2_move: {
      name: "heat-wave",
    },
    move_id: 257,
  },
  {
    pokemon_v2_move: {
      name: "will-o-wisp",
    },
    move_id: 261,
  },
  {
    pokemon_v2_move: {
      name: "facade",
    },
    move_id: 263,
  },
  {
    pokemon_v2_move: {
      name: "focus-punch",
    },
    move_id: 264,
  },
  {
    pokemon_v2_move: {
      name: "helping-hand",
    },
    move_id: 270,
  },
  {
    pokemon_v2_move: {
      name: "brick-break",
    },
    move_id: 280,
  },
  {
    pokemon_v2_move: {
      name: "secret-power",
    },
    move_id: 290,
  },
  {
    pokemon_v2_move: {
      name: "weather-ball",
    },
    move_id: 311,
  },
  {
    pokemon_v2_move: {
      name: "air-cutter",
    },
    move_id: 314,
  },
  {
    pokemon_v2_move: {
      name: "overheat",
    },
    move_id: 315,
  },
  {
    pokemon_v2_move: {
      name: "rock-tomb",
    },
    move_id: 317,
  },
  {
    pokemon_v2_move: {
      name: "aerial-ace",
    },
    move_id: 332,
  },
  {
    pokemon_v2_move: {
      name: "dragon-claw",
    },
    move_id: 337,
  },
  {
    pokemon_v2_move: {
      name: "dragon-dance",
    },
    move_id: 349,
  },
  {
    pokemon_v2_move: {
      name: "natural-gift",
    },
    move_id: 363,
  },
  {
    pokemon_v2_move: {
      name: "fling",
    },
    move_id: 374,
  },
  {
    pokemon_v2_move: {
      name: "flare-blitz",
    },
    move_id: 394,
  },
  {
    pokemon_v2_move: {
      name: "dragon-pulse",
    },
    move_id: 406,
  },
  {
    pokemon_v2_move: {
      name: "dragon-rush",
    },
    move_id: 407,
  },
  {
    pokemon_v2_move: {
      name: "shadow-claw",
    },
    move_id: 421,
  },
  {
    pokemon_v2_move: {
      name: "fire-fang",
    },
    move_id: 424,
  },
  {
    pokemon_v2_move: {
      name: "captivate",
    },
    move_id: 445,
  },
  {
    pokemon_v2_move: {
      name: "hone-claws",
    },
    move_id: 468,
  },
  {
    pokemon_v2_move: {
      name: "flame-burst",
    },
    move_id: 481,
  },
  {
    pokemon_v2_move: {
      name: "flame-charge",
    },
    move_id: 488,
  },
  {
    pokemon_v2_move: {
      name: "round",
    },
    move_id: 496,
  },
  {
    pokemon_v2_move: {
      name: "echoed-voice",
    },
    move_id: 497,
  },
  {
    pokemon_v2_move: {
      name: "incinerate",
    },
    move_id: 510,
  },
  {
    pokemon_v2_move: {
      name: "acrobatics",
    },
    move_id: 512,
  },
  {
    pokemon_v2_move: {
      name: "inferno",
    },
    move_id: 517,
  },
  {
    pokemon_v2_move: {
      name: "fire-pledge",
    },
    move_id: 519,
  },
  {
    pokemon_v2_move: {
      name: "dragon-tail",
    },
    move_id: 525,
  },
  {
    pokemon_v2_move: {
      name: "work-up",
    },
    move_id: 526,
  },
  {
    pokemon_v2_move: {
      name: "confide",
    },
    move_id: 590,
  },
  {
    pokemon_v2_move: {
      name: "power-up-punch",
    },
    move_id: 612,
  },
].map((move) => ({
  id: move.move_id,
  name: move.pokemon_v2_move.name,
}));

const pokemonTypes: PokemonType[] = [
  {
    pokemon_v2_type: {
      name: "fire",
    },
    id: 7,
  },
].map((type) => ({
  id: type.id,
  name: type.pokemon_v2_type.name,
}));

export { heroImageSrc, pokemonName, pokemonMoves, pokemonTypes };
