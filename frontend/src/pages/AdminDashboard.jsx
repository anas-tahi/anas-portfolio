import { useEffect, useState } from "react";
import { getContent, saveContent, uploadFile } from "../api";

export default function AdminDashboard() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getContent().then((data) => {
      setContent(data);
      setLoading(false);
    });
  }, []);

  if (loading || !content) return <p>Loading...</p>;

  // -----------------------------
  // Save All Changes
  // -----------------------------
  async function save() {
    await saveContent(content);
    alert("Saved successfully!");
  }

  // -----------------------------
  // Upload Helper
  // -----------------------------
  async function handleUpload(e, field) {
    const file = e.target.files[0];
    const uploaded = await uploadFile(file);

    setContent({
      ...content,
      profile: {
        ...content.profile,
        [field]: uploaded.path
      }
    });
  }

  // -----------------------------
  // Add Skill
  // -----------------------------
  function addSkill() {
    const name = prompt("Skill name:");
    const level = prompt("Skill level (0-100):");

    if (!name || !level) return;

    setContent({
      ...content,
      skills: [...content.skills, { name, level: Number(level) }]
    });
  }

  // -----------------------------
  // Delete Skill
  // -----------------------------
  function deleteSkill(index) {
    const updated = [...content.skills];
    updated.splice(index, 1);

    setContent({ ...content, skills: updated });
  }

  // -----------------------------
  // Add Project
  // -----------------------------
  function addProject() {
    const title = prompt("Project title:");
    const tech = prompt("Tech stack:");
    const desc = prompt("Description:");

    if (!title || !tech || !desc) return;

    setContent({
      ...content,
      projects: [
        ...content.projects,
        { title, tech, desc, img: "", link: "", github: "" }
      ]
    });
  }

  // -----------------------------
  // Delete Project
  // -----------------------------
  function deleteProject(index) {
    const updated = [...content.projects];
    updated.splice(index, 1);

    setContent({ ...content, projects: updated });
  }

  return (
    <div style={{ padding: 40, maxWidth: 900, margin: "auto" }}>
      <h1>Admin Dashboard</h1>

      {/* ---------------- PROFILE EDITOR ---------------- */}
      <section>
        <h2>Profile</h2>

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

        <label>About Me</label>
        <textarea
          value={content.profile.about}
          onChange={(e) =>
            setContent({
              ...content,
              profile: { ...content.profile, about: e.target.value }
            })
          }
        />

        <label>Profile Picture</label>
        <input type="file" onChange={(e) => handleUpload(e, "profilePic")} />

        <label>CV File</label>
        <input type="file" onChange={(e) => handleUpload(e, "cv")} />
      </section>

      <hr />

      {/* ---------------- LINKS EDITOR ---------------- */}
      <section>
        <h2>Links</h2>

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
      </section>

      <hr />

      {/* ---------------- SKILLS EDITOR ---------------- */}
      <section>
        <h2>Skills</h2>

        {content.skills.map((skill, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
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
                updated[i].level = Number(e.targetvalue);
                setContent({ ...content, skills: updated });
              }}
            />

            <button onClick={() => deleteSkill(i)}>Delete</button>
          </div>
        ))}

        <button onClick={addSkill}>Add Skill</button>
      </section>

      <hr />

      {/* ---------------- PROJECTS EDITOR ---------------- */}
      <section>
        <h2>Projects</h2>

        {content.projects.map((p, i) => (
          <div key={i} style={{ marginBottom: 20 }}>
            <label>Title</label>
            <input
              value={p.title}
              onChange={(e) => {
                const updated = [...content.projects];
                updated[i].title = e.target.value;
                setContent({ ...content, projects: updated });
              }}
            />

            <label>Tech</label>
            <input
              value={p.tech}
              onChange={(e) => {
                const updated = [...content.projects];
                updated[i].tech = e.target.value;
                setContent({ ...content, projects: updated });
              }}
            />

            <label>Description</label>
            <textarea
              value={p.desc}
              onChange={(e) => {
                const updated = [...content.projects];
                updated[i].desc = e.target.value;
                setContent({ ...content, projects: updated });
              }}
            />

            <label>Project Image</label>
            <input
              type="file"
              onChange={async (e) => {
                const file = e.target.files[0];
                const uploaded = await uploadFile(file);

                const updated = [...content.projects];
                updated[i].img = uploaded.path;

                setContent({ ...content, projects: updated });
              }}
            />

            <label>Live Link</label>
            <input
              value={p.link}
              onChange={(e) => {
                const updated = [...content.projects];
                updated[i].link = e.target.value;
                setContent({ ...content, projects: updated });
              }}
            />

            <label>GitHub Repo</label>
            <input
              value={p.github}
              onChange={(e) => {
                const updated = [...content.projects];
                updated[i].github = e.target.value;
                setContent({ ...content, projects: updated });
              }}
            />

            <button onClick={() => deleteProject(i)}>Delete Project</button>
          </div>
        ))}

        <button onClick={addProject}>Add Project</button>
      </section>

      <hr />

      <button onClick={save} style={{ marginTop: 20 }}>
        Save All Changes
      </button>
    </div>
  );
}
