"use strict"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      startCoord: 0,
      isDownSectionShown: true
    };

    this.start = this.start.bind(this);
    this.end = this.end.bind(this);
    this.navClickHandle = this.navClickHandle.bind(this);
    this.downClickHandle = this.downClickHandle.bind(this);
  };

  start(e) {
    document.body.style.overflow = "hidden";
    let startCoord = e.changedTouches[0].screenY;
    this.setState({ startCoord });
  }

  end(e) {
    const endCoord = e.changedTouches[0].screenY;
    const diff = endCoord - this.state.startCoord;
    const navItemList = document.querySelectorAll(".nav__item");
    if (diff < -10) {
      window.scrollBy({
        "behavior": "smooth",
        "left": 0,
        "top": 768
      });
      setTimeout(() => document.body.style.overflow = "", 400);
      
      for (let navItem of navItemList) {
        navItem.classList.remove("nav__item_active");
      }

      switch(e.target.closest(".slide").classList[0]) {
        case "slide1":
          navItemList[1].classList.add("nav__item_active");
          this.setState({ isDownSectionShown: false });
          break;
        case "slide2":
          navItemList[2].classList.add("nav__item_active");
          break;
        case "slide3":
          navItemList[2].classList.add("nav__item_active");
          break;
        default:
          break;
      }

    } else if (diff > 10) {
      window.scrollBy({
        "behavior": "smooth",
        "left": 0,
        "top": -768
      });
      setTimeout(() => document.body.style.overflow = "", 400);

      for (let navItem of navItemList) {
        navItem.classList.remove("nav__item_active");
      }

      switch(e.target.closest(".slide").classList[0]) {
        case "slide1":
          navItemList[0].classList.add("nav__item_active");
          break;
        case "slide2":
          navItemList[0].classList.add("nav__item_active");
          this.setState({ isDownSectionShown: true });
          break;
        case "slide3":
          navItemList[1].classList.add("nav__item_active");
          break;
        default:
          break;
      }
    }
  }

  navClickHandle(e) {

    for (let navItem of document.querySelectorAll(".nav__item")) {
      navItem.classList.remove("nav__item_active");
    }

    e.target.classList.add("nav__item_active");

    switch(e.target.id) {
      case "first":
        window.scrollTo({
          "behavior": "smooth",
          "left": 0,
          "top": 0
        });
        this.setState({ isDownSectionShown: true });
        break;
      case "second":
        window.scrollTo({
          "behavior": "smooth",
          "left": 0,
          "top": 768
        });
        this.setState({ isDownSectionShown: false });
        break;
      case "third":
        window.scrollTo({
          "behavior": "smooth",
          "left": 0,
          "top": 1536
        });
        this.setState({ isDownSectionShown: false });
        break;
      default:
        break;
    }
  }

  downClickHandle() {
    window.scrollBy({
      "behavior": "smooth",
      "left": 0,
      "top": 768
    });
   
    const navItemActive = document.querySelector(".nav__item_active");

    navItemActive.classList.remove("nav__item_active");
    navItemActive.nextElementSibling.classList.add("nav__item_active");

    this.setState({ isDownSectionShown: false });
  }

  render() {
    return (
      <React.Fragment>
        <Nav navClickHandle={this.navClickHandle} />

        <Slide1
          start={this.start}
          end={this.end}
        />
        
        <Slide2 
          start={this.start}
          end={this.end}
        />

        <Slide3
          start={this.start}
          end={this.end}
        />

        {
          this.state.isDownSectionShown ?
          <DownSection
            downClickHandle={this.downClickHandle}
            phrase="Листайте вниз"
          /> :
          null
        }
      </React.Fragment>
    );
  }
}

