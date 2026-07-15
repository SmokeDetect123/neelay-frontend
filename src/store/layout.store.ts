import { create } from "zustand";

interface LayoutState {
    sidebarCollapsed: boolean;
    mobileSidebarOpen: boolean;

    toggleSidebar: () => void;

    openMobileSidebar: () => void;
    closeMobileSidebar: () => void;
    toggleMobileSidebar: () => void;

    collapseSidebar: () => void;
    expandSidebar: () => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({

    sidebarCollapsed: false,

    mobileSidebarOpen: false,

    toggleSidebar: () =>
        set((state) => ({
            sidebarCollapsed: !state.sidebarCollapsed,
        })),

    collapseSidebar: () =>
        set({
            sidebarCollapsed: true,
        }),

    expandSidebar: () =>
        set({
            sidebarCollapsed: false,
        }),

    openMobileSidebar: () =>
        set({
            mobileSidebarOpen: true,
        }),

    closeMobileSidebar: () =>
        set({
            mobileSidebarOpen: false,
        }),

    toggleMobileSidebar: () =>
        set((state) => ({
            mobileSidebarOpen: !state.mobileSidebarOpen,
        })),
}));