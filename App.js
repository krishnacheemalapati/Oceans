document.addEventListener("DOMContentLoaded", () => {
  document.body.onclick = function (anEvent) {
    console.log(anEvent.target.id);
  };
  // start stack overflow code
  function whichTransitionEvent() {
    var t;
    var el = document.createElement("fakeelement");
    var transitions = {
      transition: "transitionend",
      OTransition: "oTransitionEnd",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd",
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }
  // this code was taken from stack overflow

  let elementA;
  let requestframeref, requestframeref2;
  let oilClicks = 0;
  let signClicks = 0;
  let buoyClicks = 0;
  let bottleClicks = 0;
  let eggClicks = 0;
  const wash = document.getElementById("wash");
  const plane = document.getElementById("plane");
  const buoy = document.getElementById("buoy");
  const diver = document.getElementById("diver");
  const diverBoat = document.getElementById("diver-boat");
  const sign = document.getElementById("construction-sign");
  const bottle = document.getElementById("bottle");
  const sandText = document.getElementById("sandtxt");
  const building = document.getElementById("building");
  const oil = document.getElementById("oil");
  const oiltxt1 = document.getElementById("oil1");
  const oiltxt2 = document.getElementById("oil2");
  const c1 = document.getElementById("c1");
  const c2 = document.getElementById("c2");
  const o = document.getElementById("oceantxt");
  const sb = document.getElementById("speech-bubble");
  const i = document.getElementById("invis");
  const cb = document.getElementById("cb");
  const beach = document.getElementById("above-the-sea");
  const undawata = document.getElementById("under-the-sea");
  let curpos = 140;
  requestAnimationFrame(moveplane);
  function moveplane() {
    curpos -= 0.25;
    if (curpos < -80) {
      curpos = 140;
    }
    plane.style.marginLeft = curpos + "%";
    requestframeref = requestAnimationFrame(moveplane);
  }

  plane.addEventListener(
    "mouseenter",
    () => {
      cancelAnimationFrame(requestframeref);
    },
    false
  );

  plane.addEventListener(
    "mouseleave",
    () => {
      requestAnimationFrame(moveplane);
    },
    false
  );

  // function disappear() {
  //   fadeSpeed = 0.01;
  //   console.log(elementA);
  //   console.log(elementA.style.opacity);
  //   elementA.style.opacity = String(Number(elementA.style.opacity) - fadeSpeed);
  //   console.log(elementA.style.opacity);
  //   if (Number(elementA.style.opacity) <= 0) {
  //     cancelAnimationFrame(requestframeref2);
  //     console.log("dyingggg");
  //     return;
  //   } else {
  //     requestframeref2 = requestAnimationFrame(disappear);
  //   }
  // }

  buoy.addEventListener("click", () => {
    buoyClicks += 1;
    if (buoyClicks == 1) {
      o.classList.add("hihi");
    } else {
      o.classList.remove("hihi");
      buoy.classList.add("byebye");
      check();
    }
  });

  cb.addEventListener("click", () => {
    oilClicks += 1;
    console.log(oilClicks);
    if (oilClicks == 1) {
      oil.classList.add("clicked");
      oil.classList.add("c1");
      oiltxt1.classList.add("hihi");
    } else {
      if (oilClicks == 2) {
        oiltxt1.classList.remove("hihi");
        oiltxt2.classList.add("hihi");
        cb.classList.add("cleaning");
      } else {
        oiltxt2.classList.remove("hihi");
        oil.classList.add("byebye");
        cb.classList.remove("cleaning");
        check();
      }
    }
  });

  sign.addEventListener("click", () => {
    signClicks += 1;
    if (signClicks == 1) {
      c1.classList.add("byebye");
      c2.classList.add("hihi");
      building.classList.add("clicked");
    } else {
      c2.classList.remove("hihi");
      sign.classList.add("byebye");
      building.classList.remove("clicked");
      check();
    }
  });

  bottle.addEventListener("click", () => {
    bottleClicks += 1;
    if (bottleClicks == 1) {
      sandText.classList.add("hihi");
    } else {
      sandText.classList.remove("hihi");
      bottle.classList.add("byebye");
      check();
    }
  });

  oil.addEventListener("click", () => {
    oilClicks += 1;
    console.log(oilClicks);
    if (oilClicks == 1) {
      oil.classList.add("clicked");
      oil.classList.add("c1");
      oiltxt1.classList.add("hihi");
    } else {
      if (oilClicks == 2) {
        oiltxt1.classList.remove("hihi");
        oiltxt2.classList.add("hihi");
        cb.classList.add("cleaning");
      } else {
        oiltxt2.classList.remove("hihi");
        oil.classList.add("byebye");
        cb.classList.remove("cleaning");
        check();
      }
    }
  });

  oiltxt1.addEventListener("click", () => {
    oilClicks += 1;
    console.log(oilClicks);
    if (oilClicks == 1) {
      oil.classList.add("clicked");
      oil.classList.add("c1");
      oiltxt1.classList.add("hihi");
    } else {
      if (oilClicks == 2) {
        oiltxt1.classList.remove("hihi");
        oiltxt2.classList.add("hihi");
        cb.classList.add("cleaning");
      } else {
        oiltxt2.classList.remove("hihi");
        oil.classList.add("byebye");
        cb.classList.remove("cleaning");
        check();
      }
    }
  });

  oiltxt2.addEventListener("click", () => {
    oilClicks += 1;
    console.log(oilClicks);
    if (oilClicks == 1) {
      oil.classList.add("clicked");
      oil.classList.add("c1");
      oiltxt1.classList.add("hihi");
    } else {
      if (oilClicks == 2) {
        oiltxt1.classList.remove("hihi");
        oiltxt2.classList.add("hihi");
        cb.classList.add("cleaning");
      } else {
        oiltxt2.classList.remove("hihi");
        oil.classList.add("byebye");
        cb.classList.remove("cleaning");
        check();
      }
    }
  });

  sandText.addEventListener("click", () => {
    bottleClicks += 1;
    if (bottleClicks == 1) {
      sandText.classList.add("hihi");
    } else {
      sandText.classList.remove("hihi");
      bottle.classList.add("byebye");
      check();
    }
  });

  building.addEventListener("click", () => {
    signClicks += 1;
    if (signClicks == 1) {
      c1.classList.add("byebye");
      c2.classList.add("hihi");
      building.classList.add("clicked");
    } else {
      c2.classList.remove("hihi");
      sign.classList.add("byebye");
      building.classList.remove("clicked");
      check();
    }
  });

  c1.addEventListener("click", () => {
    signClicks += 1;
    if (signClicks == 1) {
      c1.classList.add("byebye");
      c2.classList.add("hihi");
      building.classList.add("clicked");
    } else {
      c2.classList.remove("hihi");
      sign.classList.add("byebye");
      building.classList.remove("clicked");
      check();
    }
  });

  c2.addEventListener("click", () => {
    signClicks += 1;
    if (signClicks == 1) {
      c1.classList.add("byebye");
      c2.classList.add("hihi");
      building.classList.add("clicked");
    } else {
      c2.classList.remove("hihi");
      sign.classList.add("byebye");
      building.classList.remove("clicked");
      check();
    }
  });

  o.addEventListener("click", () => {
    buoyClicks += 1;
    if (buoyClicks == 1) {
      o.classList.add("hihi");
    } else {
      o.classList.remove("hihi");
      buoy.classList.add("byebye");
      check();
    }
  });

  function check() {
    if (
      oilClicks >= 3 &&
      signClicks >= 2 &&
      buoyClicks >= 2 &&
      bottleClicks >= 2
    ) {
      sb.classList.add("hihi");
    }
  }

  let transitionEnd = whichTransitionEvent();
  wash.addEventListener(transitionEnd, activateEgg(), false);

  function activateEgg() {
    if ((eggClicks = 0)) {
      return;
    } else {
      if (eggClicks % 2 == 0) {
        undoEgg();
      } else {
        easterEgg();
      }
    }
  }

  diverBoat.addEventListener("click", () => {
    wash.classList.remove("in");
  });

  window.onload = function () {
    wash.classList.add("in");
  };

  function easterEgg() {
    beach.style.display = "none";
    undawata.style.display = "";
    wash.classList.add("in");
  }

  function undoEgg() {
    undawata.style.display = "none";
    beach.style.display = "";
    wash.classList.add("in");
  }
});
