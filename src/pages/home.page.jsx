import React from 'react'
import ProgressComponent from '../components/progressBar/progress.component';
import { MdPlayArrow } from 'react-icons/md';
import { BiExport, BiImport } from 'react-icons/bi';
import CostComponents from '../components/homePageComponents/cost.Components';
import SettingsComponent from '../components/homePageComponents/settings.components';
import TableComponent from "../components/homePageComponents/table";
import TopChart from "../components/homePageComponents/topChart";
import MapComponent from "../components/homePageComponents/mapChart";
import MapChart from "../components/homePageComponents/mapChart";
import Navbar from "../components/navbar";
const HomePage = () => {
  return (
    <>
      <div>
        <Navbar />

        <div className="pt-20 px-20 w-full h-auto flex items-start justify-center gap-3 mb-20">
          <div className="w-1/2">
            <div className="w-full flex flex-col gap-4 shadow-xl border border-gray-100 px-3 py-2">
              <div className="w-full flex items-center justify-center gap-5">
                <button className="text-gray-50 bg-blue-900 px-3 py-2 rounded-md text-xl font-semibold flex items-center justify-center gap-2 shadow-xl">
                  Run Simulation
                  <MdPlayArrow className="w-7 h-7 text-blue-900" />
                </button>
                <button className="text-gray-50 bg-blue-900 px-3 py-2 rounded-md text-xl font-semibold flex items-center justify-center gap-2 shadow-xl">
                  Export Simulation
                  <BiExport className="w-7 h-7" />
                </button>
                <button className="text-gray-50 bg-blue-900 px-3 py-2 rounded-md text-xl font-semibold flex items-center justify-center gap-2 shadow-xl">
                  Import Simulation
                  <BiImport className="w-7 h-7" />
                </button>
              </div>
              <ProgressComponent />
            </div>
            <SettingsComponent />
          </div>
          <div className="w-1/2">
            <CostComponents />
            <div className="">
              <TopChart />
            </div>
            <div>
              {/* <MapComponent /> */}
              <MapChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage