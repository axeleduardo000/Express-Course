const express= require('express');
const app=express();
app.get('/usuario', (req,res) =>{
    res.json({
        username: 'Axel',
        lastname: 'santos'
    });
});
app.post('/about', (req,res) =>{
    res.send('Peticion anexada');
});
app.put('/contact', (req,res) =>{
    res.send('Peticion actualizada');
});
app.delete('/test', (req,res) =>{
    res.send('<h1>Peticion eliminada</h1>');
});
app.listen(5000, () =>{
 console.log("Server on port 5000");
});