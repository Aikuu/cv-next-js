// components/Footer.tsx
const Footer: React.FC = () => {
    return (
        <footer className="text-center mt-8 py-4 border-t border-gray-700 bg-black">
            <p className="text-white">
                © 2024 Corentin Fournier |{' '}
                <a
                    href="https://github.com/Aikuu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    GitHub
                </a>{' '}
                |{' '}
                <a
                    href="https://www.linkedin.com/in/corentin-fournier-586a94295/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    LinkedIn
                </a>
            </p>
        </footer>
    );
};

export default Footer;
