import { useEffect, useState } from "react";
import "./App.css";
import CompanySelector from "./components/CompanySelector/CompanySelector";
import Dashboard from "./components/Dashboard/Dashboard";
import { fetchCompanies } from "./api/api";
import "./output.css";
import { CompanyInfo } from "./types/Company";

function App() {
  const [companies, setCompanies] = useState<CompanyInfo[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<CompanyInfo | null>(
    null
  );

  useEffect(() => {
    const loadCompanies = async () => {
      const data = await fetchCompanies();
      setCompanies(data);
      setSelectedCompany(
        data.find((c: CompanyInfo) => c.ticker === "AAPL") || null
      );
    };
    loadCompanies();
  }, []);

  const handleSelectCompany = (ticker: string) => {
    const company = companies.find((c) => c.ticker === ticker) || null;
    setSelectedCompany(company);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Company Dashboard</h1>
        <div className="w-full max-w-xs">
          <CompanySelector
            selectedCompany={selectedCompany?.ticker || ""}
            onSelectCompany={handleSelectCompany}
            companies={companies}
          />
        </div>
      </header>
      <main className="flex-1">
        {selectedCompany && <Dashboard selectedCompany={selectedCompany} />}
      </main>
    </div>
  );
}

export default App;
