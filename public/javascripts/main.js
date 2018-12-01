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
                var tbody = document.getElementById("datos");
                for(let x = 0;x<data.banco.legnth;x++){
                    var db = {
                        id: data.banco._id,
                        nombre: data.banco.nombre,
                        cadena:data.banco.cadena,
                        annio: data.banco.annio,
                    };
                    var tr = document.createElement("tr")
                    tr.innerHTML = `<td>${db.id}</td>
                                    <td>${db.nombre}</td>
                                    <td>${db.cadena}</td>
                                    <td>${db.annio}</td>
                                    <td>
                                    <a class="delete"> Delete </a>
                                    <a class="update"> Update </a>
                                    </td>`;
                    tr.addEventListener(".delete",function(event){
                        eliminardato(event, data , tr. tbody);
                    });
                    tr.addEventListener(".update",function(event){
                        actualizardato(event, data , tr. tbody);
                    });
                    
                }
    }
}