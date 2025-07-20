# My Finance Dashboard - React Frontend

🎨 **Modern finans yönetimi uygulaması** - React + TypeScript, Chakra UI tasarımı, AI destekli portfolio analizi ve gerçek zamanlı borsa verileri içeren kapsamlı finansal dashboard platformu.

## 🏗️ Sistem Mimarisi

```text
React Frontend (Port 3000) → FastAPI Backend (Port 8000) → MCP AI Agents (Port 8001)
       ↓                           ↓                              ↓
  User Interface            Auth + Database              AI Financial Analysis
  Portfolio Charts         Banking Operations            Investment Recommendations
  Live Stock Data          Transaction Management        Risk Assessment
```

### 🌟 Frontend Teknoloji Stack
- **⚛️ React 19.1.0** - Modern React hooks ve functional components
- **🔷 TypeScript 4.9.5** - Type-safe development
- **💅 Chakra UI 3.22.0** - Modern UI component library
- **📊 Recharts 3.1.0** - Responsive data visualization
- **🔀 React Router DOM 7.7.0** - Client-side routing
- **📝 React Markdown 10.1.0** - AI response rendering

## ✨ Özellikler

### 🎨 **Kullanıcı Arayüzü**
- **Responsive Design**: Mobil ve masaüstü uyumlu tasarım
- **Modern UI Components**: Chakra UI ile tutarlı tasarım sistemi
- **Smooth Animations**: Framer Motion ile akıcı geçişler
- **Dark/Light Theme**: Otomatik tema değişimi (geliştirilmekte)

### 📊 **Portfolio Yönetimi**
- **Portfolio Özeti**: Toplam varlık, nakit bakiye ve hesap bilgileri
- **Asset Dağılımı**: Pasta grafik ile varlık dağılım görselleştirmesi
- **Portfolio Analizi**: Backend'den gerçek verilerle senkronizasyon
- **Performance Metrikleri**: Detaylı portfolio performans analizi

### 📈 **Canlı Piyasa Verileri**
- **Gerçek Zamanlı Hisse Senedi Fiyatları**: Finnhub API entegrasyonu
- **Değişim Oranları**: Günlük kazanç/kayıp yüzdeleri
- **Piyasa Bilgileri**: AAPL, MSFT, GOOGL, TSLA canlı verileri
- **Teknik Göstergeler**: High, Low, Open, Close fiyat bilgileri

### 🤖 **AI-Powered Finansal Danışmanlık**
- **Doğal Dil İşleme**: Türkçe finansal sorular
- **Portfolio Analizi**: AI destekli yatırım önerileri
- **Risk Değerlendirme**: Volatilite ve risk analiz raporları
- **Akıllı Sohbet**: Markdown destekli AI yanıtları

### 🔐 **Güvenlik ve Kimlik Doğrulama**
- **Cookie-Based Authentication**: Güvenli oturum yönetimi
- **Protected Routes**: Kimlik doğrulama gerektiren sayfalar
- **Auto-Login**: Otomatik oturum devam ettirme
- **Secure API Calls**: CORS destekli güvenli backend iletişimi

## 🚀 Hızlı Başlangıç

### ⚙️ Gereksinimler

**Sistem Gereksinimleri:**
- Node.js 18+
- npm 8+ veya yarn 1.22+
- Git

**Backend Bağımlılıkları:**
- mcpOpenbankingBackend (Port 8000) - API ve veritabanı
- mcpServerNode (Port 8001) - AI agent sistemi
- Finnhub API Key (canlı piyasa verileri için)

### 📦 Kurulum

#### 1. **Proje Kurulumu**
```bash
# Repository'yi klonlayın
git clone <repo-url>
cd my-finance-dashboard

# Bağımlılıkları yükleyin
npm install
# veya
yarn install
```

