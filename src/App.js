import React, { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [projectOpen, setProjectOpen] = useState(null);
  return (
    <>
      <motion.section
        animate={{ backgroundSize: ["120%", "100%", "120%"] }}
        transition={{ type: "spring", duration: 40, loop: Infinity }}
        className="hero is-large is-hidden-mobile"
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
      <section
        className="hero is-fullheight is-hidden-tablet"
        style={{
          background: "transparent url(/hero.jpg) center center no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="hero-body"
          style={{ backgroundColor: "rgba(30, 39, 46,0.3)" }}
        >
          <div className="container">
            <h2 className="title is-3 has-text-white">CARL-JOHAN EKBERG</h2>
          </div>
        </div>
        <div className="section">
          <motion.div
            className="is-pulled-right title has-text-white"
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ type: "spring", loop: Infinity }}
          >
            <i className="fas fa-arrow-down has-text-centered "></i>
          </motion.div>
        </div>
      </section>
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
      <section className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <p className="title">Previous work</p>
            <div className="columns is-multiline is-centered">
              {[1, 2, 3].map((project) => (
                <div key={project} className="column is-4">
                  <a
                    href="#projectDetail"
                    onClick={() => setProjectOpen(project)}
                  >
                    <motion.div className="card" whileHover={{ scale: 1.1 }}>
                      <div className="card">
                        <figure
                          className="image is-4by3"
                          style={{
                            backgroundImage: `url(/gallery${project}.jpg)`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        ></figure>
                        <div className="card-content">
                          <p className="title has-text-dark">
                            project {project}
                          </p>
                          <p>project desciption</p>
                        </div>
                      </div>
                    </motion.div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="container" id="projectDetail">
            {projectOpen && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <hr />
                <p className="title">Project {projectOpen}</p>
                <p className="mb-3">
                  [MORE INFO ?? date?/company?/hashtags? ----- waiting for
                  suggestions]
                </p>
                <p className="mb-3">
                  <b>[PROJECT DESCRIPTION]</b> Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Ad commodi suscipit, ullam vitae
                  esse ex eum nam fugiat, ratione eveniet itaque quis mollitia
                  obcaecati perferendis velit corporis in? Dignissimos, omnis.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
                  tempora, praesentium dolorem totam eaque vitae dolorum non
                  eius unde deserunt? Nostrum earum accusamus labore perferendis
                  velit illo nihil placeat laboriosam. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Earum nulla, eum nostrum
                  quidem impedit praesentium eius ex esse fugit est neque,
                  cumque eligendi officia dolorem libero minus sit placeat.
                  Necessitatibus!
                </p>
                <div
                  style={{ backgroundColor: "#808e9b", height: 500 }}
                  className="box"
                >
                  <b>[Pictures/Videos] :</b>
                  <p>
                    [differents possibilities : 1-2 big pictures OR sevral
                    pictures -> album display]
                  </p>
                  <p>[1 video (optional)]</p>
                </div>
              </motion.div>
            )}
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
        <div className="column is-hidden-mobile">
          <motion.section
            className="hero is-dark"
            animate={{ backgroundSize: ["120%", "100%", "120%"] }}
            transition={{ type: "spring", duration: 40, loop: Infinity }}
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
        <div className="column is-hidden-tablet">
          <section
            className="hero is-dark"
            style={{
              background:
                "transparent url(/profile.jpg) center center no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div
              className="hero-body"
              style={{
                backgroundColor: "rgba(30, 39, 46,0.3)",
              }}
            >
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
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
