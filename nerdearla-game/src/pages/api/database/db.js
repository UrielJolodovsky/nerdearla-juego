//const sqlite3 = require('sqlite3').verbose()
import sqlite3 from 'sqlite3'
sqlite3.verbose()

export const db = new sqlite3.Database('../../../server/database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Connected to database')
    }
  })