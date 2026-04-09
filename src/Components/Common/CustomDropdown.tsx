import { useState, useEffect, useRef } from "react";

export const CustomDropdown = ({ label, options = [], value, onChange }: any) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<any>(null);

  const handleClear = (e: any) => {
    e.stopPropagation();
    onChange(null);
  };

  // 🔥 OUTSIDE CLICK DETECTION
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <div className="dropdown-header" onClick={() => setOpen(!open)}>
        <span className={`dropdown-text ${value ? "selected" : ""}`}>{value?.name || label}</span>

        <div className="dropdown-actions">
          {value && (
            <span className="clear-btn" onClick={handleClear}>
              ✕
            </span>
          )}

          <span className={`arrow ${open ? "open" : ""}`}>
            <i className="fa-solid fa-chevron-down"></i>
          </span>
        </div>
      </div>

      {open && (
        <div className="dropdown-list">
          {options.length > 0 ? (
            options.map((item: any) => (
              <div
                key={item._id}
                className="dropdown-item"
                onClick={() => {
                  onChange(item);
                  setOpen(false);
                }}
              >
                {item.name}
              </div>
            ))
          ) : (
            <div className="dropdown-item empty">No Data</div>
          )}
        </div>
      )}
    </div>
  );
};
