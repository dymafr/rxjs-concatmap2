screenLog.init(); // affiche le log de la console
// Cliquez sur la flèche de rafraichissement dans la fenêtre de droite, juste à gauche de l'url pour relancer.

import { of, interval } from "rxjs";
import { concatMap, map, take } from "rxjs/operators";

const source = of("A", "B", "C");
const exemple = source.pipe(
  concatMap(val =>
    interval(500).pipe(
      take(3),
      map((i: number) => val + i)
    )
  )
);
const subscribe = exemple.subscribe(val => console.log(val));

setTimeout(() => subscribe.unsubscribe(), 8000);
