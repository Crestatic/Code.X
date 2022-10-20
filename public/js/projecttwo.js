const filt=document.getElementById("filt"),
      list=document.querySelector("#list tbody");
let cols={}, trs; 

const table = document.querySelector('tbody');
table.classList.add('hide');

$.ajax({
  url: "/api/languages",
  method: "GET",
  dataType: 'json',
  data: 'projects',
  success: function twoFunction (data) {
    function showFilter(data) {
      if (!data.length) return;

      Object.keys(data[0]).forEach((c, i) => cols[c] = i);
      const menu = {
        language_name: {}
      };
    
      data.forEach(f => Object.entries(menu).forEach(([k, o]) => o[f[k]] = 1));
      filt.innerHTML = Object.entries(menu).map(([k, o]) => 'Languages<br>' +
        Object.keys(o).map(c =>
          '<label><input type="checkbox" value="' + c + '" name="' + k + '">' + c + '</label>').join(''));
    
      showProjects(data);
  
  }
  function showProjects(data) {
    console.log('this is data:', data);
    console.log('this is object',Object)
    // table.classList.remove('hide');
    list.innerHTML = data.map(f => `
  
  <tr><td>${f.id}.</td><td>${f.language_name}</td><td>${f.projects.map(p => p.project_name).join(", ")}</td></tr>
  
  `).join("");

  trs = [...list.children];
}

filt.addEventListener("change", ev => {
  let keywords = [...filt.querySelectorAll("input[type=checkbox]:checked")].map(p => p.value).join(",")

  let subset = data.filter(item => keywords.includes(item.language_name));

  showProjects(subset);
  table.classList.remove('hide');

});
  showFilter(data);
}, 
  
  error: function() {
    console.log(data);
  }
});



