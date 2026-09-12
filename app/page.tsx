export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero" id="home">
        <video
          className="heroVideo"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/herovideo.mp4" type="video/mp4" />
        </video>

        <div className="heroOverlay" />

        <nav className="navbar">
          <a href="#home" className="logo">
            NYONNIE<span>.</span>
          </a>

          <div className="navLinks">
            <a href="#about">About</a>
            <a href="#journey">Journey</a>
            <a href="#training">Experience</a>
            <a href="#wellness">Wellness</a>
            <a href="#vision">Goals</a>
            <a href="#connect">Follow</a>
          </div>
        </nav>

        <div className="heroContent">
          <p className="eyebrow">
            PERSONAL PORTFOLIO • EXERCISE SCIENCE • ASPIRING ATHLETIC TRAINER
          </p>

          <h1>
            THIS IS
            <br />
            <span>NYONNIE.</span>
          </h1>

          <p className="heroText">
            A personal portfolio documenting my background, experiences,
            interests, and journey. I hold a bachelor&apos;s degree in Exercise
            Science and I&apos;m currently working toward a future career in
            Athletic Training.
          </p>

          <div className="heroButtons">
            <a href="#about" className="primaryBtn">
              Get To Know Me
            </a>

            <a href="#journey" className="secondaryBtn">
              My Journey
            </a>
          </div>
        </div>

        <div className="scrollHint">
          <span>SCROLL TO EXPLORE</span>
          <div className="scrollLine" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="sectionLabel">01 — ABOUT ME</div>

        <div className="aboutGrid">
          <div className="aboutImageWrap">
            <img src="/images/aboutimage.jpeg" alt="Nyonnie" />
          </div>

          <div className="aboutContent">
            <p className="miniTitle">GET TO KNOW ME</p>

            <h2>
              MY STORY.
              <br />
              <span>MY JOURNEY.</span>
            </h2>

            <p>
              I&apos;m Nyonnie. I have a bachelor&apos;s degree in Exercise
              Science, a lifelong connection to sports, and a growing passion
              for healthcare, wellness, fitness, and helping others.
            </p>

            <p>
              Sport has been part of my story for as long as I can remember.
              My connection to soccer began with my father, who played the game
              in Liberia and once dreamed of becoming a professional player.
              Growing up around his love for soccer and watching FIFA inspired
              me to try the sport for myself.
            </p>

            <p>
              What started as inspiration from my father became a genuine love
              of my own. Playing soccer taught me about competition,
              resilience, teamwork, discipline, and the experiences athletes
              go through both on and off the field.
            </p>

            <p>
              My interest in movement and health eventually led me to Exercise
              Science. Today, I&apos;m continuing my education and gaining
              hands-on clinical experience as I work toward becoming an
              Athletic Trainer.
            </p>

            <div className="quote">
              “I want to show up for my athletes in the ways I wish someone had
              shown up for me.”
            </div>
          </div>
        </div>
      </section>

      {/* IDENTITY */}
      <section className="identityStrip">
        <p>ATHLETE.</p>
        <p>STUDENT.</p>
        <p>BELIEVER.</p>
        <p>ASPIRING AT.</p>
      </section>

      {/* JOURNEY */}
      <section className="journey" id="journey">
        <div className="sectionLabel light">02 — MY JOURNEY</div>

        <div className="journeyHeader">
          <p className="miniTitle">WHERE I&apos;VE BEEN & WHERE I&apos;M GOING</p>

          <h2>
            LEARNING. GROWING.
            <br />
            <span>BECOMING.</span>
          </h2>

          <p className="journeyIntro">
            This portfolio is a look into the experiences that have shaped me:
            my connection to soccer, my education in Exercise Science, my
            current clinical learning, and the goals I&apos;m continuing to
            work toward.
          </p>
        </div>

        <div className="journeyCards">
          <article className="journeyCard">
            <img src="/images/soccer-1.jpeg" alt="Nyonnie playing soccer" />
            <div>
              <span>01</span>
              <h3>WHERE IT STARTED</h3>
              <p>
                My father played soccer in Liberia and once hoped to pursue the
                game professionally. His passion for soccer and love of
                watching FIFA inspired me to step onto the field and discover
                the sport for myself.
              </p>
            </div>
          </article>

          <article className="journeyCard">
            <img src="/images/soccer-2.jpeg" alt="Nyonnie soccer journey" />
            <div>
              <span>02</span>
              <h3>THE ATHLETE</h3>
              <p>
                Soccer became more than something I tried because of my father.
                I grew to love the game myself, building discipline,
                confidence, resilience, and a lifelong connection to sport.
              </p>
            </div>
          </article>

          <article className="journeyCard">
            <img src="/images/training-2.jpeg" alt="Nyonnie during her studies" />
            <div>
              <span>03</span>
              <h3>EXERCISE SCIENCE</h3>
              <p>
                Earning my bachelor&apos;s degree in Exercise Science gave me a
                stronger understanding of movement, physical health, exercise,
                and the science behind human performance.
              </p>
            </div>
          </article>
        </div>

        <div className="journeyCards">
          <article className="journeyCard">
            <img src="/images/soccer-3.jpeg" alt="Nyonnie soccer memories" />
            <div>
              <span>04</span>
              <h3>THE MEMORIES</h3>
              <p>
                The practices, teammates, matches, and moments on the field
                became part of the foundation that shaped my relationship with
                sport and my appreciation for the people who dedicate
                themselves to it.
              </p>
            </div>
          </article>

          <article className="journeyCard">
            <img src="/images/soccer-4.jpeg" alt="Nyonnie soccer team" />
            <div>
              <span>05</span>
              <h3>THE CONNECTION</h3>
              <p>
                Being an athlete gave me a perspective I still carry today.
                Those experiences continue to influence my interests in
                healthcare, wellness, movement, and athlete advocacy.
              </p>
            </div>
          </article>

          <article className="journeyCard">
            <img src="/images/graduation.jpeg" alt="Nyonnie graduation" />
            <div>
              <span>06</span>
              <h3>WHAT&apos;S NEXT</h3>
              <p>
                I&apos;m continuing to learn through school and clinical
                experiences while working toward my goal of becoming a
                certified Athletic Trainer in the future.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="training" id="training">
        <div className="sectionLabel">03 — LEARNING & EXPERIENCE</div>

        <div className="trainingHeader">
          <p className="miniTitle">PART OF THE JOURNEY</p>

          <h2>
            LEARNING THROUGH
            <br />
            <span>EXPERIENCE.</span>
          </h2>

          <p className="trainingIntro">
            I&apos;m still learning and developing my skills. My clinical
            experiences, fitness journey, and education give me opportunities
            to learn hands-on, ask questions, grow, and prepare for my future
            career.
          </p>
        </div>

        <div className="videoGrid">
          <div className="videoCard">
            <video controls playsInline preload="metadata">
              <source src="/videos/clinicalvideo.mp4" type="video/mp4" />
            </video>
            <div className="videoInfo">
              <span>01</span>
              <p>CLINICAL LEARNING</p>
            </div>
          </div>

          <div className="videoCard">
            <video controls playsInline preload="metadata">
              <source src="/videos/workoutvideo.mp4" type="video/mp4" />
            </video>
            <div className="videoInfo">
              <span>02</span>
              <p>MY FITNESS JOURNEY</p>
            </div>
          </div>

          <div className="videoCard">
            <video controls playsInline preload="metadata">
              <source src="/videos/training-3.mp4" type="video/mp4" />
            </video>
            <div className="videoInfo">
              <span>03</span>
              <p>LEARNING & GROWTH</p>
            </div>
          </div>
        </div>
      </section>

      {/* ASPIRATIONS */}
      <section className="purpose">
        <div className="sectionLabel light">04 — ASPIRATIONS</div>

        <div className="purposeContent">
          <p className="miniTitle">WHERE I&apos;M HEADED</p>

          <h2>
            EXERCISE SCIENCE.
            <br />
            <span>ATHLETIC TRAINING NEXT.</span>
          </h2>

          <div className="purposeGrid">
            <p>
              I&apos;ve earned my bachelor&apos;s degree in Exercise Science
              and I&apos;m now continuing to build my education and clinical
              experience as an aspiring Athletic Trainer.
            </p>

            <p>
              My goal is to eventually become a certified Athletic Trainer and
              use my education, experiences, and perspective as a former athlete
              to support and advocate for athletes throughout their journeys.
            </p>
          </div>
        </div>
      </section>

      {/* BEYOND */}
      <section className="beyond">
        <div className="sectionLabel">05 — BEYOND SCHOOL & SPORT</div>

        <div className="beyondGrid">
          <div>
            <p className="miniTitle">MORE ABOUT ME</p>

            <h2>
              MORE THAN
              <br />
              <span>ONE THING.</span>
            </h2>
          </div>

          <div className="beyondText">
            <p>
              Outside of school and my career goals, I enjoy fitness, weight
              training, nature walks, yoga, stretching, tea and lattes,
              skincare, fashion, and continuing to grow personally.
            </p>

            <p>
              Faith also plays an important role in my journey. I believe in
              setting goals, pushing through adversity, staying grounded, and
              continuing to become a better version of myself.
            </p>

            <div className="interestTags">
              <span>SOCCER</span>
              <span>FITNESS</span>
              <span>FAITH</span>
              <span>WELLNESS</span>
              <span>YOGA</span>
              <span>EXERCISE SCIENCE</span>
            </div>
          </div>
        </div>
      </section>

      {/* WELLNESS */}
      <section className="wellness" id="wellness">
        <div className="sectionLabel">06 — INTERESTS & WELLNESS</div>

        <div className="wellnessGrid">
          <div className="wellnessHeading">
            <p className="miniTitle">ANOTHER SIDE OF ME</p>

            <h2>
              HEALTH. FITNESS.
              <br />
              <span>BEAUTY & SELF-CARE.</span>
            </h2>
          </div>

          <div className="wellnessContent">
            <p>
              My interests go beyond school and Athletic Training. I&apos;m
              interested in the ways health, movement, beauty, and self-care can
              all contribute to how people feel about themselves inside and
              out.
            </p>

            <p>
              In the future, I&apos;d like to explore esthetics and continue
              learning more about personal care, fitness, and wellness. I
              believe self-care, confidence, and taking care of yourself can be
              valuable for both women and men.
            </p>

            <p>
              I&apos;m also working on becoming more social, meeting new people,
              stepping outside of my comfort zone, and exploring the different
              interests and opportunities that may become part of my future.
            </p>

            <div className="wellnessTags">
              <span>HEALTH</span>
              <span>FITNESS</span>
              <span>BEAUTY</span>
              <span>SELF-CARE</span>
              <span>WELLNESS</span>
              <span>ESTHETICS</span>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="vision" id="vision">
        <div className="visionContent">
          <p className="miniTitle">A FUTURE GOAL</p>

          <h2>
            ONE DAY,
            <br />
            <span>THE WORLD CUP.</span>
          </h2>

          <p>
            One of my long-term goals is to one day serve as medical personnel
            on one of the biggest stages in sport — the World Cup. For me,
            that dream connects back to where everything started: a love for
            soccer that began with my father and eventually became part of my
            own story.
          </p>

          <p>
            I&apos;m not there yet. Right now, I&apos;m focused on learning,
            gaining experience, continuing my education, and taking the steps
            necessary to eventually become a certified Athletic Trainer.
          </p>

          <p>
            My future interests also include fitness, wellness, beauty,
            self-care, and entrepreneurship. I&apos;m still discovering where
            each part of my journey may lead.
          </p>

          <p>
            Every class, clinical experience, workout, connection, and
            challenge is another opportunity to learn and grow.
          </p>

          <blockquote>
            “Keep setting goals and keep pushing through life&apos;s
            adversities. One day it will pay off.”
          </blockquote>
        </div>

        <div className="visionImage">
          <img src="/images/bioimage.jpeg" alt="Nyonnie" />
        </div>
      </section>

      {/* FOLLOW */}
      <section className="connect" id="connect">
        <div className="sectionLabel light">07 — FOLLOW MY JOURNEY</div>

        <div className="connectGrid">
          <div className="connectHeading">
            <p className="miniTitle">SOCIAL MEDIA</p>

            <h2>
              FOLLOW MY
              <br />
              <span>JOURNEY.</span>
            </h2>
          </div>

          <div className="socialLinks">
            <a
              href="https://www.instagram.com/fitwityoni"
              target="_blank"
              rel="noopener noreferrer"
              className="socialLink"
            >
              <div>
                <span>INSTAGRAM</span>
                <strong>@fitwityoni</strong>
              </div>
              <span className="socialArrow">↗</span>
            </a>

            <a
              href="https://www.facebook.com/share/1EvTMu7vZU/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="socialLink"
            >
              <div>
                <span>FACEBOOK</span>
                <strong>Nyonnie Barnnie</strong>
              </div>
              <span className="socialArrow">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          <strong>NYONNIE.</strong>
          <p>Personal Portfolio • Exercise Science • Aspiring Athletic Trainer</p>
        </div>

        <p>My story. My journey. My future.</p>
      </footer>
    </main>
  );
}