const catagoriesName = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const piasAhmed = data.data
    buttonContainer(piasAhmed)
}

// catagory all data show

const buttonContainer = (piasAhmed) => {

    const cardContainer = document.getElementById('multiTalented');
    piasAhmed.forEach((nam) => {

        const div = document.createElement('div');
        div.innerHTML = `
        <button onclick="loadAllId('${nam.category_id}')" class="bg-gray-300 py-1 px-3 rounded-md font-normal text-sm" >${nam.category}</button>
                `;
        cardContainer.appendChild(div)

    })
    loadAllId(1000)
}

catagoriesName()

// catagory id show

const loadAllId = async (categoryId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();
    const cartShow = data.data;

    const monitor = document.getElementById('monitor')
    monitor.innerHTML = " ";


    if (cartShow.length === 0) {
        const div = document.createElement('div');
        div.classList = 'w-[150px] md:ml-[390px] lg:ml-[600px] text-center';
        div.innerHTML = `
        <img src="Icon.png">
        <p class='font-bold mt-5'><span class='font-bold'>Oops!!</span> Sorry,There is no content here not found</p>
        `
        monitor.appendChild(div)
    }

    //    all card show section

    cartShow.forEach((articleSection) => {

        // time seatting on img section

        d = Number(articleSection.others.posted_date);
        let h = Math.floor(d / 3600);
        let m = Math.floor(d % 3600 / 60);
        let s = Math.floor(d % 3600 % 60);
        let harticleSection = h > 0 ? h + (h == 1 ? " hour, " : "hours ") : "";
        let marticleSection = m > 0 ? m + (m == 1 ? " minute, " : " minutes") : "";
        const time = harticleSection + marticleSection


        // inner html append section

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card w-72 bg-base-100">
                  <div class="relative">
                  <img src="${articleSection.thumbnail}" class="w-full h-[210px]">
                  <div  class="bg-black text-white absolute right-2 bottom-2 text-[13px]  rounded-md" >${time}</div>
                  </div>   
               <div class="card-body">
                  <div class="flex flex-row gap-5">
                      <img src="${articleSection.authors[0].profile_picture}" class="h-10 w-10 rounded-full">
                      <h1 class=' font-bold'>${articleSection.title}</h1>
                  </div>
                  <div class="flex flex-row gap-5">
                       <h1>${articleSection.authors[0].profile_name}</h1>
                       <img src="${articleSection.authors[0].verified ? 'Group.svg' : ''}">
                  </div>
                  <div>
                      <p>${articleSection.others.views} views</p>
                  </div>
                </div>
            </div>
        `
        monitor.appendChild(div);

    })

}

// call index section

const handelSecondHtml = () => {
    window.location.href = 'index2.html'
}

// sort mantain section

const shortFunction = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const data = await res.json();
    const piasAhmed = data.data
    console.log(piasAhmed)


    piasAhmed.sort((x, y) => {
        x = Number.parseFloat(x.others.views);
        y = Number.parseFloat(y.others.views);
        if (x > y) {
            return -1;
        }
        else if (x < y) {
            return 1;
        }
        return 0;
    })


    const monitor = document.getElementById('monitor')
    monitor.innerHTML = " ";


    piasAhmed.forEach((articleSection) => {

        let d = Number(articleSection.others.posted_date);
        let h = Math.floor(d / 3600);
        let m = Math.floor(d % 3600 / 60);
        let s = Math.floor(d % 3600 % 60);

        let harticleSection = h > 0 ? h + (h == 1 ? " hour, " : "hours ") : "";
        let marticleSection = m > 0 ? m + (m == 1 ? " minute, " : " minutes") : "";
        const time = harticleSection + marticleSection

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card w-72 bg-base-100">
                  <div class="relative">
                  <img src="${articleSection.thumbnail}" class="w-full h-[200px]">
                  <div  class="bg-black text-white absolute right-2 bottom-2 text-[13px]  rounded-md" >${time}</div>
                  </div>   
               <div class="card-body">
                  <div class="flex flex-row gap-5">
                      <img src="${articleSection.authors[0].profile_picture}" class="h-10 w-10 rounded-full">
                      <h1 class=' font-bold'>${articleSection.title}</h1>
                  </div>
                  <div class="flex flex-row gap-5">
                       <h1>${articleSection.authors[0].profile_name}</h1>
                       <img src="${articleSection.authors[0].verified ? 'Group.svg' : ''}">
                  </div>
                  <div>
                      <p>${articleSection.others.views} views</p>
                  </div>
                </div>
            </div>
        `
        monitor.appendChild(div);

    })

}