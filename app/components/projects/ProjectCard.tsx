import Link from "next/link";
import React from "react";
import Image from "next/image";

import { ExternalLinks } from "../externalLinks/ExternalLinks";

interface Item {
    url: string;
    icon: string;
    description: string;
}

interface Props {
    name: string,
    description: string,
    image: string,
    items: Item[]
}

export const ProjectCard = ({ name, description, image, items }: Props) => {
    return (
        <div className="cursor-pointer flex gap-4 rounded w-full mb-4 p-4 border border-transparent custom-border-gradient hover:shadow-xl hover:bg-[#928ec40a] transition-colors duration-200">
            <div>
                <label className="min-w-24 z-10 mb-2 mt-1 text-xs font-bold uppercase tracking-wide text-slate-500 sm:col-span-2">{image}</label>
            </div>
            <div>
                <div className="flex">
                    <h3 className="font-medium leading-snug text-slate-200 inline-block">{name}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200 ml-2 max-h-5 max-w-5 h-5 w-5" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                </div>
                <p className="mt-2 text-sm leading-normal text-slate-400">{description}</p>
                <ExternalLinks items={items}/>
            </div>
        </div>
    )
}

