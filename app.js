const express = require('express')
const app = express()
const port = 3000
app.use('/static', express.static('public'))



app.get('/', (req, res) => {


    var data = [

        {rowid:1, product : "Glass", paymentTaken:"No", status:"Active" },
        {rowid:2, product : "Plate", paymentTaken:"No", status:"In Active" },
        {rowid:3, product : "Spoon", paymentTaken:"Yes", status:"In Active" },
        {rowid:4, product : "Mat", paymentTaken:"No", status:"In Active" },
        {rowid:5, product : "Plate", paymentTaken:"No", status:"In Active" },
        {rowid:6, product : "Spoon", paymentTaken:"Yes", status:"In Active" },
        {rowid:7, product : "Mat", paymentTaken:"No", status:"In Active" },
        {rowid:8, product : "Plate", paymentTaken:"No", status:"In Active" },
        {rowid:9, product : "Spoon", paymentTaken:"Yes", status:"In Active" }

    ]
  res.send(data);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})