#### 2. **Environment Yapılandırması**
`.env` dosyası oluşturun:
```env
# API Endpoints
REACT_APP_BACKEND_URL=http://localhost:8000
REACT_APP_MCP_SERVER_URL=http://localhost:8001

# Finnhub API Key (opsiyonel - canlı borsa verileri için)
REACT_APP_FINNHUB_API_KEY=your_finnhub_api_key

# Development Settings
REACT_APP_ENV=development
```

#### 3. **Backend Servisleri Başlatma**

**Backend API'yi başlatın:**
```bash
cd ../mcpOpenbankingBackend
python main.py
# Port 8000'de çalışır
```

**MCP AI Server'ı başlatın:**
```bash
cd ../mcpServerNode
npm start
# Port 8001'de çalışır
```

#### 4. **Frontend Uygulamasını Başlatma**

```bash
# Development sunucusunu başlatın
npm start

# Tarayıcıda otomatik açılır: http://localhost:3000
```

### 🔑 Test Kullanıcıları

Backend'den gelen test kullanıcıları:

| Kullanıcı Adı | Şifre | Özellikler |
|---------------|-------|------------|
| `john_doe` | `password123` | Örnek portfolio verileri |
| `jane_smith` | `password123` | Çoklu hesap sahibi |

## 📱 Kullanıcı Arayüzü

### 🏠 **Ana Sayfa (Dashboard)**

#### **Sol Panel**
- **📊 Asset Chart**: Pasta grafik ile varlık dağılımı
- **💼 Portfolio Details**: Toplam varlık, nakit, hesap sayısı
- **📈 Performance Metrikleri**: Güncel portfolio performansı

#### **Sağ Panel**
- **🤖 AI Chatbot**: Finansal danışmanlık sohbeti
- **📊 Live Stock Data**: Gerçek zamanlı hisse senedi verileri
- **🔔 Bildirimler**: Sistem güncellemeleri ve uyarılar

### 💬 **AI Chatbot Özellikleri**

#### **Örnek Sorular**
```text
"Portföyümü analiz edebilir misin?"
"Risk seviyemi değerlendir"
"Hangi hisse senetlerine yatırım yapmalıyım?"
"Piyasa durumu nasıl?"
"Diversifikasyon stratejim nasıl olmalı?"
```

#### **AI Yanıt Özellikleri**
- **Markdown Rendering**: Zengin metin formatları
- **Structured Responses**: Başlıklar, listeler, tablolar
- **Interactive Elements**: Geri dönüş butonları
- **Responsive Design**: Mobil uyumlu görüntüleme

### 🔐 **Kimlik Doğrulama Akışı**

#### **Giriş Sayfası (`/login`)**
```tsx
// Kullanıcı giriş bilgileri
{
  "username": "john_doe",
  "password": "password123"
}
```

#### **Protected Routes**
- Ana sayfa (`/`) - Kimlik doğrulama gerektirir
- Portfolio detayları - Kullanıcı hesabı gerektirir
- AI Chatbot - Aktif oturum gerektirir

## 🔧 Proje Yapısı

```
my-finance-dashboard/
├── public/                    # 🌐 Static files
│   ├── index.html            # 📄 Ana HTML template
│   └── vite.svg              # 🎨 Vite logosu
├── src/                      # 💻 Kaynak kodlar
│   ├── components/           # 🧩 UI Bileşenleri
│   │   ├── auth/            # 🔐 Kimlik doğrulama
│   │   │   └── ProtectedRoute.tsx
│   │   ├── dashboard/       # 📊 Dashboard bileşenleri
│   │   │   ├── AssetChart.tsx
│   │   │   ├── ChatbotResponseDisplay.tsx
│   │   │   ├── LiveStockData.tsx
│   │   │   └── PortfolioDetails.tsx
│   │   ├── layout/          # 🏗️ Layout bileşenleri
│   │   │   └── Header.tsx
│   │   └── Chatbot.tsx      # 🤖 Ana chatbot bileşeni
│   ├── context/             # 🔄 React Context
│   │   └── AuthContext.tsx  # 🔐 Kimlik doğrulama state
│   ├── pages/               # 📄 Sayfa bileşenleri
│   │   ├── HomePage.tsx     # 🏠 Ana dashboard
│   │   └── LoginPage.tsx    # 🔑 Giriş sayfası
│   ├── App.tsx              # ⚛️ Ana uygulama bileşeni
│   ├── App.css              # 🎨 Global stiller
│   ├── index.tsx            # 🚀 Uygulama giriş noktası
│   └── index.css            # 🎨 Temel CSS
├── package.json             # 📦 Proje bağımlılıkları
├── tsconfig.json            # 🔷 TypeScript konfigürasyonu
└── README.md               # 📚 Bu dokümantasyon
```

