// components/Header.tsx
const Header: React.FC = () => {
    return (
        <header className="text-center my-8">
            <h1 className="text-4xl font-bold text-white">Corentin Fournier</h1>
            <h2 className="text-2xl text-blue-400 mt-2">Développeur en apprentissage chez Arsenal</h2>
            <p className="mt-4 text-gray-300">
                Email : <a href="mailto:corentin.fnr@gmail.com" className="text-blue-500 hover:underline">corentin.fnr@gmail.com</a> | Téléphone : <span className="text-blue-500">07 50 20 09 68</span>
            </p>
        </header>
    );
};

export default Header;
