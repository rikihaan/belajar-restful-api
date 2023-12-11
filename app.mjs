import http from 'http';
import { Todolist } from "./TodolistService.mjs";
const service = new Todolist();
const server = http.createServer((request, response) => {
	response.setHeader("Content-Type", "application/json");
	if (request.method === "GET") {
		// get all todolist
		service.showTodolist(request, response);
		
	} else if (request.method === "POST") {
		// create new todolist
		service.createTodolist(request, response);
	} else if (request.method === "PUT") {
		// Update todolist
		service.updateTodolist(request, response);
	} else if (request.method == "Delete") {
		// Delete Todolist
		service.deleteTodolist(request, response);
	}
	
})


server.listen(3000);