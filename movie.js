const url = new URL(location.href)
const movieTd = url.searchParams.get("id")
const movieTitle = url.searchParams.get("title")

const APILINK = 'https://Movie-app-backend.demelc.repl.co/api/v1/reviews/';


const main = document.getElementById("section");
const title = document.getElementById("title");

title.innerText = movieTitle;

returnReviews(APILINK)
function returnReviews(url){
  fetch(url + "movie/" + movieId).then(res => res.json())
  .then(function(data){
    console.log(data);
    data.forEach(review =>{
      const div_card = document.createElement('div');
      div_new.innerHTML = `
      <div class="row">
        <div class="column">
          <div class="card">
          New Review
          <p><strong>Review: </strong>
            <input type="text" id="new_review" value="">
          </p>
          <p><strong>User: </strong>
            <input type="text" id="new_user" value="">
          </p>
          <p><a href="#" onclick="saveReview('new_review', 'new_user')">💾</a>
          </p>
      </div>
    </div>
  </div>
`
      
    });
  });
}

