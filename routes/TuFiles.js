let person1 = { name: 'John' };
let person2 = person1; // Die Referenz auf das Objekt wird in die Variable person2 geschrieben, aber sie steht auch weiterhin in
// der Variablen person1

person2.name = 'Jane';  // Die name-Property des Objekts, das mit person2 referenziert wird, erhält den neuen Wert 'Jane', der den
// alten Wert 'John' überschreibt.

console.log(person1); // Outputs: { name: 'Jane' }
console.log(person2); // Outputs: { name: 'Jane' }

// Changing person2 does affect person1, as they reference the same object.
