/*https://www.youtube.com/watch?v=AfWkgKXUiwk lien du tutoriel*/
/* la const data contient le tableau qui associe un 'string' a l'url d'un son audio*/
const data = {
    '9': {sound: 'media/sounds/drum1.mp3'},
    '8': {sound: 'media/sounds/drum2.mp3'},
    '7': {sound: 'media/sounds/beat1.mp3'},
    '6': {sound: 'media/sounds/beat2.mp3'},
    '5': {sound: 'media/sounds/beat3.mp3'},
    '4': {sound: 'media/sounds/lindrum.mp3'},
    '3': {sound: 'media/sounds/percu1.mp3'},
    '2': {sound: 'media/sounds/electro1.mp3'},
    '1': {sound: 'media/sounds/electro2.mp3'},
  };

/* Constructeur du drumPad */
function construct(){
    for(const letter in data){ // On récupère chaque lettre du tableau data
        const keyDiv = document.createElement('div');//créer une div dans la constante 'keydiv'
        keyDiv.id = "s" + letter;//Ajoute une id unique a chaque div
        keyDiv.classList.add('drum');//Ajouter une classe drum a la div généré par 'keydiv'
        
        let h2 = document.createElement('h2');//Créer le H2
        h2.textContent = letter;// On définis la variable letter comme etant le contenu de chaque element h2

        keyDiv.appendChild(h2);// On définis le h2 créée comme étant un enfant de keydiv     
        document.getElementById('musicBox').appendChild(keyDiv);//On récupere #musicBox pour le définir comme étant le parent keydiv.

        /* Au clique on joue le son */ 
        keyDiv.addEventListener('click', function(event) { //On active l'evenement clique de souris
            let letter = event.currentTarget.querySelector('h2').textContent; //Selectionne le H2 cliquer par l'evenement
            playDrum(letter);//Joue la lettre qui a été cliquer. 
        })
    }
  }


  /* Fonction qui joue le son */ 
  function playDrum(letter){
      const audio = new Audio() // on fait un objet audio
      audio.src = data[letter].sound; //On extrait le son de la lettre presser au clavier ou cliquer a la souris
      audio.play(); // On joue le son extrait 
  };

  construct();

  //ON PRESS
  window.addEventListener('keydown', handleKeyEvents);//Récupere evenement 

  function handleKeyEvents(event){
      playDrum(event.key.toUpperCase());
  }

  /* Todo Animation sur le clavier*/

  document.body.addEventListener("keydown",(e)=>
{
  console.log(e.code);
  
  if (e.code == "Numpad1")
  s1.classList.add("down");
    
  if (e.code == "Numpad2")
  s2.classList.add("down");
  
  if (e.code == "Numpad3")
  s3.classList.add("down");
  
  if (e.code == "Numpad4")
  s4.classList.add("down");
    
  if (e.code == "Numpad5")
  s5.classList.add("down");
  
  if (e.code == "Numpad6")
  s6.classList.add("down");

  if (e.code == "Numpad7")
  s7.classList.add("down");
  
  if (e.code == "Numpad8")
  s8.classList.add("down");

  if (e.code == "Numpad9")
  s9.classList.add("down");
});

document.body.addEventListener("keyup",(e)=>
{
  console.log(e.code);
   if (e.code == "Numpad1")
    s1.classList.remove("down");
    
   if (e.code == "Numpad2")
    s2.classList.remove("down");
  
   if (e.code == "Numpad3")
    s3.classList.remove("down");
    
   if (e.code == "Numpad4")
    s4.classList.remove("down");
    
   if (e.code == "Numpad5")
    s5.classList.remove("down");
  
 if (e.code == "Numpad6")
    s6.classList.remove("down");

if (e.code == "Numpad7")
    s7.classList.remove("down");

 if (e.code == "Numpad8")
    s8.classList.remove("down");

 if (e.code == "Numpad9")
    s9.classList.remove("down");
});