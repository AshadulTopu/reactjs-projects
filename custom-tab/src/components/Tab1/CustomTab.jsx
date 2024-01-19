import TabItems from "./TabItems";

const CustomTab1 = () => {
  const tabContent = [
    {
      label: "Tab 1",
      content: "Tab 1 content",
    },
    {
      label: "Tab 2",
      content: "Tab 2 content",
    },
    {
      label: "Tab 3",
      content: "Tab 3 content",
    },
  ];
  const handleChange = (index) => {
    console.log("index", index);
  };
  return (
    <div>
      <TabItems tabContent={tabContent} onChange={handleChange} />
    </div>
  );
};

export default CustomTab1;
