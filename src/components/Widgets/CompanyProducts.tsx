import React, { useState } from "react";
import { CompanyInfo } from "../../types/Company";
import { ChevronDown, ChevronUp } from "lucide-react";

export const ProductsServicesWidget = ({
  company,
}: {
  company: CompanyInfo;
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="w-full h-full p-6 overflow-y-auto flex flex-col bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        Products & Services
      </h2>

      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-md shadow-sm border-l-4 border-indigo-500">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Overview
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            {company.short_description || "N/A"}
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-md shadow-sm border-l-4 border-indigo-500">
          <button
            onClick={() => setShowDetails((prev) => !prev)}
            className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 focus:outline-none transition-all"
          >
            {showDetails ? (
              <>
                <ChevronUp size={18} />
                Hide Details
              </>
            ) : (
              <>
                <ChevronDown size={18} />
                Show Details
              </>
            )}
          </button>

          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              showDetails
                ? "max-h-[500px] opacity-100 mt-4"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-lg text-gray-700 leading-relaxed mt-2">
              {company.long_description || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
