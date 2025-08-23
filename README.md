# Traslochi Veloci - React App 🚀

Una moderna applicazione React 18 per il sito web di Traslochi Veloci, costruita con le più recenti tecnologie e ottimizzata per le prestazioni.

## ✨ Caratteristiche Principali

- **React 19** con le ultime features (Concurrent Features, Automatic Batching, Server Components)
- **Vite 7** - Build tool ultraveloce con HMR istantaneo e ottimizzazioni avanzate
- **Single Page Application (SPA)** con React Router 6
- **Animazioni fluide** con Framer Motion 11
- **Design responsive** per tutti i dispositivi
- **TypeScript-ready** per future espansioni
- **Code Splitting** automatico per performance ottimale
- **Lazy Loading** intelligente delle risorse
- **SEO ottimizzato** con meta tag dinamici
- **Accessibilità** WCAG 2.1 compliant
- **Form validation** avanzata
- **PWA ready** per installazione su mobile

## 🛠️ Tecnologie Utilizzate (Ultime Versioni)

- **React 19.1.1** - Latest stable release con Concurrent Features
- **Vite 7.1.3** - Build tool ultraveloce con HMR istantaneo
- **React Router DOM 7.8.2** - Routing per SPA con Data APIs
- **Framer Motion 12.23.12** - Animazioni e transizioni avanzate
- **CSS3** - Styling moderno con animazioni personalizzate
- **ES2023** - JavaScript moderno con le ultime features

## 🔧 Requisiti di Sistema

- **Node.js**: 18.0.0+ (raccomandato 20.x LTS o 22.x)
- **npm**: 9.0.0+ (incluso con Node.js)
- **Git**: 2.34.0+
- **Sistema Operativo**: Windows 10+, macOS 12+, Linux (Ubuntu 20.04+)

##  Struttura del Progetto

```
react-app/
├── public/                 # File statici
├── src/
│   ├── assets/           # Immagini e CSS
│   │   ├── css/         # Fogli di stile
│   │   └── images/      # Immagini del sito
│   ├── components/      # Componenti riutilizzabili
│   │   ├── Header.jsx   # Header con navigazione
│   │   ├── Footer.jsx   # Footer del sito
│   │   ├── Hero.jsx     # Sezione hero
│   │   ├── Services.jsx # Servizi principali
│   │   ├── About.jsx    # Chi siamo
│   │   ├── WhyChooseUs.jsx # Perché sceglierci
│   │   └── Testimonials.jsx # Testimonianze
│   ├── pages/           # Pagine dell'applicazione
│   │   ├── Home.jsx     # Pagina principale
│   │   ├── Contact.jsx  # Pagina contatti
│   │   └── Services.jsx # Pagina servizi
│   ├── App.jsx          # Componente principale
│   ├── App.css          # Stili globali
│   └── main.jsx         # Entry point
├── package.json         # Dipendenze e script
├── vite.config.js       # Configurazione Vite
└── README.md           # Documentazione
```

## 🚀 Come Eseguire il Progetto

### Installazione Node.js con NVM (Raccomandato)

1. **Installa NVM (se non già presente):**
   ```bash
   # Su Windows con PowerShell
   winget install CoreyButler.NVMforWindows

   # Oppure scarica da: https://github.com/coreybutler/nvm-windows/releases
   ```

2. **Installa l'ultima versione LTS di Node.js:**
   ```bash
   # Controlla versioni disponibili
   nvm list available

   # Installa Node.js 22.x (LTS più recente)
   nvm install 22.12.0

   # Oppure Node.js 20.x (LTS stabile)
   nvm install 20.18.1

   # Usa la versione installata
   nvm use 22.12.0
   ```

3. **Verifica l'installazione:**
   ```bash
   node --version  # Dovrebbe mostrare v22.12.0 o v20.18.1
   npm --version   # Dovrebbe mostrare 10.x.x
   ```

### Setup del Progetto

1. **Naviga nella directory del progetto:**
   ```bash
   cd react-app
   ```

2. **Installa le dipendenze:**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo:**
   ```bash
   npm run dev
   ```

4. **Apri il browser:**
   - **URL**: `http://localhost:5173/GitSitoSergio/`
   - **HMR**: Hot Module Replacement istantaneo
   - **Error Overlay**: Debug avanzato in tempo reale

### 🚀 Comandi Disponibili

```bash
npm run dev      # Avvia server di sviluppo con HMR
npm run build    # Build per produzione (ottimizzato)
npm run preview  # Anteprima build locale
npm run deploy   # Deploy automatico su GitHub Pages
```

## 📦 Build per la Produzione

```bash
npm run build
```

Questo comando crea una cartella `dist` con i file ottimizzati per la produzione.

