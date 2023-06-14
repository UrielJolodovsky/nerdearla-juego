import { db } from "../database/db.js"



function between(min, max) {
    return Math.floor(
       Math.random() * (max - min) + min
     )
   }

export const GetChallenges = async (req, res) => {
    console.log("Entró")
    numeros1 = []
    numeros2 = []
    console.log("Tenemos los arrays")
    var stmt = db.prepare("INSERT INTO challenge VALUES (?,?)");
    for (var i = 0; i < 10; i++) {
        var j = between(1,24)
        while (numeros1.includes(j)) {
            j = between(1,24)
        }

        numeros1.push(j)
        var k = between(1,24)

        while (numeros2.includes(k)) {
            k = between(1,24)
        }
        numeros2.push(k)

        stmt.run(numeros1[i], numeros2[i]);
        console.log("Fila insertada")
    }

    stmt.finalize();

    console.log("Llegó");

    db.all('SELECT * FROM challenge', (err, rows) => {
        if(err) {
            return res.json({message: 'Error'})
        }
        if(rows.length > 0) {
            return res.json(rows)
        } else {
            return res.json({message: 'No hay challenges'})
        }
    })
}