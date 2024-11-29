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
  //Alles gross schreiben.
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
  //Zähle alle `e`s in einem Text.
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
  //Zähle alle Wörter in einem Text.
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
  //Schreibe eine Funktion, die testet, ob in einem Text mindestens ein Großbuchstaben vorkommt.
  let hasUpperCaseLetter = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const UpperCaseVersion = currentElement.toUpperCase()

    if (currentElement === ".") {
    } else if (currentElement === " ") {
    } else if (UpperCaseVersion === currentElement) {
      hasUpperCaseLetter = true
    }
  }
  return hasUpperCaseLetter
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

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

  // speichere die position von e
  let lastEPosition = -1
  // Suche die Position des letzten `e`s in einem Text
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      lastEPosition = i
    }
  }

  // Gebe die Position des letzten `e`s aus
  return lastEPosition
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

export function aufgabe11(args) {
  const input = args

  //Erstelle eie Variable um den ACII-Code zu speichern
  let asciiCode = null

  //Speichere den ASCII-Code vom ersten Zeichen
  asciiCode = input.charCodeAt(0)

  //Gib den ASCII-Code zurück
  return asciiCode
}
linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe15(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] // Aktuelles Zeichen aus `input`
    if (currentElement === " ") {
      // Wenn das aktuelle Zeichen ein Leerzeichen ist
      break // Beende die Schleife
    }
    result.push(currentElement) // Füge das aktuelle Zeichen zur `result`-Liste hinzu
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe18(args) {
  const input = args
  const result = []
  //Schreiben Sie folgende Ausgabe: Sie heissen `name` und sind `alter` Jahre alt, wobei 'name' und 'alter' durch Eingaben eingesetzt werden.
  result.push("Ich heisse Lilly und bin 17 Jahre alt")
  return result
}
linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

export function aufgabe19(args) {
  const input = args
  const result = []
  //Jedes Zeichen in der Eingabe soll verdoppelt werden.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement + currentElement)
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe21(args) {
  const input = args
  const result = []
  //Kehren Sie die Eingabe um.
  for (let i = input.length - 1; i >= 0; i--) {
    result.push(input[i])
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  const input = args
  const result = []
  //Es sollen alle Zeichen aus der Eingabe mit `_` ersetzt werden, bis zum ersten 'k'.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "k") {
      break
    }
    result.push("_")
  }
  return result
}
linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe23(args) {
  const input = args
  const result = []
  //Das erste Zeichen der Eingabe soll zusätzlich ganz vorne und ganz hinten an der Aufgabe angehängt werden.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }
  result.push(input[0])
  return result
}
linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe24(args) {
  const input = args
  const result = []
  //Das erste und das letzte Zeichen der Eingabe sollen vertauscht werden.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === 0) {
      result.push(input[input.length - 1])
    } else if (i === input.length - 1) {
      result.push(input[0])
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe06(args) {
  const input = args
  let hasSpecialCharacter = false

  // Ausdruck, der nach Sonderzeichen sucht definieren
  const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Prüfen, ob das Zeichen ein Sonderzeichen ist
    if (specialCharacterRegex.test(currentElement)) {
      hasSpecialCharacter = true
      break // Wir steigen aus der Schleife aus, sobald wir ein besonderes Zeichen finden.
    }
  }

  return hasSpecialCharacter
}

linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  const result = []
  //Schreibe eine Funktion, die testet, ob in einem Text das Wort 'und' vorkommt.
  for (let i = 0; i < input.length; i++) {
    // Schleife durchläuft jedes Zeichen des Strings `input`

    const currentElement = input[i]
    // Zeichen im String wird in `currentElement` gespeichert

    if (
      currentElement === "u" && // Prüft, ob das aktuelle Zeichen "u" ist
      input[i + 1] === "n" && // Prüft, ob das nächste Zeichen "n" ist
      input[i + 2] === "d" // Prüft, ob das übernächste Zeichen "d" ist
    ) {
      return true
    }
  }
  return false
}

linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  const input = args
  const result = []
  //Ersetze alle `e`s mit einer `3`.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      result.push("3")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe16(args) {
  const input = args
  const result = []

  //Lesen Sie die Eingabe bis zum Zeichen '$' als ersten Teil einer Liste ein, und den Rest als den zweiten Teil.

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "$") {
      return result
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe17(args) {
  const input = args
  const result = []
  //Lesen Sie die Eingabe als Liste ein, Einträge in der Liste werden von einem ',' getrennt.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ",") {
      return result
    } else {
      result.push(currentElement)
    }
  }
  return result
}
linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe20(args) {
  const input = args
  const result = []
  //Prüfen sie ob nach jedem '.' ein Leerschlag kommt.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ".") {
      if (input[i + 1] === " ") {
        return true
      }
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe27(args) {
  const input = args
  const result = []
  //Testen sie, ob eine Eingabe eine Zahl ist.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (
      currentElement === "0" ||
      currentElement === "1" ||
      currentElement === "2" ||
      currentElement === "3" ||
      currentElement === "4" ||
      currentElement === "5" ||
      currentElement === "6" ||
      currentElement === "7" ||
      currentElement === "8" ||
      currentElement === "9"
    ) {
      // Hier testet man auf alle Ziffern einzeln.
      return true
    }
  }
  return false
}
linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function aufgabe25(args) {
  const input = args
  const result = []
  //Das mittlere Zeichen der Eingabe soll gelöscht werden. Wenn die Anzahl Zeichen gerade ist, sollen die beiden mittleren Zeichen gelöscht werden.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === input.length / 2) {
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe25]", aufgabe25)

export function aufgabe26(args) {
  const input = args
  const result = []
  //Vergleichen Sie die ersten beiden Zeichen der Eingabe und vertauschen Sie diese so dass Sie alphanumerisch sortiert sind.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === input.length / 2) {
      return input.slice(0, i) + input.slice(i + 1)
    }
  }
  return input
}
linkupExerciseHandler("[data-click=aufgabe26]", aufgabe26)

export function aufgabe28(args) {
  const input = args
  const result = []
  //Testen Sie, ob in der Eingabe 2 Zahlen von einem Leerzeichen getrennt sind. Falls ja geben Sie die Summe der beiden Zahlen als Ausgabe aus; sonst Fehlermeldung.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      return input.slice(0, i) + input.slice(i + 1)
    }
  }
  return input
}
linkupExerciseHandler("[data-click=aufgabe28]", aufgabe28)

export function aufgabe12(args) {
  const input = args
  const result = []
  //Suche die Position des ersten `e`s in einem Text.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      return i
    }
  }
  return -1
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe10(args) {
  const input = args
  const result = []

  // Testet, ob eine Eingabe ein korrekter RGB-Hexcode ist
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "#") {
      // Überprüft, ob das aktuelle Element ein '#' ist
      return true // Gibt 'true' zurück, wenn ein '#' gefunden wird
    }
  }

  return false // Gibt 'false' zurück, wenn kein '#' gefunden wird
}

linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)
