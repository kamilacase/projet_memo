var motifsCartes=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];
var etatsCartes=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
// var fondCoquin=[1,2,3,4,5,6,7,8,9,10];
var cartesRetournees=[];
var nbPairesTrouvees=0;
var imgCartes=document.getElementById("tapis").getElementsByTagName("img");
// var imgCoquin=document.getElementById('tapis');

window.onload = function randombg(){
    var random= Math.floor(Math.random() * 10) + 0;
    var fondCoquin = ["url('../css/bar1.gif')",
    "url('../css/bar2.gif')",
    "url('../css/bar3.gif')",
    "url('../css/bar4.gif')",
    "url('../css/bar5.gif')",
    "url('../css/bar6.gif')",
    "url('../css/bar7.gif')",
    "url('../css/bar8.gif')",
    "url('../css/bar9.gif')",
    "url('../css/bar10.gif')"
];
document.getElementById("tapis").style.backgroundImage=fondCoquin[random];
}

for(var i=0;i<imgCartes.length;i++){
	imgCartes[i].noCarte=i; //Ajout de la propriété noCarte à l'objet img
	imgCartes[i].onclick=function(){
		controleJeu(this.noCarte);
	}
}
initialiseJeu();


function majAffichage(noCarte){
	switch(etatsCartes[noCarte]){
		case 0:
			imgCartes[noCarte].src="../css/img/back.png";
			break;
		case 1:
			imgCartes[noCarte].src="../css/img/carte"+motifsCartes[noCarte]+".png";
			break;
		case -1:
			imgCartes[noCarte].style.visibility="hidden";
			break;
	}

}

function rejouer(){
	alert("Hé ben, gros cochon !");
	location.reload();
    // randombg();
    url:"Shake It Baby-SoundBible.com-763292018.mp3"
}

etatsCartes.addEventListener("click",function(){
    url:"Shake It Baby-SoundBible.com-763292018.mp3"
})
function initialiseJeu(){
	for(var position=motifsCartes.length-1; position>=1; position--){
		var hasard=Math.floor(Math.random()*(position+1));
		var sauve=motifsCartes[position];
		motifsCartes[position]=motifsCartes[hasard];
		motifsCartes[hasard]=sauve;
	}
}

function controleJeu(noCarte){
    if(cartesRetournees.length<2){
        if(etatsCartes[noCarte]==0){
			etatsCartes[noCarte]=1;
			cartesRetournees.push(noCarte);
			majAffichage(noCarte);
		}
        if(cartesRetournees.length==2){
        			var nouveauEtat=0;
        			if(motifsCartes[cartesRetournees[0]]==motifsCartes[cartesRetournees[1]]){
        				nouveauEtat=-1;
        				nbPairesTrouvees++;
        			}

        			etatsCartes[cartesRetournees[0]]=nouveauEtat;
        			etatsCartes[cartesRetournees[1]]=nouveauEtat;
                    setTimeout(function(){
                    				majAffichage(cartesRetournees[0]);
                    				majAffichage(cartesRetournees[1]);
                    				cartesRetournees=[];
                    				if(nbPairesTrouvees==10){
                    					rejouer();
                    				}
                    			},750);
                    		}
                    	}
                    }
