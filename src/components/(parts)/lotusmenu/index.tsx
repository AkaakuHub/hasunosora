import React, { useState, useEffect, useRef } from 'react';
import './index.css';

interface LotusMenuProps { }

const LotusMenu: React.FC<LotusMenuProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="lotusmenu-root">
      <div className="lotus-menu-launcher" onClick={() => setIsOpen(c => !c)}></div>
      {isOpen && (
        <div className="lotus-menu-wrapper">
          <div className="lotus-modal-bg"></div>
          {/** lotus-modalの外またはがクリックされると閉じる!? */}
          <div className="lotus-modal" ref={menuRef}>
            <div className="petal-0">
              X
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LotusMenu;
