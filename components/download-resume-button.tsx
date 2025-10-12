'use client';

import { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { Download, Check, CloudDownload } from "lucide-react";

export function DownloadResumeButton() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  useEffect(() => {
    if (isDownloaded) {
      const timer = setTimeout(() => {
        setIsDownloaded(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isDownloaded]);

  const handleDownload = () => {
    if (isDownloading) return;
    
    setIsDownloading(true);
    
    // Simulate download time for better UX
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/Lovish_Batra_Resume.pdf';
      link.download = 'Lovish_Batra_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setIsDownloading(false);
      setIsDownloaded(true);
    }, 800);
  };

  return (
    <div className="relative">
      <Button
        size="lg"
        className={`w-full sm:w-auto group shadow-lg transition-all duration-300 overflow-hidden ${
          isDownloading ? 'pr-12' : 'pr-6'
        } ${
          isDownloaded 
            ? 'bg-green-600 hover:bg-green-700 shadow-green-500/30 hover:shadow-green-500/40' 
            : 'bg-primary hover:bg-primary/90 shadow-primary/30 hover:shadow-primary/40'
        }`}
        onClick={handleDownload}
        disabled={isDownloading || isDownloaded}
      >
        <span className={`transition-all duration-300 ${isDownloaded ? 'text-white' : ''} flex items-center`}>
          {isDownloaded ? (
            <>
              <Check className="w-5 h-5 mr-2" />
              <span>Downloaded!</span>
            </>
          ) : (
            <>
              <Download className={`w-5 h-5 mr-2 ${isDownloading ? 'animate-bounce' : ''}`} />
              <span>Download Resume</span>
            </>
          )}
        </span>
        
        {/* Download progress indicator */}
        {isDownloading && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          </span>
        )}
      </Button>
      
      {/* Floating success message */}
      {isDownloaded && (
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap shadow-lg animate-bounce">
          <div className="flex items-center">
            <CloudDownload className="w-4 h-4 mr-1.5" />
            Resume Downloaded!
          </div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-green-600 rotate-45"></div>
        </div>
      )}
    </div>
  );
}
