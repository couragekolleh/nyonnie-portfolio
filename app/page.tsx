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
            <a href="#training">Training</a>
            <a href="#wellness">Wellness</a>
            <a href="#vision">Vision</a>
            <a href="#connect">Connect</a>
          </div>
        </nav>

        <div className="heroContent">
          <p className="eyebrow">
            ATHLETIC TRAINING • WELLNESS • SELF-CARE • ATHLETE ADVOCACY
          </p>

          <h1>
            BUILT TO
            <br />
            <span>CARE.</span>
          </h1>

          <p className="heroText">
            Future Athletic Trainer. Former athlete. Wellness enthusiast.
            Passionate about healthcare, fitness, self-care, and helping people
            feel better inside and out.
          </p>

          <div className="heroButtons">
            <a href="#about" className="primaryBtn">
              Discover My Journey
            </a>

            <a href="#vision" className="secondaryBtn">
              My Vision
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
            <p className="miniTitle">MORE THAN A TRAINER</p>

            <h2>
              A PASSION FOR
              <br />
              <span>PEOPLE & SPORT.</span>
            </h2>

            <p>
              Sport has been part of my story for as long as I can remember.
              Growing up playing soccer gave me an appreciation for
              competition, resilience, teamwork, and the athletes behind the
              game.
            </p>

            <p>
              My passion for fitness continued through middle school and high
              school, where I discovered weight training and developed a deeper
              appreciation for movement, strength, and physical health.
            </p>

            <p>
              I always knew I wanted to help and care for people in the medical
              field. Athletic Training became the perfect balance between my
              love for healthcare and my lifelong connection to sports.
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
        <p>ADVOCATE.</p>
      </section>

      {/* JOURNEY */}
      <section className="journey" id="journey">
        <div className="sectionLabel light">02 — THE JOURNEY</div>

        <div className="journeyHeader">
          <p className="miniTitle">PURPOSE IN MOTION</p>

          <h2>
            LEARNING. GROWING.
            <br />
            <span>SHOWING UP.</span>
          </h2>

          <p className="journeyIntro">
            What began with a love for sport and fitness continues to evolve
            into a career centered around healthcare, advocacy, education, and
            supporting athletes through every part of their journey.
          </p>
        </div>

        <div className="journeyCards">
          <article className="journeyCard">
            <img src="/images/training-1.jpeg" alt="Athlete journey" />
            <div>
              <span>01</span>
              <h3>THE ATHLETE</h3>
              <p>
                Growing up playing soccer and staying active created a lifelong
                connection to sport and an understanding of the challenges
                athletes experience.
              </p>
            </div>
          </article>

          <article className="journeyCard">
            <img src="/images/training-2.jpeg" alt="Student journey" />
            <div>
              <span>02</span>
              <h3>THE STUDENT</h3>
              <p>
                Building clinical knowledge, developing practical skills, and
                preparing for a career dedicated to athlete health, recovery,
                and performance.
              </p>
            </div>
          </article>

          <article className="journeyCard">
            <img src="/images/graduation.jpeg" alt="Future goals" />
            <div>
              <span>03</span>
              <h3>THE FUTURE</h3>
              <p>
                Working toward becoming an Athletic Trainer who advocates for
                athletes and makes an impact far beyond the sidelines.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* TRAINING */}
      <section className="training" id="training">
        <div className="sectionLabel">03 — BEHIND THE WORK</div>

        <div className="trainingHeader">
          <p className="miniTitle">THE WORK BEHIND THE GOAL</p>

          <h2>
            THIS IS THE
            <br />
            <span>PROCESS.</span>
          </h2>

          <p className="trainingIntro">
            From clinical experience to strength training and wellness, every
            day is another opportunity to learn, improve, and become better
            prepared to care for others.
          </p>
        </div>

        <div className="videoGrid">
          <div className="videoCard">
            <video controls playsInline preload="metadata">
              <source src="/videos/clinicalvideo.mp4" type="video/mp4" />
            </video>
            <div className="videoInfo">
              <span>01</span>
              <p>CLINICAL EXPERIENCE</p>
            </div>
          </div>

          <div className="videoCard">
            <video controls playsInline preload="metadata">
              <source src="/videos/workoutvideo.mp4" type="video/mp4" />
            </video>
            <div className="videoInfo">
              <span>02</span>
              <p>MOVEMENT & WELLNESS</p>
            </div>
          </div>

          <div className="videoCard">
            <video controls playsInline preload="metadata">
              <source src="/videos/training-3.mp4" type="video/mp4" />
            </video>
            <div className="videoInfo">
              <span>03</span>
              <p>STRENGTH & TRAINING</p>
            </div>
          </div>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="purpose">
        <div className="sectionLabel light">04 — PURPOSE</div>

        <div className="purposeContent">
          <p className="miniTitle">WHY ATHLETIC TRAINING?</p>

          <h2>
            SPORT BUILT THE FOUNDATION.
            <br />
            <span>CARE GAVE IT PURPOSE.</span>
          </h2>

          <div className="purposeGrid">
            <p>
              Athletic Trainers are healthcare professionals who help prevent,
              evaluate, manage, and rehabilitate injuries while supporting
              athletes throughout recovery.
            </p>

            <p>
              My goal is to advocate for athletes and help create environments
              where they feel heard, respected, supported, and confident in the
              care they receive.
            </p>
          </div>
        </div>
      </section>

      {/* BEYOND */}
      <section className="beyond">
        <div className="sectionLabel">05 — BEYOND THE SIDELINES</div>

        <div className="beyondGrid">
          <div>
            <p className="miniTitle">THE PERSON BEHIND THE PURPOSE</p>

            <h2>
              MORE THAN
              <br />
              <span>A CAREER.</span>
            </h2>
          </div>

          <div className="beyondText">
            <p>
              Away from Athletic Training, I enjoy fitness, weight training,
              nature walks, yoga, stretching, tea and lattes, skincare,
              fashion, and continuing to grow personally and professionally.
            </p>

            <p>
              Faith also plays an important role in my journey. I believe in
              setting goals, pushing through adversity, and using my experiences
              to encourage others along the way.
            </p>

            <div className="interestTags">
              <span>SOCCER</span>
              <span>FITNESS</span>
              <span>FAITH</span>
              <span>WELLNESS</span>
              <span>YOGA</span>
              <span>SPORTS MEDICINE</span>
            </div>
          </div>
        </div>
      </section>

      {/* WELLNESS VISION */}
      <section className="wellness" id="wellness">
        <div className="sectionLabel">06 — WELLNESS VISION</div>

        <div className="wellnessGrid">
          <div className="wellnessHeading">
            <p className="miniTitle">BEYOND FITNESS</p>

            <h2>
              HEALTH. FITNESS.
              <br />
              <span>BEAUTY & SELF-CARE.</span>
            </h2>
          </div>

          <div className="wellnessContent">
            <p>
              My vision goes beyond fitness alone. I want to bring together
              health, movement, beauty, and self-care in a way that helps people
              feel good about themselves inside and out.
            </p>

            <p>
              In the future, I hope to expand into esthetics and combine
              personal care with fitness and wellness. I want to help both women
              and men understand that taking care of yourself is not limited to
              one gender. Self-care, confidence, and feeling your best are for
              everyone.
            </p>

            <p>
              As I continue becoming more social, meeting new people, and
              stepping outside of my comfort zone, I ultimately want to build
              something of my own that allows me to help people, have fun, and
              create a business centered around wellness and self-care.
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
          <p className="miniTitle">THE DREAM</p>

          <h2>
            ONE DAY,
            <br />
            <span>THE WORLD CUP.</span>
          </h2>

          <p>
            My long-term goal is to serve as medical personnel on one of the
            biggest stages in sport — the World Cup. It represents the kind of
            future I am working toward: combining my love for sport with my
            passion for healthcare and caring for athletes.
          </p>

          <p>
            My vision does not stop there. I want to continue exploring fitness,
            wellness, beauty, self-care, and entrepreneurship while building a
            career that gives me the opportunity to help people in different
            ways.
          </p>

          <p>
            Every class, clinical experience, workout, connection, and challenge
            is another step toward becoming the woman and professional I want to
            be.
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

      {/* CONNECT */}
      <section className="connect" id="connect">
        <div className="sectionLabel light">07 — CONNECT</div>

        <div className="connectGrid">
          <div className="connectHeading">
            <p className="miniTitle">FOLLOW THE JOURNEY</p>

            <h2>
              LET&apos;S
              <br />
              <span>CONNECT.</span>
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
          <p>Athletic Training • Wellness • Self-Care</p>
        </div>

        <p>Built around purpose, sport & care.</p>
      </footer>
    </main>
  );
}