const downloadButton = document.getElementById("download");
const downloadText = document.getElementById("download-text");
const buttonIcon = document.getElementById("download-icon");

(function() {
  const { platform } = navigator;

  if (platform === "Win32") {
    buttonIcon.classList.add("icon-windows");
  } else if (platform.startsWith("Linux")) {
    buttonIcon.classList.add("icon-linux");
  } else if (platform.startsWith("Mac")) {
    buttonIcon.classList.add("icon-apple");
  } else {
    downloadButton.style.display = "none";
    return;
  }

  const callback = data => {
    let link;

    if (platform === "Win32") {
      link = data[0].assets.find(x => x.name.endsWith(".exe"))
        .browser_download_url;
    } else if (platform.startsWith("Linux")) {
      link = data[0].assets.find(x => x.name.endsWith("x86_64.AppImage"))
        .browser_download_url;
    } else if (platform.startsWith("Mac")) {
      link = data[0].assets.find(x => x.name.endsWith(".dmg"))
        .browser_download_url;
    }

    downloadButton.setAttribute("href", link);
  };

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.responseText);
      callback(res);
    }
  };
  xhr.open("GET", "https://api.github.com/repos/wexond/wexond/releases", true);
  xhr.send();
})();


particlesJS("particles", {
  "particles": {
    "number": {
      "value": 20,
      "density": {
        "enable": true,
        "value_area": 500
      }
    },
    "color": {
      "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#b6b2b2"
      }
    },
    "opacity": {
      "value": 0.8,
      "random": true
    },
    "size": {
      "value": 15,
      "random": true
    },
    
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});