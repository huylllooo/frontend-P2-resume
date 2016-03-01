/*
This is empty on purpose! Your code to build the resume will go here.
 */
var skill = ["awesomeness", "programming", "teaching", "JS"];
var bio = {
    "name": "Huy Nguyen",
    "role": "Udacian",
    "contacts": {
        "mobile": "059-1414-5678",
        "email": "huy@example.com",
        "github": "huyNguyen",
        "twitter": "@huy",
        "location": "Tokyo, Japan"
    },
    "welcomeMessage": "I'm awesome",
    "skills": skill,
    "biopic": "images/fry.jpg",
    "display": function() {
        //Name and role
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedName, formattedRole);

        //Contacts
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
        $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

        //Profile image and welcome message
        var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedImage, formattedMessage);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            for (skill in bio.skills) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};
bio.display();

var education = {
    "schools": [{
        "name": "Tohoku University",
        "location": "Sendai, Japan",
        "degree": "BA",
        "majors": ["Computer Science", "Japanese"],
        "dates": "2014 - 2018",
        "url": "http://www.tohoku.ac.jp/en/"
    }, {
        "name": "Ho Chi Minh City University of Technology",
        "location": "Ho Chi Minh, Vietnam",
        "degree": "BA",
        "majors": ["Computer Science"],
        "dates": "2010 - 2013",
        "url": "http://www.hcmut.edu.vn/en"
    }],
    "onlineCourses": [{
        "title": "Intro to HTML & CSS",
        "school": "Udacity",
        "date": "October 26 - November 1",
        "url": "http://udacity.com/"
    }, {
        "title": "Responsive Images",
        "school": "Udacity",
        "date": "NOvember 16 - November 22",
        "url": "http://udacity.com/"
    }],
    "display": function() {
        for (school in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedDegree = HTMLworkTitle.replace("%data%", education.schools[school].degree);
            var formattedDates = HTMLworkDates.replace("%data%", education.schools[school].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", education.schools[school].location);
            var formattedMajor = HTMLworkDescription.replace("%data%", education.schools[school].majors);
            var formattedSchool = formattedSchoolName + formattedDegree + formattedDates + formattedLocation + formattedMajor;

            $(".education-entry:last").append(formattedSchool);
        }

        $("#education").append(HTMLonlineClasses);
        for (course in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
            var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            var formattedOnlineCourse = formattedTitle + formattedSchool + formattedDates + formattedUrl;

            $(".education-entry:last").append(formattedOnlineCourse);
        }
    }
};
education.display();

var work = {
    "jobs": [{
        "employer": "AAA",
        "title": "title A",
        "location": "Ho Chi Minh, Vietnam",
        "dates": "2011-2012",
        "description": "first job"
    }, {
        "employer": "BBB",
        "title": "title B",
        "location": "Tokyo, Japan",
        "dates": "2012-2013",
        "description": "second job"
    }, {
        "employer": "CCC",
        "title": "title C",
        "location": "Osaka, Japan",
        "dates": "2013-2014",
        "description": "third job"
    }],
    "display": function() {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedDecription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            var formattedWork = formattedEmployer + formattedTitle + formattedworkDates + formattedLocation + formattedDecription;

            $(".work-entry:last").append(formattedWork);
        }
    }
};
work.display();

var projects = {
    "projects": [{
        "title": "AI",
        "dates": "2012",
        "description": "AI project",
        "images": [
            "images/197x148.gif",
            "images/197x148.gif"
        ]
    }, {
        "title": "OOP",
        "dates": "2013",
        "description": "OOP project, written by Java",
        "images": [
            "images/197x148.gif",
            "images/197x148.gif"
        ]
    }],
    "display": function() {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);

            if (projects.projects[project].images.length > 0) {
                for (image in projects.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};
projects.display();

function inName() {
    var finalName = bio.name;
    var name = finalName.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    finalName = name.join(" ");

    console.log(finalName);
    return finalName;
}
$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);