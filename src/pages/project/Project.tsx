import SectionCard from "../../components/SectionCard/SectionCard";
import "../../components/SectionCard/section.css";

const Projects = () => {
  return (
    <section className="section">
      <h2>Projects</h2>

      <div className="project-grid">
        <SectionCard title="HackerNews" tags={["Open Source"]}>
          A web application that allows users to post and discuss news articles,
          similar to Reddit. Built with React and Node.js.
        </SectionCard>

        <SectionCard title="Criminal Detection" tags={["In-Progress"]}>
          AI Model for Crime Prediction
        </SectionCard>

        <SectionCard title="Cloud Security" tags={["Open Source"]}>
          A web application that provides security features for cloud-based
          applications. Built with Flask and AWS.
        </SectionCard>
      </div>
    </section>
  );
};

export default Projects;
