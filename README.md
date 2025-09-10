# St. Andrew Greek Orthodox Church Mobile App

A modern, mobile-first web application designed for the St. Andrew Greek Orthodox Church community in Miami, FL. This app provides easy access to liturgical readings, daily prayers, live services, and community resources.

## ✨ Features

- **📖 Weekly Liturgical Readings** - View current Sunday Gospel and Epistle readings in PDF format
- **🔔 Daily Reminders** - Saints of the day and fasting guidelines
- **📹 Bible Study Zoom** - Direct access to weekly Bible study sessions
- **📺 Live Divine Liturgy** - Stream Orthros and Divine Liturgy services
- **🙏 Daily Prayers** - Morning and evening prayer texts
- **📰 Weekly Newsletter** - Latest community news and announcements
- **📱 Mobile Optimized** - Fully responsive design for phones and tablets
- **✨ Smooth Animations** - Beautiful framer-motion powered transitions

## 🛠️ Technology Stack

- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Vite** for development and building
- **PDF.js** for document viewing

## 📱 Mobile-First Design

This app is specifically optimized for mobile devices with:

- Touch-friendly interface with proper tap targets
- Responsive layouts that adapt to all screen sizes
- Fast loading and smooth scrolling
- PWA-ready with offline capabilities

## 🚀 Getting Started

**Prerequisites:** Node.js 16+ and npm

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd StAndrewChurchApp
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 📁 Project Structure

```
├── components/
│   ├── SplashScreen.tsx    # Animated welcome screen
│   ├── MainContent.tsx     # Main app content
│   ├── SectionCard.tsx     # Interactive service cards
│   ├── SectionModal.tsx    # Modal for detailed content
│   ├── PDFViewer.tsx       # PDF document viewer
│   └── Icons.tsx           # SVG icon components
├── public/
│   └── liturgical-readings.pdf  # Current liturgical readings
├── constants.tsx           # App configuration and content
├── types.ts               # TypeScript type definitions
└── App.tsx                # Main application component
```

## 🎯 Usage

The app features a clean, card-based interface where users can:

1. **Tap any service card** to open detailed content in a modal
2. **View liturgical readings** directly in the app or open in a new tab
3. **Access live streaming links** for services and Bible study
4. **Read daily prayers and reminders** formatted for mobile viewing

## 🔧 Customization

To update content:

- **Liturgical readings**: Replace the PDF in `/public/liturgical-readings.pdf`
- **Service links**: Update URLs in `constants.tsx`
- **Church information**: Modify header details in `MainContent.tsx`

## 📄 License

This project is created for St. Andrew Greek Orthodox Church, Miami, FL.

## 🤝 Contributing

For updates or improvements, please contact the church administration.

---

_Built with ❤️ for the St. Andrew Greek Orthodox Church community_
