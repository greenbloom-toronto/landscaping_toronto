import { create } from "zustand";

interface ServiceStore {
    currentService: any;
    currentSubService: any;
    currentSubSubService: any;
    setServiceData: (data: {
      service?: any;
      subService?: any;
      subSubService?: any;
    }) => void;
  }
  
  export const useServiceStore = create<ServiceStore>((set) => ({
    currentService: null,
    currentSubService: null,
    currentSubSubService: null,
    setServiceData: ({ service, subService, subSubService }) =>
      set({
        currentService: service,
        currentSubService: subService,
        currentSubSubService: subSubService,
      }),
  }));
  