function Slide1(props) {
  const { start, end } = props;

  const topPeakStyle = {
    left: "560px",
    top: "244px",
    width: "55px",
    height: "55px"
  };

  const leftPeakStyle = {
    left: "277px",
    top: "406px",
    width: "25px",
    height: "25px"
  };

  const rightPeakStyle = {
    left: "819px",
    top: "493px",
    width: "20px",
    height: "20px"
  };

  const bottomPeakStyle = {
    left: "477px",
    top: "514px",
    width: "20px",
    height: "20px"
  };

  const topPhraseStyle = {
    left: "625px",
    top: "255px"
  };

  const leftPhraseStyle = {
    left: "235px",
    top: "375px"
  };

  const rightPhraseStyle = {
    left: "795px",
    top: "460px"
  };

  const bottomPhraseStyle = {
    left: "377px",
    top: "484px"
  };
  
  return (
    <div
      onTouchStart={start}
      onTouchEnd={end}
      className="slide1 slide"
    >
      <div className="slide1__title">
        Всегда ли цели терапии СД2 <br />
        на поверхности?
      </div>
      <PeakPhrase
        phraseStyle={topPhraseStyle}
        peakStyle={topPeakStyle} 
        phrase="Цель по HbA1c"
      />
      <PeakPhrase
        phraseStyle={leftPhraseStyle}
        peakStyle={leftPeakStyle} 
        phrase="Гипогликемия"
      />
      <PeakPhrase
        phraseStyle={rightPhraseStyle}
        peakStyle={rightPeakStyle} 
        phrase="СС риски"
      />
      <PeakPhrase
        phraseStyle={bottomPhraseStyle}
        peakStyle={bottomPeakStyle} 
        phrase="Осложнения СД"
      />
  </div>
  );
}

function Slide2(props) {
  const { start, end } = props;

  const styleIce1 = {
    left: "90px",
    top: "160px",
    width: "50px"
  }

  const styleIce2 = {
    left: "230px",
    top: "440px",
    width: "100px"
  }

  const styleIce3 = {
    left: "690px",
    top: "580px",
    width: "70px"
  }

  const styleIce4 = {
    right: "0px",
    top: "40px",
    width: "140px"
  }

  return (
    <div 
      onTouchStart={start}
      onTouchEnd={end}
      className="slide2 slide"
    >
      <div className="slide2__title">
        Основа терапии - <br />
        патогенез СД2
      </div>

      <img
        className="ice"
        src="../imgs/second/ice1.png"
        style={styleIce1}
      />
      
      <img
        className="ice"
        src="../imgs/second/ice2.png"
        style={styleIce2}
      />

      <img
        className="ice"
        src="../imgs/second/ice3.png"
        style={styleIce3}
      />

      <img
        className="ice"
        src="../imgs/second/ice4.png"
        style={styleIce4}
      />
  </div>
  );
}

