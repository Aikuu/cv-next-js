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
        description: "Développement d'applications Java en Android Studio et gestion des bases de données.",
    },
];

const Experience: React.FC = () => {
    return (
        <section className="my-8 bg-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-500">Expérience Professionnelle</h3>
            {experienceData.map((exp, index) => (
                <div key={index} className="mb-6">
                    <h4 className="text-xl font-semibold text-white">{exp.jobTitle} chez {exp.company}</h4>
                    <p className="text-blue-300"><strong>{exp.duration}</strong></p>
                    <p className="mt-2 text-gray-300">{exp.description}</p>
                </div>
            ))}
        </section>
    );
};

export default Experience;
