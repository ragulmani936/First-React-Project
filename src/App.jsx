import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <header>
        <nav>
            <h1>Dribbble</h1>
            <ul>
                <li><a href="#">Shots</a></li>
                <li><a href="#">Designers</a></li>
                <li><a href="#">Teams</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Jobs</a></li>
            </ul>
            <div class="auth">
                <a href="#">Sign up</a>
                <a href="#">Sign in</a>
            </div>
        </nav>
        <div class="header-content">
            <h2>What are you working on?</h2>
            <p>Dribbble is show and tell for designers.</p>
            <button>Learn more</button>
            <button>Sign up</button>
        </div>
    </header>
    <main>
        <section class="gallery">
            <div class="card">
                <img src="sachin.jpeg" alt="Design 1" />
                <div class="details">
                    <h3>SACHIN TENDULKAR</h3>
                    <p>120M views • 83M likes</p>
                </div>
            </div>
            <div class="card">
                <img src="dhoni.jpeg" alt="Design 1" width="350px" />
                <div class="details">
                    <h3>MS DHONI</h3>
                    <p>110M views • 92M likes</p>
                </div>
            </div>
            <div class="card">
                <img src="rohit.jpeg" alt="Design 1" width="350px" />
                <div class="details">
                    <h3>ROHIT SHARMA</h3>
                    <p>130M views • 123M likes</p>
                </div>
            </div>
            <div class="card">
                <img src="kohli.webp" alt="Design 1" />
                <div class="details">
                    <h3>VIRAT KOHLI</h3>
                    <p>80M views • 53M likes</p>
                </div>
            </div>
            <div class="card">
                <img src="pandya.avif" alt="Design 1" />
                <div class="details">
                    <h3>HARDIK PANDYA</h3>
                    <p>130M views • 121M likes</p>
                </div>
            </div>
            <div class="card">
                <img src="surya.jpeg" alt="Design 1" />
                <div class="details">
                    <h3>SURYA KUMAR YADAV</h3>
                    <p>130M views • 124M likes</p>
                </div>
            </div>
            <div class="card">
                <img src="pant.jpeg" alt="Design 1" />
                <div class="details">
                    <h3>RISHABH PANT</h3>
                    <p>110M views • 102M likes</p>
                </div>
            </div>
            <div class="card">
                <img src="jasprit.jpg" alt="Design 1" />
                <div class="details">
                    <h3>JASPRIT BUMRAH</h3>
                    <p>860M views • 832M likes</p>
                </div>
            </div>
            <div class="card">
                <img src="rahul.avif" alt="Design 1" />
                <div class="details">
                    <h3>KL RAHUL</h3>
                    <p>930M views • 910M likes</p>
                </div>
            </div>
            <div class="card">
                <img src="ishan.jpeg" alt="Design 1" />
                <div class="details">
                    <h3>ISHAN KISHAN</h3>
                    <p>700M views • 689M likes</p>
                </div>
            </div>
            <div class="card">
                <img src="shreyas.jpeg" alt="Design 1" />
                <div class="details">
                    <h3>shreyas IYER</h3>
                    <p>450M views • 434M likes</p>
                </div>
            </div>
            <div class="card">
                <img src="gill.png" alt="Design 1" />
                <div class="details">
                    <h3>SHUBMAN GILL</h3>
                    <p>60M views • 54M likes</p>
                </div>
            </div>
            <div class="card">
                <img src="kuldeep.webp" alt="Design 1" />
                <div class="details">
                    <h3>KULDEEP YADAV</h3>
                    <p>140M views • 138M likes</p>
                </div>
            </div>
            <div class="card">
                <img src="patel.jpeg" alt="Design 1" />
                <div class="details">
                    <h3>AXAR PATEL</h3>
                    <p>145M views • 139M likes</p>
                </div>
            </div>
            <div class="card">
                <img src="jadeja.webp" alt="Design 1" />
                <div class="details">
                    <h3>RAVINDRA JADEJA</h3>
                    <p>330M views • 312M likes</p>
                </div>
            </div>
        </section>
    </main>
    </>
  )
}

export default App
