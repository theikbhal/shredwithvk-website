export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-card-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="sm:col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold gradient-text">SHRED</span>
              <span className="text-2xl font-light text-white">withVK</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Real transformation journey from 85 kg to 62 kg. Science-based fitness, not crash diets.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#videos" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Videos
                </a>
              </li>
              <li>
                <a href="#diet" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Diet Tips
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Content</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.youtube.com/@ShredwithVK/videos" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  All Videos
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@ShredwithVK/shorts" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Shorts
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@ShredwithVK/playlists" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Playlists
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.youtube.com/@ShredwithVK" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </a>
              </li>
              <li>
                <a href="mailto:shredwithvk@gmail.com" className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card-border pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} ShredwithVK. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>Made with</span>
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
