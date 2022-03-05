document.getElementById("formTask").addEventListener("submit",Tasks,false);

			function Tasks(e){

			e.preventDefault();
	
			let titulo = document.getElementById("title").value;
			let descripcion = document.getElementById("descripcion").value;
			const  tarea = {
			titulo,
			descripcion
			};
			
			if (localStorage.getItem("tareas") == null){
			let tareas = [];
			tareas.push(tarea);
			localStorage.setItem("tareas",JSON.stringify(tareas));
			}else {
			let tareas = JSON.parse(localStorage.getItem("tareas"));
			tareas.push(tarea);
			localStorage.setItem("tareas",JSON.stringify(tareas));
			
			}
			getTask();
			document.getElementById("formTask").reset();
			e.preventDefault();
}
	
			
			function getTask() {
			
			let tareas = JSON.parse(localStorage.getItem("tareas"));
			let tareasver = document.getElementById("tasks");
			
			tareasver.innerHTML = ' ';
			 
			 for (let i = 0; i<tareas.length; i++){
			 let titulo = tareas[i].titulo;
			 let descripcion = tareas[i].descripcion;
			 tareasver.innerHTML +=	  `<div class="card mb-3">
			 <div class="card-body">
			 <p>${titulo} - ${descripcion}</p>
			 <a class="btn btn-danger" onclick="deleteTask('${titulo}')">Delete</a>
			 </div>
			 
			 </div> `
			 
			 }
	}
			function deleteTask(titulo){
			
			let tareas = JSON.parse(localStorage.getItem("tareas"));
			for (let i=0; i< tareas.length; i++){
			
			if (tareas [i].titulo == titulo){
			
			tareas.splice(i, 1);
			
			}
			localStorage.setItem("tareas", JSON.stringify(tareas));
			getTask();
		
			}
			
			
			}
			 
			 getTask();
			 

		
			
			
			
		


