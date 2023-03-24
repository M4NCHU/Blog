import { useState } from "react";

type Tab = {
    label: string;
    content: React.ReactNode;
    icon?:React.ReactNode;
};
  
  type TabsProps = {
    tabs: Tab[];
    activeClassName?: string
  };


  const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);
  
    const handleTabClick = (tabIndex: number) => {
      setActiveTab(tabIndex);
    };
  
    return (
      <div className="setting-tabs bg-second-bg rounded-lg">
        <ul className="flex flex-row justify-start gap-2 text-primary-font p-2">
          {tabs.map((tab, index) => (
            <li key={index} className={`px-6 py-2 delay-75 duration-75 ease-linear transition-colors hover:bg-third-bg  ${activeTab === index ? "border-b-2 border-second-warning" : ""}`} onClick={() => handleTabClick(index)}>
              <button className="flex flex-row items-center gap-2">
                <div className="text-xl lg:text-sm">
                    {tab.icon}
                </div>
                <p className="m-0 hidden lg:block">{tab.label}</p>
              </button>
            </li>
          ))}
        </ul>
        <div className="p-4 flex flex-row justify-center">
            {tabs[activeTab].content}
        </div>
      </div>
    );
  };

export default Tabs