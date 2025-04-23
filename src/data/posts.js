// src/data/posts.js
export const posts = [
  {
    slug: "kanban-board",
    title: "How to create an awesome Kanban board using Dnd-kit",
    youtubeUrl: "https://www.youtube.com/embed/BRB8fNu6Uxc", // Example embed
    date: "2023-09-12",
    introduction:
      "In this post, we’ll create an awesome Kanban board using dnd-kit. We’ll cover prerequisites, project setup, and the drag-and-drop logic.",
    prerequisites: [
      "React 18+",
      "dnd-kit installed (`npm install @dnd-kit/core`)",
      "Basic understanding of React hooks",
    ],
    content: `
## Install project

\`\`\`bash
npm install
npm run dev
\`\`\`

## Code Overview

We'll set up a basic **Kanban layout** with columns and cards. Each card is draggable within or between columns:

- Drag columns around.
- Reorder tasks.
- Track state in React.

> **Tip:** Keep tasks small and focused for easier management.

You can read more in the [official docs](https://github.com/clauderic/dnd-kit).

## Layout setup

\`\`\`jsx
import { DndContext } from '@dnd-kit/core';

function KanbanBoard() {
  return (
    <DndContext>
      {/* Columns and Cards */}
    </DndContext>
  );
}

export default KanbanBoard;
\`\`\`
    `,
  },
  {
    slug: "nav-menu",
    title: "How to create an awesome navigation menu using Chakra UI and Framer Motion",
    youtubeUrl: "https://www.youtube.com/embed/zpOULjyy-n8", // Another embed
    date: "2023-08-10",
    introduction:
      "Learn how to build a responsive nav menu with animated transitions using Chakra UI and Framer Motion.",
    prerequisites: ["React 18+", "Chakra UI", "Framer Motion"],
    content: `
## Getting Started

\`\`\`bash
npm install @chakra-ui/react framer-motion
\`\`\`

Then, wrap your app with \`<ChakraProvider>\` in \`main.jsx\` or \`App.jsx\`.

## Code Example

\`\`\`jsx
import { ChakraProvider, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function NavMenu() {
  return (
    <Box as={motion.nav} initial={{ x: -100 }} animate={{ x: 0 }}>
      {/* Navigation Links */}
    </Box>
  );
}
\`\`\`
    `,
  },
  {
    slug: "three-fiber-intro",
    title: "How to create an awesome intro with React Three Fiber",
    youtubeUrl: "",
    date: "2023-07-15",
    introduction:
      "React Three Fiber lets you build 3D scenes using React. We'll create a simple rotating cube scene in this post.",
    prerequisites: ["React 18+", "react-three-fiber", "Three.js basics"],
    content: `
## Setup

\`\`\`bash
npm install three @react-three/fiber
\`\`\`

## Scene Example

\`\`\`jsx
import { Canvas } from '@react-three/fiber';

function Scene() {
  return (
    <Canvas>
      {/* Add Lights, Camera, Meshes */}
    </Canvas>
  );
}
\`\`\`

You'll have a rotating cube with minimal code!
    `,
  },
  {
    slug: "optimizing-react-performance",
    title: "Optimizing React Performance with Memoization",
    youtubeUrl: "",
    date: "2023-06-20",
    introduction:
      "Learn how to use React.memo, useCallback, and useMemo to improve performance in large-scale applications.",
    prerequisites: ["React 18+", "Basic knowledge of React hooks"],
    content: `
## Why Performance Matters

Large apps can become slow if we're not careful. React provides:

1. \`React.memo\` for memoizing components.
2. \`useCallback\` for memoizing callbacks.
3. \`useMemo\` for memoizing expensive computations.

## Example

\`\`\`jsx
function MyComponent({ value }) {
  return <div>{value}</div>;
}

export default React.memo(MyComponent);
\`\`\`
    `,
  },
  {
    slug: "styled-components-guide",
    title: "A Complete Guide to Styled Components",
    youtubeUrl: "https://www.youtube.com/embed/2LhoCfjm8R4",
    date: "2023-05-10",
    introduction:
      "Styled Components is a popular CSS-in-JS library for React. We'll explore its features and best practices.",
    prerequisites: ["React 18+", "npm install styled-components"],
    content: `
## Installation

\`\`\`bash
npm install styled-components
\`\`\`

## Example

\`\`\`jsx
import styled from 'styled-components';

const Button = styled.button\`
  background: #0070f3;
  color: #fff;
  padding: 0.5rem 1rem;
\`;

export default function App() {
  return <Button>Click me</Button>;
}
\`\`\`
    `,
  },
  {
    slug: "nebulaflick",
    title: "Building NebulaFlick: A Modern Streaming Platform with Next.js",
    youtubeUrl: "https://www.youtube.com/embed/your-demo-video-id", // Replace with your actual demo video
    date: "2025-04-15",
    introduction:
      "In this project, I developed NebulaFlick, a full-featured streaming platform with responsive design, content discovery, and adaptive video playback. This post details the technical challenges and solutions implemented throughout the development, including Torrentio and Real-Debrid API integration, image optimization, and persistent settings.",
    prerequisites: [
      "Next.js 14+",
      "Shaka Player for video streaming",
      "TMDB API integration",
      "Torrentio API for content sources",
      "Real-Debrid API for premium links"
    ],
    content: `
## **Project Overview**

![NebulaFlick Dashboard](/images/nebulaflick-dashboard.jpg)

NebulaFlick is a modern streaming platform built with Next.js featuring:

- Responsive UI for mobile, tablet, and desktop
- Content discovery with trending movies and shows
- Adaptive video playback with multiple quality options
- Season and episode selection for TV shows
- Search functionality across all content
- Integration with external APIs for metadata and streaming sources
- Real-Debrid integration for premium streaming links
- Settings management with cookie persistence

## **Core Technologies**

\`\`\`bash
# Key packages used
npm install next react react-dom
npm install shaka-player
npm install framer-motion
npm install tailwindcss
npm install js-cookie
\`\`\`

## **Key Implementation Challenges**

### **1. Custom Video Player with Shaka Player**

![Video Player Screenshot](/images/nebulaflick-player.jpg)

One of the biggest challenges was implementing a robust video player that handles multiple streaming protocols (HLS, DASH) and adapts to network conditions:

\`\`\`jsx
// Simplified version of ShakaPlayer component
import React, { useEffect, useRef } from 'react';
import shaka from 'shaka-player';

export default function ShakaPlayer({ manifestUrl, posterUrl }) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Initialize Shaka Player
    if (!videoRef.current) return;
    
    shaka.polyfill.installAll();
    if (!shaka.Player.isBrowserSupported()) {
      console.error("Browser not supported for streaming!");
      return;
    }

    playerRef.current = new shaka.Player(videoRef.current);
    
    // Configure player
    playerRef.current.configure({
      streaming: {
        bufferingGoal: 60,
        rebufferingGoal: 2,
        bufferBehind: 30,
        retryParameters: {
          maxAttempts: 5,
          baseDelay: 1000,
          backoffFactor: 2
        }
      }
    });

    // Listen for errors
    playerRef.current.addEventListener('error', (event) => {
      console.error('Error code', event.detail.code, 'object', event.detail);
    });

    // Load content
    playerRef.current.load(manifestUrl).catch(error => {
      console.error('Error loading stream:', error);
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [manifestUrl]);

  return (
    <div className="video-container w-full aspect-video bg-black">
      <video
        ref={videoRef}
        poster={posterUrl}
        controls
        playsInline
        className="w-full h-full"
      />
    </div>
  );
}
\`\`\`

### **2. Torrentio and Real-Debrid API Integration**

![Stream Modal with Sources](/images/stream-modal.jpg)

One of the most challenging aspects was integrating with Torrentio to fetch streaming sources and Real-Debrid to generate premium links:

\`\`\`typescript
// torrentio.ts - Integration with Torrentio API
const TORRENTIO_BASE_URL = process.env.NEXT_PUBLIC_TORRENTIO_URL || 'https://torrentio.strem.fun';

export async function getMovieSources(imdbId: string) {
  try {
    const response = await fetch(
      \`\${TORRENTIO_BASE_URL}/stream/movie/\${imdbId}.json\`
    );
    const data = await response.json();
    return data.streams || [];
  } catch (error) {
    console.error('Error fetching movie sources:', error);
    return [];
  }
}

export async function getShowSources(imdbId: string, season: number, episode: number) {
  try {
    const response = await fetch(
      \`\${TORRENTIO_BASE_URL}/stream/series/\${imdbId}:\${season}:\${episode}.json\`
    );
    const data = await response.json();
    return data.streams || [];
  } catch (error) {
    console.error('Error fetching show sources:', error);
    return [];
  }
}

// Real-Debrid API integration for premium links
export async function getDebridLink(magnetLink: string, apiKey: string) {
  try {
    // Step 1: Add the magnet to Real-Debrid
    const addResponse = await fetch('https://api.real-debrid.com/rest/1.0/torrents/addMagnet', {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${apiKey}\`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        magnet: magnetLink
      })
    });
    
    if (!addResponse.ok) throw new Error('Failed to add magnet');
    const { id } = await addResponse.json();
    
    // Step 2: Select files (usually the largest video file)
    const infoResponse = await fetch(\`https://api.real-debrid.com/rest/1.0/torrents/info/\${id}\`, {
      headers: {
        'Authorization': \`Bearer \${apiKey}\`
      }
    });
    
    const torrentInfo = await infoResponse.json();
    const fileIds = torrentInfo.files
      .filter(file => file.path.match(/\\.(mp4|mkv|avi|mov)$/i))
      .sort((a, b) => b.bytes - a.bytes) // Sort by size, largest first
      .map(file => file.id);
    
    if (fileIds.length === 0) throw new Error('No video files found');
    
    // Step 3: Select files to download
    await fetch(\`https://api.real-debrid.com/rest/1.0/torrents/selectFiles/\${id}\`, {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${apiKey}\`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        files: fileIds.join(',')
      })
    });
    
    // Step 4: Wait for processing (with timeout)
    let attempts = 0;
    while (attempts < 10) {
      const statusResponse = await fetch(\`https://api.real-debrid.com/rest/1.0/torrents/info/\${id}\`, {
        headers: {
          'Authorization': \`Bearer \${apiKey}\`
        }
      });
      
      const status = await statusResponse.json();
      if (status.status === 'downloaded') {
        // Step 5: Get the streaming link
        const links = await fetch(\`https://api.real-debrid.com/rest/1.0/torrents/info/\${id}\`, {
          headers: {
            'Authorization': \`Bearer \${apiKey}\`
          }
        }).then(res => res.json());
        
        return links.links[0]; // Return the first streaming link
      }
      
      await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
      attempts++;
    }
    
    throw new Error('Timeout waiting for processing');
  } catch (error) {
    console.error('Error getting debrid link:', error);
    return null;
  }
}
\`\`\`

### **3. Image Placeholders and Optimization**

A significant challenge was optimizing image loading and providing placeholders for movie/show posters:

\`\`\`jsx
// Dynamic Image Component with Placeholders and Blur-up
import { useState } from 'react';
import Image from 'next/image';

function OptimizedImage({ path, title, width, height, quality = 75 }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  
  // TMDB image URL constructor with size
  const getImageUrl = (path, size = 'w500') => {
    if (!path) return null;
    return \`https://image.tmdb.org/t/p/\${size}\${path}\`;
  };
  
  // Placeholder generator with title text
  const generatePlaceholder = (title) => {
    return \`https://placehold.co/\${width}x\${height}/232634/ffffff?text=\${encodeURIComponent(title || 'Not Found')}\`;
  };
  
  const imageUrl = path ? getImageUrl(path) : generatePlaceholder(title);
  
  return (
    <div className="relative overflow-hidden rounded-lg">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}
      
      <Image
        src={error ? generatePlaceholder(title) : imageUrl}
        alt={title || 'Media poster'}
        width={width}
        height={height}
        className={\`transition-opacity duration-300 \${
          isLoading ? 'opacity-0' : 'opacity-100'
        }\`}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
        priority={false}
        quality={quality}
      />
    </div>
  );
}
\`\`\`

### **4. TV Show Season and Episode Management**

![TV Show Page](/images/tv-show-page.jpg)

Handling the complex hierarchical structure of TV shows required careful state management:

\`\`\`jsx
// Simplified SeasonSelector component
import { useState, useEffect } from 'react';

export default function SeasonSelector({ show, onSelectEpisode }) {
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [episodes, setEpisodes] = useState([]);
  
  useEffect(() => {
    async function fetchEpisodes() {
      // Fetch episodes for the selected season
      const seasonData = await fetch(
        \`https://api.themoviedb.org/3/tv/\${show.id}/season/\${selectedSeason}?api_key=\${process.env.TMDB_API_KEY}\`
      ).then(res => res.json());
      
      setEpisodes(seasonData.episodes || []);
    }
    
    fetchEpisodes();
  }, [show.id, selectedSeason]);
  
  return (
    <div className="seasons-container">
      <div className="season-tabs">
        {Array.from({ length: show.number_of_seasons }, (_, i) => i + 1).map(season => (
          <button
            key={season}
            className={\`season-tab \${selectedSeason === season ? 'active' : ''}\`}
            onClick={() => setSelectedSeason(season)}
          >
            Season {season}
          </button>
        ))}
      </div>
      
      <div className="episodes-grid">
        {episodes.map(episode => (
          <div 
            key={episode.id} 
            className="episode-card"
            onClick={() => onSelectEpisode(selectedSeason, episode.episode_number)}
          >
            <div className="episode-number">{episode.episode_number}</div>
            <div className="episode-title">{episode.name}</div>
            <div className="episode-runtime">{episode.runtime} min</div>
          </div>
        ))}
      </div>
    </div>
  );
}
\`\`\`

### **5. Settings Management with Cookies**

![Settings Page](/images/settings-page.jpg)

Implementing a settings page to manage API keys and preferences with cookie persistence:

\`\`\`jsx
// Settings page component
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function SettingsPage() {
  const router = useRouter();
  const [settings, setSettings] = useState({
    realDebridApiKey: '',
    torrentioEndpoint: 'https://torrentio.strem.fun',
    preferredQuality: '1080p',
    subtitlesEnabled: true,
    theme: 'dark'
  });
  
  // Load settings from cookies on initial render
  useEffect(() => {
    const savedSettings = {
      realDebridApiKey: Cookies.get('realDebridApiKey') || '',
      torrentioEndpoint: Cookies.get('torrentioEndpoint') || 'https://torrentio.strem.fun',
      preferredQuality: Cookies.get('preferredQuality') || '1080p',
      subtitlesEnabled: Cookies.get('subtitlesEnabled') !== 'false',
      theme: Cookies.get('theme') || 'dark'
    };
    
    setSettings(savedSettings);
  }, []);
  
  // Save settings to cookies and update state
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setSettings(prev => ({
      ...prev,
      [name]: newValue
    }));
    
    // Save to cookie (30 day expiration)
    Cookies.set(name, newValue.toString(), { expires: 30 });
  };
  
  // Test Real-Debrid connection
  const testRealDebridConnection = async () => {
    if (!settings.realDebridApiKey) {
      alert('Please enter your Real-Debrid API key');
      return;
    }
    
    try {
      const response = await fetch('https://api.real-debrid.com/rest/1.0/user', {
        headers: {
          'Authorization': \`Bearer \${settings.realDebridApiKey}\`
        }
      });
      
      if (response.ok) {
        const userData = await response.json();
        alert(\`Connected successfully! Account: \${userData.username}\`);
      } else {
        alert('Connection failed. Please check your API key.');
      }
    } catch (error) {
      alert(\`Error: \${error.message}\`);
    }
  };
  
  return (
    <div className="settings-container">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <div className="settings-form">
        <div className="form-group">
          <label htmlFor="realDebridApiKey">Real-Debrid API Key</label>
          <input
            type="password"
            id="realDebridApiKey"
            name="realDebridApiKey"
            value={settings.realDebridApiKey}
            onChange={handleChange}
            className="form-input"
          />
          <button 
            onClick={testRealDebridConnection}
            className="test-button"
          >
            Test Connection
          </button>
        </div>
        
        <div className="form-group">
          <label htmlFor="torrentioEndpoint">Torrentio Endpoint</label>
          <select
            id="torrentioEndpoint"
            name="torrentioEndpoint"
            value={settings.torrentioEndpoint}
            onChange={handleChange}
            className="form-select"
          >
            <option value="https://torrentio.strem.fun">torrentio.strem.fun (Default)</option>
            <option value="https://torrentio-fly.herokuapp.com">torrentio-fly.herokuapp.com</option>
            <option value="https://torrentio.cyou">torrentio.cyou</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="preferredQuality">Preferred Quality</label>
          <select
            id="preferredQuality"
            name="preferredQuality"
            value={settings.preferredQuality}
            onChange={handleChange}
            className="form-select"
          >
            <option value="4K">4K</option>
            <option value="1080p">1080p</option>
            <option value="720p">720p</option>
            <option value="480p">480p</option>
          </select>
        </div>
        
        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="subtitlesEnabled"
              checked={settings.subtitlesEnabled}
              onChange={handleChange}
              className="form-checkbox"
            />
            Enable Subtitles
          </label>
        </div>
        
        <div className="form-group">
          <label htmlFor="theme">Theme</label>
          <select
            id="theme"
            name="theme"
            value={settings.theme}
            onChange={handleChange}
            className="form-select"
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="system">System</option>
          </select>
        </div>
      </div>
    </div>
  );
}
\`\`\`

### **6. Responsive Design and User Experience**

Creating a consistent experience across devices required thoughtful UI design:

\`\`\`jsx
// BottomNav component for mobile navigation
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-90 md:hidden z-50">
      <div className="flex justify-around items-center py-3">
        <Link href="/" className={\`nav-item \${pathname === '/' ? 'active' : ''}\`}>
          <HomeIcon />
          <span>Home</span>
        </Link>
        
        <Link href="/movies" className={\`nav-item \${pathname === '/movies' ? 'active' : ''}\`}>
          <MovieIcon />
          <span>Movies</span>
        </Link>
        
        <Link href="/shows" className={\`nav-item \${pathname === '/shows' ? 'active' : ''}\`}>
          <TvIcon />
          <span>Shows</span>
        </Link>
        
        <Link href="/search" className={\`nav-item \${pathname === '/search' ? 'active' : ''}\`}>
          <SearchIcon />
          <span>Search</span>
        </Link>
      </div>
    </div>
  );
}
\`\`\`

## **Audio and Video Codec Challenges**

One of the most difficult aspects was ensuring compatibility across browsers with different codec support:

\`\`\`javascript
// Audio codec detection and fallback logic
function detectSupportedAudioCodecs() {
  const audioElement = document.createElement('audio');
  
  const codecSupport = {
    aac: audioElement.canPlayType('audio/mp4; codecs="mp4a.40.2"'),
    opus: audioElement.canPlayType('audio/ogg; codecs="opus"'),
    vorbis: audioElement.canPlayType('audio/ogg; codecs="vorbis"'),
    ac3: audioElement.canPlayType('audio/ac3'),
    ec3: audioElement.canPlayType('audio/eac3'),
  };
  
  // Determine best codec based on browser support
  if (codecSupport.opus.includes('probably')) {
    return 'opus';
  } else if (codecSupport.aac.includes('probably')) {
    return 'aac';
  } else if (codecSupport.vorbis.includes('probably')) {
    return 'vorbis';
  } else {
    // Fallback
    return 'aac';
  }
}

// Video container format detection for optimal playback
function getOptimalContainerFormat() {
  const videoElement = document.createElement('video');
  
  // Check container format support
  const containerSupport = {
    mp4: videoElement.canPlayType('video/mp4'),
    webm: videoElement.canPlayType('video/webm'),
    ogg: videoElement.canPlayType('video/ogg'),
    hls: videoElement.canPlayType('application/vnd.apple.mpegurl'),
    dash: typeof window.MediaSource !== 'undefined'
  };
  
  if (containerSupport.dash) {
    return 'dash'; // DASH for MSE-capable browsers
  } else if (containerSupport.hls.includes('probably')) {
    return 'hls'; // HLS for Safari
  } else if (containerSupport.webm.includes('probably')) {
    return 'webm';
  } else {
    return 'mp4'; // Default fallback
  }
}
\`\`\`

## **StreamModal Component: Handling Multiple Sources**

A crucial part of the application was the StreamModal component that handles the selection and playback of various stream sources:

\`\`\`jsx
// StreamModal.tsx - Modal for selecting and playing streams
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { getMovieSources, getDebridLink } from '@/utils/torrentio';

export default function StreamModal({ movieId, imdbId, title, isOpen, onClose }) {
  const router = useRouter();
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const preferredQuality = Cookies.get('preferredQuality') || '1080p';
  const realDebridApiKey = Cookies.get('realDebridApiKey') || '';
  
  useEffect(() => {
    if (!isOpen || !imdbId) return;
    
    async function fetchSources() {
      setLoading(true);
      try {
        // Get sources from Torrentio
        const fetchedSources = await getMovieSources(imdbId);
        
        // Sort and filter sources based on quality preferences
        const sortedSources = fetchedSources
          .filter(source => {
            // Filter out non-video sources
            return source.title.match(/\\.(mp4|mkv|avi)$/i);
          })
          .sort((a, b) => {
            // Quality score calculation based on resolution, size, seeders
            const getQualityScore = (source) => {
              let score = 0;
              
              // Resolution preference
              if (source.title.includes('2160p') || source.title.includes('4K')) {
                score += preferredQuality === '4K' ? 100 : 70;
              } else if (source.title.includes('1080p')) {
                score += preferredQuality === '1080p' ? 90 : 80;
              } else if (source.title.includes('720p')) {
                score += preferredQuality === '720p' ? 80 : 60;
              } else if (source.title.includes('480p')) {
                score += preferredQuality === '480p' ? 70 : 40;
              }
              
              // Size preference (prefer larger files for better quality)
              const sizeMatch = source.title.match(/(\\d+(\\.\\d+)?)(GB|MB)/i);
              if (sizeMatch) {
                const size = parseFloat(sizeMatch[1]);
                const unit = sizeMatch[3].toUpperCase();
                
                if (unit === 'GB') {
                  score += Math.min(size * 5, 40); // Bonus for GB-sized files
                } else if (unit === 'MB') {
                  score += Math.min(size / 200, 20); // Smaller bonus for MB-sized files
                }
              }
              
              // Seeders preference
              if (source.title.includes('seeders')) {
                const seedersMatch = source.title.match(/(\\d+)\\s+seeders/i);
                if (seedersMatch) {
                  const seeders = parseInt(seedersMatch[1]);
                  score += Math.min(seeders / 10, 30); // Bonus for more seeders
                }
              }
              
              return score;
            };
            
            return getQualityScore(b) - getQualityScore(a);
          });
        
        setSources(sortedSources);
      } catch (err) {
        setError('Failed to load sources. Please try again.');
        console.error('Error fetching sources:', err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchSources();
  }, [isOpen, imdbId, preferredQuality]);
  
  const handleSourceSelect = async (source) => {
    try {
      setLoading(true);
      
      // If Real-Debrid API key is available, try to get premium link
      if (realDebridApiKey && source.url.includes('magnet:')) {
        const premiumLink = await getDebridLink(source.url, realDebridApiKey);
        
        if (premiumLink) {
          router.push(\`/watch?url=\${encodeURIComponent(premiumLink)}&title=\${encodeURIComponent(title)}\`);
          onClose();
          return;
        }
      }
      
      // Fallback to direct link if no premium link available
      router.push(\`/watch?url=\${encodeURIComponent(source.url)}&title=\${encodeURIComponent(title)}\`);
      onClose();
    } catch (err) {
      setError('Failed to prepare stream. Please try another source.');
      console.error('Error preparing stream:', err);
      setLoading(false);
    }
  };
  
  return (
    <div className={\`stream-modal \${isOpen ? 'open' : ''}\`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Select a source for "{title}"</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          {loading ? (
            <div className="loading-spinner">Loading sources...</div>
          ) : error ? (
            <div className="error-message">{error}</div>
          ) : sources.length === 0 ? (
            <div className="no-sources">No sources found for this title.</div>
          ) : (
            <div className="sources-list">
              {sources.map((source, index) => (
                <div 
                  key={index}
                  className="source-item"
                  onClick={() => handleSourceSelect(source)}
                >
                  <div className="source-title">{source.title}</div>
                  <div className="source-quality">
                    {source.title.includes('2160p') || source.title.includes('4K') ? '4K' : 
                     source.title.includes('1080p') ? '1080p' : 
                     source.title.includes('720p') ? '720p' : 
                     source.title.includes('480p') ? '480p' : 'Unknown'}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="modal-footer">
          <button className="cancel-button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
\`\`\`

## **What I Learned**

This project taught me a lot about:

- Working with streaming protocols and adaptive bitrate technology
- Handling large datasets from external APIs efficiently
- Creating responsive interfaces that work well across all devices
- Managing complex state in a media-rich application
- Optimizing for different network conditions and device capabilities
- Implementing cookie-based persistence for user settings
- Integrating with premium services like Real-Debrid
- Handling different browser capabilities and providing fallbacks

Building NebulaFlick pushed me to deepen my understanding of both front-end development and media streaming technologies, resulting in a robust platform with excellent user experience.
    `,
  },
];
