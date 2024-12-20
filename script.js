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

  //Zähle alle `e`s in einem Text. (auch E's)
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      result.push(currentElement)
    }
  }
  return result.length
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

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

export function aufgabe11(args) {
  const input = args
  const result = []
  //Gib den ASCII code eines einzelnen Buchstabens an. Null zurückgeben, wenn mehr als ein Zeichen gegeben ist oder wenn keine Eingabe gegeben ist.

  if (input.length === 1) {
    return input.charCodeAt(0)
  } else {
    return null
  }
}
linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

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
    result.push(currentElement)
  }
  return result.join("")
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

export function aufgabe20(args) {
  const input = args
  const result = []
  //Prüfen Sie ob nach jedem . ein Leerschlag kommt.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ".") {
      if (input[i + 1] !== " ") {
        return false
      }
    }
  }
  return true
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe30(args) {
  const input = args
  const result = []
  //Ersetze alle ` ` mit einem `-`.  Das ist meine eigene Aufgabe. Ich habe die Aufgabe 08 als Grundlage genommen und meine eigenen Zeichen hinzugefügt.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      result.push("-")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe30]", aufgabe30)

export function aufgabe31(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] // Aktuelles Zeichen aus `input`
    if (currentElement === ".") {
      // Wenn das aktuelle Zeichen ein Punkt ist
      break // Schleife beenden
    }
    result.push(currentElement) // Füge das aktuelle Zeichen zur `result`-Liste hinzu
  }
  return result.join("")
}
// Das ist meine eigene Aufgabe. Ich habe die Aufgabe 15 als Grundlage genommen und mein eigenes Zeichen hinzugefügt.
linkupExerciseHandler("[data-click=aufgabe31]", aufgabe31)

export function aufgabe32(args) {
  const input = args
  const result = []
  //Jedes Zeichen in der Eingabe soll verdreifacht werden. Das ist meine eigene Aufgabe. Ich habe die Aufgabe 19 als Grundlage genommen und den Befehl von ''verdoppeln'' auf ''verdreifachen'' geändert.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement + currentElement + currentElement) // 3 mal currentElement, damit die Zeichen verdreifacht werden
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe32]", aufgabe32)

export function aufgabe05(args) {
  const input = args
  const result = []
  //Schreibe eine Funktion, die testet, ob in einem Text mindestens ein Grossbuchstabe vorkommt.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement >= "A" && currentElement <= "Z") {
      // Falls es einen Grossbuchdtstaben von A bis Z gibt
      return true // Gib true zurück
    }
  }
  return false
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe15(args) {
  const input = args
  const result = []
  // Lesen Sie die Eingabe nur bis zum ersten Leerzeichen ein. Sollte nach dem ersten ' ' abbrechen, Sollte '_' ganz normal lesen.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      return result.join("")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe10(args) {
  const input = args
  //Teste ob eine Eingabe ein korrekter RGB Hexcode ist.

  if (input[0] === "#" && input.length === 7) {
    return true
  } else {
    return false
  }
}

linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe14(args) {
  const input = args
  let thirdEPosition = -1
  //die zählen postition anfängt mit -1
  let count = 0
  //es zählt wie viele "e" in eine zeile gibt

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //Such das erste "e" im Text
    if (currentElement === "e") {
      count++
      //findet man ein "e" , wird der Count um 1 erhöht
    }
    if (count === 3) {
      //ist der count schon 3, sollte sich diese Position speichern und den Loop beenden.
      thirdEPosition = i
      break
    }
  }

  return thirdEPosition
  //Sagt die letzte position des "e" nach der Beendungs des Loops
}

linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe04(args) {
  const input = args

  const result = []

  //Eingabe filtern, damit nur Buchstaben und Leerzeichen übrig bleiben.

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    const ascii = currentElement.charCodeAt(0)

    if (ascii >= 65 && ascii <= 90) {
      //Grossbuchstabe

      result.push(currentElement)
    } else if (ascii >= 97 && ascii <= 122) {
      //Kleinbuchstabe

      result.push(currentElement)
    } else if (ascii === 32) {
      //Leerzeichen

      result.push(currentElement)
    }
  }

  //Mögliche Leerzeichen am Stück rausfiltern.

  const result2 = []

  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]

    const nextElement = result[i + 1]

    if (currentElement === " " && nextElement === " ") {
      //2 Leerzeichen nacheinander, das erste wird ignoriert.
    } else {
      result2.push(currentElement)
    }
  }

  //Leerzeichen zählen.

  let count = 0

  for (let i = 0; i < result2.length; i++) {
    const currentElement = result2[i]

    if (currentElement === " ") {
      count++
    }
  }

  //Es gibt ein Wort mehr als Leerzeichen --> Leerzeichen wird zurückgegeben.

  return count + 1
}

linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)
