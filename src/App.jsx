import { useEffect, useRef, useState } from "react";
import memorywe from "./assets/memorywe.JPG";
import memory1 from "./assets/memory1.JPG";
import memory2 from "./assets/memory2.JPG";
import memory7 from "./assets/memory7.JPG";
import memory4 from "./assets/memory4.JPG";
import memory5 from "./assets/memory5.JPG";
import memory6 from "./assets/memory6.JPG";
import memory8 from "./assets/memory8.JPG";
import college from "./assets/college.JPG";
import memory9 from "./assets/memory9.JPG";
import memory10 from "./assets/memory10.JPG";
import he from "./assets/he.JPG";
import US from "./assets/US.JPG";
import birthdaySong from "./assets/birthdaySong.mp3";
import "./App.css";

function App() {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [secretMessage, setSecretMessage] = useState(null);
  const [giftOpened, setGiftOpened] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
  if (!isOpen) return;

  const photos = document.querySelectorAll(".memory-photo");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("photo-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.35,
    }
    );

    photos.forEach((photo) => observer.observe(photo));

    return () => observer.disconnect();
  }, [isOpen]);

  const openEnvelope = () => {
    setIsOpening(true);

    setTimeout(() => {
      setIsOpen(true);
      if (audioRef.current) {
    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch((error) => {
        console.log("Music could not start:", error);
      });
    }
    }, 2000);
  };

  return (
    <div className="page">
      {secretMessage && (
        <div
          className="secret-overlay"
          onClick={() => setSecretMessage(null)}
        >
          <div
            className="secret-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="secret-sparkle">✦</div>

            <p className="secret-small">
              A little secret for you...
            </p>

            <div className="secret-message">
              {secretMessage}
            </div>

            <button
              className="secret-close"
              onClick={() => setSecretMessage(null)}
            >
              ♡ close ♡
            </button>
          </div>
        </div>
      )}
      <audio
        ref={audioRef}
        src={birthdaySong}
        loop
      />

      {isOpen && (
        <div className="floating-romance" aria-hidden="true">
          <span>♡</span>
          <span>✦</span>
          <span>♡</span>
          <span>✧</span>
          <span>♡</span>
          <span>✦</span>
          <span>♡</span>
          <span>✧</span>
          <span>♡</span>
          <span>✦</span>
          <span>♡</span>
          <span>✧</span>
        </div>
      )}

      {isOpen && (
        <div className="vinyl-player">
          <button
            className={`vinyl-button ${isPlaying ? "playing" : ""}`}
            onClick={(e) => {
              e.stopPropagation();

              if (!audioRef.current) return;

              if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
              } else {
                audioRef.current
                  .play()
                  .then(() => setIsPlaying(true))
                  .catch((error) => {
                    console.log("Music could not play:", error);
                  });
              }
            }}
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            <div className="vinyl-record">
              <div className="vinyl-grooves"></div>

              <div className="vinyl-label">
                <span>♡</span>
              </div>

              <div className="vinyl-hole"></div>
            </div>
          </button>

          <div className="vinyl-note">
            {isPlaying ? "It's playing ♫" : "tap to play ♡♫"}
          </div>
        </div>
      )}

      {!isOpen ? (
          <div
            className={`closed-card ${isOpening ? "opening" : ""}`}
            onClick={!isOpening ? openEnvelope : undefined}
          >
            {/* Decorative sparkles */}
            <div className="cover-sparkle cover-sparkle-1">✦</div>
            <div className="cover-sparkle cover-sparkle-2">✧</div>
            <div className="cover-sparkle cover-sparkle-3">✦</div>
            <div className="cover-sparkle cover-sparkle-4">♡</div>
            <div className="cover-sparkle cover-sparkle-5">✧</div>

            <div className="envelope">

              {/* Huge triangular flap */}
              <div className="envelope-flap">
                <div className="flap-text">
                  A little something, written only for you...
                </div>

                <div className="private-letter">
                  ✦ PRIVATE LETTER ✦
                </div>
              </div>

              {/* Main envelope body */}
              <div className="envelope-body"></div>

              {/* Big letter */}
              <div className="hidden-letter">
                <div className="letter-inner">

                  <div className="letter-border">

                    <div className="letter-title">
                      Happpieeeeeee
                      <br />
                      Birthdayyy
                      <br />
                      Babyyyyy
                    </div>

                    <div className="letter-icons">
                      <span>💋</span>
                      <span>🎀</span>
                      <span>❤️</span>
                    </div>

                    <div className="letter-divider">
                      ♡ ───── ✦ ───── ♡
                    </div>

                    <div className="letter-subtitle">
                      for my favourite person,
                      <br />
                      my Bugluuuuuu ❤️
                    </div>

                  </div>

                </div>
              </div>

              {/* Heart wax seal */}
              <div className="heart-seal">
                ♥
              </div>

              {/* Bottom instruction */}
              <div className="tap-text">
                ♡ Tap to open ♡
              </div>

            </div>
          </div>
        ) : (
        

        <main className="love-page">

          {/* INTRODUCTION */}

          <section className="letter-section hero-section">

            <div className="tiny-flower"><br />
              <br />
              <br />
              <br />🌸</div>

            <p className="eyebrow">
              <br />
              <br />
              A little birthday letter for my favourite person (my gadhaa😁)
            </p>
            <div className="memory-photo">
            <img
              src={memory1}
              alt="One of our college memories"
            />
            </div>
            <div className="ornament">
              ♡　✦　♡
            </div>

            <h1>
              <br />
              <br />
              <br />
              <br />
              Happpieeeee B'day
              <br />
              My Buggluuuuu❤️
            </h1>
            <div className="memory-photo">
            <img
              src={memorywe}
              alt="One of our college memories"
            />
            </div>
            <div className="ornament">
              ♡　✦　♡
            </div>

            <p className="intro-text">
              <br />
              <br />
              <br />
              <br />
              Hloooo Puchuuuuuu,
              <br />
              abki baar fir aapke liye ek birthday letter...😁
            </p>

            <p>
              Wishing you the
              <strong> happpiiiiesstttt birthdayyyyyy </strong>
              bugluu. 🎂❤️
            </p>

          </section>


          {/* BIRTHDAY PROMISE */}

          <section className="letter-section">

            <div className="section-number">
              
            </div>

            <h2>
              <br />
              Akele me pdhnaaa.... Okayyy
            </h2>
            <div className="memory-photo">
            <img
              src={memory2}
              alt="One of our college memories"
            />
            </div>
            <div className="ornament">
              ♡　✦　♡
            </div>

            <div className="memory-photo">
            <img
              src={memory8}
              alt="One of our college memories"
            />
            </div>

            <p>
              <br />
              <br />
              <br />
              <br />
              I know before my entry in your life,
              you’re never supposed to celebrate your birthday.
            </p>

            <p>
              <br />
              <strong>But don’t worry bugguu, now here’s me hihihi.</strong>
              <br />
              I’ll always try to make you feel really very special today.😭🎀❤️
            </p>

            <div className="quote-card">
              <br />
              <span>♡</span>
                <p>
                <br />
                From now onwards, you have
                one very enthusiastic person, 
                who is going to celebrate your birthday. ❤️
              </p>
                <div className="memory-photo">
              <img
                src={memory5}
                alt="One of our college memories"
              />
              </div>
              <div className="ornament">
                ♡　✦　♡
              </div>
            </div>

          </section>


          {/* CHAOTIC LOVE SECTION */}

          <section className="letter-section playful-section">

            <div className="section-number">
              
            </div>

            <h2>
              <br />
              <br />
              I know this year I can't give you as many kisses,
              hugs as you want.... 👀
            </h2>

            <p>
              Also, that sex as your birthday present will also
              be pending 😂😁.
            </p>

            <p>
              But don’t worry, we’ll do it next year for sure
              on ur birthday.
            </p>

            <p>
              <br />
              <strong>Inshallah 🧿 </strong>
            </p>

            <p>
              <br />
              Next year, I’ll wish you birthday at notch <strong>12'am </strong>
               with infinite kisses and a cute hugs. 🫠❤️
            </p>

            <p>
              <br />
              Koi baat nhi, is baar aap is letter se kaam chla lo 😅.
              <br />
              I know ye un actual letter jesi feel to nhi dega.
            </p>

            <p>
              <br />
              But aapko pta h, I literally made a app for this
              letter 😅.
            </p>
            <div className="memory-photo">
            <img
              src={memory10}
              alt="One of our college memories"
            />
            </div>
            
            

          </section>

          <section className="letter-section special-section">

            <div className="section-number">
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>

            <h2>
              I even thought of making a letter and sharing it with Shadiq.
              So that wo print out lekar aapko dede. 💌
            </h2>

            <p>
              But then, I thought kahi agr usne pdh liya ya agr print out krwaya to kisi or k pass ye save ho jaegaa . 
              <br />
              So why not to make it more creative
              and keep this letter in between us only.
            </p>

            <div className="app-note">
              <br />
              <div className="app-icon">💗</div>
              <br />

              <div>
                <p>
                  So I Made it especially for you 
                  <br />
                  <strong> My Puchuuuuuu </strong>
                </p>
              </div>

              <br />
              <div className="app-icon">💗</div>
              <br />
            </div>

          </section>


          {/* COLLEGE + DISTANCE */}

          <section className="letter-section emotional-section">

            <div className="section-number">
              <br />
            </div>

            <h2>
              You know I’m really missing you and our old college days,
              and abki baar to itna jyada time ho gya mile 
              <br />
              — more than three months.🥺
            </h2>

            <p>
              Just hoping k bhagwan ji jldi se job lgwaa de dono ki.
              <br />
              And fir hum dono saath saath rhe 😁.
            </p>

            <div className="memory-photo">
            <img
              src={college}
              alt="One of our college memories"
            />
            </div>

            <div className="dream-box">Missing these days a little extra today... 🥺❤️
              <div className="secret-trigger-wrapper">
                <button
                  className="secret-trigger"
                  onClick={() =>
                    setSecretMessage(
                      "Kittttuuuu...I really really miss you. More than I usually say. 🥺❤️"
                    )
                  }
                >
                  ✦
                </button>
                <div>
                <p>
                  something is hiding here...
                  <br />
                  <span>
                  (is star icon ko click kro sir)
                  </span>
                </p>
                </div>

              </div>
            </div>

          </section>


          {/* FUTURE TOGETHER */}

          <section className="letter-section">

            <div className="section-number">
             <br />
             <br />
             <br />
             <br />
             <br />
             <br />
            </div>

            <h2>
              <div className="ornament">
              ♡　✦　♡
            </div>
              <div className="memory-photo">
            <img
              src={memory9}
              alt="One of our college memories"
            />
            </div>
            <div className="ornament">
              ♡　✦　♡
            </div>
              <br />
              <br />
              <br />
              Chlo Chodo ye sb to aap ye btaao
            </h2>

            <p>
              khane me kya bnaau apke birthday k liye….😝
            </p>
            <div className="ornament">
              ♡　✦　♡
            </div>
              <div className="memory-photo">
            <img
              src={memory4}
              alt="One of our college memories"
            />
            </div>
            <div className="ornament">
              ♡　✦　♡
            </div>

            <p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              Vase abki baar to bugguu possible nhi, but jab hum saath rha krenge,
              I’ll surely make whatever you like.
            </p>

            <p>
              Okayyy? ❤️
            </p>

          </section>


          {/* SURPRISE GIFT */}

          <section className="letter-section gift-section">

            <div className="section-number">
              <br />
            </div>

            {!giftOpened ? (

              <>
                <div className="gift-intro">

                  <div className="gift-icon">
                    🎁
                  </div>

                  <h2>
                    Are haa, Aapko pta h,
                    <br />
                    I even planned a surprise
                    <br />
                    gift for you. 👀
                  </h2>

                  <p>
                    Now, I don't know aap ye pdhoge
                    <br />
                    jb tk aapko wo to mil chuka hoga ya nhi.
                    <br />
                    But..... ye bhi ek or surprise h aapke liye.😁
                  </p>

                </div>

                <div
                  className="interactive-gift"
                  onClick={() => setGiftOpened(true)}
                >

                  <div className="gift-glow"></div>

                  <div className="gift-box">

                    <div className="gift-lid">
                      <div className="gift-ribbon-horizontal"></div>
                    </div>

                    <div className="gift-body">
                      <div className="gift-ribbon-vertical"></div>
                    </div>

                  </div>

                  <p className="gift-tap">
                    ♡ Chlo isko open kroo 😁 ♡
                  </p>

                </div>

              </>

            ) : (

              <div className="gift-reveal">

                <div className="gift-burst">
                  <span>♡</span>
                  <span>✦</span>
                  <span>♡</span>
                  <span>✧</span>
                  <span>♡</span>
                  <span>✦</span>
                  <span>♡</span>
                  <span>✧</span>
                </div>

                <div className="opened-gift">
                  <img
                    src={he}
                    alt="Your surprise"
                  />
                </div>

                <div className="gift-surprise-message">

                  <p className="surprise-small">
                    SURPRISEEEEE BUGGUUU
                  </p>
                                  
                  <p>
                    I hope you liked it. 🤭😁
                    <br />
                    May be it recalls you the moment....
                    <br />
                    </p>

                  <h2>
                    ❤️
                    <br />
                    This little surprise
                    <br />
                    is especially for you.
                  </h2>

                  <div className="gift-final-note">
                    Now come here...
                    <br />
                    I owe you a birthday hug.🥰🤗
                  </div>

                </div>

              </div>

            )}

          </section>


          {/* GYM / CHAOS */}

          <section className="letter-section playful-section gym-section">

            <div className="section-number">
               
            </div>
            <div className="ornament">
              ♡　✦　♡
            </div>
              <div className="memory-photo">
            <img
              src={memory7}
              alt="One of our college memories"
            />
            </div>
            <div className="ornament">
              ♡　✦　♡
            </div>

            <h2>
              And ab to birthday bhi aa gya.... Gym kbse start kr rhe ho 👀😁.
            </h2>

            <p>
              Mast body shody bna lo, fir m bhi flex krungii —
              mere husband k bhi abs h 🤭.
            </p>

            <p>
              Fir sex krne me bhi mje aaenge,
              ye pet bich me nhi aaega.
            </p>

            <p>
              Nye nye sexy sexy pose try kr paenge 🤭.
              <br />
              <br />
              <br />
              <br />
              <div className="ornament">
              ♡　✦　♡
            </div>
              <div className="memory-photo">
            <img
              src={memory6}
              alt="One of our college memories"
            />
            </div>
            <div className="ornament">
              ♡　✦　♡
            </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </p>

            <div className="blush-note">
              Okay okay... bas bas. 😭😂
            </div>

            <p>
              Chlo chodo ye sb to, bss abhi to aap health n
              career pe focus kro.
            </p>

            <p>
              Sex n all to baad me dekh lenge 😭.
            </p>
            <div className="final-hearts">
              ♡　♡　♡
            </div>

          </section>


          {/* FINAL MESSAGE */}

          <section className="letter-section final-section">

            <p>
              <br />
              <div className="final-divider">
              ✦
              </div>
              Baaki keep on loving me like this
              and increase it day by day buggguu.
            </p>

            <div className="final-divider">
              ✦
            </div>

            <p className="last-line">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div className="final-divider">
              At last but not the least one……
            </div>
            </p>

            <div className="ornament">
              ♡　✦　♡
            </div>
              <div className="memory-photo">
            <img
              src={US}
              alt="One of our college memories"
            />
            </div>

            <h2 className="i-love-you">
              <br />
              <br />
              <br />
              <br />
              I LOVE YOU
              <br />
              PUCHUUUUUUUUUU
            </h2>

            <div className="final-kiss">
              💋🌸
            </div>

            <p className="birthday-ending">
              <br />
              <br />
              <br />
              Again
              <br />
              Happy Birthday, my Bugguuu. 
              <br />
              😘😘😘😘❤️
            </p>

            <div className="end-ornament">
              ♡ ✦ ♡ ✦ ♡
            </div>

          </section>

        </main>
      )}

    </div>
  );
}

export default App;