### **Bileşen Açıklamaları**

#### **`AssetChart.tsx`** - Portfolio Varlık Grafiği
```tsx
// Backend'den hesap verilerini çeker ve pasta grafik oluşturur
const fetchAccountData = async () => {
  const response = await fetch('http://localhost:8000/accounts', {
    credentials: 'include', // Cookie auth
  });
  // Recharts ile görselleştirme
};
```

#### **`PortfolioDetails.tsx`** - Portfolio Özet Bilgileri
```tsx
// Dummy bank API'sinden portfolio verileri
const response = await fetch(`http://127.0.0.1:3000/user-portfolio/${customer_oid}`);
// Chakra UI card'ları ile görüntüleme
```

#### **`LiveStockData.tsx`** - Canlı Borsa Verileri
```tsx
// Finnhub API entegrasyonu
const API_KEY = 'd1uf41hr01qpci1cb5tgd1uf41hr01qpci1cb5u0';
const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`);
```

#### **`Chatbot.tsx`** - AI Sohbet Arayüzü
```tsx
// MCP backend'e AI sorguları
const response = await fetch('http://localhost:8000/mcp/query', {
  method: 'POST',
  credentials: 'include',
  body: JSON.stringify({ query: inputValue })
});
```

## 🔌 API Entegrasyonları

### 🚀 **Backend API (Port 8000)**

#### **Kimlik Doğrulama**
```javascript
// Giriş yapma
const loginResponse = await fetch('http://localhost:8000/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
  body: JSON.stringify({ username, password })
});
```

#### **Portfolio Verileri**
```javascript
// Kullanıcı hesapları
const accountsResponse = await fetch('http://localhost:8000/accounts', {
  credentials: 'include'
});

// Kullanıcı bilgileri (customer_oid için)
const userResponse = await fetch('http://localhost:8000/me', {
  credentials: 'include'
});
```

#### **AI Agent Sorguları**
```javascript
// MCP AI agent'lar ile iletişim
const aiResponse = await fetch('http://localhost:8000/mcp/query', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
  body: JSON.stringify({ query: "Portföyümü analiz et" })
});
```

### 🏦 **Dummy Bank API (Port 3000)**

```javascript
// Portfolio detayları
const portfolioResponse = await fetch(`http://127.0.0.1:3000/user-portfolio/${customer_oid}`, {
  credentials: 'include'
});

// Yanıt formatı:
{
  "portfolio_summary": {
    "total_cash_balance": 50000,
    "total_assets": 5,
    "total_accounts": 3,
    "total_transactions": 25
  }
}
```

### 📊 **Finnhub API**

```javascript
// Canlı hisse senedi verileri
const stockResponse = await fetch(
  `https://finnhub.io/api/v1/quote?symbol=AAPL&token=${API_KEY}`
);

// Yanıt formatı:
{
  "c": 193.60,    // Current price
  "d": 0.30,      // Change
  "dp": 0.155,    // Percent change
  "h": 194.40,    // High
  "l": 192.20,    // Low
  "o": 193.00,    // Open
  "pc": 193.30    // Previous close
}
```

## 🧪 Test ve Development

### **Development Server**
```bash
# Geliştirme sunucusunu başlat
npm start

