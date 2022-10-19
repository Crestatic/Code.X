// Fetch language database
const getlanguages = async () => {
  try {

    const data = await $.ajax("/api/languages");

    renderLanguages(data);
    checkedLanguages(data);

    console.log("Data: ", data);
    
  } catch (error) {
    console.log("Error: ", error);
  }
}

getlanguages(); 

// Fetch projects database
const getProjects = async () => {
  try {

    const data = await $.ajax("/api/projects");

    // renderProjects(data);

    console.log("Projects Data: ", data);
    
  } catch (error) {
    console.log("Error: ", error);
  }
}
getProjects();

const languagesBoxes = document.querySelector("#language-boxes");

// Create inputs and labels for languages
const generateLanguageBox = (name, id = null) => {
  const inputBox = document.createElement("input");
    inputBox.setAttribute("type", "checkbox")
    inputBox.setAttribute("data-projectId", id)
    inputBox.className = "checkboxes"

  const inputLabel = document.createElement("label");
    inputLabel.innerText = name;
    inputLabel.className = "labels"

  return [inputBox, inputLabel];
}

// Render the language names onto page
const renderLanguages = (languages) => {

  if (!languages?.length) {
    return null;
  }

  for (let i = 0; i < languages?.length; i++) {
    const language = languages[i];

    console.log("Language: ", language);
    const languageName = language?.language_name;
    const projectId = language?.project_id;
    const [input, label] = generateLanguageBox(languageName, projectId); // input, label

    languagesBoxes.appendChild(input)
    languagesBoxes.appendChild(label)
  } 
}

 

const checkedLanguages = async (language) => {
  
  const checkbox = document.querySelectorAll('.checkboxes');
  const label = document.querySelectorAll('.labels')
  console.log(checkbox)
  console.log(label)

  for (var i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('change', event => {
      if (event.target.checked && language[0].language_name === label[0].innerHTML) {
        console.log(language)
        console.log(language[0].projects[0].project_name)

        var projectContain = document.getElementById('projectContainer')
        var projectEl = document.createElement('h1');
        var projectInnerHTML = 
        `${language[0].projects[0].project_name}`

        projectEl.innerText = projectInnerHTML;
        projectContain.appendChild(projectEl);
      } else {
        console.log('ERROR')
      }
    })
  }  
}

checkedLanguages();

var confirmBtn = document.getElementById('#confirm-btn')

// confirmBtn.addEventListener('click', checkedLanguages);






const getSingleProject = async (id) => {
  try {

    /*
      {
        "id": 1,
        "project_name": "Job Search Board",
        "description": "Use Javascript, Nodejs, Express to create a job search website.",
        "user_id": null,
        "language_id": null,
        "languages": [
          {
            "language_name": "HTML/CSS"
          },
          {
            "language_name": "Javascript"
          }
        ]
      }
    */
    // TODO: The above is an example of the response
    const data = await $.ajax("/api/projects/");



    // Get the data of that single project by id
    // Display in the page


    console.log("Data: ", data);
    
  } catch (error) {
    console.log("Error: ", error);
  }
}

// const renderProjects = (projects) => {

//   if (!projects?.length) {
//     return null;
//   }

//   for (let i = 0; i < projects?.length; i++) {
//     const project = projects[i];
//     const projectName = project?.project_name;
//     const [input, label] = generateLanguageBox(projectName); // input, label

//     languagesBoxes.appendChild(input)
//     languagesBoxes.appendChild(label)
//   }
  
// }


/*
  Remaining
  TODO: When checking the checkobox, figure out
  how to get the project

  TODO: invoke the getSingleProject(:id) with the id of the project

  TODO: The display them in the page

*/