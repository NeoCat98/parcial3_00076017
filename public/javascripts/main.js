window.onload = () => {
    app.init();
}
var app ={
    init: function(){
        this.mostrarBanco();
    },
    mostrarBanco: function(){
        fetch('/api/Bancos',
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
                    var tr = document.createElement("tr");
                    tr.innerHTML = `<td>${db.id}</td>
                                    <td>${db.nombre}</td>
                                    <td>${db.cadena}</td>
                                    <td>${db.annio}</td>
                                    <td>
                                    <a class="delete"> <i class="far fa-trash-alt"></i> </a>
                                    <a class="update"> <i class="far fa-edit"></i> </a>
                                    </td>`;
                    tr.addEventListener(".delete",function(event){
                        eliminardato(event, data , tr, tbody);
                    });
                    tr.addEventListener(".update",function(event){
                        actualizardato(event, data , tr, tbody);
                    });
                    tbody.appendChild(tr);
                }
    },
    eliminardato: function(event,data,tr,tbody){
        fetch('/api/Bancos'+data.id,
        ).then(res => res.json)
            .then(data=>data.json)
            tbody.removeChild(tr);
            
            
    },
    actualizardato: function(event,data,tr,tbody){
        var tr2 = document.createElement("tr");
        tr2.innerHTML = `<form action="/api/Bancos/${data.id}">
                        <td>
                            <input type="text" name="id" placeholder="id" disabled>
                        </td>
                        <td>
                            <input type="text" name="id" placeholder="Nombre" name="nombre">
                        </td>
                        <td>
                            <input type="text" name="id" placeholder="Cadena Mundial" name="cadena">
                        </td>
                        <td>
                            <input type="text" name="id" placeholder="Años" name="annios">
                        </td>
                        <td>
                        <button class="aceptar" type="submit"> <i class="far fa-check-circle"></i> </button>
                        <a class="cancelar"> <i class="fas fa-ban"></i> </a>
                        </td>`;
        
        tr2.addEventListener(".aceptar",function(event){
                
        });

    }
}