// components/Education.tsx
interface EducationItem {
    degree: string;
    institution: string;
    duration: string;
}

const educationData: EducationItem[] = [
    {
        degree: 'BUT en Informatique',
        institution: 'Université de Lens',
        duration: '2022 - Présent',
    },
    {
        degree: 'BAC Général spécialités Mathématiques et Numérique et Sciences Informatiques',
        institution: 'Lycée Arthur Rimbaud - Sin le Noble',
        duration: '2019 - 2022',
    }
];

const Education: React.FC = () => {
    return (
        <section className="my-8 bg-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-500">Formation</h3>
            {educationData.map((edu, index) => (
                <div key={index} className="mb-6">
                    <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                    <p className="text-gray-400">{edu.institution}</p>
                    <p className="mt-2 text-blue-300">{edu.duration}</p>
                </div>
            ))}
        </section>
    );
};

export default Education;
