// api url
const getAllSpeakersUrl = "http://54.243.64.190:8000/api/getAllSpeakers";

// Defining async function
async function getAllSpeakers(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();

  if (response) {
    AllSpeakers(data.data);
  }
}
// Calling that async function
getAllSpeakers(getAllSpeakersUrl);

function AllSpeakers(data) {
  let only8 = data?.slice(0, 8);

  let speakers = ``;
  for (let speaker of only8) {
    let a = speaker.image;
    let b = "/";
    let position = 6;
    let images = [a?.slice(0, position), b, a?.slice(position)]?.join("");

    speakers += `
    <div class="col-xl-3 col-lg-4 col-sm-6 mb30 wow fadeInUp">
      <div class="de-team-list eleCard" style="--elevation:8;">
        <div class="team-pic">
          <img src=${`http://54.243.64.190:8000/${images}`} class="img-responsive" alt="" />
        </div>
        <div class="team-desc">
          <h3>${speaker.name}</h3>
          <p class="lead">${speaker.position}</p>
          <div class="small-border"></div>
          <p>${speaker.description}</p>

          <div class="social">
          
            <a href=${
              speaker.linkedinLink
            }><i class="fa fa-linkedin fa-lg"></i></a>
          </div>
        </div>
      </div>
      <!-- team close -->
    </div>
    `;
  }

  // Setting innerHTML as speakers variable
  document.getElementById("speakerData").innerHTML = speakers;
}
