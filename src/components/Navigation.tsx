import React from 'react';
import { ChevronDown } from 'lucide-react';

interface NavigationProps {
  sections: { id: string; title: string }[];
  currentSection: number;
  onSectionChange: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  sections,
  currentSection,
  onSectionChange,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative mb-8">
      {/* Mobile Dropdown */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-2 bg-gray-800 rounded-lg text-white"
        >
          <span>{sections[currentSection].title}</span>
          <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="absolute z-50 mt-1 w-full bg-gray-800 rounded-lg shadow-lg">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => {
                  onSectionChange(index);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 ${
                  currentSection === index
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden md:grid grid-cols-4 gap-2 mb-8">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(index)}
            className={`px-4 py-2 text-center rounded-lg transition-colors ${
              currentSection === index
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navigation;