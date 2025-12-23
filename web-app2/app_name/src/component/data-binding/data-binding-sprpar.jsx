export function EventBinding() {
  function handleClick(event, ...params) {
    const [id, name, cities, isActive] = params;
    alert(`Button clicked!\n
    id: ${id}\n
    name: ${name}\n
    cities: ${cities}\n
    isActive: ${isActive}\n
    X Position : ${event.clientX}\n Button Id= ${event.target.id}
    `);
  }

  return (
    <button
      className="btn btn-primary m-4"
      id="your button was clicked"
      onClick={(e) =>
        handleClick(e, 3234, "mahesh", "gyan pur road saraiya bhadohi", true)
      }
    >
      Insert
    </button>
  );
}