class Slide3 extends React.Component {
  constructor() {
    super();
    this.state = {
      sliderValue: 0,
      sliderTouch: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.localStart = this.localStart.bind(this);
    this.localEnd = this.localEnd.bind(this);
  };

  handleChange(e) {
    let value = e.target.value;

    this.setState({ sliderValue: value });

    const bottomSlides = document.querySelector(".slide3__bottom-slides");

    if (value >= 66) {
      bottomSlides.style.transform = "translateX(-2048px)"
    }

    if (value <= 33) {
      bottomSlides.style.transform = "translateX(0)"
    }

    if (value > 33 && value < 66) {
      bottomSlides.style.transform = "translateX(-1024px)"
    }
  }

  localStart(e) {
    document.body.style.overflow = "hidden";
    let sliderTouch = false;

    if (e.target.classList[0] === "slide3__slider") {
      sliderTouch = true;
      this.setState({ sliderTouch });
    } else {
      this.setState({ sliderTouch });
    }

    if (!sliderTouch) {
      this.props.start(e);
    }
  }

  localEnd(e) {
    const sliderTouch = this.state.sliderTouch;  

    if (sliderTouch) {
      let value = document.querySelector(".slide3__slider").value;

      if (value >= 66) value = 100;
      if (value <= 33) value = 0;
      if (value > 33 && value < 66) value = 50;
  
      this.setState({ sliderValue: value });

      return;
    } else {
      this.props.end(e);
    }
  }

  render() {
    const styleLeftIce1 = {
      left: "25px",
      bottom: "5px",
      opacity: ".35",
      width: "200px"
    }
  
    const styleLeftIce2 = {
      right: "280px",
      top: "230px",
      width: "100px",
      opacity: ".4"
    }
  
    const styleLeftIce3 = {
      right: "55px",
      top: "110px",
      width: "30px",
      opacity: ".44"
    }

    const styleMidIce1 = {
      left: "440px",
      top: "120px",
      opacity: "0.44",
      width: "30px"
    }
  
    const styleMidIce2 = {
      left: "50px",
      top: "250px",
      opacity: ".44",
      width: "90px"
    }
  
    const styleMidIce3 = {
      right: "0px",
      transform: "translateX(40%)",
      bottom: "5px",
      width: "140px",
      opacity: ".55"
    }

    const styleRightIce1 = {
      left: "0px",
      top: "125px",
      opacity: ".8",
      width: "30px"
    }
  
    const styleRightIce2 = {
      left: "200px",
      bottom: "0px",
      width: "170px"
    }
  
    const styleRightIce3 = {
      right: "0px",
      top: "240px",
      width: "70px"
    }

    let inputStyle = "slide3__slider";
    const sliderValue = +this.state.sliderValue;

    if (sliderValue === 100) {
      inputStyle = "slide3__slider right";
    } else if (sliderValue === 0) {
      inputStyle = "slide3__slider left";
    }

    return (
      <div
        className="slide3 slide"
        onTouchStart={this.localStart}
        onTouchEnd={this.localEnd}
      >
        <div className="slide3__bottom-slides">
          <div className="slide3__left-slide">
            <img src="../imgs/third/left/left-scheme.png" className="left-scheme" />

            <div className="slide3__title">
              Звенья патогенеза СД2
            </div>

            <img
              className="left-ice1 ice"
              src="../imgs/third/left/ice1.png"
              style={styleLeftIce1}
            />
            
            <img
              className="left-ice2 ice"
              src="../imgs/third/left/ice2.png"
              style={styleLeftIce2}
            />

            <img
              className="left-ice3 ice"
              src="../imgs/third/left/ice3.png"
              style={styleLeftIce3}
            />
          </div>

          <div className="slide3__mid-slide">
            <img src="../imgs/third/mid/mid-scheme.png" className="mid-scheme" />

            <div className="slide3__title">
              Смертельный октет
            </div>

            <img
              className="mid-ice1 ice"
              src="../imgs/third/mid/ice1.png"
              style={styleMidIce1}
            />
            
            <img
              className="mid-ice2 ice"
              src="../imgs/third/mid/ice2.png"
              style={styleMidIce2}
            />

            <img
              className="mid-ice3 ice"
              src="../imgs/third/mid/ice3-2.png"
              style={styleMidIce3}
            />
          </div>
          
          <div className="slide3__right-slide">
            <img src="../imgs/third/right/right-scheme.png" className="right-scheme" />

            <div className="slide3__title">
              Звенья патогенеза СД2
            </div>

            <img
              className="right-ice1 ice"
              src="../imgs/third/right/ice1.png"
              style={styleRightIce1}
            />
            
            <img
              className="right-ice2 ice"
              src="../imgs/third/right/ice2.png"
              style={styleRightIce2}
            />

            <img
              className="right-ice3 ice"
              src="../imgs/third/right/ice3.png"
              style={styleRightIce3}
            />
          </div>
        </div>

        <input
          className={inputStyle}
          type="range"
          min="0"
          max="100"
          value={this.state.sliderValue}
          onChange={this.handleChange}
        />

        <div className="slide3__dates-block">
          <span>1988</span>
          <span>2009</span>
          <span>2016</span>
        </div>
    </div>
    );
  }
}

function PeakPhrase(props) {
  const { peakStyle, phrase, phraseStyle } = props;

  return (
    <React.Fragment>
      <span
        className="phrase-container"
        style={phraseStyle}>{phrase}
      </span>
      <div
        className="peak-container"
        style={peakStyle}
      >
          <span className="wave-center"></span>
          <span className="wave"></span>
          <span className="wave-boundary"></span>
      </div>
    </React.Fragment>
  );
}

function Nav(props) {
  return (
    <div className="nav">
      <button id="first" onClick={e => props.navClickHandle(e)} className="nav__item nav__item_active"></button>
      <button id="second" onClick={e => props.navClickHandle(e)} className="nav__item"></button>
      <button id="third" onClick={e => props.navClickHandle(e)} className="nav__item"></button>
    </div>
  );
}

function DownSection(props) {
  const { phrase } = props;

  return (
    <div className="down-section">
      <span className="down-section__text">{phrase}</span>
      <div onClick={() => props.downClickHandle()} className="down-section__arrow"></div>
      <div className="down-section__blured-part"></div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);