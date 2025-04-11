import "../../components/SectionCard/section.css";
import SectionCard from "../../components/SectionCard/SectionCard";
const WorkExperience = () => {
  return (
    <section className="section">
      <h2>Work Experience</h2>
      <SectionCard
        title="FullStack AI Developer"
        subtitle="on-site | 2025 - 2026"
        tags={["on-site", "Full-time"]}
      >
        Developed and deployed fullstack web applications with integrated AI
        capabilities using modern frameworks.
        <br />
        <br />
        Created intelligent features such as face recognition and recommendation
        systems using Python and machine learning libraries.
      </SectionCard>
    </section>
  );
};

export default WorkExperience;
