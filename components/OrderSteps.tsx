
import React from 'react';

interface OrderStepsProps {
  currentStep: number;
}

export const OrderSteps: React.FC<OrderStepsProps> = ({ currentStep }) => {
  const steps = ['Details', 'Payment', 'Confirm'];
  
  return (
    <div className="flex items-center justify-center w-full max-w-md mx-auto mb-10 px-4 theme-transition">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div className="flex flex-col items-center relative">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
              index <= currentStep 
                ? 'bg-indigo-600 border-indigo-600 text-white' 
                : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-400 dark:text-gray-600'
            }`}>
              {index + 1}
            </div>
            <span className={`text-[10px] absolute -bottom-6 font-bold uppercase tracking-widest transition-colors duration-300 ${
              index <= currentStep ? 'text-indigo-600 dark:text-indigo-500' : 'text-gray-400 dark:text-gray-600'
            }`}>
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className={`flex-1 h-0.5 mx-2 transition-colors duration-500 ${
              index < currentStep ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-800'
            }`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