# Hot reload özelliği ile otomatik yenileme
# Tarayıcı: http://localhost:3000
```

### **TypeScript Type Checking**
```bash
# TypeScript derlemesini kontrol et
npm run type-check

# Build işlemini test et
npm run build
```

### **Manual Testing**

#### **Kullanıcı Giriş Testi**
1. `/login` sayfasına git
2. Geçerli kullanıcı adı/şifre gir (`john_doe` / `password123`)
3. Ana sayfaya yönlendirme kontrolü
4. Cookie authentication çalışma kontrolü

#### **Portfolio Veri Testi**
1. Ana sayfada portfolio kartını kontrol et
2. Backend API bağlantısını test et
3. Dummy bank entegrasyonunu doğrula
4. Fallback mock data çalışmasını kontrol et

#### **AI Chatbot Testi**
1. Chatbot input alanına test sorusu yaz
2. Backend MCP API çağrısını kontrol et
3. Markdown rendering'i test et
4. Error handling senaryolarını test et

### **Component Testing**

#### **AssetChart Component**
```tsx
// Test senaryoları:
// 1. Loading state rendering
// 2. Data fetching ve visualization
// 3. Error handling
// 4. Responsive design
```

#### **PortfolioDetails Component**
```tsx
// Test senaryoları:
// 1. Authentication kontrolü
// 2. API data fetching
// 3. Mock data fallback
// 4. Loading ve error states
```

## 🎨 UI/UX Özellikleri

### **Chakra UI Theme**
```tsx
// Color scheme
const theme = {
  colors: {
    primary: "teal",
    secondary: "blue",
    accent: "purple",
    success: "green",
    warning: "orange",
    error: "red"
  }
}
```

### **Responsive Breakpoints**
```scss
// Mobile: 0-768px
// Tablet: 768px-1024px  
// Desktop: 1024px+

.dashboard-grid {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
```

### **Animation States**
```tsx
// Framer Motion transitions
const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};
```

## 🚨 Sorun Giderme

### **Yaygın Sorunlar ve Çözümleri**

#### 🔌 **Backend Connection Error**
```bash
# Backend sunucusunun çalıştığını kontrol edin
curl http://localhost:8000/health

# CORS ayarlarını kontrol edin
# Backend'de credentials=true ayarı yapılmalı
```

#### 🍪 **Cookie Authentication Problems**
```typescript
// Fetch requests'te credentials ekleyin
fetch('http://localhost:8000/api', {
  credentials: 'include', // Önemli!
  method: 'GET'
});
```

#### 📊 **Chart Rendering Issues**
```bash
# Recharts dependency'sini yeniden yükleyin
npm uninstall recharts
npm install recharts@3.1.0
```

#### 🎨 **Chakra UI Component Errors**
```bash
# Chakra UI versiyonunu kontrol edin
npm ls @chakra-ui/react

# Framer Motion uyumluluğunu kontrol edin
npm install framer-motion@12.23.6
```

#### 📱 **Finnhub API Rate Limit**
```typescript
// API key kullanımını kontrol edin
// Günlük 60 call limiti var (free tier)
console.log('API calls remaining:', response.headers.get('X-RateLimit-Remaining'));
```

### **Debug ve Log**

#### **Browser Console Debugging**
```typescript
// API response logging
console.log('Backend response:', data);

