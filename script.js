const api =[
    {
      "userId": 1,
      "id": 1,
       "date":"2011-10-05T14:48:00.000",
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
       "photo": "https://via.placeholder.com/150/92c952"
    },
    {
      "userId": 1,
      "id": 2,
       "date":"2011-11-05T16:28:00.000",
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
       "photo": "https://via.placeholder.com/150/92c952"
    },
    {
      "userId": 1,
      "id": 3,
       "date":"2011-10-05T14:48:00.000",
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
       "photo": "https://via.placeholder.com/150/92c952"
    },
    {
      "userId": 1,
      "id": 4,
       "date":"2011-10-05T14:48:00.000",
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
       "photo": "https://via.placeholder.com/150/92c952"
    },
    {
      "userId": 1,
      "id": 9,
      "date":"2011-10-05T14:48:00.000",
      "title": "nesciunt iure omnis dolorem tempora et accusantium",
      "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
      "photo": "https://via.placeholder.com/150/92c952"
    },
    {
      "userId": 1,
      "id": 10,
      "date":"2011-10-05T14:48:00.000",
      "title": "optio molestias id quia eum",
      "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
      "photo": "https://via.placeholder.com/150/92c952"
    },
    {
      "userId": 2,
      "id": 11,
      "date":"2011-10-05T14:48:00.000",
      "title": "et ea vero quia laudantium autem",
      "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
      "photo": "https://via.placeholder.com/150/92c952"
    },
    {
      "userId": 2,
      "id": 12,
      "date":"2011-10-05T14:48:00.000",
      "title": "in quibusdam tempore odit est dolorem",
      "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
      "photo": "https://via.placeholder.com/150/92c952"
    }
];


function nouvoPost(...post){
  
    post = post[0]
    const postYo =[];
  
    for(let obj of post){
      
      let date =obj.date
      const pos = document.createElement("div");
      pos.setAttribute("class", "row");
  
      const divImaj = document.createElement("div");
      divImaj.setAttribute("class", "col-3");
      const img =document.createElement("img");
      img.setAttribute("src", obj.photo);
      
      img.setAttribute("class", "img-fluid");
      divImaj.append(img);
  
      const divEnfo = document.createElement("div");
      divEnfo.setAttribute("class", "col-8");
      divEnfo.innerHTML =`<h2>Tit</h2><p>${date}</p><h3>${obj.title}</h3><p>${obj.body}</p>`;
      
      pos.append(divImaj);
      pos.append(divEnfo);
      pos.innerHTML +="<hr>"
      postYo.push(pos);
    }
    return postYo;
  } 
let b =nouvoPost(api)

let yo = document.getElementById("pos")
yo.append(b[1])
 
  function nouvoKod(...done){
    done =done[0]
    let tabCode =[];
    for(el of done){
      const code = document.createElement("code");
      code.textContent =`
      {
        "userId":${el.userId},
        "id":${el.id},
        "date":"${el.date}",
        "title":"${el.title}"
        "body":"${el.body}",
        "photo":"${el.photo}"
      },
      `;
      tabCode.push(code);
    }
    return tabCode;
  }
  

const kolonNwa =document.getElementById("pre")
kolonNwa.style.width="550px";
kolonNwa.style.height="550px";
kolonNwa.style.color="white"
kolonNwa.style.backgroundColor ="black"

let c =nouvoKod(api)
const pre = document.createElement("pre")
pre.append(c[0])
kolonNwa.append(pre)

const selec =document.createElement("select")
selec.id ="selek1"
selec.style.margin ='5px'
selec.style.padding = "5px"
selec.setAttribute("name", "select")
selec.setAttribute("class", "btn bg-success text-light")

let tabOpsyon = []
for(let i=1; i<=5; i++){
  const op = document.createElement("option")
  op.setAttribute("value", i)
  op.innerHTML=`${i}`
  tabOpsyon.push(op)
}

for(el of tabOpsyon){
  selec.append(el)
}


const chwa =document.getElementById("selek")
chwa.setAttribute("class", "col-4")
chwa.append("Show")
chwa.append(selec)
chwa.append("Of 5")



const bouton1 = document.getElementById("boutn1")
bouton1.setAttribute("class", "col-5 text-start")
const bouton2 = document.getElementById("boutn2")
bouton2.setAttribute("class", "col-3 text-end")

const btnShow = document.createElement("button")
btnShow.innerText ="SHOW"
btnShow.id="show"
btnShow.setAttribute("class", "btn bg-success text-light")

const btnSelet = document.createElement("button")
btnSelet.innerText = "RESET"
btnSelet.id = "select"
btnSelet.setAttribute("class", "btn btn-primary")


bouton1.append(btnShow)
bouton2.append(btnSelet)

const bouton = document.getElementById("show");
bouton.onclick = function(){
  const tabq1 =nouvoKod(api)
  
  const pre = document.createElement("pre")

  let vale = document.getElementById("selek1")
  let kantite =parseInt(vale.value)
  
  let kod =document.getElementById("pre")
  kod.innerHTML =""
  for(let i=0; i<kantite; i++){
    pre.append(tabq1[i])
  }
  
  kod.append(pre)
  
  const lisPos = nouvoPost(api)
  let p =document.getElementById("pos")
  p.innerHTML =""
  
  for(let el=0; el<kantite; el++){
    p.append(lisPos[el])
  } 
}


const bouton3 = document.getElementById("select");
bouton3.onclick = function(){
  const tabq1 =nouvoKod(api)
  
  const pre = document.createElement("pre")

    document.getElementById("selek1").value=5
    let kantite =5
  
  let kod =document.getElementById("pre")
  kod.innerHTML =""
  for(let i=0; i<kantite; i++){
    pre.append(tabq1[i])
  }
  
  kod.append(pre)
  
  const lisPos = nouvoPost(api)
  let p =document.getElementById("pos")
  p.innerHTML =""
  
  for(let el=0; el<kantite; el++){
    p.append(lisPos[el])
  } 
}