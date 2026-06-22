import { useEffect, useState } from "react";
import { getContent, saveContent, uploadFile } from "../api";

// Get API URL for image paths
const getApiUrl = () => {
  return process.env.NODE_ENV === "production" 
    ? "https://anas-portfolio-jje3.onrender.com" 
    : "http://localhost:4000";
};

export default function AdminDashboardModal({ isOpen, onClose, onLogout }) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isOpen) {
      getContent().then((data) => {
        setContent(data);
        setLoading(false);
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;
  if (loading || !content) return (
    <div className="admin-modal-overlay">
      <div className="admin-modal admin-dashboard-modal">
        <div className="loading">Loading...</div>
      </div>
    </div>
  );

  async function save() {
    setSaving(true);
    try {
      console.log('Saving content:', content);
      const result = await saveContent(content);
      console.log('Save result:', result);
      
      if (result.success) {
        alert("Saved successfully!");
        // Wait a moment for the backend to process, then reload
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        alert("Failed to save: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      console.error('Save error:', error);
      alert("Failed to save. Please try again. Error: " + error.message);
    } finally {
      setSaving(false);
    }
  }

  function logout() {
    localStorage.removeItem("adminToken");
    onLogout();
    onClose();
  }

  function addSkill() {
    const name = prompt("Skill name:");
    const level = prompt("Skill level (0-100):");
    if (!name || !level) return;
    setContent({
      ...content,
      skills: [...content.skills, { name, level: Number(level) }]
    });
  }

  function deleteSkill(index) {
    const updated = [...content.skills];
    updated.splice(index, 1);
    setContent({ ...content, skills: updated });
  }

  function addProject() {
    const title = prompt("Project title:");
    const desc = prompt("Description:");
    const tech = prompt("Technologies (comma separated):");
    const demoUrl = prompt("Demo URL (optional):");
    const githubUrl = prompt("GitHub URL (optional):");
    if (!title || !desc || !tech) return;
    setContent({
      ...content,
      projects: [
        ...content.projects,
        { 
          title, 
          description: desc, 
          technologies: tech.split(',').map(t => t.trim()),
          image: "/placeholder1.png",
          demoUrl: demoUrl || "#",
          githubUrl: githubUrl || "#"
        }
      ]
    });
  }

  function deleteProject(index) {
    const updated = [...content.projects];
    updated.splice(index, 1);
    setContent({ ...content, projects: updated });
  }

  async function handleProjectImageUpload(e, index) {
    const file = e.target.files[0];
    if (!file) return;
    
    try {
      const uploaded = await uploadFile(file);
      const updated = [...content.projects];
      // Ensure the image path is correctly formatted for production
      const imagePath = uploaded.path.startsWith('/') ? uploaded.path : '/' + uploaded.path;
      updated[index].image = imagePath;
      updated[index].img = imagePath; // Also update img field for compatibility
      setContent({ ...content, projects: updated });
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload image. Please try again.");
    }
  }

  return (
    <div className="admin-modal-overlay">
      <div className="admin-modal admin-dashboard-modal">
        <div className="admin-modal-header">
          <h3>Edit Portfolio</h3>
          <div className="header-buttons">
            <button onClick={logout} className="logout-btn">Logout</button>
            <button onClick={onClose} className="close-btn">&times;</button>
          </div>
        </div>
        
        <div className="admin-dashboard-content">
          {/* Profile Section */}
          <section className="admin-section">
            <h4>Profile</h4>
            <div className="form-group">
              <label>Name</label>
              <input
                value={content.profile.name}
                onChange={(e) =>
                  setContent({
                    ...content,
                    profile: { ...content.profile, name: e.target.value }
                  })
                }
              />
            </div>
            <div className="form-group">
              <label>Title</label>
              <input
                value={content.profile.title}
                onChange={(e) =>
                  setContent({
                    ...content,
                    profile: { ...content.profile, title: e.target.value }
                  })
                }
              />
            </div>
            <div className="form-group">
              <label>About</label>
              <textarea
                value={content.profile.about}
                onChange={(e) =>
                  setContent({
                    ...content,
                    profile: { ...content.profile, about: e.target.value }
                  })
                }
              />
            </div>
          </section>

          {/* Links Section */}
          <section className="admin-section">
            <h4>Contact Links</h4>
            <div className="form-group">
              <label>Email</label>
              <input
                value={content.profile.links.email}
                onChange={(e) =>
                  setContent({
                    ...content,
                    profile: {
                      ...content.profile,
                      links: { ...content.profile.links, email: e.target.value }
                    }
                  })
                }
              />
            </div>
            <div className="form-group">
              <label>LinkedIn</label>
              <input
                value={content.profile.links.linkedin}
                onChange={(e) =>
                  setContent({
                    ...content,
                    profile: {
                      ...content.profile,
                      links: { ...content.profile.links, linkedin: e.target.value }
                    }
                  })
                }
              />
            </div>
            <div className="form-group">
              <label>GitHub</label>
              <input
                value={content.profile.links.github}
                onChange={(e) =>
                  setContent({
                    ...content,
                    profile: {
                      ...content.profile,
                      links: { ...content.profile.links, github: e.target.value }
                    }
                  })
                }
              />
            </div>
          </section>

          {/* Skills Section */}
          <section className="admin-section">
            <h4>Skills</h4>
            {content.skills.map((skill, i) => (
              <div key={i} className="skill-item">
                <input
                  value={skill.name}
                  onChange={(e) => {
                    const updated = [...content.skills];
                    updated[i].name = e.target.value;
                    setContent({ ...content, skills: updated });
                  }}
                />
                <input
                  type="number"
                  value={skill.level}
                  onChange={(e) => {
                    const updated = [...content.skills];
                    updated[i].level = Number(e.target.value);
                    setContent({ ...content, skills: updated });
                  }}
                />
                <button onClick={() => deleteSkill(i)} className="delete-btn">Delete</button>
              </div>
            ))}
            <button onClick={addSkill} className="add-btn">Add Skill</button>
          </section>

          {/* Projects Section */}
          <section className="admin-section">
            <h4>Projects</h4>
            {content.projects.map((project, i) => (
              <div key={i} className="project-item">
                <div className="form-group">
                  <label>Title</label>
                  <input
                    value={project.title}
                    onChange={(e) => {
                      const updated = [...content.projects];
                      updated[i].title = e.target.value;
                      setContent({ ...content, projects: updated });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={project.description}
                    onChange={(e) => {
                      const updated = [...content.projects];
                      updated[i].description = e.target.value;
                      setContent({ ...content, projects: updated });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Technologies</label>
                  <input
                    value={project.technologies ? project.technologies.join(', ') : ''}
                    onChange={(e) => {
                      const updated = [...content.projects];
                      updated[i].technologies = e.target.value.split(',').map(t => t.trim());
                      setContent({ ...content, projects: updated });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Demo URL</label>
                  <input
                    type="url"
                    value={project.demoUrl || ''}
                    placeholder="https://example.com"
                    onChange={(e) => {
                      const updated = [...content.projects];
                      updated[i].demoUrl = e.target.value;
                      setContent({ ...content, projects: updated });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>GitHub URL</label>
                  <input
                    type="url"
                    value={project.githubUrl || ''}
                    placeholder="https://github.com/username/repo"
                    onChange={(e) => {
                      const updated = [...content.projects];
                      updated[i].githubUrl = e.target.value;
                      setContent({ ...content, projects: updated });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Project Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleProjectImageUpload(e, i)}
                  />
                  {project.image && (
                    <div className="current-image">
                      <img 
                        src={
                          project.image.startsWith('/uploads/') 
                            ? getApiUrl() + project.image 
                            : project.image
                        } 
                        alt="Current project" 
                        style={{maxWidth: '100px', marginTop: '10px'}} 
                        onError={(e) => {
                          e.target.src = "/placeholder1.png";
                        }}
                      />
                      <p>Current: {project.image}</p>
                    </div>
                  )}
                </div>
                <button onClick={() => deleteProject(i)} className="delete-btn">Delete Project</button>
              </div>
            ))}
            <button onClick={addProject} className="add-btn">Add Project</button>
          </section>

          <div className="admin-modal-footer">
            <button onClick={save} disabled={saving} className="save-btn">
              {saving ? "Saving..." : "Save All Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
