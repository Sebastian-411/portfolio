import React from "react";

export default function Certification() {
  return (
    <div className="flex flex-col flex-nowrap items- justify-around h-full">
      <p className="text-xl text-primary dark:text-white lg:text-7xl tracking-tight">
        Certificates
      </p>
      <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 md:max-w-xs lg:max-w-none">
        Explore my collection of certificates, each representing a milestone in
        my journey of continuous learning and professional development. 🌟 From
        cutting-edge technologies to essential skills, each certificate
        highlights my commitment to excellence and growth. 🚀 Dive in to see how
        my expertise can benefit your projects and goals!{" "}
      </p>
      <div className="w-full mt-8 md:max-w-xs lg:max-w-none">
        <a
          href={`/certifications`}
          type="button"
          className="text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between"
        >
          Go to certificates
        </a>
      </div>
    </div>
  );
}
