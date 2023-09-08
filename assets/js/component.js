/** This Logic steps 
 * Step 1 = Select the main div where you append element
 * Step 2 = crate a div element with class name and store into a variable
 * Step 3 = create the design component and store into a vabiable
 * Step 4 = follow the step 2 the variable with innerHTML = Step 3 vaiable
 * Step 5 = append with the step 1 main div variable
 */
const globalMainData = (data, i) => { 
    return `
    <div class="project-bg ${data[i].backgroundColor} ${data[i].backgroundImg}">
    <div class="project-title">
        <div class="project-logo">
            <img class="img-fluid" src=${data[i].logoImg} alt="">
        </div>
        <p class="my-4 text-uppercase">${data[i].content}</p>
        <a href="${data[i].hreflink}">Explore ></a>
    </div>
    </div> <!-- project-bg end -->
`;
}
// This is for Running project section data big-show in HTML
data.forEach((element, i) => {
    // selete the main parent div element
    const main = document.querySelector(".running-project-section .container-fluid .big-show .row");

    // Create 1st Div element
    const single_project = document.createElement("div");
    single_project.classList = "col-md-6 col-sm-12 mb-4 text-center align-middle";

    // Declare the Design component
    const mainData = globalMainData(data, i);

    // Create 2nd Div element
    const single_project_flip = document.createElement("div");
    single_project_flip.classList = "flip-card";

    single_project_flip.innerHTML += mainData;

    single_project.appendChild(single_project_flip);
    main.appendChild(single_project);
});


// This is for Running project section data small-show in HTML
data.forEach((element, i) => {
    
    const main = document.querySelector(".running-project-section div.owl-carousel");

    small_main = document.createElement("div");
    small_main.classList = "item mb-4 text-center align-middle";
    
    const small_mainData = globalMainData(data, i);
    
    small_main.innerHTML += small_mainData;
    main.appendChild(small_main);
});


/*  Basic data show using js 
    ================== It's wroking ======================
const div = document.querySelector("div.owl-carousel");

for (let i = 0; i < 10; i++) {
  const newDiv = document.createElement("div");
  
  newDiv.innerHTML = `
  <img src="image1.jpg" alt="Image 1">
  `;

  div.appendChild(newDiv);
}
*/