import create from 'zustand';

interface StoreProp {
  isHoveringCard: boolean;
  setIsHoveringCard: (isHovering: boolean) => void;
  cursorText: string;
  setCursorText: (text: string) => void;
  isHoveringTechs: boolean;
  setIsHoveringTechs: (isHovering: boolean) => void;
}

const useStore = create<StoreProp>()((set) => ({
  isHoveringCard: false,
  setIsHoveringCard: (isHovering) => set({ isHoveringCard: isHovering }),
  cursorText: '',
  setCursorText: (text) => set({ cursorText: text }),
  isHoveringTechs: false,
  setIsHoveringTechs: (isHovering) => set({ isHoveringTechs: isHovering }),
}));

export default useStore;
