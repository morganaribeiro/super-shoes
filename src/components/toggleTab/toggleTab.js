import ToggleTabItem from "./toggleTabItem/toggleTabItem";

const tabs = [
    {
      id: 1,
      label: 'Ofertas TV',
      content: [
        {
          imageUrl: "https://via.placeholder.com/200x250"
        },
        {
          imageUrl: "https://via.placeholder.com/200x250"
        },
        {
          imageUrl: "https://via.placeholder.com/200x250"
        },
      ],
    },
    {
      id: 2,
      label: 'Ofertas Móvel',
      content: [
        {
          imageUrl: "https://via.placeholder.com/200x250"
        },
        {
          imageUrl: "https://via.placeholder.com/200x250"
        },
        {
          imageUrl: "https://via.placeholder.com/200x250"
        },
      ],
    },
    {
      id: 3,
      label: 'Ofertas Fixo',
      content: [
        {
          imageUrl: "https://via.placeholder.com/200x250"
        },
        {
          imageUrl: "https://via.placeholder.com/200x250"
        },
        {
          imageUrl: "https://via.placeholder.com/200x250"
        },
      ],
    },
  ];

export default function ToggleTab() {
    return (
        <div className="toggle-tab-container">
            <ToggleTabItem tabs={tabs} />
        </div>
    );
}