import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home container">
      <Helmet>
        <title>The best apps and things for you</title>
        <meta
          name="description"
          content="This site was created by Fazilov Saidjon and this site has many features."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <h1>The best apps and things for you</h1>
      <div className="home-row">
        <Link
          target="_blank"
          to={
            "https://www.google.com/search?q=calculator&oq=calculator&gs_lcrp=EgZjaHJvbWUyDggAEEUYORhDGIAEGIoFMgYIARAjGCcyDAgCECMYJxiABBiKBTIMCAMQABhDGIAEGIoFMgwIBBAAGEMYgAQYigUyBwgFEAAYgAQyBwgGEAAYgAQyBggHEEUYPdIBCDE1MjhqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
          }
        >
          <div className="home-box">
            <h2 className="home-card-title">Calculator</h2>
            <p className="home-card-text">
              It is the best calculator in the world and it has many functions.
            </p>
            <i class="bx bx-calculator"></i>
          </div>
        </Link>
        <Link
          to={
            "https://www.google.com/search?q=weather&oq=weather&gs_lcrp=EgZjaHJvbWUyEQgAEEUYORhDGMkDGIAEGIoFMgwIARAjGCcYgAQYigUyDAgCEAAYQxiABBiKBTIMCAMQABhDGIAEGIoFMgoIBBAAGJIDGIAEMgwIBRAAGEMYgAQYigUyBggGEEUYPTIGCAcQRRg80gEIMjQ3NWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
          }
          target="_blank"
        >
          <div className="home-box">
            <h2 className="home-card-title">Weather</h2>
            <p className="home-card-text">
              This weather app is the perfect helper to get you ready for every
              day.
            </p>
            <i class="bx bx-sun"></i>
          </div>
        </Link>
        <Link
          target="_blank"
          to={
            "https://www.google.com/search?q=dollar+valyuta&sca_esv=187375755702f53b&sxsrf=ADLYWILeg2K2DeV6hD82j6UmwLDaiPLAiw%3A1730786986528&ei=qrYpZ8v4H9POwPAP-Yrg2QQ&ved=0ahUKEwjL9Y38w8SJAxVTJxAIHXkFOEsQ4dUDCA8&uact=5&oq=dollar+valyuta&gs_lp=Egxnd3Mtd2l6LXNlcnAiDmRvbGxhciB2YWx5dXRhSABQAFgAcAB4AJABAJgBAKABAKoBALgBA8gBAJgCAKACAJgDAJIHAKAHAA&sclient=gws-wiz-serp"
          }
        >
          <div className="home-box">
            <h2 className="home-card-title">Dollar currency</h2>
            <p className="home-card-text">
              This dollar currency converter is accurate and fast for users
              provides exchange rates.
            </p>
            <i class="bx bx-dollar-circle"></i>
          </div>
        </Link>
        <Link
          target="_blank"
          to={
            "https://www.google.com/search?q=Blogging+platforms&sca_esv=7f167d0aab507d88&sxsrf=ADLYWIIxoWG94fsTVMdsvrAH9Gl5IsuKGA%3A1730787153845&ei=UbcpZ6PiMqKNwPAP55OxsQo&ved=0ahUKEwjjzvHLxMSJAxWiBhAIHedJLKYQ4dUDCA8&uact=5&oq=Blogging+platforms&gs_lp=Egxnd3Mtd2l6LXNlcnAiEkJsb2dnaW5nIHBsYXRmb3JtczILEAAYgAQYkQIYigUyCxAAGIAEGJECGIoFMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyCxAAGIAEGJECGIoFMgUQABiABDIFEAAYgARI2gpQAFgAcAB4AZABAJgB3wGgAd8BqgEDMi0xuAEDyAEA-AEC-AEBmAIBoALnAZgDAOIDBRIBMSBAkgcDMi0xoAfPBQ&sclient=gws-wiz-serp"
          }
        >
          <div className="home-box">
            <h2 className="home-card-title">Blog Platforms</h2>
            <p className="home-card-text">
              This blog platform is a convenient and inspiring space for
              creators and readers alike.
            </p>
            <i class="bx bxl-drupal"></i>
          </div>
        </Link>
        <Link
          target="_blank"
          to={
            "https://www.google.com/search?q=online+market&oq=online+market&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBwgBEAAYgAQyBwgCEAAYgAQyDAgDEAAYFBiHAhiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIMCAkQABgUGIcCGIAE0gEIMzIxMWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
          }
        >
          <div className="home-box">
            <h2 className="home-card-title">Online Market</h2>
            <p className="home-card-text">
              This online market has all the products you need.
            </p>
            <i class="bx bx-cart"></i>
          </div>
        </Link>
        <Link target="_blank" to={"https://translate.google.com/"}>
          <div className="home-box">
            <h2 className="home-card-title">Translate</h2>
            <p className="home-card-text">
              Helps to translation of words, you can learn pronunciation and
              usage with examples.
            </p>
            <i class="bx bx-transfer"></i>
          </div>
        </Link>
        <Link target="_blank" to={"https://food.ru/"}>
          <div className="home-box">
            <h2 className="home-card-title">Food Recipe</h2>
            <p className="home-card-text">
              This application is for searching and saving recipes of various
              dishes allows.
            </p>
            <i class="bx bx-bowl-hot"></i>
          </div>
        </Link>
        <Link
          target="_blank"
          to={
            "https://www.google.com/search?q=Language+Learning+App&oq=Language+Learning+App&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBBzI1OWowajSoAgCwAgA&sourceid=chrome&ie=UTF-8"
          }
        >
          <div className="home-box">
            <h2 className="home-card-title">Language learning apps</h2>
            <p className="home-card-text">
              The best app for learning and practicing different languages.
            </p>
            <i class="bx bx-blanket"></i>
          </div>
        </Link>
        <Link
          target="_blank"
          to={
            "https://www.strikingly.com/?utm_source=google-sem&utm_medium=cpc&utm_campaign=v2-s-bb0-computers-search-hi-build_website-en&utm_content=v2a-s-bb0-computers-search-hi-build_website-build_website_bm-en&utm_term=free%20portfolio%20website%20builder&gad_source=1&gclid=Cj0KCQiA_qG5BhDTARIsAA0UHSITmXSmowWz2FXQS_rqbPx-Tul3zEXd8Da6_gsQdoU2aNI9ZSoLulwaAnBbEALw_wcB"
          }
        >
          <div className="home-box">
            <h2 className="home-card-title">Website generator app</h2>
            <p className="home-card-text">
              Build your brand. Conquer the world. Zero code or design skills
              required.
            </p>
            <i class="bx bx-code-alt"></i>
          </div>
        </Link>

        <Link
          target="_blank"
          to={
            "https://www.google.com/search?q=work+out+apps&oq=work+out+app&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIHCAIQABiABDIHCAMQABiABDIMCAQQABgUGIcCGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMgcICRAAGIAE0gEINTU3M2owajSoAgCwAgE&sourceid=chrome&ie=UTF-8"
          }
        >
          <div className="home-box">
            <h2 className="home-card-title">Workout apps</h2>
            <p className="home-card-text">
              Create an exercise schedule for those who want to exercise.
            </p>
            <i class="bx bx-cricket-ball"></i>
          </div>
        </Link>
        <Link target="_blank" to={""}>
          <div className="home-box">
            <h2 className="home-card-title">Travel Planner</h2>
            <p className="home-card-text">
              Trip planning and all the necessary information, expenses, hotels,
              places to see...
            </p>
            <i class="bx bx-leaf"></i>
          </div>
        </Link>
        <Link
          target="_blank"
          to={
            "https://www.google.com/search?q=plant+care+guide&oq=Plant+Care+Guide&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMgcIARAAGIAEMgcIAhAAGIAEMgcIAxAAGIAEMgwIBBAAGBQYhwIYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyDQgJEAAYhgMYgAQYigXSAQg2MzY0ajBqOagCALACAQ&sourceid=chrome&ie=UTF-8"
          }
        >
          <div className="home-box">
            <h2 className="home-card-title">Plant Care Guide</h2>
            <p className="home-card-text">
              Very useful for learning how to care for house plants.
            </p>
            <i class="bx bxs-florist"></i>
          </div>
        </Link>
        <Link target="_blank" to={"https://booktrack.app/"}>
          <div className="home-box">
            <h2 className="home-card-title">Book Tracker</h2>
            <p className="home-card-text">
              To record the books read and the conclusions drawn from them will
              help.
            </p>
            <i class="bx bx-book-heart"></i>
          </div>
        </Link>

        <Link target="_blank" to={"https://randomwordgenerator.com/"}>
          <div className="home-box">
            <h2 className="home-card-title">Random Word Generator</h2>
            <p className="home-card-text">
              An ideal program for creativity and fun games.
            </p>
            <i class="bx bxl-wordpress"></i>
          </div>
        </Link>
        <Link target="_blank" to={"https://poki.com"}>
          <div className="home-box">
            <h2 className="home-card-title">Online Games</h2>
            <p className="home-card-text">
              Website for playing free online games on your mobile, tablet or
              computer
            </p>
            <i class="bx bx-dice-3"></i>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
