export class Todolist{

	todoList = ["Asep","Riki","Reza"];

	getJsonTodolist() {
		return JSON.stringify({
			code: 200,
			status: "ok",
			data: this.todoList.map((value, index)=>{
				return {
					id: index,
					todo:value
				}
			})
		})
	}

	showTodolist(request, response) {
		response.write(this.getJsonTodolist())
		response.end();
	}

	createTodolist(request, response) {

		request.addListener("data", (data) => {
			const body = JSON.parse(data.toString());
			this.todoList.push(body.todo);


			response.write(this.getJsonTodolist());
			response.end();
		})

		request.addListener("error", (error) => {
			response.write(JSON.stringify({
				code: "200",
				status: "error",
				error:error
			}))
		})
		
	}

	updateTodolist(request, response) {
		
		request.addListener("data", (data) => {
			const body = JSON.parse(data.toString());
			if (this.todoList[body.id]) {
				this.todoList[body.id] = body.todo;	
			}
			response.write(this.getJsonTodolist());
			response.end();
		})
		
	}

	deleteTodolist(request, response) {
		response.write("delete todolist by id");

	}




}