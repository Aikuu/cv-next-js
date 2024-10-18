// components/Experience.tsx
interface ExperienceItem {
    jobTitle: string;
    company: string;
    duration: string;
    description: string;
}

const experienceData: ExperienceItem[] = [
    {
        jobTitle: 'Développeur Alternant',
        company: 'Arsenal',
        duration: '2024 - Présent',
        description: 'Développement d\'applications java en Android Studio et gestion des bases de données.',
    },

];

const Experience: React.FC = () => {
    return (
        <section className="my-8">
            <h3 className="text-2xl font-bold mb-4">Expérience Professionnelle</h3>
            {experienceData.map((exp, index) => (
                <div key={index} className="mb-6">
                    <h4 className="text-xl font-semibold">{exp.jobTitle} chez {exp.company}</h4>
                    <p className="text-gray-500"><strong>{exp.duration}</strong></p>
                    <p className="mt-2">{exp.description}</p>
                </div>
            ))}
        </section>
    );
};

export default Experience;
