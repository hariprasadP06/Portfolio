import "./card.css";

interface SectionCardProps {
  title: string;
  subtitle?: string;
  tags?: string[];
  children: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  subtitle,
  tags = [],
  children,
}) => {
  return (
    <div className="section-card">
      <div className="section-header">
        <h3>{title}</h3>
        {subtitle && <span className="subtitle">{subtitle}</span>}
      </div>
      {tags.length > 0 && (
        <div className="tag-container">
          {tags.map((tag, idx) => (
            <span key={idx} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}
      <p>{children}</p>
    </div>
  );
};

export default SectionCard;
