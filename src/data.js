export const profile = {
  name: 'Vikas Dubey',
  firstName: 'Vikas',
  lastName: 'Dubey',
  title: 'Senior React Native Engineer',
  location: 'Indore, India',
  availability: 'Open to Remote',
  phone: '+91-7581048000',
  email: 'vikasdubeysu9090@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vikas-dubey-a58b97194/',
  resumeUrl: '/Vikas_Dubey_Resume.pdf',
  portrait: '/vikas-dubey-portrait.jpg',
  summary:
    'React Native engineer with 5 years at Walkover, building mobile apps and SDKs for MSG91 and Giddh. Built 3 production apps and 5 SDKs from scratch, led a team of 3, releases to Google Play, App Store, npm and pub.dev. Strongest at native Android/iOS modules, SIP/WebRTC calling and mobile security. Looking for a Senior React Native role.',
  education: {
    degree: 'B.Tech CSE',
    school: 'Indore Institute of Science and Technology',
    cgpa: '9.0',
    years: '2018–2022',
  },
}

export const stats = [
  { value: '5', label: 'Years experience' },
  { value: '3', label: 'Production apps' },
  { value: '5', label: 'SDKs shipped' },
  { value: '97%', label: 'Crash-free' },
]

export const personalInfos = [
  { label: 'First name', value: 'Vikas' },
  { label: 'Last name', value: 'Dubey' },
  { label: 'Location', value: 'Indore, India' },
  { label: 'Availability', value: 'Open to Remote' },
  { label: 'Phone', value: '+91-7581048000', href: 'tel:+917581048000' },
  { label: 'Email', value: 'vikasdubeysu9090@gmail.com', href: 'mailto:vikasdubeysu9090@gmail.com' },
  {
    label: 'LinkedIn',
    value: 'vikas-dubey',
    href: 'https://www.linkedin.com/in/vikas-dubey-a58b97194/',
  },
  { label: 'Languages', value: 'English, Hindi' },
]

export const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'TypeScript', level: 92 },
      { name: 'JavaScript', level: 95 },
      { name: 'Dart', level: 78 },
      { name: 'Kotlin', level: 72 },
      { name: 'C++', level: 60 },
    ],
  },
  {
    title: 'Mobile & UI',
    skills: [
      { name: 'React Native', level: 96 },
      { name: 'Flutter', level: 80 },
      { name: 'React.js', level: 88 },
      { name: 'Redux family', level: 90 },
      { name: 'Reanimated', level: 85 },
    ],
  },
  {
    title: 'Native & Realtime',
    skills: [
      { name: 'Native modules', level: 90 },
      { name: 'WebRTC / SIP', level: 88 },
      { name: 'VoIP / CallKit', level: 86 },
      { name: 'Socket.IO / FCM', level: 90 },
      { name: 'WireGuard', level: 75 },
    ],
  },
  {
    title: 'Platform & Quality',
    skills: [
      { name: 'SDK architecture', level: 92 },
      { name: 'VAPT / SSL pinning', level: 84 },
      { name: 'Detox / CI', level: 82 },
      { name: 'Fastlane / GHA', level: 88 },
      { name: 'Firebase suite', level: 85 },
    ],
  },
]

export const experience = {
  role: 'Software Developer (React Native & SDKs)',
  company: 'Walkover',
  location: 'Indore, India',
  period: 'Jun 2021 – Present',
  highlights: [
    'Led team of 3 across 3 B2B RN apps (Hello, Giddh, Giddh Expense; 1K+ users each on Play) and 5 SDKs across 8 repos.',
    'SendOTP RN SDK: invisible OTP/SNA, biometric, Truecaller, theming; ~1K weekly npm downloads.',
    'SNA redirect fix via custom native rawFetch; invisible verification 0 → ~40% of monthly OTP traffic.',
    'Hello Chat Widget SDK (WebView + Cobrowse); In-App Push Notification SDK (FCM, Socket.IO, WebView); SendOTP Flutter SDK on pub.dev.',
    'VoIP: JsSIP + WireGuard native modules; VoIP push / FCM + CallKit/CallKeep for killed-state calls.',
    'Perf: 80% faster load (Socket.IO, Realm, AsyncStorage + cache); 50% less startup lag; 40→60 FPS; dynamic theming (~70% dark); iPad +40% responsiveness.',
    'IAP/subscriptions on iOS end-to-end.',
    'VAPT: root/hook detection, SSL/public-key pinning, permission hardening; cleared retest.',
    '~2 releases/month via GitHub Actions + Fastlane; ~97% crash-free (Crashlytics); CodePush + Remote Config; Detox E2E.',
  ],
}

