import { CompanyInfo } from "../../types/Company";

interface CompanySelectorProps {
  selectedCompany: string;
  onSelectCompany: (ticker: string) => void;
  companies: CompanyInfo[];
}

export default function CompanySelector({
  selectedCompany,
  onSelectCompany,
  companies,
}: CompanySelectorProps) {
  return (
    <div>
      <label htmlFor="company-select" className="text-gray-200 font-medium">
        Select Company:
      </label>
      <select
        id="company-select"
        value={selectedCompany}
        onChange={(e) => onSelectCompany(e.target.value)}
        className="mt-2 w-full px- py-2 border border-gray-300 rounded-md focus:outline-none "
      >
        {companies.map((company) => (
          <option key={company.ticker} value={company.ticker}>
            {company.name} ({company.ticker})
          </option>
        ))}
      </select>
    </div>
  );
}
