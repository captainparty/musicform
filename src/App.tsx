import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormSection from './components/FormSection';
import Navigation from './components/Navigation';
import { formSections } from './data/formSections';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    if (!data.name || !data.email) {
      alert('Please fill in your name and email address before submitting.');
      setCurrentSection(0);
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xyzyajpd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        alert('Thank you! Your consultation form has been submitted successfully.');
        // Optionally reset the form or redirect here
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      alert('There was an error submitting your form. Please try again.');
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentSection < formSections.length - 1) {
      setCurrentSection(prev => prev + 1);
    }
  };

  const handlePrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
  };

  const isLastSection = currentSection === formSections.length - 1;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-4 md:py-8 max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/1.png" 
              alt="Wedding Music Consultation Logo" 
              className="h-16 md:h-20 w-auto"
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Wedding Music Consultation</h1>
          <p className="text-gray-300 text-sm md:text-lg px-2 md:px-0">
            Let us help create the perfect musical atmosphere for your special day.
            Fill out as much of this form as you'd like - only name and email are required.
            Share your preferences and vision for your wedding celebration, and we'll
            work together to make it perfect.
          </p>
        </div>

        <Navigation
          sections={formSections}
          currentSection={currentSection}
          onSectionChange={setCurrentSection}
        />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <FormSection
            {...formSections[currentSection]}
            register={register}
          />

          <div className="flex justify-between mt-8 gap-4">
            <button
              type="button"
              onClick={handlePrevious}
              className={`flex-1 px-4 md:px-6 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-600 ${
                currentSection === 0 ? 'invisible' : ''
              }`}
            >
              Previous
            </button>

            {!isLastSection ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex-1 px-4 md:px-6 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-500"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="flex-1 px-4 md:px-6 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-500"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;