// "use client";

// import { Video } from "lucide-react";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// interface NewsSectionProps {
//   description?: string;
//   videoUrl?: string;
//   benefits?: string[];
// }

// export default function NewsSection({
//   description = "Une technique chirurgicale innovante qui minimise l'invasion et maximise la précision des interventions rachidiennes.",
//   videoUrl = "https://youtu.be/uyDBTpAIHpE?si=WEYRDN2Uut_QwBl0",
//   benefits = [
//     "Précision chirurgicale",
//     "Accélère la récupération",
//     "Réduit la douleur post-opératoire",
//   ],
// }: NewsSectionProps) {
//   const [videoError, setVideoError] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//           }
//         });
//       },
//       {
//         threshold: 0.1,
//         rootMargin: "-50px 0px",
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const getYouTubeEmbedUrl = (url: string): string | null => {
//     try {
//       const regExp =
//         /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
//       const match = url.match(regExp);
//       return match && match[2].length === 11
//         ? `https://www.youtube.com/embed/${match[2]}`
//         : null;
//     } catch (error) {
//       console.error("Invalid YouTube URL", error);
//       return null;
//     }
//   };

//   const embedUrl = getYouTubeEmbedUrl(videoUrl);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full py-24 transition-colors duration-300 bg-gradient-to-b from-transparent via-slate-50/90 to-white border-b border-slate-200"
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Main Title */}
//         <div
//           className={`flex flex-col items-center justify-center mb-24 relative transition-all duration-1000 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           {/* Subtitle section */}
//           <div className="flex items-center gap-3 mb-8">
//             <div
//               className="w-3 h-3 bg-brand-bay-of-many-600 rounded-full animate-pulse"
//               aria-hidden="true"
//             ></div>
//             <h2 className="text-xs uppercase tracking-wider text-brand-bay-of-many-600">
//               Actualité
//             </h2>
//           </div>
//           <h3 className="text-xl text-slate-600 uppercase tracking-wide mb-12">
//             Une révolution chirurgicale
//           </h3>
//           <p className="text-4xl text-slate-900">
//             ENDOSCOPIE BIPORTALE RACHIDIENNE
//           </p>
//         </div>

//         {/* Content Grid */}
//         <div className="grid grid-cols-12 gap-24">
//           {/* Left Column - Text */}
//           <div
//             className={`col-span-5 flex flex-col justify-center space-y-12 transition-all duration-700 delay-300 ${
//               isVisible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 -translate-x-10"
//             }`}
//           >
//             <div className="space-y-8">
//               <p className="text-base text-slate-600 leading-relaxed text-justify">
//                 {description}
//               </p>

//               <ul className="border-t border-brand-bay-of-many-200">
//                 {benefits.map((item, index) => (
//                   <li
//                     key={index}
//                     className={`relative group border-b border-slate-200 transition-all duration-500`}
//                   >
//                     <div className="absolute inset-0 w-full h-full bg-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     <div className="relative flex items-center text-slate-700 px-6 py-3 group-hover:text-slate-900 transition-colors duration-300">
//                       <span className="text-base leading-relaxed">{item}</span>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-8">
//               <Link
//                 href="/news"
//                 className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-bay-of-many-800 hover:text-brand-bay-of-many-600 transition-all"
//               >
//                 <span>Découvrir</span>
//                 <span className="h-px w-8 bg-brand-bay-of-many-600 transform origin-left transition-all duration-300 ease-out group-hover:w-12"></span>
//               </Link>

//               <Link
//                 href={videoUrl}
//                 className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-bay-of-many-800 hover:text-brand-bay-of-many-600 transition-all"
//               >
//                 <span>Regarder la vidéo</span>
//                 <Video className="w-4 h-4 transform transition-transform duration-300 ease-out group-hover:translate-x-1" />
//               </Link>
//             </div>
//           </div>

