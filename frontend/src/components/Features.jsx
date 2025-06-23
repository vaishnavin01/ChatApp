import React from "react";

const Features = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="py-16 px-4 mx-auto max-w-screen-xl sm:py-24 lg:px-6">
        <div className="max-w-screen-md mb-12 lg:mb-20">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
            Designed for business teams like yours
          </h2>
          <p className="sm:text-xl text-gray-400">
            Here at Swift, we focus on markets where technology and capital can unlock long-term value and drive economic growth.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature Card 1 */}
          <div>
            <div className="flex justify-center items-center mb-4">
              <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414l3-3A1 1 0 0011 13V5a1 1 0 00-1-1H5a2 2 0 00-2-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Marketing</h3>
            <p className="text-gray-400">
              Plan it, create it, launch it. Collaborate seamlessly with your team and hit your marketing goals every month.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div>
            <div className="flex justify-center items-center mb-4">
              <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L10 11.941l7.394-5.021a1 1 0 000-1.84l-7-3z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Legal Compliance</h3>
            <p className="text-gray-400">
              Protect your organization, devices, and stay compliant with structured workflows and role-based permissions.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div>
            <div className="flex justify-center items-center mb-4">
              <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v2H2V8a2 2 0 012-2h2zm-4 5h16v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Business Automation</h3>
            <p className="text-gray-400">
              Automate tasks, send messages, and integrate with your tools using powerful templates and workflows.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div>
            <div className="flex justify-center items-center mb-4">
              <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418a3.75 3.75 0 111.134 5.71 3.75 3.75 0 01-1.134-5.71z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v2a1 1 0 102 0V5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Finance</h3>
            <p className="text-gray-400">
              Audit-proof tools built for finance teams to simplify budgeting, closing, and compliance processes.
            </p>
          </div>

          {/* Feature Card 5 */}
          <div>
            <div className="flex justify-center items-center mb-4">
              <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 000 2h12a1 1 0 100-2H4zM2 11a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Enterprise Design</h3>
            <p className="text-gray-400">
              Craft beautiful, delightful product experiences with real-time collaboration across your teams.
            </p>
          </div>

          {/* Feature Card 6 */}
          <div>
            <div className="flex justify-center items-center mb-4">
              <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 00-.44.4c-.34.48-.27 1.12.12 1.5l.8.8a1 1 0 101.42-1.4l-.8-.8a.532.532 0 01.1-.16c.08-.09.2-.14.33-.14s.25.05.33.14c.08.09.12.22.1.34-.02.14-.1.26-.22.34l-.34.26a1 1 0 001.18 1.6l.34-.26a1.532 1.532 0 00.44-2.24 1.532 1.532 0 00-.44-.4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Operations</h3>
            <p className="text-gray-400">
              Keep your teams efficient with customizable workflows, integrated tools, and real-time status updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
