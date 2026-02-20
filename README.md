# Anas Portfolio

A modern, professional portfolio website with admin panel for content management.

## Features

- 🎨 **Modern Design**: Clean, airy color scheme with professional animations
- 👨‍💼 **Admin Panel**: Login as admin to edit all portfolio content
- 📸 **Image Uploads**: Upload project images with file management
- 🎯 **Responsive**: Works perfectly on all devices
- ⚡ **Fast**: Optimized performance with smooth animations
- 🔐 **Secure**: Admin authentication with token-based access

## Tech Stack

### Frontend
- React 18
- React Router
- Modern CSS with animations
- Glass morphism design

### Backend
- Node.js
- Express
- Multer for file uploads
- File-based data persistence

## Admin Access

- **Username**: `Anas`
- **Password**: `Anas`

## Local Development

### Prerequisites
- Node.js 14+
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/anas-tahi/anas-portfolio.git
cd anas-portfolio
```

2. **Install dependencies**
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

3. **Start development servers**
```bash
# Backend (in terminal 1)
cd backend
npm start

# Frontend (in terminal 2)
cd frontend
npm start
```

4. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:4000

## Deployment

### GitHub Pages (Frontend Only)

1. **Build the frontend**
```bash
cd frontend
npm run build
```

2. **Deploy to GitHub Pages**
```bash
npm run deploy
```

### Render (Full Stack)

1. **Connect your GitHub repository to Render**
2. **Create two services:**
   - **Backend Service**: Node.js, root directory `./backend`
   - **Frontend Service**: Static Site, root directory `./frontend`

3. **Environment Variables**
   - Backend: `NODE_ENV=production`, `PORT=10000`
   - Frontend: `REACT_APP_API_URL=https://your-backend-url.onrender.com`

### Vercel (Frontend Only)

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
cd frontend
vercel
```

## Project Structure

```
anas-portfolio/
├── backend/
│   ├── server.js          # Express server
│   ├── package.json       # Backend dependencies
│   └── portfolio-data.json # Persistent data storage
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/        # Page components
│   │   ├── styles/       # CSS styles
│   │   └── api.js        # API calls
│   ├── public/
│   │   └── uploads/      # Uploaded images
│   └── package.json      # Frontend dependencies
└── README.md
```

## Admin Features

The admin panel allows you to:
- Edit profile information (name, title, about)
- Update contact details (email, LinkedIn, GitHub)
- Manage skills (add, edit, delete)
- Manage projects (add, edit, delete, upload images)
- Upload profile picture and CV

## Customization

### Colors
Edit `frontend/src/styles/Colors.css` to customize the color scheme.

### Animations
Edit `frontend/src/styles/Animations.css` to modify animations.

### Content
All content is managed through the admin panel or by editing `backend/portfolio-data.json`.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit and push
5. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support, please contact Anas through the portfolio or create an issue on GitHub.
