import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import {
  HeroSection,
  AboutSection,
  TeachingAreasSection,
  LearningRoadmapSection,
  ProjectsSection,
  ExperienceSection,
  CertificationsSection,
  ResourcesSection,
  FAQSection,
  ContactSection,
  AIMentorChat
} from './components';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Surakattula Shyam Kumar | DSA Instructor (C++) & SDFT at NxtWave";
  }, []);

  return (
    <div className="space-y-12 sm:space-y-16">
      <HeroSection />
      <AboutSection />
      <TeachingAreasSection />
      <LearningRoadmapSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ResourcesSection />
      <FAQSection />
      <ContactSection />
      <AIMentorChat />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
