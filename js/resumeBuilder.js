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
bio["city"] = "Damascus";
bio.country = "France";
text += "<br />" + bio.city + "<br />" + bio["country"];
$("#main").append(text);

var work = {};
work.position = "Groundwater Modeler and Geoinformatics Specialist";
work.employer = "ACSAD";
work.years = "2013 - 2015";
work.city = "Damascus";
work_txt = "<br/>" + work.position;
$("#main").append(work_txt);




