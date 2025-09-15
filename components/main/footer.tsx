import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

type FooterItem = {
  readonly name: string;
  readonly link: string;
  readonly icon?: React.ComponentType<{ className?: string }> | null;
};

type FooterColumn = {
  readonly title: string;
  readonly data: readonly FooterItem[];
};

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px]">{column.title}</h3>
              {column.data.map((item) => {
                const IconComponent = 'icon' in item ? item.icon : null;
                return (
                  <Link
                    key={`${column.title}-${item.name}`}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex flex-row items-center my-[15px]"
                  >
                    {IconComponent && <IconComponent />}
                    <span className={`text-[15px] ${IconComponent ? 'ml-[6px]' : ''}`}>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        <div className="mb-[20px] mt-[20px] text-[15px] text-center">
          &copy; {new Date().getFullYear()} Niladri Bhandari. All rights reserved.
        </div>
      </div>
    </div>
  );
};
