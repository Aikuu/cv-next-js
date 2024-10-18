// components/Header.tsx
const Header: React.FC = () => {
    return (
        <header className="text-center my-8">
            <h1 className="text-4xl font-bold">Corentin Fournier</h1>
            <h2 className="text-2xl text-gray-600 mt-2">Développeur en apprentissage chez Arsenal</h2>
            <p className="mt-4">
                Email : <a href="mailto:corentin.fnr@gmail.com" className="text-blue-600">corentin.fnr@gmail.com</a> | Téléphone : 07 50 20 09 68
            </p>
        </header>
    );
};

export default Header;
