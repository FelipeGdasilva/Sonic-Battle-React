import sonicImg from '../assets/images/sonic.png';
import sonicIcon from '../assets/icons/sonic-icon.png';
import sonicSnd from '../assets/sounds/sonic.mp3';
import tailsImg from '../assets/images/tails.png';
import tailsIcon from '../assets/icons/tails-icon.png';
import tailsSnd from '../assets/sounds/tails.mp3';
import knucklesImg from '../assets/images/knuckles.png';
import knucklesIcon from '../assets/icons/knuckles-icon.png';
import knucklesSnd from '../assets/sounds/knuckles.mp3';
import amyImg from '../assets/images/amy.png';
import amyIcon from '../assets/icons/amy-icon.png';
import amySnd from '../assets/sounds/amy.mp3';
import creamImg from '../assets/images/cream.png';
import creamIcon from '../assets/icons/cream-icon.png';
import creamSnd from '../assets/sounds/cream.mp3';
import shadowImg from '../assets/images/shadow.png';
import shadowIcon from '../assets/icons/shadow-icon.png';
import shadowSnd from '../assets/sounds/shadow.mp3';
import rougeImg from '../assets/images/rouge.png';
import rougeIcon from '../assets/icons/rouge-icon.png';
import rougeSnd from '../assets/sounds/rouge.mp3';
import eggmanImg from '../assets/images/eggman.png';
import eggmanIcon from '../assets/icons/eggman-icon.png';
import eggmanSnd from '../assets/sounds/eggman.mp3';
import superSonicImg from '../assets/images/supersonic.png';
import superSonicIcon from '../assets/icons/supersonic-icon.png';
import superSonicSnd from '../assets/sounds/supersonic.mp3';

export const personagens = [
  {
    id: 'sonic',
    nome: 'Sonic The Hedgehog',
    imagem: sonicImg,
    icone: sonicIcon,
    som: sonicSnd,
    corTema: '#0054FF',
    stats: [
    { label: 'Speed', value: 100 },
    { label: 'Agility', value: 80 }
  ]
  },
  {
    id: 'shadow',
    nome: 'Shadow The Hedgehog',
    imagem: shadowImg,
    icone: shadowIcon,
    som: shadowSnd,
    corTema: '#222222',
    stats: [
    { label: 'Speed', value: 90 },
    { label: 'Chaos Control', value: 100 }
  ]
  },
  {
    id: 'tails',
    nome: 'miles tails prower',
    imagem: tailsImg,
    icone:tailsIcon,
    som: tailsSnd,
    corTema: '#FFB000',
    stats: [
    { label: 'Speed', value: 80 },
    { label: 'Flight', value: 100 }
  ],
  },
  {
    id: 'knuckles',
    nome: 'Knuckles The Echidna',
    imagem: knucklesImg,
    icone: knucklesIcon,
    som: knucklesSnd,
    corTema: '#FF0000',
    stats: [
    { label: 'Strength', value: 100 },
    { label: 'Speed', value: 80 }
  ]
  },
  {
    id: 'supersonic',
    nome: 'Super Sonic',
    imagem: superSonicImg,
    icone: superSonicIcon,
    som: superSonicSnd,
    corTema: '#FFE600',
    stats: [
    { label: 'Speed', value: 100 },
    { label: 'Invincibility', value: 100 }
  ]
  },
  {
    id: 'amy',
    nome: 'amy rose',
    imagem: amyImg,
    icone: amyIcon,
    som: amySnd,
    corTema: '#FF66B2',
   stats: [
    { label: 'Speed', value: 70 },
    { label: 'Hammer Skill', value: 100 }
  ]
  },
  {
    id: 'eggman',
    nome: 'dr.eggman',
    imagem: eggmanImg,
    icone: eggmanIcon,
    som: eggmanSnd,
    corTema: '#FFD700',
   stats: [
    { label: 'Intelligence', value: 100 },
    { label: 'Technology', value: 95 }
  ]
  },
  {
    id: 'rouge',
    nome: 'rouege the bat',
    imagem: rougeImg,
    icone: rougeIcon,
    som: rougeSnd,
    corTema: '#A020F0',
    stats: [
    { label: 'Agility', value: 85 },
    { label: 'Stealth', value: 90 }
  ]
  },
  {
    id: 'creme',
    nome: 'Creme The Chao',
    imagem: creamImg,
    icone: creamIcon,
    som: creamSnd,
    corTema: '#F5DEB3',
    stats: [
    { label: 'Cuteness', value: 100 },
    { label: 'Friendliness', value: 95 }
  ]
  },

];