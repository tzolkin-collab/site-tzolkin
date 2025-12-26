'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, ExternalLink, AlertCircle } from 'lucide-react';

interface WebPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
  type: 'instagram' | 'website';
  projectLogo?: string;
}

export function WebPreviewModal({ isOpen, onClose, url, title, type }: WebPreviewModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);
  const [prevUrl, setPrevUrl] = useState(url);

  // Reset states when url changes (State adjustment during render pattern)
  if (url !== prevUrl) {
    setPrevUrl(url);
    setIsLoading(true);
    setIframeError(false);
  }

  // Reset on open if needed, or rely on URL change. 
  // If the same URL is opened again, we might want to reset? 
  // Usually preserving state is fine, but if we want to force reset on open:
  // We can use a ref or just rely on unmounting. 
  // Given the previous code tried to reset on 'isOpen', let's assume we want fresh state each time.
  // However, doing it in useEffect causes the warning.
  // Best approach: Add a 'key' prop to the component usage in parent, 
  // OR handle the reset logic when 'isOpen' changes from false to true.
  // Here, we'll use a side effect that doesn't trigger immediate re-render loops 
  // or simply accept that we only reset when URL changes.
  
  // Alternative: use a key on the AnimatePresence children to force remount of content
  
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const renderContent = () => {
    if (type === 'instagram') {
      return (
        <div className="w-full h-full bg-white flex flex-col items-center justify-center p-4">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
              <Loader2 className="w-8 h-8 animate-spin text-pink-500" />
            </div>
          )}
          
          <iframe 
            src={`${url}embed`}
            className="w-full h-full max-w-[540px] border-none overflow-hidden" 
            allowTransparency={true}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setIframeError(true);
            }}
          />
        </div>
      );
    }

    return (
      <div className="w-full h-full bg-white relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="w-8 h-8 animate-spin text-brand" />
              <p className="text-sm text-gray-500 font-medium">Carregando {title}...</p>
            </div>
          </div>
        )}

        {iframeError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
             <div className="text-center p-6 max-w-md">
               <AlertCircle className="w-10 h-10 text-red-500 mx-auto mb-4" />
               <h3 className="text-lg font-bold text-gray-900 mb-2">Não foi possível carregar o site</h3>
               <p className="text-gray-600 mb-6">
                 Alguns sites bloqueiam a visualização dentro de outros sites por segurança.
               </p>
               <a 
                 href={url} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand text-white rounded-lg hover:bg-brand/90 transition-colors font-medium"
               >
                 Abrir site em nova aba <ExternalLink className="w-4 h-4" />
               </a>
             </div>
          </div>
        ) : (
          <iframe
            src={url}
            className="w-full h-full border-0"
            title={`Preview of ${title}`}
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setIframeError(true);
            }}
          />
        )}
      </div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
          >
            {/* Header */}
            <div className="h-16 border-b border-gray-100 flex items-center justify-between px-6 bg-white shrink-0">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-red-500" />
                   <div className="w-2 h-2 rounded-full bg-yellow-500" />
                   <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <div className="h-6 w-px bg-gray-200 mx-2" />
                <h3 className="font-semibold text-gray-900 truncate max-w-[200px] sm:max-w-md">
                  {title}
                </h3>
              </div>
              
              <div className="flex items-center gap-2">
                <a 
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-500 hover:text-brand hover:bg-brand/5 rounded-full transition-colors"
                  title="Abrir em nova aba"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 bg-gray-100 relative overflow-hidden">
               {/* Force re-mount of content when URL changes to ensure iframe reloads properly */}
               <div key={url} className="w-full h-full">
                 {renderContent()}
               </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
