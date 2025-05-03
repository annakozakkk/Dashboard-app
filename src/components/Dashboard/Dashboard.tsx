import { JSX, useState } from "react";
import { Mosaic, MosaicWindow } from "react-mosaic-component";
import "react-mosaic-component/react-mosaic-component.css";
import { GeneralInfoWidget } from "../Widgets/CompanyInfo";
import { MarketFinancialSummaryWidget } from "../Widgets/CompanyFinancials";
import { ProductsServicesWidget } from "../Widgets/CompanyProducts";
import { CompanyInfo } from "../../types/Company";

type ViewId = "companyInfo" | "companyFinancials" | "companyProducts";

interface DashboardProps {
  selectedCompany: CompanyInfo;
}

export default function Dashboard({ selectedCompany }: DashboardProps) {
  const [currentNode, setCurrentNode] = useState<any>({
    direction: "row",
    first: {
      direction: "column",
      first: "companyInfo",
      second: "companyProducts",
      splitPercentage: 50,
    },
    second: "companyFinancials",
    splitPercentage: 65,
  });

  const tileMap: Record<ViewId, JSX.Element> = {
    companyInfo: <GeneralInfoWidget company={selectedCompany} />,
    companyFinancials: (
      <MarketFinancialSummaryWidget company={selectedCompany} />
    ),
    companyProducts: <ProductsServicesWidget company={selectedCompany} />,
  };

  const renderTile = (id: ViewId, path: string[]) => {
    return tileMap[id] || <div>Unknown widget</div>;
  };

  return (
    <div className="h-screen w-full">
      <Mosaic<ViewId>
        renderTile={(id, path) => (
          <MosaicWindow<ViewId>
            path={path}
            title={
              id === "companyInfo"
                ? "Company Information"
                : id === "companyFinancials"
                ? "Company Financials"
                : "Company Products"
            }
            toolbarControls={[]}
            className="h-full w-full"
          >
            {renderTile(id, path)}
          </MosaicWindow>
        )}
        value={currentNode}
        onChange={setCurrentNode}
        className="mosaic-blueprint-theme h-full w-full"
      />
    </div>
  );
}
