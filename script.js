//Les variables dont on na bessoins
var sp, bt_start, bt_stop, t, ms, s, mn, h ; 
//Les fonctions pour intialiser les variables quand la page se charge
window.onload = function(){
    sp = document.getElementsByTagName('span');
    bt_start = document.getElementById('start');
    bt_stop = document.getElementById('stop');
    t;
    ms = 0, s=0, mn=0, h=0;
}
//Metre en place le compteur
function update_chrono(){
    ms+=1;
    if(ms == 10){
        ms=1;
        s+=1
    }
    if(s==60){
        s=0;
        mn+=1
    }
    if(mn==60){
        m= 0;
        h+=1;
    }
    //Inser des valeurs dans les span
    //[0]permet de selectioner le premier span
    //[1] le deuxieme...
    sp[0].innerHTML = h + 'h';
    sp[1].innerHTML = mn + 'min';
    sp[2].innerHTML = s + 's';
    sp[3].innerHTML = ms + 'ms';

}
//Metre en place la fonction du bouton start
function start(){
    t =setInterval(update_chrono,100);
    bt_start.disabled = true
    
}
//Stoper le chronometre
function stop(){
    clearInterval(t); //Suppression de l'intervall t
    bt_start.disabled = false ;
}
//Initialisre les valeurs du compteurs
function reset(){
    clearInterval(t);
    bt_start.disabled = false ;
    ms = 0, s = 0, mn = 0, h = 0;
    //Les nouvelles valeurs
    sp[0].innerHTML = h + 'h';
    sp[1].innerHTML = mn + 'min';
    sp[2].innerHTML = s + 's';
    sp[3].innerHTML = ms + 'ms';

}