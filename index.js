function change_area1() {
  var area = "";
  area += "<div id='area1'>";
  area +=
    "<img class='mainImg' id='img2' src='img/myoScare.png' alt='무서워하는 망초'/>";
  area +=
    "<p class='main_text'><b class='first_bold'>저</b>는 제가 코딩을 시도하지도 못할거라고 생각했어요. <br />저는 문헌정보학과 출신이거든요. 비전공자죠. <br />심지어 고교시절 수학은 40점, 영어는 7등급이 나오는 사람이었고요.<br />수학적 지식이 필요하고, 모든 코드가 영어로 작성되는 코딩은 제겐 너무 두려운 것이었죠.</p>";
  area += "</div>";
  document.getElementById("article_area").innerHTML = area;
}

// 한 번만 실행됨...

function change_area2() {
  var area = "";
  area += "<div id='area2'>";
  area +=
    "<img class='mainImg' id='img3 src='img/myoDamn.png' alt='지친망초' />";
  area +=
    "<p class='main_text'><b class='first_bold'>그</b>렇게 포기하고 흘러가듯이 살다가 대학도 어중간하게 졸업하고<br />뭐라도 해야겠다 싶어서 잡은 ADsP 시험까지 합격하고나니까 <br />이제 뭘 해야할 지 모르겠다는 생각이 들었어요. 생각해놓은 진로가 없으니 방향성을 잃은거죠.<br />그러다 아무거나 찾아보자는 마음에 한 직업적성검사에서 웹 개발자라는 직업을 찾았죠.</p>";
  area += "</div>";
  document.getElementById("area").innerHTML = area;
}

function change_area3() {
  var area =
    "<div id='area3'><img class='mainImg' id='img4' src='img/myoBluff.png' alt='허세부리는 망초님' /><p class='main_text'><b class='first_bold'>어</b>차피 아무것도 못 정했는데 그냥 한 번 해볼까?<br /> 제 웹 개발 공부는 그렇게 시작되었습니다.<br />그렇게 시작한 개발 공부는 생각보다 재미있었어요.<br />html과 css등으로 제가 원하는대로 웹을 디자인 할 수 있다는 점이 특히 그랬죠.</p></div>";
  document.getElementById("area").innerHTML = area;
}

function change() {
  while (document.getElementById("img1").getAttribute("src") === 'img/myoBluff.png') {
    if (
      document.getElementById("img1").getAttribute("src") === "img/myoHeader.png"
    ) {
      document.getElementById("article_area").setAttribute("onclick") = "javascript:change_area1()";
    } else if (
      document.getElementById("img2").getAttribute("src") === "img/myoScare.png"
    ) {
      document.getElementById("article_area").setAttribute("onclick") = 'javascript:change_area2()';
    } else {
      document.getElementById("article_area").setAttribute("onclick") = 'javascript:change_area3()';
    }
  }
}

// 숫자 증가? 