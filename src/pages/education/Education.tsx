import SectionCard from "../../components/SectionCard/SectionCard";
import "../../components/SectionCard/section.css";
const Education = () => {
  return (
    <section className="section">
      <h2>Education</h2>

      <SectionCard
        title="Bachelor of Engineering"
        subtitle="Computer Science • 2022-2025"
        tags={["Computer Science"]}
      >
        Siddaganga Institute Of Technology <br />
        7.80 CGPA
      </SectionCard>
    </section>
  );
};

export default Education;
