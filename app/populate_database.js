const QRSchema = require('./database/models/QRCodes');

function fill(times){
    
    i = 0;
    console.log("Entering loop")
    for(i = 0;i < times; i++){
        var authnum = (Math.random()*1000000000) + 8999999999;
        if(i%2 ==0){
            var point = 050
        }else{
           var point = 100
        }
        console.log(Math.floor(authnum).toString())

        QRCode.toFile('./QrCodes/' + Math.floor(authnum).toString() + '.png', Math.floor(authnum).toString(), {
            color: {
              dark: '#00F',  // Blue dots
              light: '#0000' // Transparent background
            }
          }, function (err) {
            if (err) throw err
            console.log('done');
          });

        console.log("creating db object and assigning " + point.toString())
        const code = QRSchema({
            AuthToken: authnum.toString(),
            Points: point
        });
        code.save(function(err,code){
            if(err) throw err;
            console.log(code)
        });

    }

}

fill(50);
