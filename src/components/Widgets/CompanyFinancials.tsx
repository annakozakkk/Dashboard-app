import { Briefcase, BarChart2, Calendar, Users } from "lucide-react";

export const MarketFinancialSummaryWidget = ({ company }: { company: any }) => {
  const stats = [
    {
      label: "Employees",
      value: company.employees?.toLocaleString() || "N/A",
      icon: <Users className="w-5 h-5 text-indigo-500" />,
    },
    {
      label: "Stock Exchange",
      value: company.stock_exchange || "N/A",
      icon: <BarChart2 className="w-5 h-5 text-green-500" />,
    },
    {
      label: "SIC Code",
      value: company.sic || "N/A",
      icon: <Briefcase className="w-5 h-5 text-yellow-500" />,
    },
    {
      label: "First Stock Price Date",
      value: company.first_stock_price_date || "N/A",
      icon: <Calendar className="w-5 h-5 text-blue-500" />,
    },
    {
      label: "Last Stock Price Date",
      value: company.last_stock_price_date || "N/A",
      icon: <Calendar className="w-5 h-5 text-red-500" />,
    },
  ];

  return (
    <div className=" w-full h-full p-4 bg-gray-50 rounded-md border border-gray-200 h-96 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        Market & Financial Summary
      </h2>
      <div className="space-y-3">
        {stats.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-4 bg-white border-l-4 border-indigo-500 shadow-sm px-4 py-3 rounded-md"
          >
            <div>{item.icon}</div>
            <div>
              <div className="text-xs text-gray-500 uppercase font-medium">
                {item.label}
              </div>
              <div className="text-sm text-gray-900 font-semibold">
                {item.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
