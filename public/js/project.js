const languagesBoxes = document.querySelector("#language-boxes");

/*
  Remaining
  TODO: When checking the checkobox, figure out
  how to get the project

  TODO: invoke the getSingleProject(:id) with the id of the project

  TODO: The display them in the page

*/

const generateLanguageBox = (name, id = null) => {
  const inputBox = document.createElement("input");
    inputBox.setAttribute("type", "checkbox")
    inputBox.setAttribute("data-projectId", id)

  const inputLabel = document.createElement("label");
    inputLabel.innerText = name;

  // return [inputBox, inputLabel];
  return [inputBox, inputLabel];
}

console.log("Yes testing and");

// Harder option
// Ajax Request to get the data from the server
// DOM Manipulation to display the data in the pageindex


const getProjects = async () => {
  try {

    const data = await $.ajax("/api/projects");

    renderProjects(data);

    console.log("Data: ", data);
    
  } catch (error) {
    console.log("Error: ", error);
  }
}

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
    const data = await $.ajax("/api/projects/" + id);

    // Get the data of that single project by id
    // Display in the page


    console.log("Data: ", data);
    
  } catch (error) {
    console.log("Error: ", error);
  }
}

const getlanguages = async () => {
  try {

    const data = await $.ajax("/api/languages");

    renderLanguages(data);

    console.log("Data: ", data);
    
  } catch (error) {
    console.log("Error: ", error);
  }
}

const renderProjects = (projects) => {

  if (!projects?.length) {
    return null;
  }

  for (let i = 0; i < projects?.length; i++) {
    const project = projects[i];
    const projectName = project?.project_name;
    const [input, label] = generateLanguageBox(projectName); // input, label

    languagesBoxes.appendChild(input)
    languagesBoxes.appendChild(label)
  }
  
}

getlanguages(); 


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