// State debugging
console.log('Current user:', user);
console.log('Portfolio data:', portfolioData);
```

#### **Network Tab İnceleme**
1. Browser Developer Tools'u açın (F12)
2. Network sekmesine gidin
3. API çağrılarını inceleyin:
   - Status codes (200, 401, 500)
   - Response headers
   - Cookie bilgileri

## 🔮 Gelecek Geliştirmeler

### **Kısa Vadeli (1-2 Hafta)**
- [ ] **Dark Mode** - Gece/gündüz tema değişimi
- [ ] **Loading Skeletons** - Daha iyi UX için loading states
- [ ] **Error Boundaries** - Hata yakalama ve recovery
- [ ] **Performance Optimizasyonu** - React.memo ve useMemo
- [ ] **Accessibility** - WCAG 2.1 uyumluluğu

### **Orta Vadeli (1-2 Ay)**
- [ ] **Progressive Web App (PWA)** - Offline çalışma desteği
- [ ] **Push Notifications** - Portfolio güncellemeleri
- [ ] **Advanced Charts** - Candlestick, volume charts
- [ ] **Export/Import** - Portfolio veri export
- [ ] **Multi-language Support** - İngilizce/Türkçe

### **Uzun Vadeli (3+ Ay)**
- [ ] **Mobile App** - React Native version
- [ ] **Real-time Updates** - WebSocket entegrasyonu
- [ ] **Advanced Analytics** - Machine learning insights
- [ ] **Social Features** - Portfolio paylaşımı
- [ ] **Trading Interface** - Alım/satım işlemleri

### **AI ve ML Geliştirmeleri**
- [ ] **Predictive Analytics** - Trend tahminleri
- [ ] **Sentiment Analysis** - Piyasa sentiment analizi
- [ ] **Custom Recommendations** - Kişiselleştirilmiş öneriler
- [ ] **Voice Interface** - Sesli sohbet desteği
- [ ] **Document Analysis** - Finansal rapor analizi

## 🛡️ Güvenlik

### **Frontend Security Best Practices**

#### **API Security**
```typescript
// Güvenli API çağrıları
const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  return fetch(`${process.env.REACT_APP_BACKEND_URL}${endpoint}`, {
    ...options,
    credentials: 'include', // Cookie authentication
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    }
  });
};
```

#### **Input Validation**
```typescript
// XSS koruması
const sanitizeInput = (input: string) => {
  return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
};
```

#### **Environment Variables**
```bash
# Sensitive data .env dosyasında
REACT_APP_BACKEND_URL=http://localhost:8000
# Asla commit etmeyin!
```

### **Production Deployment**

#### **Build Optimization**
```bash
# Production build
npm run build

# Bundle analizi
npm install -g serve
serve -s build
```

#### **Security Headers**
```nginx
# Nginx konfigürasyonu
add_header X-Content-Type-Options nosniff;
add_header X-Frame-Options DENY;
add_header X-XSS-Protection "1; mode=block";
```

## 📄 Lisans ve Destek

### **Proje Lisansı**
Bu proje **MIT Lisansı** altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakınız.

### **🤝 Katkıda Bulunma**

#### **Development Workflow**
1. **Fork** edin repository'yi
2. **Feature branch** oluşturun (`git checkout -b feature/amazing-feature`)
3. **Type checking** yapın (`npm run type-check`)
4. **Build test** edin (`npm run build`)
5. **Commit** yapın (`git commit -m 'Add amazing feature'`)
6. **Push** edin (`git push origin feature/amazing-feature`)
7. **Pull Request** açın

#### **Code Standards**
```typescript
// TypeScript strict mode
interface ComponentProps {
  title: string;
  data?: PortfolioData;
  onUpdate: (data: PortfolioData) => Promise<void>;
}

// Chakra UI best practices
const StyledBox = styled(Box)`
  /* CSS-in-JS ile styling */
`;
```

### **🆘 Destek ve İletişim**

#### **Sorun Bildirimi**
- 🐛 **Bug Reports**: GitHub Issues kullanın
- 💡 **Feature Requests**: GitHub Discussions
- 📚 **Dokümantasyon**: Wiki sayfalarını kontrol edin

#### **Geliştirici Topluluğu**
- 📧 **Email**: frontend@mcpbanking.com
- 💬 **Discord**: MCP Banking Community
- 🐦 **Twitter**: @MCPBankingUI

---

**⚠️ Not**: Bu proje eğitim ve demonstrasyon amaçlıdır. Production ortamında kullanmadan önce güvenlik review yapın ve production-ready konfigürasyonları uygulayın.

**🎨 Happy Coding!** - My Finance Dashboard Team
