"use client";

export function ChallengeSection() {
  return (
    <section className="relative bg-background">
      {/* Desktop Split Backgrounds - Hidden on Mobile */}
      <div className="hidden lg:flex absolute inset-0 z-0">
        <div className="w-1/2 bg-[#0f1c2e] h-full" />
        <div className="w-1/2 bg-gray-50 dark:bg-background h-full" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full lg:container lg:mx-auto lg:px-4">
        <div className="flex flex-col lg:grid lg:grid-cols-2">
          {/* Left: The Challenge */}
          <div className="w-full bg-[#0f1c2e] lg:bg-transparent px-4 py-12 md:py-16 lg:py-28 lg:px-0 lg:pr-16">
            <div className="container mx-auto px-0 lg:w-full lg:max-w-none">
              <span className="text-red-500 text-xs font-bold uppercase tracking-wider mb-4 block">
                THE CHALLENGE
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                The Massive Energy Gap
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8 lg:mb-10 text-base">
                Sub-Saharan Africa faces a critical energy deficit, with over 600
                million people lacking access to electricity. Unreliable grids
                force businesses to depend on expensive, polluting diesel
                generators, stifling economic growth and environmental progress.
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <div className="text-3xl lg:text-4xl font-bold mb-1 text-white">600M+</div>
                  <div className="text-sm text-gray-400">
                    People without electricity
                  </div>
                </div>
                <div className="border-l-4 border-red-500 pl-6">
                  <div className="text-3xl lg:text-4xl font-bold mb-1 text-white">40%</div>
                  <div className="text-sm text-gray-400">
                    Higher cost for off-grid power
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Our Solution */}
          <div className="w-full bg-gray-50 dark:bg-background lg:bg-transparent px-4 py-12 md:py-16 lg:py-28 lg:px-0 lg:pl-16">
            <div className="container mx-auto px-0 lg:w-full lg:max-w-none">
              <span className="text-green-600 dark:text-green-500 text-xs font-bold uppercase tracking-wider mb-4 block">
                OUR SOLUTION
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#1e3a8a] dark:text-white">
                Integrated Energy Services
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 lg:mb-10 text-base">
                Konexa bridges the gap by partnering with utilities and investing
                in grid infrastructure, solar-hybrid systems, and smart metering.
                Our integrated approach provides clean, reliable 24/7 power to
                industrial customers and surrounding communities alike.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-card p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                  <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-green-600 dark:text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-sm mb-2 text-[#1e3a8a] dark:text-white">Grid Modernization</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    Optimizing existing assets for stability.
                  </p>
                </div>

                <div className="bg-white dark:bg-card p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                  <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-green-600 dark:text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-sm mb-2 text-[#1e3a8a] dark:text-white">Solar Integration</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    Decarbonizing industrial energy needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
