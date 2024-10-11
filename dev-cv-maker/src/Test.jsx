
import { useState } from 'react'


export default function Test() {
  const [data, setData] = useState({
    personal: {
      name: "",
      email: '',
      phone: '',
    },
    education: [
      {
        major: '',
        startDate: '',
        endDate: '',
        universityName: "",
        faculty: "",
        location: "",
      }
    ],
    skills: [
      { title: '', category: '' }
    ],
    experiences: [
      {
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: ''
      }
    ],
    projects: [
      {
        name: '',
        tools: '',
        description: '',
        liveLink: '',
        repoLink: ''
      }
    ]
  });

  // Personal Details Handlers
  const handlePersonalChange = (event) => {
    const { name, value } = event.target;
    setData(prev => ({
      ...prev,
      personal: {
        ...prev.personal,
        [name]: value
      }
    }));
  };

  // Education Handlers
  const handleEducationChange = (index, event) => {
    const { name, value } = event.target;
    const newEducation = [...data.education];
    newEducation[index] = {
      ...newEducation[index],
      [name]: value
    };
    setData(prev => ({ ...prev, education: newEducation }));
  };

  const handleAddEducation = () => {
    setData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        { major: '', startDate: '', endDate: '', universityName: '', faculty: '', location: '' }
      ]
    }));
  };

  const handleRemoveEducation = (index) => {
    const newEducation = data.education.filter((_, i) => i !== index);
    setData(prev => ({ ...prev, education: newEducation }));
  };

  // Skills Handlers
  const handleSkillChange = (index, event) => {
    const { name, value } = event.target;
    const newSkills = [...data.skills];
    newSkills[index] = {
      ...newSkills[index],
      [name]: value
    };
    setData(prev => ({ ...prev, skills: newSkills }));
  };

  const handleAddSkill = () => {
    setData(prev => ({
      ...prev,
      skills: [
        ...prev.skills,
        { title: '', category: '' }
      ]
    }));
  };

  const handleRemoveSkill = (index) => {
    const newSkills = data.skills.filter((_, i) => i !== index);
    setData(prev => ({ ...prev, skills: newSkills }));
  };

  // Experience Handlers
  const handleExperienceChange = (index, event) => {
    const { name, value } = event.target;
    const newExperiences = [...data.experiences];
    newExperiences[index] = {
      ...newExperiences[index],
      [name]: value
    };
    setData(prev => ({ ...prev, experiences: newExperiences }));
  };

  const handleAddExperience = () => {
    setData(prev => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        { company: '', position: '', startDate: '', endDate: '', description: '' }
      ]
    }));
  };

  const handleRemoveExperience = (index) => {
    const newExperiences = data.experiences.filter((_, i) => i !== index);
    setData(prev => ({ ...prev, experiences: newExperiences }));
  };

  // Projects Handlers
  const handleProjectChange = (index, event) => {
    const { name, value } = event.target;
    const newProjects = [...data.projects];
    newProjects[index] = {
      ...newProjects[index],
      [name]: value
    };
    setData(prev => ({ ...prev, projects: newProjects }));
  };

  const handleAddProject = () => {
    setData(prev => ({
      ...prev,
      projects: [
        ...prev.projects,
        { name: '', tools: '', description: '', liveLink: '', repoLink: '' }
      ]
    }));
  };

  const handleRemoveProject = (index) => {
    const newProjects = data.projects.filter((_, i) => i !== index);
    setData(prev => ({ ...prev, projects: newProjects }));
  };

  return (
    <>
      <div className="cv">
        <h1>Show changes</h1>
        <div className="personal">
          <h2>Personal</h2>
          <p className="name">{data.personal.name}</p>
          <p className="email">{data.personal.email}</p>
          <p className="phone">{data.personal.phone}</p>
        </div>
        <div className="education">
          <h2>Education</h2>
          {data.education.map((edu, index) => (
            <div key={index}>
              <p className="major">{edu.major}</p>
              <p className="start-date">{edu.startDate}</p>
              <p className="end-date">{edu.endDate}</p>
              <p className="university">{edu.universityName}</p>
              <p className="location">{edu.location}</p>
              <button onClick={() => handleRemoveEducation(index)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="skills">
          <h2>Skills</h2>
          {data.skills.map((skill, index) => (
            <div key={index}>
              <p className="skill-title">{skill.title}</p>
              <p className="skill-category">{skill.category}</p>
              <button onClick={() => handleRemoveSkill(index)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="experience">
          <h2>Experience</h2>
          {data.experiences.map((exp, index) => (
            <div key={index}>
              <p className="company">{exp.company}</p>
              <p className="position">{exp.position}</p>
              <p className="start-date">{exp.startDate}</p>
              <p className="end-date">{exp.endDate}</p>
              <p className="description">{exp.description}</p>
              <button onClick={() => handleRemoveExperience(index)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="projects">
          <h2>Projects</h2>
          {data.projects.map((proj, index) => (
            <div key={index}>
              <p className="project-name">{proj.name}</p>
              <p className="project-tools">{proj.tools}</p>
              <p className="project-description">{proj.description}</p>
              <p className="project-liveLink">{proj.liveLink}</p>
              <p className="project-repoLink">{proj.repoLink}</p>
              <button onClick={() => handleRemoveProject(index)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
      <div className="forms">
        <form className="personal-form form">
          <h2>Personal Details</h2>
          <div className="input-control">
            <label htmlFor="name">Full name</label>
            <input type="text"
             id="name"
              name="name" 
              value={data.personal.name} 
              onChange={handlePersonalChange} 
              required />
          </div>
          <div className="input-control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={data.personal.email} onChange={handlePersonalChange} required />
          </div>
          <div className="input-control">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={data.personal.phone} onChange={handlePersonalChange} />
          </div>
        </form>
        <form className="education-form form">
          <h2>Education Details</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="education-entry">
              <div className="input-control">
                <label htmlFor={`university-${index}`}>University</label>
                <input 
                  type="text"
                  id={`university-${index}`}
                  name="universityName"
                  value={edu.universityName}
                  onChange={(event) => handleEducationChange(index, event)}
                  required
                />
              </div>
              <div className="input-control">
                <label htmlFor={`major-${index}`}>Major</label>
                <input 
                  type="text"
                  id={`major-${index}`}
                  name="major"
                  value={edu.major}
                  onChange={(event) => handleEducationChange(index, event)}
                />
              </div>
              <div className="input-control">
                <label htmlFor={`start-date-${index}`}>Start Date</label>
                <input 
                  type="date"
                  id={`start-date-${index}`}
                  name="startDate"
                  value={edu.startDate}
                  onChange={(event) => handleEducationChange(index, event)}
                  required
                />
              </div>
              <div className="input-control">
                <label htmlFor={`end-date-${index}`}>End Date</label>
                <input 
                  type="date"
                  id={`end-date-${index}`}
                  name="endDate"
                  value={edu.endDate}
                  onChange={(event) => handleEducationChange(index, event)}
                  required
                />
              </div>
              <div className="input-control">
                <label htmlFor={`location-${index}`}>Location</label>
                <input 
                  type="text"
                  id={`location-${index}`}
                  name="location"
                  value={edu.location}
                  onChange={(event) => handleEducationChange(index, event)}
                />
              </div>
              <button type="button" onClick={() => handleRemoveEducation(index)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={handleAddEducation}>Add Another Education</button>
        </form>
        <form className="skills-form form">
          <h2>Skills Details</h2>
          {data.skills.map((skill, index) => (
            <div key={index} className="skill-entry">
              <div className="input-control">
                <label htmlFor={`skill-title-${index}`}>Skill Title</label>
                <input 
                  type="text"
                  id={`skill-title-${index}`}
                  name="title"
                  value={skill.title}
                  onChange={(event) => handleSkillChange(index, event)}
                />
              </div>
              <div className="input-control">
                <label htmlFor={`skill-category-${index}`}>Category</label>
                <input 
                  type="text"
                  id={`skill-category-${index}`}
                  name="category"
                  value={skill.category}
                  onChange={(event) => handleSkillChange(index, event)}
                />
              </div>
              <button type="button" onClick={() => handleRemoveSkill(index)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={handleAddSkill}>Add Another Skill</button>
        </form>
        <form className="experience-form form">
          <h2>Experience Details</h2>
          {data.experiences.map((exp, index) => (
            <div key={index} className="experience-entry">
              <div className="input-control">
                <label htmlFor={`company-${index}`}>Company</label>
                <input 
                  type="text"
                  id={`company-${index}`}
                  name="company"
                  value={exp.company}
                  onChange={(event) => handleExperienceChange(index, event)}
                />
              </div>
              <div className="input-control">
                <label htmlFor={`position-${index}`}>Position</label>
                <input 
                  type="text"
                  id={`position-${index}`}
                  name="position"
                  value={exp.position}
                  onChange={(event) => handleExperienceChange(index, event)}
                />
              </div>
              <div className="input-control">
                <label htmlFor={`exp-start-date-${index}`}>Start Date</label>
                <input 
                  type="date"
                  id={`exp-start-date-${index}`}
                  name="startDate"
                  value={exp.startDate}
                  onChange={(event) => handleExperienceChange(index, event)}
                />
              </div>
              <div className="input-control">
                <label htmlFor={`exp-end-date-${index}`}>End Date</label>
                <input 
                  type="date"
                  id={`exp-end-date-${index}`}
                  name="endDate"
                  value={exp.endDate}
                  onChange={(event) => handleExperienceChange(index, event)}
                />
              </div>
              <div className="input-control">
                <label htmlFor={`description-${index}`}>Description</label>
                <textarea 
                  id={`description-${index}`}
                  name="description"
                  value={exp.description}
                  onChange={(event) => handleExperienceChange(index, event)}
                />
              </div>
              <button type="button" onClick={() => handleRemoveExperience(index)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={handleAddExperience}>Add Another Experience</button>
        </form>
        <form className="projects-form form">
          <h2>Projects Details</h2>
          {data.projects.map((proj, index) => (
            <div key={index} className="project-entry">
              <div className="input-control">
                <label htmlFor={`project-name-${index}`}>Project Name</label>
                <input 
                  type="text"
                  id={`project-name-${index}`}
                  name="name"
                  value={proj.name}
                  onChange={(event) => handleProjectChange(index, event)}
                />
              </div>
              <div className="input-control">
                <label htmlFor={`tools-${index}`}>Tools Used</label>
                <input 
                  type="text"
                  id={`tools-${index}`}
                  name="tools"
                  value={proj.tools}
                  onChange={(event) => handleProjectChange(index, event)}
                />
              </div>
              <div className="input-control">
                <label htmlFor={`project-description-${index}`}>Description</label>
                <textarea 
                  id={`project-description-${index}`}
                  name="description"
                  value={proj.description}
                  onChange={(event) => handleProjectChange(index, event)}
                />
              </div>
              <div className="input-control">
                <label htmlFor={`liveLink-${index}`}>Live Link</label>
                <input 
                  type="url"
                  id={`liveLink-${index}`}
                  name="liveLink"
                  value={proj.liveLink}
                  onChange={(event) => handleProjectChange(index, event)}
                />
              </div>
              <div className="input-control">
                <label htmlFor={`repoLink-${index}`}>Repo Link</label>
                <input 
                  type="url"
                  id={`repoLink-${index}`}
                  name="repoLink"
                  value={proj.repoLink}
                  onChange={(event) => handleProjectChange(index, event)}
                />
              </div>
              <button type="button" onClick={() => handleRemoveProject(index)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={handleAddProject}>Add Another Project</button>
        </form>
      </div>
    </>
  );
}