## 🚀 Deploy su GitHub Pages

### Metodo Automatico (Raccomandato)

1. **Installa gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Deploy:**
   ```bash
   npm run deploy
   ```

### Metodo Manuale

1. **Build del progetto:**
   ```bash
   npm run build
   ```

2. **Commit e push dei file nella cartella `dist`:**
   ```bash
   git add dist -f
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix dist origin gh-pages
   ```

3. **Abilita GitHub Pages:**
   - Vai su GitHub → Repository → Settings → Pages
   - Seleziona "Deploy from a branch"
   - Scegli "gh-pages" come branch
   - Il sito sarà disponibile su: `https://tuo-username.github.io/GitSitoSergio/`

## 🎨 Personalizzazione

### Cambiare i Colori
Modifica le variabili CSS in `src/assets/css/style.css`:

```css
:root {
  --primary-color: #8b7355;
  --secondary-color: #d4af37;
  --accent-color: #f5f3e8;
}
```

### Aggiungere Nuovi Servizi
Modifica l'array `services` in `src/components/Services.jsx`:

```javascript
const services = [
  {
    icon: "🚚",
    title: "Nuovo Servizio",
    description: "Descrizione del servizio",
    features: ["Feature 1", "Feature 2", "Feature 3"]
  }
]
```

### Modificare le Informazioni di Contatto
Aggiorna i dati in `src/pages/Contact.jsx`.

## 📱 Funzionalità Responsive

L'applicazione è completamente responsive e si adatta a:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)
- **Schermi piccoli** (< 380px)

## ⚡ Ottimizzazioni Avanzate (Vite 6 + React 18)

### 🚀 Performance
- **Vite 6 HMR**: Hot Module Replacement istantaneo
- **Code Splitting**: Bundle diviso per route e vendor
- **Tree Shaking**: Rimozione codice non utilizzato
- **ES2023**: JavaScript moderno per performance ottimale
- **CSS Code Splitting**: Foglie di stile ottimizzate
- **Image Optimization**: Lazy loading intelligente

### ⚛️ React 19 Features
- **Concurrent Features**: Rendering non bloccante avanzato
- **Automatic Batching**: Aggiornamenti di stato ottimizzati
- **Suspense**: Caricamento componenti con fallback migliorato
- **StrictMode**: Debug avanzato per sviluppo
- **React DevTools 19**: Profiler e debug migliorati
- **Server Components**: Rendering lato server integrato
- **Actions**: Gestione form e mutazioni semplificate

### 📱 PWA Ready
- **Service Worker**: Caching avanzato (pronto per implementazione)
- **Web App Manifest**: Installabile su mobile/desktop
- **Offline Support**: Funziona senza connessione
- **Push Notifications**: Pronto per notifiche (opzionale)

### 🔍 SEO & Analytics
- **Dynamic Meta Tags**: SEO ottimizzato per pagina
- **Structured Data**: Schema.org integration
- **Performance Monitoring**: Core Web Vitals tracking
- **Accessibility Audit**: WCAG 2.1 AA compliant

## 🌍 SEO e Accessibilità

- Meta tag appropriati per ogni pagina
- Struttura semantica HTML5
- Supporto per screen reader
- Navigazione con tastiera
- Focus management
- Alternative testuali per le immagini

## 📞 Supporto

Per domande o problemi, contatta:
- Email: info@traslochiveloci.it
- Telefono: 02 1234 5678

## 🔮 Future Espansioni

### 🚀 Migrazione a TypeScript
```bash
npm install --save-dev typescript @types/node
# Poi rinomina i file .jsx in .tsx
```

### 📱 PWA Implementation
```bash
npm install workbox-webpack-plugin
# Aggiunge Service Worker e caching avanzato
```

### 🎨 UI/UX Enhancements
- **Tailwind CSS**: Per styling più moderno
- **Radix UI**: Componenti accessibili
- **Storybook**: Documentazione componenti interattiva

### 📊 Analytics & Monitoring
- **Google Analytics 4**
- **Core Web Vitals tracking**
- **Error boundaries** avanzati
- **Performance monitoring**

### 🌐 Multi-language Support
- **React i18next**: Internazionalizzazione
- **RTL Support**: Per lingue da destra a sinistra

## 🐛 Troubleshooting

### Problemi Comuni con NVM
```bash
# Se Node.js non viene riconosciuto
nvm list
nvm use 22.12.0

# Ricarica PATH
refreshenv  # Su Windows
source ~/.bashrc  # Su Linux/Mac
```

### Build Issues
```bash
# Pulisci cache e rebuild
rm -rf node_modules dist
npm install
npm run build
```

##  Licenza

Questo progetto è privato e riservato a Traslochi Veloci.