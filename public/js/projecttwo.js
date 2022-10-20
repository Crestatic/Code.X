const filt=document.getElementById("filt"),
      list=document.querySelector("#list tbody");
let cols={}, trs; 

const table = document.querySelector('table');
table.classList.add('hide');
const tableHead = document.querySelector('thead');



$.ajax({
  url: "/api/languages",
  method: "GET",
  dataType: 'json',
  data: 'projects',
  success: 
  function twoFunction (data) {
    function showFilter(data) {
      if (!data.length) return;

      Object.keys(data[0]).forEach((c, i) => cols[c] = i);
      const menu = {
        language_name: {}
      };
    
      data.forEach(f => Object.entries(menu).forEach(([k, o]) => o[f[k]] = 1));
      filt.innerHTML = Object.entries(menu).map(([k, o]) => '<h4>Languages</h4>' +
        Object.keys(o).map(c =>
          '<label><div class="inputContainer"><input type="checkbox" value="' + c + '" name="' + k + '"><p class="labelText">' + c + '</p></div></label>').join(''));
    
      showProjects(data);
  
  }
  function showProjects(data) {
    console.log('this is data:', data);
    console.log('this is object',Object)
    list.innerHTML = data.map(f => `
  <tbody>
  <tr><td><h5>${f.id}.</h5></td><td><h5>${f.language_name}</h5></td><td><h5>${f.projects.map(p => p.project_name).join(", ")}</h5></td></tr>
  
  `).join("");

  trs = [...list.children];
}

filt.addEventListener("change", ev => {
  let keywords = [...filt.querySelectorAll("input[type=checkbox]:checked")].map(p => p.value).join(",")

  let subset = data.filter(item => keywords.includes(item.language_name));

  showProjects(subset);
  table.classList.remove('hide');
  tableHead.classList.remove('hide');

});
  showFilter(data);
}, 
  
  error: function() {
    console.log(data);
  }
});



