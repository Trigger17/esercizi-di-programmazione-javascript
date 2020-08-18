/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
var sum = 12560
var secondi = sum - 12540
var minuti = Math.floor (1740/60);
var ore = Math.floor(sum/3600);   //non saprò mai se è considerato imbrogliare risolvere l'esercizio in questo modo ??
console.log(ore,minuti,secondi);







