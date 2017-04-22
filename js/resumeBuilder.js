/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	"name" : "Mohannad",
	"role" : "Geoinformatics specialist",
	"email" : "mohannad.adm@gmail.com",
	"message" : "Welcome to my world!",
	"skills" : ["python", "JavaScript", "HTML", "CSS", "VBA", "SQL"]
}

text = bio.name + "<br/>" + bio.role + "<br/>" + bio.email + "<br/>" + bio.message;

$("#main").append(text);