export const projects = [
  {
    id: 'sendotp-rn',
    name: 'SendOTP React Native SDK',
    type: 'SDK',
    emoji: '🔐',
    accent: '#ffb400',
    blurb: 'Invisible OTP / SNA, biometric & Truecaller — ~1K weekly npm downloads.',
    tags: ['npm', 'OTP', 'Native'],
    links: [
      {
        label: 'npm',
        href: 'https://www.npmjs.com/package/@msg91comm/sendotp-react-native',
      },
    ],
  },
  {
    id: 'hello-sdk',
    name: 'Hello Chat Widget SDK',
    type: 'SDK',
    emoji: '💬',
    accent: '#4cc9f0',
    blurb: 'WebView + Cobrowse chat widget for embedding Hello into RN apps.',
    tags: ['npm', 'WebView', 'Chat'],
    links: [
      {
        label: 'npm',
        href: 'https://www.npmjs.com/package/@msg91comm/react-native-hello-sdk',
      },
    ],
  },
  {
    id: 'sendotp-flutter',
    name: 'SendOTP Flutter SDK',
    type: 'SDK',
    emoji: '🦋',
    accent: '#54d2a0',
    blurb: 'Flutter counterpart of SendOTP — published on pub.dev.',
    tags: ['pub.dev', 'Flutter', 'OTP'],
    links: [
      {
        label: 'pub.dev',
        href: 'https://pub.dev/packages/sendotp_flutter_sdk',
      },
    ],
  },
  {
    id: 'hello-app',
    name: 'Hello: Chatbot & Shared Inbox',
    type: 'App',
    emoji: '📱',
    accent: '#ff6b6b',
    blurb: 'Production B2B chat & shared inbox — Google Play & App Store.',
    tags: ['React Native', 'Play', 'App Store'],
    links: [
      {
        label: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.hellornapp',
      },
      {
        label: 'iOS',
        href: 'https://apps.apple.com/us/app/hello-chatbot-shared-inbox/id1635375551',
      },
    ],
  },
  {
    id: 'giddh-app',
    name: 'Giddh: Accounting & Billing',
    type: 'App',
    emoji: '📒',
    accent: '#a78bfa',
    blurb: 'Accounting & billing for businesses — live on Play and App Store.',
    tags: ['React Native', 'IAP', 'Realm'],
    links: [
      {
        label: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.app.Giddh',
      },
      {
        label: 'iOS',
        href: 'https://apps.apple.com/in/app/giddh-accounting-billing-app/id1491003438',
      },
    ],
  },
  {
    id: 'giddh-expense',
    name: 'Giddh Expense',
    type: 'App',
    emoji: '💸',
    accent: '#f59e0b',
    blurb: 'Petty cash & expense tracking companion — Play & App Store.',
    tags: ['React Native', 'Expense', 'Stores'],
    links: [
      {
        label: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.giddh.petty.cash',
      },
      {
        label: 'iOS',
        href: 'https://apps.apple.com/kw/app/giddh-expense/id6503641717',
      },
    ],
  },
]

export const navItems = [
  { id: 'home', label: 'Home', icon: '⌂' },
  { id: 'about', label: 'About', icon: '◉' },
  { id: 'skills', label: 'Skills', icon: '◎' },
  { id: 'experience', label: 'Experience', icon: '▤' },
  { id: 'portfolio', label: 'Portfolio', icon: '▦' },
  { id: 'contact', label: 'Contact', icon: '✉' },
]
