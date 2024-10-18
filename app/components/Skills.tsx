// components/Skills.tsx
interface SkillItem {
    skill: string;
}

const skillsData: SkillItem[] = [
    { skill: 'Java' },
    { skill: 'Python' },
    { skill: 'Angular' },
    { skill: 'TypeScript' },
    { skill: 'HTML & CSS' },
    { skill: 'Laravel' },
];

const Skills: React.FC = () => {
    return (
        <section className="my-8">
            <h3 className="text-2xl font-bold mb-4">Compétences</h3>
            <ul className="list-disc list-inside">
                {skillsData.map((skill, index) => (
                    <li key={index} className="text-lg">{skill.skill}</li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
