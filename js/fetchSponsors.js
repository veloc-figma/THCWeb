// api url
const getAllBrandsUrl = "http://54.243.64.190:8000/api/getAllBrands";

// Defining async function
const getAllSponsors = async (url) => {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  if (data.data) {
    getPlatinumSponsors(
      data.data?.filter((item) => item.category === "Platinum")
    );
    getGoldSponsors(data.data?.filter((item) => item.category === "Gold"));
    getSilverSponsors(data.data?.filter((item) => item.category === "Silver"));
  }
};
// Calling that async function
getAllSponsors(getAllBrandsUrl);

const getPlatinumSponsors = (data) => {
  let only4p = data?.slice(0, 4);
  let platinumSponsors = ``;
  for (let sponsor of only4p) {
    let a = sponsor.image;
    let b = "/";
    let position = 6;
    let images = [a?.slice(0, position), b, a?.slice(position)]?.join("");

    platinumSponsors += `
    <div class="client-block col-lg-3 col-md-6 col-sm-12">
      <figure class="grey-hover">
        <a href=${sponsor.link} target="_blank"
          ><img src=${`http://54.243.64.190:8000/${images}`} class="SponImg" alt=""
        /></a>
      </figure>
    </div>
    `;
  }
  document.getElementById("platinumSponsors").innerHTML = platinumSponsors;
};

const getGoldSponsors = (data) => {
  let only4g = data?.slice(0, 4);
  let goldSponsors = ``;
  for (let sponsor of only4g) {
    let a = sponsor.image;
    let b = "/";
    let position = 6;
    let images = [a?.slice(0, position), b, a?.slice(position)]?.join("");

    goldSponsors += `
    <div class="client-block col-lg-3 col-md-6 col-sm-12">
      <figure class="grey-hover">
        <a href=${sponsor.link} target="_blank"
          ><img src=${`http://54.243.64.190:8000/${images}`} class="SponImg" alt=""
        /></a>
      </figure>
    </div>
    `;
  }
  document.getElementById("goldSponsors").innerHTML = goldSponsors;
};

const getSilverSponsors = (data) => {
  let only4s = data?.slice(0, 4);
  let silverSponsors = ``;
  for (let sponsor of only4s) {
    console.log(sponsor);
    let a = sponsor.image;
    let b = "/";
    let position = 6;
    let images = [a?.slice(0, position), b, a?.slice(position)]?.join("");

    silverSponsors += `
    <div class="client-block col-lg-3 col-md-6 col-sm-12">
      <figure class="grey-hover">
        <a href=${sponsor.link} target="_blank"
          ><img src=${`http://54.243.64.190:8000/${images}`} class="SponImg" alt=""
        /></a>
      </figure>
    </div>
    `;
  }
  document.getElementById("silverSponsors").innerHTML = silverSponsors;
};
