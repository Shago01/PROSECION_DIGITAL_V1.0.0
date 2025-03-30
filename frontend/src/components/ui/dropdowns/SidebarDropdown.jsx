import { useState } from 'react';
import SidebarItem from './SidebarItem';

export function SidebarDropdown({ icon: Icon, text, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const items = children;
  return (
    <div className="flex flex-col">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-3 p-3 rounded-lg cursor-pointer hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:text-white transition-all w-full"
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon size={20} />}
          <span>{text}</span>
        </div>
        <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="ml-6 mt-2 space-y-2">
          {items.map((item, i) => {
            return (
              <li key={i}>
                <SidebarItem {...item} />
              </li>
            );
          })}
        </div>
      )}
    </div>
  );
}
