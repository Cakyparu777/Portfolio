'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { Code, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SimpleHome() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Code className="h-6 w-6" />
            <span className="font-bold">Portfolio</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Building Digital Experiences</h1>
        <p className="text-xl text-gray-600 mb-8">Fullstack Engineer</p>
        <p className="text-lg text-gray-500 mb-8">
          Transforming ideas into elegant, functional solutions
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="text-gray-600">
              I am a full-stack engineer with almost 3 years of experience, 
              specializing in modern web technologies and cloud solutions.
            </p>
          </div>
          
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">Python</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">React</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">Next.js</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">AWS</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 