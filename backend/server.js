const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../frontend/public/uploads'))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, '../frontend/public/uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Serve static files from frontend/public
app.use('/static', express.static(path.join(__dirname, '../frontend/public')));
app.use(express.static(path.join(__dirname, '../frontend/public')));
app.use('/uploads', express.static(path.join(__dirname, '../frontend/public/uploads')));

// Load portfolio content from file or use defaults
let portfolioContent;

function loadPortfolioContent() {
  try {
    const dataPath = path.join(__dirname, 'portfolio-data.json');
    if (fs.existsSync(dataPath)) {
      const data = fs.readFileSync(dataPath, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.log('No saved data found, using defaults');
  }
  
  // Default content
  return {
    profile: {
      name: "Your Name",
      title: "Full Stack Developer",
      about: "I am a passionate full stack developer with expertise in modern web technologies. I love creating beautiful and functional applications that solve real-world problems.",
      profilePic: "/profile.jpeg",
      cv: "/cv.pdf",
      links: {
        email: "your.email@example.com",
        linkedin: "https://linkedin.com/in/yourprofile",
        github: "https://github.com/yourusername"
      }
    },
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "MongoDB", level: 65 },
      { name: "Python", level: 60 },
      { name: "Git", level: 85 }
    ],
    projects: [
      {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with payment integration",
        image: "/placeholder1.png",
        technologies: ["React", "Node.js", "MongoDB"],
        demoUrl: "#",
        githubUrl: "#"
      },
      {
        title: "Task Management App",
        description: "A collaborative task management application",
        image: "/placeholder1.png",
        technologies: ["React", "Express", "PostgreSQL"],
        demoUrl: "#",
        githubUrl: "#"
      }
    ],
    contact: {
      links: {
        email: "your.email@example.com",
        linkedin: "https://linkedin.com/in/yourprofile",
        github: "https://github.com/yourusername"
      }
    }
  };
}

portfolioContent = loadPortfolioContent();

// Routes
app.get('/content', (req, res) => {
  res.json(portfolioContent);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Authentication with Anas/Anas credentials
  if (username === 'Anas' && password === 'Anas') {
    res.json({ success: true, token: 'admin-token-' + Date.now() });
  } else {
    res.json({ success: false, message: 'Invalid credentials' });
  }
});

app.post('/save', (req, res) => {
  try {
    const updatedContent = req.body;
    
    // Update the in-memory content
    Object.assign(portfolioContent, updatedContent);
    
    // Save to file for persistence
    fs.writeFileSync(
      path.join(__dirname, 'portfolio-data.json'),
      JSON.stringify(portfolioContent, null, 2)
    );
    
    res.json({ success: true, message: 'Content saved successfully' });
  } catch (error) {
    console.error('Save error:', error);
    res.status(500).json({ success: false, message: 'Failed to save content' });
  }
});

app.post('/upload', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }
    
    res.json({ 
      success: true, 
      message: 'File uploaded successfully',
      path: '/uploads/' + req.file.filename
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ success: false, message: 'Upload failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
