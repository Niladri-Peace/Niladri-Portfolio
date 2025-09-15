import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import { FaGithub } from "react-icons/fa";
import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

type SkillType = {
  readonly skill_name: string;
  readonly image: string;
  readonly width: number;
  readonly height: number;
};

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      <div className="w-full">
        <div className="flex flex-row justify-center flex-wrap gap-5 items-center">
          {[
            ...(FRONTEND_SKILL as unknown as SkillType[]),
            ...(BACKEND_SKILL as unknown as SkillType[]),
            ...(OTHER_SKILL as unknown as SkillType[]),
            ...(FULLSTACK_SKILL as unknown as SkillType[])
          ]
          .filter((skill, index, self) => 
            index === self.findIndex(s => s.skill_name === skill.skill_name)
          )
          .map((skill, i) => {
            // If icon is provided, use it, otherwise render the image
            if ('icon' in skill && skill.icon === 'github') {
              return (
                <div key={skill.skill_name} className="flex flex-col items-center">
                  <div className="w-20 h-20 flex items-center justify-center">
                    <FaGithub className="w-16 h-16 text-white" />
                  </div>
                  <span className="text-white text-sm mt-2">{skill.skill_name}</span>
                </div>
              );
            }
            return (
              <SkillDataProvider
                key={skill.skill_name}
                src={skill.image}
                name={skill.skill_name}
                width={skill.width}
                height={skill.height}
                index={i}
              />
            );
          })}
        </div>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
