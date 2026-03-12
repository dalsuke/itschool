import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor-follower') as HTMLElement;
    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', moveCursor);

    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal')
      reveals.forEach(el => {
        const windowHeight = window.innerHeight
        const revealTop = el.getBoundingClientRect().top
        if (revealTop < windowHeight - 100) {
          el.classList.add('active')
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [])

  return (
    <div className="app">
      <div className="cursor-follower"></div>
      <div className="glow-bg">
        <div className="glow-spot"></div>
        <div className="glow-spot"></div>
      </div>
      {/* 1. Анимированный Promo Banner */}
      <div className="promo-banner">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '24px' }}>🎁</span>
            <span style={{ marginLeft: '10px' }}>Межсезонная распродажа</span>
            <span className="promo-badge">до -70%</span>
          </div>
          <a href="#" className="btn-login" style={{ fontSize: '12px', padding: '6px 16px', background: '#fff', color: '#000' }}>Выбрать программу</a>
        </div>
      </div>

      {/* 2. Header */}
      <header className="nexus-header">
        <div className="container header-container">
          <div className="nexus-logo">
            NEXUS
            <span>ADVANCED DIGITAL ACADEMY</span>
          </div>
          
          <nav className="nexus-nav">
            <a href="#">Лицензия</a>
            <a href="#courses">Программы</a>
            <a href="#about">О нас</a>
            <a href="#contacts">Контакты</a>
          </nav>

          <div className="header-right">
            <a href="tel:+79001234567" className="phone-link">📞 +7 (900) 123-45-67</a>
            <a href="#" className="btn-login">Войти</a>
          </div>
        </div>
      </header>

      {/* 3. Hero Section */}
      <section className="nexus-hero">
        <div className="container">
          <h1 className="typing-text">Академия дизайна и кода</h1>

          <div className="hero-footer reveal">
            <div className="tags-container">
              <div className="tag-btn">Дизайн</div>
              <div className="tag-btn">UX/UI</div>
              <div className="tag-btn">Программирование</div>
              <div className="tag-btn">Motion</div>
              <div className="tag-btn">3D</div>
              <div className="tag-btn">Нейросети</div>
            </div>

            <a href="#courses" className="btn-choose">Выбрать путь</a>
          </div>
        </div>
      </section>

      {/* 3.5 Бегущая строка партнеров */}
      <div className="ticker-wrap">
        <div className="ticker-content">
          <span className="ticker-item">Google</span>
          <span className="ticker-item">Yandex</span>
          <span className="ticker-item">Microsoft</span>
          <span className="ticker-item">Apple</span>
          <span className="ticker-item">Meta</span>
          <span className="ticker-item">SpaceX</span>
          {/* Дубликат для бесшовности */}
          <span className="ticker-item">Google</span>
          <span className="ticker-item">Yandex</span>
          <span className="ticker-item">Microsoft</span>
          <span className="ticker-item">Apple</span>
          <span className="ticker-item">Meta</span>
          <span className="ticker-item">SpaceX</span>
        </div>
      </div>

      {/* 4. Живой блок "Как мы работаем" */}
      <section id="about" className="courses-section" style={{ background: '#000' }}>
        <div className="container">
          <div className="title-wrapper reveal">
            <span className="section-badge">Methodology</span>
            <h2 className="wow-title">Как мы работаем</h2>
            <div className="title-glow"></div>
          </div>

          
          <div className="about-grid">
            {/* Step 1 */}
            <div className="work-step-card reveal">
              <div className="work-step-img" style={{ background: 'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800)' }}></div>
              <div className="work-step-overlay"></div>
              <div className="work-step-content">
                <span className="step-num">01</span>
                <h3>Практика</h3>
                <p>Вы не просто слушаете лекции, а создаете реальные проекты. 80% времени — это написание кода и работа в редакторах.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="work-step-card reveal">
              <div className="work-step-img" style={{ background: 'url(https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800)' }}></div>
              <div className="work-step-overlay"></div>
              <div className="work-step-content">
                <span className="step-num">02</span>
                <h3>Менторство</h3>
                <p>Личный Senior-ментор проверяет каждое ваше задание и дает подробный фидбек. Прямая связь 24/7 в закрытом чате.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="work-step-card reveal">
              <div className="work-step-img" style={{ background: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800)' }}></div>
              <div className="work-step-overlay"></div>
              <div className="work-step-content">
                <span className="step-num">03</span>
                <h3>Результат</h3>
                <p>Помогаем составить портфолио мирового уровня и готовим к трудоустройству. 95% наших выпускников находят работу за 2 месяца.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Программы обучения (Bento Grid) */}
      <section id="courses" className="courses-section" style={{ background: '#050505' }}>
        <div className="container">
          <div className="title-wrapper reveal">
            <span className="section-badge">Catalog</span>
            <h2 className="wow-title">Популярные курсы</h2>
            <div className="title-glow"></div>
          </div>
          
          <div className="courses-bento">
            {/* Большая карточка */}
            <div className="bento-item bento-1 reveal">
              <div className="bento-img" style={{ background: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200)' }}></div>
              <div className="bento-content">
                <span className="bento-tag">ФЛАГМАН</span>
                <h3>Fullstack Developer PRO</h3>
                <p>Архитектура баз данных, Frontend и Backend разработка высоконагруженных систем.</p>
                <div className="bento-price">89 000 ₽</div>
              </div>
            </div>

            {/* Высокая карточка */}
            <div className="bento-item bento-2 reveal">
              <div className="bento-img" style={{ background: 'url(https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600)' }}></div>
              <div className="bento-content">
                <span className="bento-tag">DESIGN</span>
                <h3>UX/UI & Product Design</h3>
                <p>Проектирование современных интерфейсов.</p>
                <div className="bento-price">65 000 ₽</div>
              </div>
            </div>

            {/* Маленькие карточки */}
            <div className="bento-item bento-3 reveal">
              <div className="bento-img" style={{ background: 'url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600)' }}></div>
              <div className="bento-content">
                <span className="bento-tag">SECURITY</span>
                <h3>Cyber Security</h3>
                <div className="bento-price">72 000 ₽</div>
              </div>
            </div>

            <div className="bento-item bento-4 reveal">
              <div className="bento-img" style={{ background: 'url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600)' }}></div>
              <div className="bento-content">
                <span className="bento-tag">AI</span>
                <h3>Python & AI ML</h3>
                <div className="bento-price">78 000 ₽</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Отзывы */}
      <section id="reviews" className="reviews-section">
        <div className="container">
          <h2 className="reveal wow-title" style={{ fontSize: '48px', marginBottom: '60px', textAlign: 'center' }}>Что говорят студенты</h2>
          <div className="reviews-scroll reveal">
            <div className="review-item">
              <p>"NEXUS — это лучшее, что случалось с моим образованием. Очень много практики!"</p>
              <b>Александр М.</b>
            </div>
            <div className="review-item">
              <p>"Преподаватели из Google и Яндекс — это уровень. Окупила курс за 2 месяца работы."</p>
              <b>Ирина К.</b>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="courses-section" style={{ padding: '60px 0', borderTop: '1px solid #222' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 900, color: 'var(--nexus-blue)' }}>NEXUS ACADEMY</div>
          <p style={{ opacity: 0.4, marginTop: '20px' }}>&copy; 2026. Все права защищены. Образовательная лицензия №77-123.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
