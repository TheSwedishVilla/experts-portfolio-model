import React from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <motion.section
        animate={{ backgroundSize: ["120%", "100%", "120%"] }}
        transition={{ type: "spring", duration: 60, loop: Infinity }}
        className="hero is-large"
        style={{
          background: "transparent url(/hero.jpg) center center no-repeat",
          backgroundSize: "100%",
        }}
      >
        <div style={{ backgroundColor: "rgba(30, 39, 46,0.3)" }}>
          <div className="hero-body">
            <div className="container">
              <h2 className="title is-1 has-text-white">CARL-JOHAN EKBERG</h2>
            </div>
          </div>
        </div>
      </motion.section>
      <section className="section">
        <div className="container mt-6">
          <div className="columns">
            <div className="column">
              <div className="content">
                <p className="heading is-size-5">Title</p>
                <p>CREATIVE DIRECTOR & ART DIRECTOR</p>
                <hr className="my-3" />
                <p className="heading is-size-5">SERVICES</p>
                <p>
                  BRAND GUIDELINES, FILM CAMPAIGNS, PHOTOGRAPHY, LOGOTYPES, FULL
                  CREATIVE IDÉATION,
                </p>
                <hr className="my-3" />
                <p className="heading is-size-5">INDUSTRIES</p>
                <p>
                  ELECTRIC CARS, JEWELLERY, SUSTAINABLE BRANDS, INTERNATIONAL
                  BRANDS,
                </p>
                <hr className="my-3" />
              </div>
            </div>
            <div className="column is-1"></div>
            <div className="column">
              <div className="content">
                <p className="title is-3 has-text-primary">
                  Conceptual Creative Director with a distinct visual expression
                </p>
                <p>
                  When creating visual identities, concepts and campaigns for
                  complex businesses Carl-Johan always communicates clearly and
                  simply in both digital and offline arenas, with a distinct
                  visual expression. Clients include SAS, Volvo, Electrolux,
                  Bentley, Kia as well as Jewellery and exclusive design as Lars
                  Wallin. The foundation of his photography work is always
                  honest when he explores and enhances a brand's iconic design
                  features. Carl-Johan is born on a farm and simply loves the
                  outdoors, he is also a passionate skier.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-multiline">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
                <div className="column is-3" key={`gallery${number}`}>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    style={{
                      backgroundColor: "transparent",
                      backgroundImage: `url(/gallery${number}.jpg)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      height: "250px",
                      lineHeight: "250px",
                    }}
                  >
                    <motion.div
                      className="has-text-centered"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.8 }}
                      style={{
                        backgroundColor: "rgba(30, 39, 46,1.0)",
                        height: "100%",
                      }}
                    >
                      <i className="fas fa-search has-text-white is-size-3"></i>
                    </motion.div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="hero mt-6"
        style={{ backgroundColor: "rgba(210, 218, 226, 0.5)" }}
      >
        <div className="hero-body">
          <div className="container">
            <div className="columns is-multiline is-mobile">
              {[1, 2, 3, 4, 5, 6].map((number) => (
                <div
                  className="column is-4-mobile is-2-tablet"
                  key={`logo${number}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    style={{
                      backgroundColor: "transparent",
                      backgroundImage: `url(/logo${number}.png)`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      height: "100px",
                    }}
                  ></motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="columns is-gapless is-multiline">
        <div className="column is-12-tablet is-8-desktop">
          <section className="hero is-primary">
            <div className="hero-body">
              <div className="container">
                <div className="has-text-centered">
                  <motion.i
                    animate={{ rotateZ: [20, -20, 20], scale: [1, 2, 1] }}
                    transition={{ type: "spring", duration: 3, loop: Infinity }}
                    className="fas fa-quote-right is-size-2 my-6"
                  ></motion.i>
                  <p className="title">
                    “When sharing a passion, a straightforward creative process
                    in close collaboration with the client is where Carl-Johans
                    excellence shines through, adding exceptional brand value”
                  </p>
                </div>
                <p className="subtitle mb-6">THE SWEDISH VILLA</p>
              </div>
            </div>
          </section>
        </div>
        <div className="column">
          <motion.section
            className="hero is-dark"
            animate={{ backgroundSize: ["120%", "100%", "120%"] }}
            transition={{ type: "spring", duration: 60, loop: Infinity }}
            style={{
              background:
                "transparent url(/profile.jpg) center center no-repeat",
              backgroundSize: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(30, 39, 46,0.3)",
                height: "100%",
              }}
            >
              <div className="hero-body">
                <div className="container has-text-centered mt-6">
                  <p className="title has-color-white">Connect !</p>
                  <p>
                    Would you like to know more about or meet our Villa member
                    Carl-Johan? Email our connector.
                  </p>
                  <button className="button is-primary is-rounded">
                    Message connector
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
}

export default App;
