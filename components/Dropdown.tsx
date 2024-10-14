import { useState, useEffect } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

interface DropdownProps {
  list: string[];
  question: string;
  onSelect: (item: string) => void;
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
        className="p-4 flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent mx-2 text-white w-full"
        style={{
          backgroundColor: "hsla(260, 100%, 17%, 0.3)",
          minWidth: "250px", // Set a minimum width for the button
        }}
      >
        {selectedItem !== "" ? selectedItem : question}
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>

      {isOpen && (
        <div
          className="flex flex-col items-start rounded-lg p-2 w-full mt-2 transition-all duration-300 ease-in-out"
          style={{
            backgroundColor: "hsla(260, 100%, 17%, 0.3)", // Transparent purple background
            maxHeight: "200px", // Limit the height
            overflowY: "auto", // Enable scroll when the max height is reached
            minWidth: "250px", // Set a minimum width for the dropdown list
          }}
        >
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
              <h3 className="font-electrolize font-bold text-l text-white">
                {item}
              </h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
