function showOverlay(planet) {
    const planetInfo = {
        merkur: {
          title: "Merkur",
          text: "Merkur er den mindste planet i solsystemet og den nærmeste på solen. På trods af sin størrelse har den en massiv jernkerne, som fylder en stor del af planetens indre. Temperaturen på Merkur varierer ekstremt – fra omkring -180 °C om natten til 430 °C i dagslys, da den næsten ikke har nogen atmosfære til at holde på varmen. Merkur har ingen måner og roterer langsomt, så et døgn varer næsten 59 jorddage.",
          img: "img/merkur.png"
        },
        venus: {
          title: "Venus",
          text: "Venus er den næstnærmeste planet til solen og næsten lige så stor som Jorden. Den har en tæt atmosfære, primært bestående af kuldioxid, hvilket skaber en kraftig drivhuseffekt. Dette gør Venus til den varmeste planet i solsystemet med overfladetemperaturer på op til 470 °C. Venus roterer langsomt og baglæns i forhold til de fleste andre planeter – en dag på Venus er længere end et år! Planeten er dækket af skyer af svovlsyre og har en vulkansk overflade.",
          img: "img/venus.png"
        },
        jorden: {
          title: "Jorden",
          text: "Jorden er vores hjem og den eneste planet, hvor vi ved, der findes liv. Den har en perfekt afstand til solen, hvilket skaber gunstige temperaturer og mulighed for flydende vand. Jorden har en atmosfære rig på kvælstof og ilt, og dens magnetfelt beskytter os mod solens skadelige stråling. Jordens måne har en vigtig rolle i tidevand og stabilisering af planetens rotation. Planetens overflade er dækket af 70% vand og et varieret økosystem med millioner af arter.",
          img: "img/jorden.png"
        },
        mars: {
          title: "Mars",
          text: "Mars, kendt som den røde planet, har en støvet og jernholdig overflade, som giver den sin karakteristiske farve. Planeten har tynd atmosfære og meget kolde temperaturer. Den har de højeste bjerge og dybeste kløfter i solsystemet, herunder Olympus Mons – det højeste bjerg, og Valles Marineris – en gigantisk dal. Mars har to små måner, Phobos og Deimos, og er centrum for mange rumforskningsmissioner, da den potentielt kan have haft liv i fortiden.",
          img: "img/mars.png"
        },
        jupiter: {
          title: "Jupiter",
          text: "Jupiter er den største planet i solsystemet og en gasgigant med mere end dobbelt så meget masse som alle de andre planeter tilsammen. Den består hovedsageligt af hydrogen og helium. Jupiter er kendt for Den Store Røde Plet – en enorm storm, der har raset i hundreder af år. Den har mindst 79 måner, hvoraf de største – Io, Europa, Ganymedes og Callisto – er næsten egne verdener. Jupiters stærke magnetfelt og hurtige rotation gør den til et fascinerende objekt i astronomien.",
          img: "img/jupiter.png"
        }
      };
      
  
    const p = planetInfo[planet];
    document.getElementById("planetTitle").textContent = p.title;
    document.getElementById("planetTextLeft").textContent = p.text;
    document.getElementById("planetTextRight").textContent = p.text;
    document.getElementById("planetImage").src = p.img;
    document.getElementById("planetOverlay").style.display = "flex";
  }
  
  function closeOverlay() {
    document.getElementById("planetOverlay").style.display = "none";
  }
  
  // Tilføj onclick til hvert planet-div
  document.getElementById("merkur").onclick = () => showOverlay("merkur");
  document.getElementById("venus").onclick = () => showOverlay("venus");
  document.getElementById("jorden").onclick = () => showOverlay("jorden");
  document.getElementById("mars").onclick = () => showOverlay("mars");
  document.getElementById("jupiter").onclick = () => showOverlay("jupiter");
  