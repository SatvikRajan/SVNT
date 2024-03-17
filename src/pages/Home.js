import React, { useEffect, useRef } from 'react';
import ips from '../images/ips.png';
import ipn from '../images/ipn.png';
import str from '../images/str.png';
import '../css/carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap'; // Import Bootstrap JS

export default function Home() {
  const yearsRef = useRef(null);

  function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const timeElapsed = timestamp - startTimestamp;
      const progress = easeInOutQuad(Math.min(timeElapsed / duration, 1));
      element.textContent = Math.floor(progress * (end - start) + start);
      if (timeElapsed < duration) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  useEffect(() => {
    const multipleCardCarousel = document.querySelector("#carouselExampleControls");
    if (window.matchMedia("(min-width: 768px)").matches) {
      const carouselWidth = document.querySelector(".carousel-inner").scrollWidth;
      const cardWidth = document.querySelector(".carousel-item").clientWidth;
      let scrollPosition = 0;

      document.querySelector("#carouselExampleControls .carousel-control-next").addEventListener("click", () => {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
          scrollPosition += cardWidth;
          document.querySelector("#carouselExampleControls .carousel-inner").scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
          });
        }
      });

      document.querySelector("#carouselExampleControls .carousel-control-prev").addEventListener("click", () => {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          document.querySelector("#carouselExampleControls .carousel-inner").scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
          });
        }
      });
    } else {
      multipleCardCarousel.classList.add("slide");
    }
  }, []);

  useEffect(() => {
    const yearsElement = yearsRef.current;
    const values = yearsElement.querySelectorAll('.value');
    const duration = 2000;
    values.forEach((value, index) => {
      animateValue(value, 0, parseInt(value.textContent), duration);
    });
  }, []);

  return (
    <div className="home">
      <div class="carousel1"></div>
      <div className="home-start shiny">
        <div className="row years" ref={yearsRef}>
          <div className="col text-center">
            <span></span>
            <p className="value number5">5</p>
            <p className="x">Clients</p>
          </div>
          <div className="d-flex align-items-center x1 col">
            <p className="value number20">20</p>
            <p style={{ fontSize: '30px' }}>Years</p>
          </div>
          <div className="text-center col">
            <p className="value number60">10</p>
            <p className="x">Projects</p>
          </div>
        </div>
        <div className="lorem container d-flex pt-5 text-light">
          <p style={{ width: '60%', lineHeight: '40px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            exmmodo consequat. Duis aute irure dolor in reprehenderi
          </p>
          <p className="ms-auto align-self-end fs-4 readmore">Read more About us</p>
        </div>
      </div>
      <div className="whyus">Why Choose Us</div>
      <div className="mainpage">
        <div className="whybest">What We Do Best</div>
        <div className="partners">Partners</div>
        <div className="case-studies">
          <h1>Case Studies</h1>
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="card-1">
                  <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt=""/>
                    <div class="card-content">
                      <h2>Card Heading</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.</p>
                      <a href="#" class="button">
                        Find out more
                        <span class="material-symbols-outlined">arrow_right_alt</span>
                      </a>
                    </div>
                </div>
                <div class="card-1">
                  <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt=""/>
                    <div class="card-content">
                      <h2>Card Heading</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.</p>
                      <a href="#" class="button">
                        Find out more
                        <span class="material-symbols-outlined">arrow_right_alt</span>
                      </a>
                    </div>
                </div>
                <div class="card-1">
                  <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt=""/>
                    <div class="card-content">
                      <h2>Card Heading</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.</p>
                      <a href="#" class="button">
                        Find out more
                        <span class="material-symbols-outlined">arrow_right_alt</span>
                      </a>
                    </div>
                </div>
                <div class="card-1">
                  <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt=""/>
                    <div class="card-content">
                      <h2>Card Heading</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.</p>
                      <a href="#" class="button">
                        Find out more
                        <span class="material-symbols-outlined">arrow_right_alt</span>
                      </a>
                    </div>
                </div>
                <div class="card-1">
                  <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt=""/>
                    <div class="card-content">
                      <h2>Card Heading</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.</p>
                      <a href="#" class="button">
                        Find out more
                        <span class="material-symbols-outlined">arrow_right_alt</span>
                      </a>
                    </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="trusted d-flex">
          <div className="trustedtext">
            <h1>Trusted Allies</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lorem23
            </p>
          </div>
          <div class="cont">
            <div class="caro">
              <div class="carousel__face">
                {/* <span className="hi">This is something</span> */}
              </div>
              <div class="carousel__face">
                {/* <span className="hi">Very special</span> */}
              </div>
              <div class="carousel__face">
                {/* <span className="hi">Special is the key</span> */}
              </div>
              <div class="carousel__face">
                {/* <span className="hi">For you</span> */}
              </div>
              <div class="carousel__face">
                {/* <span className="hi">Just give it</span> */}
              </div>
              <div class="carousel__face">
                {/* <span className="hi">A try</span> */}
              </div>
              <div class="carousel__face">
                {/* <span className="hi">And see</span> */}
              </div>
              <div class="carousel__face">
                {/* <span className="hi">How IT Works</span> */}
              </div>
              <div class="carousel__face">
                {/* <span className="hi">Woow</span> */}
              </div>
              <div class="carousel__face">
                {/* <span className="hi">Woow</span> */}
              </div>
              <div class="carousel__face">
                {/* <span className="hi">Woow</span> */}
              </div>
              <div class="carousel__face">
                {/* <span className="hi">Woow</span> */}
              </div>
              <div class="carousel__face">
                {/* <span className="hi">Woow</span> */}
              </div>
              <div class="carousel__face">
                {/* <span className="hi">Woow</span> */}
              </div>
              <div class="carousel__face">
                {/* <span className="hi">Woow</span> */}
              </div>
              <div class="carousel__face">
                {/* <span className="hi">Woow</span> */}
              </div>
              <div class="carousel__face">
                {/* <span className="hi">Woow</span> */}
              </div>
              <div class="carousel__face">
                {/* <span className="hi">Woow</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
