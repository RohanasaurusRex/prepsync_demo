import { useState, useEffect } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

interface DropdownProps {
  list: string[];
  question: string;
  onSelect: (item: string) => void;
  // onSelect: (item: string) => string; // New prop for handling the selection
}

const Dropdown = ({ list, question, onSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>(question); // State for selected item
  const [dropdownList, setDropdownList] = useState<string[]>(list);

  // Add empty string to the start of the dropdown list if it's not already there
  useEffect(() => {
    if (!list.includes("")) {
      setDropdownList(["", ...list]); // Update dropdown list
    } else {
      setDropdownList(list); // If the list already contains "", just set the list
    }
  }, [list]); // Ensure this runs whenever the `list` prop changes

  return (
    <div className="relative flex flex-col items-center rounded-lg m-5">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-gray-200 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent dropdown"
      >
        {selectedItem !== "" ? selectedItem : question}
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>
      {isOpen && (
        <div className="bg-gray-200 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
          {dropdownList.map((item: string, index: number) => (
            <div
              key={index}
              onClick={() => {
                setSelectedItem(item); // Set the clicked item as the selected item
                setIsOpen(false); // Close the dropdown
                onSelect(item);
              }}
              className="flex w-full justify-between hover:bg-gray-400 cursor-pointer p-4 rounded-r-lg border-l-transparent hover:border-l-purple-800 border-l-8"
            >
              <h3 className="font-electrolize font-bold text-l">{item}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
