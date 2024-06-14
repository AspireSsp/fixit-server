const app = require('./src/app');
const connectDB = require('./src/config/DbConnection');


connectDB()
const port = process.env.PORT || 5000 ;


app.listen(port, ()=>{
    console.log(`server is running on port  ${port}`);
});




