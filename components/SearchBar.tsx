'use client';
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/recipes?search=${query}`);
    };

    return (
        <form onSubmit={handleSearch} className="flex mb-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for recipes..."
                className="flex-grow px-4 py-2 border rounded-l text-black"
            />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-black rounded-r">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
