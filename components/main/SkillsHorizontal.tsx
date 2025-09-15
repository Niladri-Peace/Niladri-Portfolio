import React from 'react';
import Image from 'next/image';

const skills = [
  { name: 'React', logo: '/skills/react-logo.webp' },
  { name: 'JavaScript', logo: '/skills/js-logo.webp' },
  { name: 'Node.js', logo: '/skills/node-js-logo.webp' },
  { name: 'Python', logo: '/skills/python-logo.webp' },
  { name: 'Java', logo: '/skills/java-logo.webp' },
  { name: 'SQL', logo: '/skills/sql-logo.webp' },
  { name: 'Tailwind CSS', logo: '/skills/tailwind-logo.webp' },
  { name: 'GitHub', logo: '/skills/github-logo.webp' },
  // Duplicate for smooth infinite scroll
  { name: 'React', logo: '/skills/react-logo.webp' },
  { name: 'JavaScript', logo: '/skills/js-logo.webp' },
  { name: 'Node.js', logo: '/skills/node-js-logo.webp' },
  { name: 'Python', logo: '/skills/python-logo.webp' },
  { name: 'Java', logo: '/skills/java-logo.webp' },
  { name: 'SQL', logo: '/skills/sql-logo.webp' },
  { name: 'Tailwind CSS', logo: '/skills/tailwind-logo.webp' },
  { name: 'GitHub', logo: '/skills/github-logo.webp' },
];

const SkillsHorizontal = () => {
  return (
    <div className="h-32 bg-transparent relative overflow-hidden">
      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white,transparent)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:bg-[linear-gradient(to_left,white,transparent)] after:content-['']">
        <div className="animate-scroll flex w-[calc(320px*16)] gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-6 w-[320px] rounded-lg border border-gray-200 px-6 py-4 bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white/90 transition-all duration-300"
            >
              <div className="w-16 h-16 relative">
                <Image
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  fill
                  className="object-scale-down rounded-full bg-white p-2.5"
                  style={{ objectFit: 'scale-down' }}
                />
              </div>
              <p className="text-lg font-medium text-gray-800">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-320px * 8));
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SkillsHorizontal;
