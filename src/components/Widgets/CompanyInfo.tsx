import { CompanyInfo } from "../../types/Company";

export const GeneralInfoWidget = ({ company }: { company: CompanyInfo }) => {
  const infoItems = [
    { label: "Ticker", value: company.ticker },
    { label: "CEO", value: company.ceo || "N/A" },
    {
      label: "Location",
      value: `${company.hq_address_city}, ${company.hq_country}` || "N/A",
    },
    { label: "Sector", value: company.sector || "N/A" },
    {
      label: "Industry",
      value:
        `${company.industry_category} - ${company.industry_group} ` || "N/A",
    },
    { label: "Legal Form", value: company.entity_legal_form || "N/A" },
    { label: "Entity Status", value: company.entity_status || "N/A" },
    {
      label: "Employees",
      value: company.employees?.toLocaleString() || "N/A",
    },
  ];

  return (
    <div className="w-full h-full p-4 h-96 overflow-y-auto bg-white text-gray-900 rounded-md shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800">{company.name}</h2>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {infoItems.map((item) => (
          <div
            key={item.label}
            className="bg-gray-100 shadow-sm rounded-lg p-3 border border-indigo-300"
          >
            <div className="text-indigo-500 text-xs sm:text-sm uppercase font-semibold mb-1 truncate">
              {item.label}
            </div>
            <div className="text-gray-800 text-sm sm:text-base break-words">
              {item.value}
            </div>
          </div>
        ))}

        <div className="bg-gray-100 shadow-sm rounded-lg p-3 border border-indigo-300">
          <div className="text-indigo-500 text-[0.65rem] sm:text-xs uppercase font-semibold mb-1">
            Website
          </div>
          <a
            className="text-indigo-500 text-sm sm:text-base underline break-all hover:text-indigo-400"
            href={`https://${company.company_url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {company.company_url}
          </a>
        </div>
      </div>
    </div>
  );
};
