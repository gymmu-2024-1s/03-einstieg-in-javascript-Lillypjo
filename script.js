import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]

    if (currentElement === "e") {
      // do nothing
    } else if (currentElement === "E") {
    }
    // auch E ignorieren
    else {
      result.push(currentElement)
    }

    // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const uppercaseletter = currentElement.toUpperCase()

    result.push(uppercaseletter)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      // zähle
      count = count + 1
    } else if (currentElement === "E") {
      // zähle
      count = count + 1
    } else {
      // nicht zählen
    }
  }
  return count
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      // zähle
      count = count + 1
    }
  }
  return count + 1 // weil ein wort mehr wie Leerzeichen
}
linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  const input = args
  const result = []

  let hasUpperCaseLetter = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    const toUpperCaseVersion = currentElement.toUpperCase()
    if (currentElement === " ") {
    } else if (toUpperCaseVersion === currentElement) {
      hasUpperCaseLetter = true
    }
  }
  return hasUpperCaseLetter
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe012(args) {
  const input = args
  const result = []
  // Erstelle eine Variable um die Position des ersten e's zu speichern
  let firstEPosition = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Wenn du ein e findest, speichere die Position
    if (currentElement === "e") {
      firstEPosition = i
      break // Schleife abbrechen, da das erste "e" gefunden wurde
    }
  }

  // Gebe die Position des ersten e's aus
  return firstEPosition
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe012)

export function aufgabe09(args) {
  const input = args
  const result = []

  // teste ob einne eingabe genau 6 zeichen lang ist
  if (input.length === 6) {
    return true
  } else {
    return false
  }
}
linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe13(args) {
  const input = args
  const result = []
  // Suche die Position des letzten `e`s in einem Text
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      return i
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  const result = []
  // Suche die Position des dritten `e`s in einem Text
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      return i
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)
