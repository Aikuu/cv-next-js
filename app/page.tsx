import Image from "next/image";
import Header from "@/app/components/Header";
import Head from 'next/head';
import Footer from "@/app/components/Footer";
import Experience from "@/app/components/Experience";
import Education from "@/app/components/Education";
import Skills from "@/app/components/Skills";
import "@/app/styles/globals.css";

const Home: React.FC = () => {
    return (
        <div className="container mx-auto px-4">
            <Head>
                <title>CV - Corentin Fournier</title>
            </Head>
            <Header />
            <main>
                <Experience />
                <Education />
                <Skills />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
