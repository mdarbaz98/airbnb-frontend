import { create } from "zustand";

type Store = {
  isBookingModalOpen: boolean;
  toggleBookingModal: () => void;
  closeBookingModal: () => void;
};

export const useSite = create<Store>()((set) => ({
  isBookingModalOpen: false,
  toggleBookingModal: () =>
    set(({ isBookingModalOpen }) => ({
      isBookingModalOpen: !isBookingModalOpen,
    })),
  closeBookingModal: () => set(() => ({ isBookingModalOpen: false })),
}));
