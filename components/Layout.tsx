import React from 'react';
import Link from 'next/link';

const Layout = ({ children }:any) => {
    return (
        <div>
            <header className="bg-gray-800 text-white p-4">
                <nav className="container mx-auto flex justify-between">
                    <Link href="/">
                        Recipe Sharing Platform
                    </Link>
                    <div>
                        <Link href="/recipes">
                            Recipes
                        </Link>
                        <Link href="/recipes/create">
                            Create Recipe
                        </Link>
                    </div>
                </nav>
            </header>
            <main className="container mx-auto p-4">
                {children}
            </main>
            <footer className="bg-gray-800 text-white p-4 mt-4">
                <div className="container mx-auto text-center">
                    © {new Date().getFullYear()} Recipe Sharing Platform
                </div>
            </footer>
        </div>
    );
};

export default Layout;
