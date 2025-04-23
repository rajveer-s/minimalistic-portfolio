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
  {
    slug: "starrb",
    title: "Building Starrb: A Modern Trucking Management System with React and Firebase",
    youtubeUrl: "https://www.youtube.com/embed/your-demo-video-id", // Replace with your actual demo video ID
    date: "2025-04-22",
    introduction:
      "This project showcase details the development of Starrb, a comprehensive trucking management system designed for STAR RB. With a focus on load management, financial tracking, and maintenance monitoring, Starrb streamlines daily operations for trucking businesses. This post covers the technical implementation, challenges overcome, and the powerful features that make this application essential for modern trucking operations.",
    prerequisites: [
      "React 19+",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Firebase (Authentication, Firestore)",
      "React Router v6+"
    ],
    content: `
## **Project Overview**

![Starrb Dashboard](/images/starrb-dashboard.jpg)

Starrb is a modern trucking management system built with React, TypeScript, and Firebase, featuring:

- Responsive dashboard with financial metrics and maintenance tracking
- Comprehensive load management system
- Fuel stop tracking with per-load totals
- Financial analysis including revenue, expenses, and net income
- Email and payment status tracking
- Truck maintenance monitoring
- Responsive design optimized for both mobile and desktop
- Real-time database integration via Firebase Firestore

## **Core Technologies**

\`\`\`bash
# Key packages used
npm install react react-dom react-router-dom
npm install firebase
npm install tailwindcss
npm install date-fns
npm install typescript --save-dev
\`\`\`

## **Key Implementation Challenges**

### **1. Real-time Dashboard with Financial Metrics**

![Dashboard Financial Overview](/images/starrb-financial-overview.jpg)

One of the most complex components was implementing a dashboard that provides real-time financial metrics, calculated from load and fuel data stored in Firestore:

\`\`\`jsx
// DashboardPage.tsx - Financial metrics calculation
import { useEffect, useState } from 'react';
import { getAllDocuments } from '../lib/firestoreUtils';
import { formatCurrency, formatNumber, calculateNetIncome, calculateRatePerMile, formatDate } from '../lib/utils';
import { Load, TruckSettings } from '../types';
import { COLLECTIONS } from '../lib/firestoreUtils';
import { Timestamp } from 'firebase/firestore';

// Helper function to calculate monthly stats
const calculateMonthlyStats = (loads: Load[], year: number, month: number) => {
  const monthLoads = loads.filter(load => {
    const loadDate = load.pickupDate instanceof Timestamp
      ? load.pickupDate.toDate()
      : new Date(load.pickupDate);
    return loadDate.getMonth() === month && loadDate.getFullYear() === year;
  });

  const monthStats = {
    loads: monthLoads.length,
    income: monthLoads.reduce((sum, load) => sum + load.paymentAmount, 0),
    miles: monthLoads.reduce((sum, load) => sum + (load.miles || 0), 0),
    ratePerMile: monthLoads.reduce((sum, load) => sum + calculateRatePerMile(load), 0) / monthLoads.length || 0,
  };

  return {
    ...monthStats,
    netIncome: monthLoads.reduce((sum, load) => sum + calculateNetIncome(load), 0)
  };
};

export default function DashboardPage() {
  const [loads, setLoads] = useState<Load[]>([]);
  const [truckSettings, setTruckSettings] = useState<TruckSettings | null>(null);
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [loadsData, settingsData] = await Promise.all([
          getAllDocuments<Load>(COLLECTIONS.LOADS),
          getAllDocuments<TruckSettings>(COLLECTIONS.SETTINGS).then(settings => settings[0] || null),
        ]);
        setLoads(loadsData);
        setTruckSettings(settingsData);
        setError(null);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setError('Failed to load dashboard data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Calculate year-to-date metrics
  const yearToDate = loads.filter(load => {
    const loadDate = load.pickupDate instanceof Timestamp
      ? load.pickupDate.toDate()
      : new Date(load.pickupDate);
    return loadDate.getFullYear() === selectedYear;
  });

  const totalIncome = yearToDate.reduce((sum, load) => sum + load.paymentAmount, 0);
  const totalLoads = yearToDate.length;
  const totalMiles = yearToDate.reduce((sum, load) => sum + load.miles, 0);
  const netIncome = yearToDate.reduce((sum, load) => sum + calculateNetIncome(load), 0);

  // Component JSX (truncated for brevity)
}
\`\`\`

### **2. Firestore Data Management and Real-time Updates**

The integration with Firebase Firestore required careful design to efficiently manage and retrieve data:

\`\`\`typescript
// firestoreUtils.ts - Firestore data management utilities
import { db } from '../config/firebase';
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  Timestamp,
  DocumentData,
  serverTimestamp
} from 'firebase/firestore';
import { Load, FuelStop, TruckSettings } from '../types';

export const COLLECTIONS = {
  LOADS: 'loads',
  FUEL_STOPS: 'fuelStops',
  SETTINGS: 'truckSettings'
};

// Get all documents from a collection
export async function getAllDocuments<T>(collectionName: string): Promise<T[]> {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as T[];
  } catch (error) {
    console.error('Error getting documents from {collectionName}:', error);
    throw error;
  }
}

// Get a single document by ID
export async function getDocumentById<T>(collectionName: string, docId: string): Promise<T | null> {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as T;
    } else {
      console.log('No document found with ID: {docId}');
      return null;
    }
  } catch (error) {
    console.error('Error getting document {docId} from {collectionName}:', error);
    throw error;
  }
}

// Add a new load with embedded fuel stops
export async function addLoad(loadData: Omit<Load, 'id'>): Promise<string> {
  try {
    // Prepare the load data with timestamps
    const loadWithTimestamps = {
      ...loadData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };
    
    // Add the load to Firestore
    const docRef = await addDoc(collection(db, COLLECTIONS.LOADS), loadWithTimestamps);
    return docRef.id;
  } catch (error) {
    console.error('Error adding load:', error);
    throw error;
  }
}

// Update an existing load
export async function updateLoad(loadId: string, loadData: Partial<Load>): Promise<void> {
  try {
    const loadRef = doc(db, COLLECTIONS.LOADS, loadId);
    
    // Add updated timestamp
    const updatedData = {
      ...loadData,
      updatedAt: serverTimestamp()
    };
    
    await updateDoc(loadRef, updatedData);
  } catch (error) {
    console.error('Error updating load {loadId}:', error);
    throw error;
  }
}

// Delete a load and its associated fuel stops
export async function deleteLoad(loadId: string): Promise<void> {
  try {
    // Delete the load document
    const loadRef = doc(db, COLLECTIONS.LOADS, loadId);
    await deleteDoc(loadRef);
  } catch (error) {
    console.error('Error deleting load {loadId}:', error);
    throw error;
  }
}

// Get all loads for the application
export async function getLoads(): Promise<Load[]> {
  return getAllDocuments<Load>(COLLECTIONS.LOADS);
}

// Update truck settings
export async function updateTruckSettings(settingsId: string, settingsData: Partial<TruckSettings>): Promise<void> {
  try {
    const settingsRef = doc(db, COLLECTIONS.SETTINGS, settingsId);
    
    // Add updated timestamp
    const updatedData = {
      ...settingsData,
      updatedAt: serverTimestamp()
    };
    
    await updateDoc(settingsRef, updatedData);
  } catch (error) {
    console.error('Error updating truck settings {settingsId}:', error);
    throw error;
  }
}
\`\`\`

### **3. Load Management Form with Dynamic Fuel Stop Entries**

![Add Load Form](/images/starrb-add-load.jpg)

Creating a form that allows users to dynamically add multiple fuel stops while maintaining proper data validation was challenging:

\`\`\`jsx
// Simplified AddLoadPage component with dynamic fuel stop entries
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Timestamp } from 'firebase/firestore';
import { addLoad } from '../lib/firestoreUtils';
import { FuelStop, Load } from '../types';
import DashboardLayout from '../components/layout/DashboardLayout';

export default function AddLoadPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Form state
  const [formData, setFormData] = useState<Omit<Load, 'id'>>({
    pickupDate: new Date(),
    dropoffDate: new Date(),
    pickupLocation: '',
    dropoffLocation: '',
    status: 'pending',
    miles: 0,
    dispatcherPercentage: 10,
    paymentAmount: 0,
    paymentStatus: 'due',
    fuelStops: [],
    notes: '',
  });
  
  // State for the current fuel stop being edited
  const [currentFuelStop, setCurrentFuelStop] = useState<Omit<FuelStop, 'id'>>({
    date: new Date(),
    location: '',
    city: '',
    state: '',
    gallons: 0,
    totalPrice: 0,
    cost: 0,
  });
  
  // Handle changes to the main form fields
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    // Handle numeric values
    if (type === 'number') {
      setFormData({
        ...formData,
        [name]: parseFloat(value) || 0
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  // Handle date changes
  const handleDateChange = (name: string, date: Date) => {
    setFormData({
      ...formData,
      [name]: date
    });
  };
  
  // Handle fuel stop form changes
  const handleFuelStopChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'number') {
      // If gallons or total price changes, recalculate cost per gallon
      if (name === 'gallons' || name === 'totalPrice') {
        const gallons = name === 'gallons' ? parseFloat(value) || 0 : currentFuelStop.gallons;
        const totalPrice = name === 'totalPrice' ? parseFloat(value) || 0 : currentFuelStop.totalPrice;
        const cost = gallons > 0 ? (totalPrice / gallons) : 0;
        
        setCurrentFuelStop({
          ...currentFuelStop,
          [name]: parseFloat(value) || 0,
          cost: parseFloat(cost.toFixed(3))
        });
      } else {
        setCurrentFuelStop({
          ...currentFuelStop,
          [name]: parseFloat(value) || 0
        });
      }
    } else {
      setCurrentFuelStop({
        ...currentFuelStop,
        [name]: value
      });
    }
  };
  
  // Handle fuel stop date changes
  const handleFuelStopDateChange = (date: Date) => {
    setCurrentFuelStop({
      ...currentFuelStop,
      date
    });
  };
  
  // Add the current fuel stop to the list
  const addFuelStop = () => {
    if (!currentFuelStop.location || !currentFuelStop.city || !currentFuelStop.state) {
      setError('Please fill out all required fuel stop fields');
      return;
    }
    
    // Add the current fuel stop to the list
    setFormData({
      ...formData,
      fuelStops: [...formData.fuelStops, {...currentFuelStop}]
    });
    
    // Reset the current fuel stop form
    setCurrentFuelStop({
      date: new Date(),
      location: '',
      city: '',
      state: '',
      gallons: 0,
      totalPrice: 0,
      cost: 0,
    });
    
    setError(null);
  };
  
  // Remove a fuel stop from the list
  const removeFuelStop = (index: number) => {
    const updatedFuelStops = [...formData.fuelStops];
    updatedFuelStops.splice(index, 1);
    
    setFormData({
      ...formData,
      fuelStops: updatedFuelStops
    });
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.pickupLocation || !formData.dropoffLocation) {
      setError('Please fill out all required fields');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Convert dates to Firestore Timestamps
      const loadWithTimestamps = {
        ...formData,
        pickupDate: Timestamp.fromDate(new Date(formData.pickupDate)),
        dropoffDate: Timestamp.fromDate(new Date(formData.dropoffDate)),
        fuelStops: formData.fuelStops.map(stop => ({
          ...stop,
          date: Timestamp.fromDate(new Date(stop.date))
        }))
      };
      
      // Add the load to Firestore
      await addLoad(loadWithTimestamps);
      navigate('/loads');
    } catch (err) {
      console.error('Error adding load:', err);
      setError('Failed to add load. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Component JSX (truncated for brevity)
}
\`\`\`

### **4. Fuel Tax Report Generation**

![Fuel Tax Report](/images/starrb-fuel-tax.jpg)

Implementing a feature to generate fuel tax reports required intricate calculations and data aggregation:

\`\`\`jsx
// LoadDetailPage.tsx - Fuel tax report section for a specific load
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDocumentById, deleteLoad } from '../lib/firestoreUtils';
import { Load } from '../types';
import { formatCurrency, formatDate, calculateTotalGallons, calculateTotalFuelCost, calculateNetIncome } from '../lib/utils';
import DashboardLayout from '../components/layout/DashboardLayout';

export default function LoadDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [load, setLoad] = useState<Load | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    const fetchLoad = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const loadData = await getDocumentById<Load>('loads', id);
        setLoad(loadData);
      } catch (err) {
        console.error('Error fetching load:', err);
        setError('Failed to load data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchLoad();
  }, [id]);

  const handleDelete = async () => {
    if (!id) return;

    try {
      await deleteLoad(id);
      navigate('/loads');
    } catch (err) {
      console.error('Error deleting load:', err);
      setError('Failed to delete load. Please try again.');
    }
  };

  // Calculate fuel metrics
  const totalGallons = load ? calculateTotalGallons(load) : 0;
  const totalFuelCost = load ? calculateTotalFuelCost(load) : 0;
  const netIncomeWithoutFuel = load ? load.paymentAmount - (load.paymentAmount * (load.dispatcherPercentage / 100)) : 0;
  const netIncomeWithFuel = load ? calculateNetIncome(load) : 0;

  // Calculate fuel economy
  const fuelEconomy = load && totalGallons > 0 ? load.miles / totalGallons : 0;

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-white">Loading load details...</div>
        </div>
      </DashboardLayout>
    );
  }

  if (error || !load) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-red-500">{error || 'Load not found'}</div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6 pb-20">
        {/* Load header section with load ID and dates */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white">Load Details</h1>
            {load.loadId && (
              <p className="text-gray-400 mt-1">Load ID: {load.loadId}</p>
            )}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => navigate(\`/loads/\${id}/edit\`)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Edit
            </button>
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>

        {/* Load details section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Load Information */}
          <div className="bg-black/30 border border-white/20 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Load Information</h2>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm">Route</p>
                <p className="text-white">
                  {load.pickupLocation} → {load.dropoffLocation}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Pickup Date</p>
                <p className="text-white">{formatDate(load.pickupDate)}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Dropoff Date</p>
                <p className="text-white">{formatDate(load.dropoffDate)}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email Date</p>
                <p className="text-white">
                  {load.emailDate ? formatDate(load.emailDate) : 'Not set'}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Payment Date</p>
                <p className="text-white">
                  {load.paymentDate ? formatDate(load.paymentDate) : 'Not set'}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Status</p>
                <p className="text-white capitalize">{load.status}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Miles</p>
                <p className="text-white">{load.miles} miles</p>
              </div>
            </div>
          </div>

          {/* Financial Information */}
          <div className="bg-black/30 border border-white/20 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Financial Information</h2>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm">Payment Amount</p>
                <p className="text-white text-xl font-bold">
                  {formatCurrency(load.paymentAmount)}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Payment Status</p>
                <p className={load.paymentStatus === 'paid' ? 'text-green-400 capitalize' : 'text-red-400 capitalize'}>
                  {load.paymentStatus}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Dispatcher Fee ({load.dispatcherPercentage}%)</p>
                <p className="text-red-400">
                  {formatCurrency(load.paymentAmount * (load.dispatcherPercentage / 100))}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Total Fuel Cost</p>
                <p className="text-red-400">{formatCurrency(totalFuelCost)}</p>
              </div>
              <div className="pt-2 border-t border-white/10">
                <p className="text-gray-400 text-sm">Net Income (without fuel)</p>
                <p className="text-white">{formatCurrency(netIncomeWithoutFuel)}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Net Income (with fuel)</p>
                <p className="text-white font-bold">{formatCurrency(netIncomeWithFuel)}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Rate per Mile</p>
                <p className="text-white">
                  $(load.paymentAmount / load.miles).toFixed(2)}/mile
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fuel Stops Section */}
        {load.fuelStops && load.fuelStops.length > 0 && (
          <div className="bg-black/30 border border-white/20 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Fuel Stops</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-white">
                <thead>
                  <tr className="text-left border-b border-white/20">
                    <th className="py-2 px-4">Date</th>
                    <th className="py-2 px-4">Location</th>
                    <th className="py-2 px-4">City, State</th>
                    <th className="py-2 px-4">Gallons</th>
                    <th className="py-2 px-4">Total</th>
                    <th className="py-2 px-4">Price/Gal</th>
                  </tr>
                </thead>
                <tbody>
                  {load.fuelStops.map((stop, index) => (
                    <tr key={index} className="border-b border-white/10">
                      <td className="py-2 px-4">{formatDate(stop.date)}</td>
                      <td className="py-2 px-4">{stop.location}</td>
                      <td className="py-2 px-4">{stop.city}, {stop.state}</td>
                      <td className="py-2 px-4">{stop.gallons.toFixed(2)}</td>
                      <td className="py-2 px-4">{formatCurrency(stop.totalPrice)}</td>
                      <td className="py-2 px-4">{stop.cost.toFixed(3)}</td>
                    </tr>
                  ))}
                  <tr className="font-bold bg-black/20">
                    <td className="py-2 px-4" colSpan={3}>Totals</td>
                    <td className="py-2 px-4">{totalGallons.toFixed(2)}</td>
                    <td className="py-2 px-4">{formatCurrency(totalFuelCost)}</td>
                    <td className="py-2 px-4">
                      {totalGallons > 0 ? '$' + (totalFuelCost / totalGallons).toFixed(3) : '-'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-blue-900/30 border border-blue-500/30 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Fuel Economy</h3>
              <div className="flex flex-wrap gap-4">
                <div>
                  <p className="text-gray-400 text-sm">Miles per Gallon</p>
                  <p className="text-white font-bold">{fuelEconomy.toFixed(2)} MPG</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Total Miles</p>
                  <p className="text-white">{load.miles} miles</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Total Gallons</p>
                  <p className="text-white">{totalGallons.toFixed(2)} gal</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Fuel Cost per Mile</p>
                  <p className="text-white">{(totalFuelCost / load.miles).toFixed(2)}/mile</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Notes Section */}
        {load.notes && (
          <div className="bg-black/30 border border-white/20 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">Notes</h2>
            <p className="text-white whitespace-pre-wrap">{load.notes}</p>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full">
              <h3 className="text-xl font-bold text-white mb-4">Confirm Delete</h3>
              <p className="text-white mb-6">
                Are you sure you want to delete this load? This action cannot be undone.
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
\`\`\`

### **5. Mobile-Responsive Design with Bottom Navigation**

![Mobile Navigation](/images/starrb-mobile-navigation.jpg)

Ensuring a great user experience on mobile devices required a tailored navigation approach:

\`\`\`jsx
// BottomNav.tsx - Mobile-optimized navigation component
import { Link, useLocation } from 'react-router-dom';

export default function BottomNav() {
  const location = useLocation();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 md:hidden z-50 border-t border-white/10">
      <div className="flex justify-around items-center h-16">
        <Link
          to="/"
          className={\`flex flex-col items-center justify-center text-xs w-full h-full \${
            location.pathname === '/' ? 'text-orange-500' : 'text-gray-400'
          }\`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span>Home</span>
        </Link>
        
        <Link
          to="/loads"
          className={\`flex flex-col items-center justify-center text-xs w-full h-full \${
            location.pathname.includes('/loads') ? 'text-orange-500' : 'text-gray-400'
          }\`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span>Loads</span>
        </Link>
        
        <Link
          to="/loads/new"
          className="flex flex-col items-center justify-center text-xs w-full h-full text-white"
        >
          <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center -mt-6 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <span className="mt-1">Add Load</span>
        </Link>
        
        <Link
          to="/reports"
          className={\`flex flex-col items-center justify-center text-xs w-full h-full \${
            location.pathname.includes('/reports') ? 'text-orange-500' : 'text-gray-400'
          }\`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>Reports</span>
        </Link>
        
        <Link
          to="/settings"
          className={\`flex flex-col items-center justify-center text-xs w-full h-full \${
            location.pathname.includes('/settings') ? 'text-orange-500' : 'text-gray-400'
          }\`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
}
\`\`\`

### **6. Firebase Authentication Integration**

![Login Page](/images/starrb-login.jpg)

Implementing secure authentication with Firebase required careful setup and error handling:

\`\`\`jsx
// Auth.tsx - Firebase Authentication integration
import { useState, useEffect } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

interface AuthProps {
  children: React.ReactNode;
}

export default function Auth({ children }: AuthProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      
      if (!currentUser) {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <>{children}</>;
  }

  return <>{children}</>;
}

// LoginPage.tsx - Login form
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.message || 'Failed to log in');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="max-w-md w-full bg-black/30 backdrop-blur-md border border-white/20 p-8 rounded-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">STAR RB</h1>
          <p className="text-gray-400 mt-2">Log in to your account</p>
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-red-900/50 border border-red-500/50 rounded text-white text-sm">
            {error}
          </div>
        )}
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="••••••••"
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Log in'}
          </button>
        </form>
      </div>
    </div>
  );
}
\`\`\`

## **Utils: Helper Functions for Financial Calculations**

The heart of the application's business logic lies in the utility functions that calculate financial metrics:

\`\`\`typescript
// utils.ts - Helper functions for financial and data formatting
import { Timestamp } from 'firebase/firestore';
import { format } from 'date-fns';
import { Load, FuelStop } from '../types';

// Format a date as MM/DD/YYYY
export function formatDate(date: Date | Timestamp | undefined): string {
  if (!date) return 'N/A';
  
  const dateObj = date instanceof Timestamp ? date.toDate() : new Date(date);
  return format(dateObj, 'MM/dd/yyyy');
}

// Format a number as currency ($X,XXX.XX)
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}

// Format a number with commas (X,XXX)
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}

// Calculate total gallons for a load
export function calculateTotalGallons(load: Load): number {
  if (!load.fuelStops || load.fuelStops.length === 0) return 0;
  
  return load.fuelStops.reduce((total, stop) => total + stop.gallons, 0);
}

// Calculate total fuel cost for a load
export function calculateTotalFuelCost(load: Load): number {
  if (!load.fuelStops || load.fuelStops.length === 0) return 0;
  
  return load.fuelStops.reduce((total, stop) => total + stop.totalPrice, 0);
}

// Calculate net income for a load (after dispatcher fee and fuel costs)
export function calculateNetIncome(load: Load): number {
  const dispatcherFee = load.paymentAmount * (load.dispatcherPercentage / 100);
  const fuelCost = calculateTotalFuelCost(load);
  
  return load.paymentAmount - dispatcherFee - fuelCost;
}

// Calculate rate per mile for a load
export function calculateRatePerMile(load: Load): number {
  if (!load.miles || load.miles === 0) return 0;
  return load.paymentAmount / load.miles;
}

// Calculate fuel efficiency (MPG) for a load
export function calculateFuelEfficiency(load: Load): number {
  const totalGallons = calculateTotalGallons(load);
  if (!load.miles || load.miles === 0 || totalGallons === 0) return 0;
  
  return load.miles / totalGallons;
}

// Calculate fuel cost per mile
export function calculateFuelCostPerMile(load: Load): number {
  const fuelCost = calculateTotalFuelCost(load);
  if (!load.miles || load.miles === 0) return 0;
  
  return fuelCost / load.miles;
}
\`\`\`

## **Firebase Database Structure**

The Firestore database structure was carefully designed to efficiently store and query trucking data:

\`\`\`javascript
// Firestore Database Structure
const loadsCollection = {
  "load1": {
    pickupDate: Timestamp,
    dropoffDate: Timestamp,
    emailDate: Timestamp,
    paymentDate: Timestamp,
    pickupLocation: "Chicago, IL",
    dropoffLocation: "Denver, CO",
    status: "completed",
    miles: 1000,
    dispatcherPercentage: 10,
    paymentAmount: 2500,
    paymentStatus: "paid",
    fuelStops: [
      {
        date: Timestamp,
        location: "Flying J",
        city: "Des Moines",
        state: "IA",
        gallons: 150.5,
        totalPrice: 525.75,
        cost: 3.49
      },
      {
        date: Timestamp,
        location: "Pilot",
        city: "Lincoln",
        state: "NE",
        gallons: 120.3,
        totalPrice: 425.50,
        cost: 3.54
      }
    ],
    notes: "Delivery completed ahead of schedule.",
    createdAt: Timestamp,
    updatedAt: Timestamp
  },
  "load2": { /* ... */ }
}

const truckSettingsCollection = {
  "settings1": {
    truckNumber: "STRB-001",
    currentMileage: 325000,
    lastOilChange: {
      date: Timestamp,
      mileage: 320000,
      nextDueMileage: 330000
    },
    lastInspection: {
      date: Timestamp,
      nextDueDate: Timestamp
    },
    defaultFuelStopInterval: 500,
    updatedAt: Timestamp
  }
}
\`\`\`

## **What I Learned**

This project helped me develop deeper skills in:

- Building real-time data applications with Firebase
- Financial calculations and reporting in business apps
- Optimizing for mobile devices with responsive design
- Creating dynamic forms with complex validation
- Implementing secure authentication flows
- Managing complex state in React applications
- Developing a date-aware application for business operations
- Building a system with real business users in mind

Starrb started as a simple load tracker but evolved into a comprehensive trucking management system that handles the complex financial and logistical needs of a trucking business. The emphasis on usability and providing actionable financial insights makes it a valuable tool for any small to medium-sized trucking operation.

## **Future Enhancements**

Moving forward, the Starrb platform could be extended with:

1. Integration with accounting software (QuickBooks, etc.)
2. Automated invoice generation and email sending
3. Fuel price optimization suggestions based on route
4. Maintenance schedule alerts and tracking
5. Driver management for multi-driver operations
6. Route planning and optimization
7. Integration with ELD (Electronic Logging Device) systems
8. Mobile app version for on-the-road data entry

These enhancements would further increase Starrb's value as a comprehensive trucking management solution.
    `,
  },
];
