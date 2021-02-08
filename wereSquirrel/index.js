//Weresquirrel example code
const JOURNAL = require('./journal.js');



let journal = [];
function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

console.log(JOURNAL.length);
console.log(JOURNAL[1]);

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}




//Textbook loop to go through an arrray
for(let index = 0; index < JOURNAL.length; index++) {
  //If the JOURNAL array has a day with squirrel and pizza, log it out
  if(JOURNAL[index].squirrel && JOURNAL[index].pizza) {
    console.log(`day, index`);
  } 
}



function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    const entry = journal[i]
    let index = 0;


    if (!entry.events.includes(event) && !entry.squirrel) table[0] += 1;
    else if (entry.events.includes(event) && !entry.squirrel) table[1] += 1;
    else if (!entry.events.includes(event) && entry.squirrel) table[2] += 1;
    else if (entry.events.includes(event) && entry.squirrel) table[3] += 1;
  }
  return table;
}

//This function compiles all the events in an array and returns an array with all of them
function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

console.log(journalEvents(JOURNAL));


  //  for (let event of journalEvents(JOURNAL)) {
   //   let correlation = phi(tableFor(event, JOURNAL));
   //   if (correlation > 0.1 || correlation < -0.1) {
  //      console.log(event + ":", correlation);
  //    }
  //  }

for (let entry of JOURNAL) {
  if (entry.events.includes("peanuts") &&
     !entry.events.includes("brushed teeth")) {
    entry.events.push("peanut teeth");
  }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));
// → 1

//console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]
