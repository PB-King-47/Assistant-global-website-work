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
            <img class="img-fluid" src="${data[i].logoImg}" alt="">
        </div>
        <p class="my-4 text-uppercase">${data[i].content}</p>
        <a href="${data[i].hreflink}">Explore ></a>
    </div>
    </div> <!-- project-bg end -->
`;
}
// This is for Running project section data big-show in HTML
data1.forEach((element, i) => {
    // selete the main parent div element
    const main = document.querySelector(".running-project-section .container-fluid .big-show .row");

    // Create 1st Div element
    const single_project = document.createElement("div");
    single_project.classList = "col-md-6 col-sm-12 mb-4 text-center align-middle";

    // Declare the Design component
    const mainData = globalMainData(data1, i);

    // Create 2nd Div element
    const single_project_flip = document.createElement("div");
    single_project_flip.classList = "flip-card";

    single_project_flip.innerHTML += mainData;

    single_project.appendChild(single_project_flip);
    main.appendChild(single_project);
});


// This is for Running project section data small-show in HTML
data1.forEach((element, i) => {
    
    const main = document.querySelector(".running-project-section div.owl-carousel");

    small_main = document.createElement("div");
    small_main.classList = "item mb-4 text-center align-middle";
    
    const small_mainData = globalMainData(data1, i);
    
    small_main.innerHTML += small_mainData;
    main.appendChild(small_main);
});

// This is for Upcomming project section data big-show in HTML
data2.forEach((element, i) => {
    const main = document.querySelector("#upcoming_project_big");

    // creating single item wrapper div
    big_main = document.createElement("div");
    big_main.classList = "item col-md-6 col-sm-12 mb-4 text-center align-middle";

    let big_component = `<div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <div class="project-bg ${data2[i].backgroundColor} ${data2[i].backgroundImg}">
                <div class="project-title">
                    <div class="project-logo">`;
                    
               
    if(data2[i].logoImg.includes("/")){
        big_component += `<img class="img-fluid" src="${data2[i].logoImg}" alt="Image" 
        ${(data2[i].hasOwnProperty("style1")) ? 'style="'+data2[i].style1+'"' : ''}">`

    } else {
        big_component += `<h3 class="text-uppercase">${data2[i].logoImg}</h3>`;
    }


    // Html component building start
    big_component += `</div>
                <p class="my-4 text-uppercase">${data2[i].content}</p>
                <a href="" class="explore-btn">Explore ></a>
            </div>
        </div>
    </div>
    <div class="flip-card-back ${data2[i].backgroundColor}">
        <div class="project-bg" >
            <div class="row">
                <div class="col-sm-6">
                    <img class="img-fluid" src="${data2[i].backImg}" alt="Content image">
                </div>
                <div class="col-sm-6">
                    <div class="project-logo">`;
                    
    if(data2[i].logoImg.includes("/")){
        big_component += `<img class="img-fluid" src="${data2[i].logoImg}" alt="Image" 
        ${(data2[i].hasOwnProperty("style2")) ? 'style="'+data2[i].style2+'"' : ''}>`;
    } else {
        big_component += `<h3 class="text-uppercase">${data2[i].logoImg}</h3>`;
    }
                    
    big_component += `</div>
                        <p class="my-4 text-uppercase">${data2[i].content}</p>
                            <a href="${data2[i].hreflink}" class="btn btn-success">Explore ></a>
                        </div>
                    </div>
                </div>
            </div> <!-- flip-card-back -->
        </div>    <!-- flip-card-inner -->   
    </div>`;
    // Html component building end
        
    big_main.innerHTML += big_component;
    main.append(big_main);
});

// This is for Upcomming project section data small-show in HTML
data2.forEach((element, i) => {
    const main = document.querySelector("#upcoming_project_small");

    // creating single item wrapper div
    small_main = document.createElement("div");
    small_main.classList = "item mb-4 text-center align-middle";

        // Html component building start
    let small_component = `<div class="project-bg ${data2[i].backgroundColor} ${data2[i].backgroundImg}">
    <div class="project-title">
        <div class="project-logo">`;

    if(data2[i].logoImg.includes("/")){
        small_component += `<img class="img-fluid" src="${data2[i].logoImg}" alt="Image" 
        ${(data2[i].hasOwnProperty("style2")) ? 'style="'+data2[i].style2+'"' : ''}">`

    } else {
        small_component += `<h3 class="text-uppercase">${data2[i].logoImg}</h3>`;
    }

    small_component += `</div>
            <p class="my-4 text-uppercase">${data2[i].content}</p>
            <a href="${data2[i].hreflink}">Explore ></a>
        </div>
    </div>`;
    // Html component building end

    small_main.innerHTML += small_component;
    main.append(small_main);
});
