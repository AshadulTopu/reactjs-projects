import TabItems from "./TabItems";

const CustomTab2 = () => {
  const tabContent = [
    {
      label: "Tab 1",
      content: {
        heading: "Tab 1 content",
        des: "This is tab description for tab 1",
        list: [
          "This is list item 1 1",
          "This is list item 1 2",
          "This is list item 1 3",
          "This is list item 1 4",
          "This is list item 1 5",
        ],
        path: {
          text: "buy Now",
          link: "/",
        },
      },
    },
    {
      label: "Tab 2",
      content: {
        heading: "Tab 2 content",
        des: "This is tab description for tab 2",
        list: [
          "This is list item 2 1",
          "This is list item 2 2",
          "This is list item 2 3",
          "This is list item 2 4",
          "This is list item 2 5",
        ],
        path: {
          text: "buy Now",
          link: "/",
        },
      },
    },
    {
      label: "Tab 3",
      content: {
        heading: "Tab 3 content",
        des: "This is tab description for tab 3",
        list: [
          "This is list item 3 1",
          "This is list item 3 2",
          "This is list item 3 3",
          "This is list item 3 4",
          "This is list item 3 5",
        ],
        path: {
          text: "buy Now",
          link: "/",
        },
      },
    },
  ];
  return (
    <div>
      <TabItems tabContent={tabContent} />
    </div>
  );
};

export default CustomTab2;