//           {/* Right Column - Video */}
//           <div
//             className={`col-span-6 col-start-7 relative transition-all duration-700 delay-500 ${
//               isVisible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 translate-x-10"
//             }`}
//           >
//             <div
//               className="absolute -z-10 top-6 left-6 w-full h-full rounded-xl bg-brand-bay-of-many-200 blur-lg"
//               aria-hidden="true"
//             ></div>
//             <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-out md:translate-x-10 bg-white">
//               {videoError ? (
//                 <div className="absolute inset-0 flex items-center justify-center bg-brand-bay-of-many-50">
//                   <p className="text-brand-bay-of-many-500 text-sm">
//                     Impossible de charger la vidéo
//                   </p>
//                 </div>
//               ) : embedUrl ? (
//                 <iframe
//                   src={embedUrl}
//                   className="absolute inset-0 w-full h-full"
//                   title="Surgical technique demonstration"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   onError={() => setVideoError(true)}
//                 />
//               ) : (
//                 <div className="absolute inset-0 flex items-center justify-center bg-brand-bay-of-many-50 animate-pulse">
//                   <Video className="w-12 h-12 text-brand-bay-of-many-400" />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Video } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface NewsSectionProps {
  description?: string;
  videoUrl?: string;
  benefits?: string[];
}

export default function NewsSection({
  description = "Une technique chirurgicale innovante qui minimise l'invasion et maximise la précision des interventions rachidiennes.",
  videoUrl = "https://youtu.be/uyDBTpAIHpE?si=WEYRDN2Uut_QwBl0",
  benefits = [
    "Précision chirurgicale",
    "Accélère la récupération",
    "Réduit la douleur post-opératoire",
  ],
}: NewsSectionProps) {
  const [videoError, setVideoError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getYouTubeEmbedUrl = (url: string): string | null => {
    try {
      const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return match && match[2].length === 11
        ? `https://www.youtube.com/embed/${match[2]}`
        : null;
    } catch (error) {
      console.error("Invalid YouTube URL", error);
      return null;
    }
  };

  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 transition-colors duration-300 bg-gradient-to-b from-transparent via-slate-50/90 to-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Title */}
        <div
          className={`flex flex-col items-center justify-center mb-24 relative transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Subtitle section */}
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-3 h-3 bg-brand-bay-of-many-600 rounded-full animate-pulse"
              aria-hidden="true"
            ></div>
            <h2 className="text-xs uppercase tracking-wider text-brand-bay-of-many-600">
              Actualité
            </h2>
          </div>
          <h3 className="text-xl text-slate-600 uppercase tracking-wide mb-12">
            Une révolution chirurgicale
          </h3>
          <p className="text-4xl text-slate-900">
            ENDOSCOPIE BIPORTALE RACHIDIENNE
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-12 gap-24">
          {/* Left Column - Text */}
          <div
            className={`col-span-5 flex flex-col justify-center space-y-12 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-8">
              <p className="text-base text-slate-600 leading-relaxed text-justify">
                {description}
              </p>

              <ul className="border-t border-brand-bay-of-many-200">
                {benefits.map((item, index) => (
                  <li
                    key={index}
                    className={`relative group border-b border-slate-200 transition-all duration-500`}
                  >
                    <div className="absolute inset-0 w-full h-full bg-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center text-slate-700 px-6 py-3 group-hover:text-slate-900 transition-colors duration-300">
                      <span className="text-base leading-relaxed">{item}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-8">
              <Link
                href="/news"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-bay-of-many-800 hover:text-brand-bay-of-many-600 transition-all"
              >
                <span>Découvrir</span>
                <span className="h-px w-8 bg-brand-bay-of-many-600 transform origin-left transition-all duration-300 ease-out group-hover:w-12"></span>
              </Link>

              <Link
                href={videoUrl}
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-bay-of-many-800 hover:text-brand-bay-of-many-600 transition-all"
              >
                <span>Regarder la vidéo</span>
                <Video className="w-4 h-4 transform transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column - Video */}
          <div
            className={`col-span-6 col-start-7 relative transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div
              className="absolute -z-10 top-6 left-6 w-full h-full rounded-xl bg-brand-bay-of-many-200 blur-lg"
              aria-hidden="true"
            ></div>
            <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-out md:translate-x-10 bg-white">
              {videoError ? (
                <div className="absolute inset-0 flex items-center justify-center bg-brand-bay-of-many-50">
                  <p className="text-brand-bay-of-many-500 text-sm">
                    Impossible de charger la vidéo
                  </p>
                </div>
              ) : embedUrl ? (
                <iframe
                  src={embedUrl}
                  className="absolute inset-0 w-full h-full"
                  title="Surgical technique demonstration"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onError={() => setVideoError(true)}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-brand-bay-of-many-50 animate-pulse">
                  <Video className="w-12 h-12 text-brand-bay-of-many-400" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
