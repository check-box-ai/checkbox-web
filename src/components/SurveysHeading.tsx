import React from "react";

const SurveysHeading: React.FC = () => {
  return (
    <div className="sm:flex sm:items-center sm:justify-between mt-5">
      <div>
        <div className="flex items-center gap-x-3">
          <h2 className="text-2xl font-bold font-medium text-gray-800 dark:text-white">
            All Surveys
          </h2>
          {/*<span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">*/}
          {/*  5 Surveys*/}
          {/*</span>*/}
          {/*<span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">*/}
          {/*  1050 Responses*/}
          {/*</span>*/}
        </div>

        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300">
          These companies have purchased in the last 12 months.
        </p>
      </div>
    </div>
  );
};

export default SurveysHeading;
