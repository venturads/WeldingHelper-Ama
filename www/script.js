// search wordpress api json data 
const getSearch = function(){
  let searchVar = document.getElementById('input').value;
  document.getElementById("root").innerHTML = "Search: " + searchVar;
  getSe(searchVar);
}
document.getElementById("btn").addEventListener("click", getSearch);
function getSe (n){
  const se = 'http://venturads.com/weldinghelper/api/get_search_results/?search=' + n;

document.getElementById("root").innerHTML = "<div class='loader'></div>";
  // alert("loading...");
fetch(se)
.then(function(response){
  return response.json();
  })
.then(function(data){
   getdata(data);
})

function getdata(data){
  let list="";
  for(let i=0;i<data.posts.length;i++){
    list += "<div class='btn-group-justified content'><a  type='button' class='btn btn-info sharp' id='settings' data-toggle='collapse' data-target='#demo" + data.posts[i].id + "'>" +  data.posts[i].title + "</a></div><div id='demo" +  data.posts[i].id + "' class='collapse'>" + data.posts[i].content + "</div></div>";
    }
  document.getElementById("root").innerHTML = list;
}
  
}
document.getElementById('btn').addEventListener('click', getSe);

// get wordpress api json data
function getNews (){
  const news1 = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=82413d9fd4ad42528ed2caeb0473d089';

document.getElementById("root").innerHTML = "<div class='loader'></div>";
  // alert("loading...");
fetch(news1)
.then(function(response){
  return response.json();
  })
.then(function(data){
   getdata(data);
})

function getdata(data){
  let list="";
  for(let i=0;i<data.articles.length;i++){
    list += "<div id='pic'><a href='" + data.articles[i].url + "' target='_blank'><img src='" + data.articles[i].urlToImage + "' width='100%' /><p class='center'>" + data.articles[i].title + "</p></a></div>";
    }
  document.getElementById("root").innerHTML = list;
}
  
}
document.getElementById('content-news').addEventListener('click', getNews);

// get wordpress api json data
function getGar (){
    const n2 = 'http://venturads.com/weldinghelper/api/get_category_posts/?slug=welding';

  document.getElementById("root").innerHTML = "<div class='loader'></div>";
    // alert("loading...");
  fetch(n2)
  .then(function(response){
    return response.json();
    })
  .then(function(data){
     getdata(data);
  })
  
  function getdata(data){
    let list="";
    for(let i=0;i<data.posts.length;i++){
      list += "<div class='btn-group-justified content'><a  type='button' class='btn btn-info sharp' id='settings' data-toggle='collapse' data-target='#demo" + data.posts[i].id + "'>" +  data.posts[i].title + "</a></div><div id='demo" +  data.posts[i].id + "' class='collapse'>" + data.posts[i].content + "</div></div>";
      }
    document.getElementById("root").innerHTML = list;
  }
    
  }
  document.getElementById('content-app').addEventListener('click', getGar);
  
// more menu list
  function getMenu (){
    // const n2 = 'https://venturads.com/helper-menu.json';

  document.getElementById("root").innerHTML = "<div class='loader'></div>";
    let data=[
      {
        id: 1, name: "Block Jumper", link: "https://www.amazon.com/Ventura-Design-Block-Jumper-Free/dp/B00TEBZFG0/ref=sr_1_38?s=mobile-apps&ie=UTF8&qid=1545969559&sr=1-38"
      },
      {
        id: 2, name: "Hit the Line", link: "https://www.amazon.com/Ventura-Design-Hit-The-Line/dp/B01G6P5F9I/ref=sr_1_48?s=mobile-apps&ie=UTF8&qid=1545969597&sr=1-48"
      },
      {
        id: 3, name: "CNC Helper", link: "https://www.amazon.com/Ventura-Design-Machinist-Helper-Free/dp/B00QRS45V4/ref=sr_1_8?s=mobile-apps&ie=UTF8&qid=1545969281&sr=1-8"
      },
      {
        id: 4, name: "Solidworks Helper", link: "https://www.amazon.com/Ventura-Design-Solidworks-Helper/dp/B01LXW1SNN/ref=sr_1_1?s=mobile-apps&ie=UTF8&qid=1545969367&sr=1-1&keywords=solidworks"
      },
      {
        id: 5, name: "Mr Jumper", link: "https://www.amazon.com/Ventura-Design-Mr-Jump-Free/dp/B00V07D176/ref=sr_1_65?s=mobile-apps&ie=UTF8&qid=1545969659&sr=1-65"
      },
      {
        id: 6, name: "Sheet Metal Helper", link: "https://www.amazon.com/Ventura-Design-Sheet-Metal-Helper/dp/B00SC3QOK2/ref=sr_1_16?s=mobile-apps&ie=UTF8&qid=1545969339&sr=1-16"
      },
      {
        id: 6, name: "Venturads.com", link: "https://venturads.com"
      }
    ];
    let list = "";
    console.log("mylist: " + data[0].name);
    for(let i=0;i<data.length;i++){
      list += "<div class='btn-group-justified content'><a href='" +  data[i].link + "' type='button' class='btn btn-info sharp' id='settings' data-target='#demo" + data[i].id + "' target='_blank'>" +  data[i].name + "</a></div><div id='demo" +  data[i].id + "' class='collapse'>" + data[i].name + "</div></div>";
    document.getElementById('root').innerHTML = list;
  }
    
  }
  document.getElementById('content-menu').addEventListener('click', getMenu);

  //admob id script
  function onDeviceReady() {
    document.removeEventListener('deviceready', onDeviceReady, false);

    // Set AdMobAds options:
    admob.setOptions({
        publisherId:          "ca-app-pub-3864996818231266/6846758432",  // Required
        interstitialAdId:     "ca-app-pub-3864996818231266/6580570832",  // Optional
        // tappxIdiOS:           "/XXXXXXXXX/Pub-XXXX-iOS-IIII",            // Optional
        // tappxIdAndroid:       "/XXXXXXXXX/Pub-XXXX-Android-AAAA",        // Optional
        // tappxShare:           0.5                                        // Optional
    });
    admob.createBannerView();
    admob.requestInterstitialAd({
      autoShowInterstitial: true
    });
}

document.addEventListener("deviceready", onDeviceReady, false);

