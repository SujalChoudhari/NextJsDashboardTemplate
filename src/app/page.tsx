"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
// import "./home.module.css"
export default function Home() {

  useEffect(() => {
    // @ts-ignore
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#main'),
      smooth: true
    });


    function page4Animation() {
      var elemC = document.querySelector("#elem-container")
      var fixed = document.querySelector("#fixed-image")
      elemC?.addEventListener("mouseenter", function () {
        //@ts-ignore
        fixed.style.display = "block"
      })
      elemC?.addEventListener("mouseleave", function () {
        // @ts-ignore
        fixed.style.display = "none"
      })

      var elems = document.querySelectorAll(".elem")
      elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
          var image = e.getAttribute("data-image")
          // @ts-ignore
          fixed.style.backgroundImage = `url(${image})`
        })
      })
    }

    function swiperAnimation() {
      // @ts-ignore
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
      });
    }
    function menuAnimation() {

      var menu = document.querySelector("nav h3")
      var full = document.querySelector("#full-scr")
      var navimg = document.querySelector("nav img")
      var flag = 0
      menu?.addEventListener("click", function () {
        if (flag == 0) {
          // @ts-ignore
          full.style.top = 0
          // @ts-ignore
          navimg.style.opacity = 0
          flag = 1
        } else {
          // @ts-ignore
          full.style.top = "-100%"
          // @ts-ignore
          navimg.style.opacity = 1
          flag = 0
        }
      })
    }

    function loaderAnimation() {
      var loader = document.querySelector("#loader")
      setTimeout(function () {
        // @ts-ignore
        if (loader && loader.style) { loader.style.top = "-100%" }
      }, 4200)
    }

    try {
      swiperAnimation()
      page4Animation()
      menuAnimation()
      loaderAnimation()
    }
    catch (e) {
      // Ignore 
    }

    // Clean up the LocomotiveScroll instance when the component unmounts
    return () => {
      scroll.destroy();
    };
  }, []); // Empty dependency array to run the effect only once when the component mounts


  return (
    <>
      <div id="fixed-image">
      </div>

      <div id="main">
        <div id="page1">
          <nav>
            <img src="./instaprlogo1.png" width="200px" alt="" />
            <div id="nav-part2">
              <h4><Link href="/marketplace">Explore</Link></h4>
              <h4><Link href="/home">Dashboard</Link></h4>
              <h4><Link href="https://fellows.rookhq.com">Contact</Link></h4>
            </div>
            <h3>Menu</h3>
          </nav>
          <div id="center">
            <div id="left">
              <h3>At InstaPR, we are committed to crafting
                compelling narratives, building impactful
                relationships, and navigating the ever-evolving
                landscape of public relations to ensure your brand's
                success and enduring legacy.
              </h3>
            </div>
            <div id="right">

              <h1>YOUR PATH<br />
                TO <br />
                EXCEPTIONAL<br />
                PR<br />
                SOLUTIONS</h1>
            </div>

          </div>
          <div id="hero-shape">
            <div id="hero-1"></div>
            <div id="hero-2"></div>
            <div id="hero-3"></div>
          </div>
          <video autoPlay loop muted src="./video.mp4"></video>
        </div>
        <div id="page2">
          <div id="moving-text">
            <div className="con">
              <h1>CRAFTING</h1>
              <div id="gola"></div>
              <h1>CONNECTIONS</h1>
              <div id="gola"></div>
              <h1>SHAPING</h1>
              <div id="gola"></div>
              <h1>REPUTATIONS</h1>
              <div id="gola"></div>
            </div>
            <div className="con">
              <h1>CRAFTING</h1>
              <div id="gola"></div>
              <h1>CONNECTIONS</h1>
              <div id="gola"></div>
              <h1>SHAPING</h1>
              <div id="gola"></div>
              <h1>REPUTATIONS</h1>
              <div id="gola"></div>
            </div>
            <div className="con">
              <h1>CRAFTING</h1>
              <div id="gola"></div>
              <h1>CONNECTIONS</h1>
              <div id="gola"></div>
              <h1>SHAPING</h1>
              <div id="gola"></div>
              <h1>REPUTATIONS</h1>
              <div id="gola"></div>
            </div>
          </div>
          <div id="page2-bottom">
            <h2>
              HOW<br />
              WE<br />
              WORK?
            </h2>
            <h1>Select your choice of publication. After, we<br />
              will Schedule Your Call with Our Content<br />
              writer Who Will write your Article and Know<br />
              Your Brand Story. The article is 800 to 1000<br />
              words, We need one Image and a Backlink<br />
              for the publication from your side. This<br />
              publication is for Lifetime and the article is<br />
              Organic No Sponsored Content or Brand<br />
              post is Provided by our Side.<br />
            </h1>
            <div id="bottom-part2">
              <img src="https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-500.jpg"
                alt="" />
              <p>We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas
                into reality. We’re here to partner with you through every step of the process and know that
                relationships are the most important things we build.</p>
            </div>
          </div>
          <div id="gooey">

          </div>
        </div>
        <div id="page3">
          <div id="elem-container">
            <div id="elem1" className="elem"
              data-image="https://images.unsplash.com/photo-1701001308648-7b731a52b8d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D">
              <div className="overlay"></div>
              <h2>Proven Track Record:</h2>
              <h3>Our success stories speak for themselves. We have a history of
                delivering exceptional results for diverse clients across various
                industries.
              </h3>
            </div>
            <div className="elem"
              data-image="https://images.unsplash.com/photo-1700975928909-da4a46227a47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8">
              <div className="overlay"></div>
              <h2>Dedicated Team of Experts:</h2>
              <h3>Our team comprises seasoned PR professionals and analysts
                who are passionate about driving your brand's success.
              </h3>
            </div>
            <div className="elem"
              data-image="https://images.unsplash.com/photo-1701077137611-9be394bf62f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D">
              <div className="overlay"></div>
              <h2>Client-Centric Approach:</h2>
              <h3>Your satisfaction is our priority. We maintain transparent
                communication, listen attentively to your needs, and adapt
                swiftly to changes.
              </h3>
            </div>
            <div className="elem"
              data-image="https://images.unsplash.com/photo-1701014159309-4a8b84faadfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D">
              <div className="overlay"></div>
              <h2>Innovation and Adaptability:</h2>
              <h3>We thrive in an ever-evolving PR landscape, constantly
                adapting strategies to stay ahead of trends and deliver cutting-edge solutions.
              </h3>
            </div>
            <div className="elem"
              data-image="https://images.unsplash.com/photo-1700924546093-f914fd5b8814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D">
              <div className="overlay"></div>
              <h2>Long-Term Partnerships:</h2>
              <h3>We don’t just aim for immediate success; we build lasting
                relationships that foster growth and mutual success for years to
                come.
              </h3>
            </div>
          </div>
        </div>

        <div id="page5">

        </div>
        <div id="full-scr">
          <div id="full-div1">

          </div>
        </div>
      </div>
      <div id="footer">
        <div id="footer-div">

        </div>
        <h1>InstaPR</h1>
        <h3><Link href="/marketplace">Explore</Link></h3>
        <h3><Link href="/home"> Dashboard</Link></h3>
        <h3><Link href="https://fellows.rookhq.com"> Contact</Link></h3>
        <div id="footer-bottom">

        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js" />
      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" />
    </>
  );
}
