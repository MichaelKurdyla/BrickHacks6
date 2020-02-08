const QRSchema = require('./database/models/QRCode');


function fill(numfill){
    i = 0
    for(i = 0;i < numfill; i++){
        var authnum = i; 
        if(i%2 ==0){
            var point = 050
        }else{
           var point = 100
        }
        const code = QRSchema({
            AuthToken: authnum.toString(),
            Amount: point.toString()
        });
        code.save(function(err,code){
            if(err) return console.error(err);
            console.log("error creating the premade code");
        });
    }
}

fill(5);



