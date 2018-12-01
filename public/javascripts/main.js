window.onload = () => {
    app.init();
}
var app ={
    init: function(){

    },
    mostartBanco: function(){
        fetch('/api/Banco',
        ).then(res => res.json)
            .then(data=>data.json)
                console.log(data);
    }
}