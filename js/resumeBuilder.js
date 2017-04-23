/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	"name" : "Mohannad Adham",
	"role" : "Geoinformatics specialist",
	"email" : "mohannad.adm@gmail.com",
	"message" : "Welcome to my world!",
	"skills" : ["python", "JavaScript", "HTML", "CSS", "VBA", "SQL"]
}

// text = bio.name + "<br/>" + bio.role + "<br/>" + bio.email + "<br/>" + bio.message;
// bio["city"] = "Damascus";
// bio.country = "France";
// text += "<br />" + bio.city + "<br />" + bio["country"];
// $("#main").append(text);

var work = {};
work.position = "Groundwater Modeler and Geoinformatics Specialist";
work.employer = "ACSAD";
work.years = "2013 - 2015";
work.city = "Damascus";
work_txt = "<br/>" + work.position;
$("#main").append(work_txt);

var education = { "schools": [ {
	"name": "Jean Monnet University",
	"city": "Saint Etienne, France",
	"degree": "Master",
	"major": "Geoinformatics"
}, 

{
	"name": "Damascus University",
	"city": "Damascus, Syria",
	"degree": "BSc",
	"major": "Hydrogeology"

}
],
"onlineCourses": [{
	"title": "Introduction to computer science and programming",
	"school": "MIT",
	"year": "2013"
},
{
	"title": "Imagery, automation and applications",
	"school": "UC Davis",
	"year": "2016"
}]
}

var project = {"projects": [
	{
		"title": "Developing a groundwater model for the coastal basin of Syria",
		"company": "ACSAD",
		"years": "2013 - 2015"
	},
	{
		"title": "Developing a groundwater model for the Orontes basin in Syria",
		"company": "ACSAD",
		"years": "2014 - 2015"

	}]}

//$("#main").append(education_txt);
var headerName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(headerName);

if (bio.skills.length > 0){
	$('#header').append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++) {
		var formatedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$('#skills').append(formatedSkill);
	}

}




