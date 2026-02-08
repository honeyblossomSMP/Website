# HoneyBlossomSMP Website

Official website for the HoneyBlossomSMP Minecraft community. Built with vanilla HTML, CSS, and JavaScript for simplicity and reliability.

## � File Structure

```
Website/
├── index.html              ← Home page
├── README.md              ← This file
├── .gitignore             ← Git config
│
├── pages/                 ← All secondary pages
│   ├── wiki.html         ← Commands & info
│   ├── rules.html        ← Server rules
│   └── staff.html        ← Staff directory
│
└── assets/               ← Static files
    ├── css/
    │   └── style.css     ← All styling
    └── js/
        └── script.js     ← Status + animations
```

## 🚀 Quick Deploy

1. Upload entire folder to your web server or hosting provider
2. Open `index.html` - all links and assets work immediately
3. Done

## 🎨 Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Themed Styling**: Honey gold (#FFB300) and cherry blossom pink (#FFB7C5) color scheme
- **Animated Elements**: Falling cherry blossoms and smooth transitions
- **Live Server Status**: Shows player count from Minecraft server
- **Staff Directory**: Beautiful staff member cards
- **Command Wiki**: Interactive tabs for server commands
- **Community Rules**: Server guidelines page
- **Discord Integration**: Direct links to join the community

## 📝 Updating Content

### Server IP
Edit `assets/js/script.js`:
```javascript
const SERVER_IP = "honeyblossomsmp.org";
```

### Staff Directory
Edit `pages/staff.html` - modify the staff card content with names and descriptions

### Rules Page
Edit `pages/rules.html` - update server rules in the ordered list

### Wiki/Commands  
Edit `pages/wiki.html` - add or modify command information in the tabs

- Server status automatically updates every 60 seconds
- All external links point to Discord and Minecraft API
- No database or backend required
- Static site for maximum reliability

## 📞 Support
Technical Details

- **Static Site**: No database, no backend required
- **Live Server Status**: Automatically syncs with Minecraft API every 60 seconds
- **Responsive**: Works on all devices (mobile, tablet, desktop)
- **Animated Header**: 15 falling cherry blossom petals with randomized timing
- **Structured Pages**: Main landing page linked to wiki, rules, and staff directorneyBlossomSMP Community**
