'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { Header } from '@/client/shared/ui/Header';
import { Footer } from '@/client/shared/ui/Footer';
import { MoveRight, Instagram, Globe, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '@/client/shared/data/projects';
import useEmblaCarousel from 'embla-carousel-react';
import { InstagramEmbed } from '@/client/shared/ui/InstagramEmbed';

import { WebPreviewModal } from '@/client/shared/ui/WebPreviewModal';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenPreview: (url: string, title: string, type: 'instagram' | 'website', logo?: string) => void;
}

const ProjectCard = ({ project, index, onOpenPreview }: ProjectCardProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeView, setActiveView] = useState<'media' | 'embed'>('media');

  const scrollPrev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const images = [project.logo, ...(project.gallery?.filter(img => img !== project.logo) || [])];

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className={`group cursor-pointer relative ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
    >
      {/* Decorative Background Element */}
      <div className={`absolute -top-32 -right-16 w-64 h-64 ${project.rotation} pointer-events-none select-none z-0`}>
        <div 
          className="w-full h-full bg-brand"
          style={{
            maskImage: `url(${project.decoration})`,
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskImage: `url(${project.decoration})`,
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center'
          }}
        />
      </div>
       
      {activeView === 'embed' && project.instagramPostUrl ? (
        <div className="mb-6 relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
          <div className="overflow-hidden rounded-xl shadow-2xl bg-white dark:bg-black flex justify-center">
            <InstagramEmbed url={project.instagramPostUrl} />
          </div>
        </div>
      ) : (
      <div className="aspect-[5/5] bg-white dark:bg-bg-color mb-6 overflow-hidden relative flex items-center justify-center p-0 transition-transform duration-500 group-hover:-translate-y-2 z-10 shadow-2xl rounded-sm">
        {/* Carousel */}
        <div className="w-full h-full overflow-hidden" ref={emblaRef}>
          <div className="flex w-full h-full">
            {images.map((img, idx) => (
              <div key={idx} className="flex-[0_0_100%] min-w-0 relative w-full h-full flex items-center justify-center">
                 <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                   {(() => {
                     const isLogo = img === project.logo;
                     return (
                       <Image 
                         src={img} 
                         alt={`${project.name} - View ${idx + 1}`}
                         fill 
                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                         className={`${isLogo ? 'object-contain p-12' : 'object-cover object-top'} ${isLogo && project.bright ? 'brightness-0' : ''} ${isLogo && project.invert ? 'invert dark:invert-0' : ''}`}
                       />
                     );
                   })()}
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation */}
        {images.length > 1 && (
          <>
            <button 
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/10 hover:bg-background/20 backdrop-blur-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/10 hover:bg-background/20 backdrop-blur-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-foreground w-3' : 'bg-foreground/30'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      )}

      <div className="relative z-10">
        <div className="flex justify-between items-baseline border-b border-foreground/10 pb-4 group-hover:border-foreground transition-colors duration-500">
          <h3 className="text-2xl font-medium">{project.name}</h3>
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{project.year}</span>
        </div>
        
        {/* Project Details */}
        <div className="pt-4 space-y-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {project.description && (
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {project.description}
            </p>
          )}
          
          <div className="flex items-center justify-between pt-2 flex-wrap gap-4">
            {project.location && (
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin size={14} />
                <span>{project.location}</span>
              </div>
            )}
            
            <div className="flex gap-3 ml-auto">
              {project.instagram && (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    if (activeView === 'embed') {
                      setActiveView('media');
                    } else if (project.instagramPostUrl) {
                      setActiveView('embed');
                    } else {
                      onOpenPreview(project.instagram!, project.name, 'instagram', project.logo);
                    }
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-xs font-medium ${activeView === 'embed' ? 'bg-foreground text-background hover:bg-foreground/80' : 'border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background'}`}
                >
                  <Instagram size={14} />
                  <span>Instagram</span>
                </button>
              )}
              {project.website && (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    if (activeView === 'embed') {
                      setActiveView('media');
                    } else {
                      onOpenPreview(project.website!, `${project.name}`, 'website', project.logo);
                    }
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-xs font-medium ${activeView === 'media' ? 'bg-foreground text-background hover:bg-foreground/80' : 'border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background'}`}
                >
                  <Globe size={14} />
                  <span>Site</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function PortfolioPage() {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [preview, setPreview] = useState<{ isOpen: boolean; url: string; title: string; type: 'instagram' | 'website'; logo?: string }>({
    isOpen: false,
    url: '',
    title: '',
    type: 'website'
  });

  const handleOpenPreview = (url: string, title: string, type: 'instagram' | 'website', logo?: string) => {
    setPreview({ isOpen: true, url, title, type, logo });
  };

  const handleClosePreview = () => {
    setPreview(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand selection:text-brand-foreground dark:selection:bg-brand dark:selection:text-brand-foreground">
      <Header />
      
      <WebPreviewModal 
        isOpen={preview.isOpen}
        onClose={handleClosePreview}
        url={preview.url}
        title={preview.title}
        type={preview.type}
        projectLogo={preview.logo}
      />
      
      <main className="flex-1 pt-32 pb-20 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20">
          <h1 className="text-[10vw] md:text-[8vw] leading-[0.85] font-bold tracking-tight text-foreground uppercase mix-blend-normal animate-[slideUp_1s_var(--ease-sophisticated)_forwards]">
            Cases
          </h1>
        </div>

        <section className="px-4 md:px-0 bg-background relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 mb-32">
               <AnimatePresence mode="popLayout">
                 {projects.slice(0, visibleProjects).map((project, index) => (
                   <ProjectCard 
                     key={project.name} 
                     project={project} 
                     index={index} 
                     onOpenPreview={handleOpenPreview}
                   />
                 ))}
               </AnimatePresence>
             </div>

             {/* View More Button */}
             {visibleProjects < projects.length && (
               <div className="flex justify-center w-full">
                 <button 
                   onClick={() => setVisibleProjects(prev => prev + 4)}
                   className="group relative flex items-center gap-4 px-8 py-4 text-xl font-medium overflow-hidden rounded-full hover:bg-foreground/5 transition-colors duration-300"
                 >
                   <span className="relative z-10">Carregar mais</span>
                   <div className="relative w-12 h-12 flex items-center justify-center rounded-full border border-foreground/20 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                     <MoveRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                   </div>
                 </button>
               </div>
             )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
