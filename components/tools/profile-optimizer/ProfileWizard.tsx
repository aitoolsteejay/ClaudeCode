"use client";

import { useState } from "react";
import StepOne, { StepOneData } from "./StepOne";

interface ProfileWizardProps {
  onComplete: (data: StepOneData) => void;
  isGenerating: boolean;
  // Restores the last-submitted values on remount, since this component
  // unmounts while the parent is generating (see ProfileOptimizerClient's
  // render condition), which would otherwise reset the form to empty on
  // every failed attempt.
  initialData?: StepOneData | null;
}

const DEFAULT_STEP_ONE_DATA: StepOneData = {
  headline: "",
  aboutSection: "",
  role: "",
  targetIcp: "",
  customIcp: "",
  tones: ["bold"],
};

const ProfileWizard = ({ onComplete, initialData }: ProfileWizardProps) => {
  const [stepOneData, setStepOneData] = useState<StepOneData>(initialData ?? DEFAULT_STEP_ONE_DATA);

  const handleStepOneComplete = (data: StepOneData) => {
    setStepOneData(data);
    onComplete(data);
  };

  return (
    <section id="wizard-section" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="animate-fade-in">
          <StepOne data={stepOneData} onNext={handleStepOneComplete} />
        </div>
      </div>
    </section>
  );
};

export default ProfileWizard;
